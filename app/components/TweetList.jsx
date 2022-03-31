import TweetCard from './TweetCard'

export default function TweetList(props) {
  const { tweets, loading } = props
  const orderedTweets = tweets.slice().sort((a, b) => b.timestamp - a.timestamp)
  return (
    <>
      {loading ? (
        <div className="p-8 text-center text-gray-500">Loading...</div>
      ) : (
        <div className="divide-y">
          {orderedTweets.map((tweet, i) => (
            <TweetCard key={i} tweet={tweet} />
          ))}
        </div>
      )}
    </>
  )
}
