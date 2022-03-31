import Link from "next/link";
import { computed, toRefs } from "vue";
import TweetCard from "@/components/TweetCard";

export default function TweetList() {
  const props = defineProps({
    tweets: Array,
    loading: Boolean,
  });

  const { tweets, loading } = toRefs(props);
  const orderedTweets = computed(() => {
    return tweets.value.slice().sort((a, b) => b.timestamp - a.timestamp);
  });
  return (
    // <Home>
    <>
      <div v-if="loading" class="p-8 text-gray-500 text-center">
        Loading...
      </div>
      <div v-else class="divide-y">
        <tweet-card
          v-for="tweet in orderedTweets"
          key="tweet.key"
          tweet="tweet"
        ></tweet-card>
      </div>
    </>
    // </Home>
  );
}
