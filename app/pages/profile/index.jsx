import Base from '../../templates/Base'
import { useEffect, useState } from 'react'
import { fetchTweets } from '../api/fetch-tweets'
import TweetForm from '../../components/TweetForm'
import TweetList from '../../components/TweetList'
import { useAnchorWallet } from '@solana/wallet-adapter-react'

export default function Profile() {
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)

  const wallet = useAnchorWallet()

  const addTweet = (tweet) => setTweets([...tweets, tweet])

  useEffect(() => {
    fetchTweets()
      .then((fetchedTweets) => setTweets(fetchedTweets))
      .finally(() => setLoading(false))
  }, [])
  return (
    <Base>
      {/* <!-- TODO: Check connected wallet --> */}
      {wallet && (
        <div className="border-b bg-gray-50 px-8 py-4">
          {wallet.publicKey.toBase58()}
        </div>
      )}
      <TweetForm added={addTweet} />
      <TweetList tweets={tweets} loading={loading} />
    </Base>
  )
}
