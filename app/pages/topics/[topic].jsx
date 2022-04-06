import { useSlug } from '../../utils'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { fetchTweets } from '../api/fetch-tweets'
import TweetForm from '../../components/TweetForm'
import TweetList from '../../components/TweetList'
import Search from '../../templates/Search'
import { topicIcon } from '../../public/assets/icons'

export default function Topics() {
  // Data.
  const router = useRouter()
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)
  const [topic, setTopic] = useState(router.query.topic)
  const [viewedTopic, setViewedTopic] = useState(router.query.topic)

  const slugTopic = useSlug(topic)

  // Actions.
  const search = () => {
    router.push(`/topics/${slugTopic}`)
    setViewedTopic(slugTopic)
  }

  const fetchTopicTweets = async () => {
    if (slugTopic === viewedTopic) {
      await fetchTweets()
        .then((fetchedTweets) => setTweets(fetchedTweets))
        .finally(() => setLoading(false))
    }
  }
  const addTweet = (tweet) => setTweets([...tweets, tweet])

  // Router hooks.
  useEffect(() => {
    fetchTopicTweets()
  }, [topic])
  return (
    <Search
      icon={topicIcon}
      placeholder="topic"
      disabled={!slugTopic}
      modelValue={slugTopic}
      setModelValue={setTopic}
      search={search}
    >
      <div>
        <TweetForm added={addTweet} forcedTopic={viewedTopic} />
        <TweetList tweets={tweets} loading={loading} />
        {tweets.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No tweets were found in this topic...
          </div>
        )}
      </div>
    </Search>
  )
}
