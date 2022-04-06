import { Tweet } from '../../models'
import { useWorkspace } from '../../utils/useWorkspace'

export const getTweet = async (publicKey) => {
  const { program } = useWorkspace()
  const account = await program.account.tweet.fetch(publicKey)
  return new Tweet(publicKey, account)
}
