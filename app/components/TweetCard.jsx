import Link from "next/link";
import { toRefs } from "vue";

export default function TweetCard() {
  const props = defineProps({
    tweet: Object,
  });

  const { tweet } = toRefs(props);
  return (
    // <Home>
    <div class="px-8 py-4">
      <div>
        <h3 class="inline font-semibold" title="tweet.author">
          {/* <!-- TODO: Link to author page or the profile page if it's our own tweet. --> */}
          <Link src="/" class="hover:underline">
            {tweet.author_display}
          </Link>
        </h3>
        <span class="text-gray-500"> • </span>
        <time class="text-gray-500 text-sm" title="tweet.created_at">
          {/* // <!-- TODO: Link to the tweet page. --> */}
          <Link src="/" class="hover:underline">
            {tweet.created_ago}
          </Link>
        </time>
      </div>
      <p class="whitespace-pre-wrap" v-text="tweet.content"></p>
      {/* // <!-- TODO: Link to the topic page. --> */}
      <Link
        v-if="tweet.topic"
        src="/"
        class="inline-block mt-2 text-pink-500 hover:underline"
      >
        #{tweet.topic}
      </Link>
    </div>
    // </Home>
  );
}
