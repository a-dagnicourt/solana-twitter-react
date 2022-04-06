import { useEffect, useState } from 'react'
import { fetchTweets, authorFilter } from '../api/fetch-tweets'
import TweetList from '../../components/TweetList'
import { useRouter } from 'next/router'
import Search from '../../templates/Search'
import { userIcon } from '../../public/assets/icons'

export default function User() {
  // Data.
  const router = useRouter()
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)
  const [author, setAuthor] = useState(router.query.user)
  const [viewedAuthor, setViewedAuthor] = useState('')

  // Actions.
  const search = () => {
    router.push(`/users/${author}`)
    setViewedAuthor(author)
  }

  const fetchAuthorTweets = async () => {
    await fetchTweets([authorFilter(author)])
      .then((fetchedTweets) => {
        setTweets(fetchedTweets)
      })
      .finally(() => setLoading(false))
  }

  // Router hooks.
  useEffect(() => {
    fetchAuthorTweets()
  }, [author])
  return (
    <Search
      icon={userIcon}
      placeholder="public key"
      modelValue={author}
      setModelValue={setAuthor}
      search={search}
    >
      <div>
        <TweetList tweets={tweets} loading={loading} />
        {tweets.length === 0 && (
          <div className="p-8 text-center text-gray-500">User not found...</div>
        )}
      </div>
    </Search>
  )
}
