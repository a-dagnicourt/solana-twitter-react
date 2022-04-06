import Base from '../../templates/Base'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PublicKey } from '@solana/web3.js'
import { getTweet } from '../api/get-tweet'
import TweetCard from '../../components/TweetCard'

export default function Tweet() {
  const router = useRouter()
  const [tweetAddress, setTweetAddress] = useState(router.query.tweet)
  const [tweet, setTweet] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTweet()
  }, [])

  const fetchTweet = async () => {
    await getTweet(new PublicKey(tweetAddress))
      .then((fetchedTweet) => setTweet(fetchedTweet))
      .finally(() => setLoading(false))
  }
  console.log(loading)
  console.log(tweet)
  return (
    <Base>
      {loading ? (
        <div className="p-8 text-center text-gray-500">Loading...</div>
      ) : (
        <>
          {!tweet ? (
            <div className="p-8 text-center text-gray-500">Tweet not found</div>
          ) : (
            <TweetCard tweet={tweet} />
          )}
        </>
      )}
    </Base>
  )
}
