import Base from '../../templates/Base'
import { useSlug } from '../../utils'
import TweetSearch from '../../components/TweetSearch'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { fetchTweets } from '../api/fetch-tweets'
import TweetForm from '../../components/TweetForm'
import TweetList from '../../components/TweetList'

export default function Topics() {
  // Data.
  const router = useRouter()
  const [topic, setTopic] = useState('')
  const [viewedTopic, setViewedTopic] = useState('')
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)

  const slugTopic = useSlug(topic)

  // Actions.
  const search = () => {
    router.push(`/topics/?search=${slugTopic}`, undefined, { shallow: true })
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
    <Base>
      <TweetSearch
        placeholder="topic"
        disabled={!slugTopic}
        modelValue={slugTopic}
        setTopic={setTopic}
        search={search}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
            clipRule="evenodd"
          />
        </svg>
      </TweetSearch>
      {viewedTopic && (
        <div>
          <TweetForm added={addTweet} forcedTopic={viewedTopic} />
          <TweetList tweets={tweets} loading={loading} />
          {tweets.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No tweets were found in this topic...
            </div>
          )}
        </div>
      )}
    </Base>
  )
}
