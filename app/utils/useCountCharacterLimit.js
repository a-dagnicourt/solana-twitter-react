import { useEffect, useState } from 'react'

export const useCountCharacterLimit = (text, limit) => {
  if (text == undefined) text = 0
  const [characterLimit, setCharacterLimit] = useState(0)
  useEffect(() => setCharacterLimit(limit - text.length), [text, limit])

  return characterLimit
}
