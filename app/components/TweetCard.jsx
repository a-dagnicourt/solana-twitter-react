import Link from 'next/link'
import { useWorkspace } from '../utils/useWorkspace'

export default function TweetCard({ tweet }) {
  const { wallet } = useWorkspace()
  const authorRoute =
    wallet && wallet.publicKey.toBase58() === tweet.author.toBase58()
      ? '/profile'
      : `/users/${tweet.author.toBase58()}`
  console.log(tweet)
  return (
    <div className="px-8 py-4">
      <div>
        <h3 className="inline font-semibold" title={tweet.author}>
          <Link href={authorRoute}>
            <a className="hover:underline">{tweet.author_display}</a>
          </Link>
        </h3>
        <span className="text-gray-500"> • </span>
        <time className="text-sm text-gray-500" title={tweet.created_at}>
          <Link href={`/tweet/${tweet.publicKey.toBase58()}`}>
            <a className="hover:underline">{tweet.created_ago}</a>
          </Link>
        </time>
      </div>
      <p className="whitespace-pre-wrap">{tweet.content}</p>
      {tweet.topic && (
        <Link href={`/topics/${tweet.topic}`}>
          <a className="mt-2 inline-block text-pink-500 hover:underline">
            {`#${tweet.topic}`}
          </a>
        </Link>
      )}
    </div>
  )
}
