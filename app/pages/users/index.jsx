import { useRouter } from 'next/router'
import { useState } from 'react'
import { userIcon } from '../../public/assets/icons'
import Search from '../../templates/Search'

export default function Users() {
  // Data.
  const router = useRouter()
  const [author, setAuthor] = useState('')
  const [viewedAuthor, setViewedAuthor] = useState('')

  // Actions.
  const search = () => {
    router.push(`/users/${author}`)
    setViewedAuthor(author)
  }

  return (
    <Search
      icon={userIcon}
      placeholder="public key"
      modelValue={author}
      setModelValue={setAuthor}
      search={search}
    />
  )
}
