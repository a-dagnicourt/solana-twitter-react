import Base from '../../templates/Base'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PublicKey } from '@solana/web3.js'
import { getTweet } from '../api/fetch-tweets'
import TweetCard from '../../components/TweetCard'

export default function Tweet() {
  const [tweetAddress, setTweetAddress] = useState(null)
  const [tweet, setTweet] = useState(null)
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  setTweetAddress(router.query.tweet)

  useEffect(async () => {
    try {
      setLoading(true)
      const fetchedTweet = await getTweet(new PublicKey(tweetAddress.value))
      setTweet(fetchedTweet)
    } catch (e) {
      setTweet(null)
    } finally {
      setLoading(false)
    }
  })
  return (
    <Base>
      {loading ? (
        true(
          <div v-if="loading" className="p-8 text-center text-gray-500">
            Loading...
          </div>
        )
      ) : (
        <>
          {!tweet ? (
            <div className="p-8 text-center text-gray-500">Tweet not found</div>
          ) : (
            <TweetCard tweet="tweet" />
          )}
        </>
      )}
    </Base>
  )
}
