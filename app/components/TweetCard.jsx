import Link from 'next/link'

export default function TweetCard({ tweet }) {
  console.log(tweet)
  return (
    <div className="px-8 py-4">
      <div>
        <h3 className="inline font-semibold" title={tweet.author_display}>
          {/* <!-- TODO: Link to author page or the profile page if it's our own tweet. --> */}
          <Link href="/">
            <a className="hover:underline">{tweet.author_display}</a>
          </Link>
        </h3>
        <span className="text-gray-500"> • </span>
        <time className="text-sm text-gray-500" title={tweet.created_at}>
          {/* // <!-- TODO: Link to the tweet page. --> */}
          <Link href="/">
            <a className="hover:underline">{tweet.created_ago}</a>
          </Link>
        </time>
      </div>
      <p className="whitespace-pre-wrap">{tweet.content}</p>
      {/* // <!-- TODO: Link to the topic page. --> */}
      {tweet.topic && (
        <Link href="/">
          <a className="mt-2 inline-block text-pink-500 hover:underline">
            {`#${tweet.topic}`}
          </a>
        </Link>
      )}
    </div>
  )
}
