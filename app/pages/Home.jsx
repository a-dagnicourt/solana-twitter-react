import Base from "../templates/Base";
import { ref } from "vue";
import { fetchTweets } from "@/api";
import TweetForm from "@/components/TweetForm";
import TweetList from "@/components/TweetList";

export default function Home() {
  const tweets = ref([]);
  const loading = ref(true);
  fetchTweets()
    .then((fetchedTweets) => (tweets.value = fetchedTweets))
    .finally(() => (loading.value = false));

  const addTweet = (tweet) => tweets.value.push(tweet);
  return (
    <Base>
      <tweet-form added="addTweet" />
      <tweet-list tweets="tweets" loading="loading" />
    </Base>
  );
}
