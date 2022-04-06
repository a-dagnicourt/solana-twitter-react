import { useSlug } from '../../utils'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Search from '../../templates/Search'
import { topicIcon } from '../../public/assets/icons'

export default function Topics() {
  // Data.
  const router = useRouter()
  const [topic, setTopic] = useState('')
  const [viewedTopic, setViewedTopic] = useState('')

  const slugTopic = useSlug(topic)

  // Actions.
  const search = () => {
    router.push(`/topics/${slugTopic}`)
    setViewedTopic(slugTopic)
  }

  return (
    <Search
      icon={topicIcon}
      placeholder="topic"
      disabled={!slugTopic}
      modelValue={slugTopic}
      setModelValue={setTopic}
      search={search}
    />
  )
}
