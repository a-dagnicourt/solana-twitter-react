import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react'
import { initWorkspace } from '../utils/useWorkspace'
import { fetchTweets } from './api/fetch-tweets'
import Base from '../templates/Base'
import TweetList from '../components/TweetList'
import TweetForm from '../components/TweetForm'

export default function Index() {
  const wallet = useAnchorWallet()
  const { connection } = useConnection()

  initWorkspace(wallet, connection)

  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTweets()
      .then((fetchedTweets) => setTweets(fetchedTweets))
      .finally(() => setLoading(false))
  }, [])

  const addTweet = (tweet) => setTweets([...tweets, tweet])
  return (
    <>
      <Head>
        <title>Solana Twitter - React Version</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Base>
        <TweetForm added={addTweet} />
        <TweetList tweets={tweets} loading={loading} />
      </Base>
    </>
  )
}
