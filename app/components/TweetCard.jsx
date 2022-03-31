import Link from "next/link";

export default function TweetCard({ tweet }) {
  console.log(tweet);
  return (
    <div className="px-8 py-4">
      <div>
        <h3 className="inline font-semibold" title="tweet.author">
          {/* <!-- TODO: Link to author page or the profile page if it's our own tweet. --> */}
          <Link href="/" className="hover:underline">
            {tweet.author_display}
          </Link>
        </h3>
        <span className="text-gray-500"> • </span>
        <time className="text-gray-500 text-sm" title="tweet.created_at">
          {/* // <!-- TODO: Link to the tweet page. --> */}
          <Link href="/" className="hover:underline">
            {tweet.created_ago}
          </Link>
        </time>
      </div>
      <p className="whitespace-pre-wrap">{tweet.content}</p>
      {/* // <!-- TODO: Link to the topic page. --> */}
      {tweet.topic && (
        <Link
          href="/"
          className="inline-block mt-2 text-pink-500 hover:underline"
        >
          {`#${tweet.topic}`}
        </Link>
      )}
    </div>
  );
}
