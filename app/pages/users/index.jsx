import Base from '../../templates/Base'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { fetchTweets } from '../api/fetch-tweets'
import TweetSearch from '../../components/TweetSearch'
import TweetList from '../../components/TweetList'

export default function Topics() {
  // Data.
  const router = useRouter()
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)
  const [author, setAuthor] = useState('')
  const [viewedAuthor, setViewedAuthor] = useState('')

  // Actions.
  const search = () => {
    router.push(`/users/?search=${author}`, undefined, { shallow: true })
    setViewedAuthor(author)
  }

  const fetchAuthorTweets = async () => {
    if (author === viewedAuthor) {
      await fetchTweets()
        .then((fetchedTweets) => {
          setTweets(fetchedTweets), setViewedAuthor(author)
        })
        .finally(() => setLoading(false))
    }
  }

  // Router hooks.
  useEffect(() => {
    fetchAuthorTweets()
  }, [author])
  return (
    <Base>
      <TweetSearch
        placeholder="public key"
        disabled={!author}
        modelValue={author}
        setModelValue={setAuthor}
        search={search}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
      </TweetSearch>
      {viewedAuthor && (
        <div>
          <TweetList tweets={tweets} loading={loading} />
          {tweets.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              User not found...
            </div>
          )}
        </div>
      )}
    </Base>
  )
}
