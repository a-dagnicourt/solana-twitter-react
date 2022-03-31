import { useEffect, useState } from 'react'
import TweetList from '../components/TweetList'
import Base from '../templates/Base'
import { fetchTweets } from './api/fetch-tweets'
import TweetForm from '../components/TweetForm'

export default function Home() {
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)

  const addTweet = (tweet) => tweets.value.push(tweet)

  useEffect(() => {
    fetchTweets()
      .then((fetchedTweets) => setTweets(fetchedTweets))
      .finally(() => setLoading(false))
  }, [])
  return (
    <Base>
      <TweetForm added={addTweet} />
      <TweetList tweets={tweets} loading={loading} />
    </Base>
  )
}
