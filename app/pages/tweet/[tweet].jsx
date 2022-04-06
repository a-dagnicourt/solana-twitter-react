import Base from '../../templates/Base'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PublicKey } from '@solana/web3.js'
import { getTweet } from '../api/get-tweet'
import TweetCard from '../../components/TweetCard'

export default function Tweet() {
  const router = useRouter()
  const [tweet, setTweet] = useState(null)
  const [loading, setLoading] = useState(true)
  const tweetAddress = router.query.tweet

  useEffect(() => {
    fetchTweet()
  }, [])

  const fetchTweet = async () => {
    await getTweet(new PublicKey(tweetAddress))
      .then((fetchedTweet) => setTweet(fetchedTweet))
      .finally(() => setLoading(false))
  }
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
