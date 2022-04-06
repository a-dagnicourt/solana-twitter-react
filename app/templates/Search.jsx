import Base from './Base'
import TweetSearch from '../components/TweetSearch'

export default function Search({
  icon,
  children,
  placeholder,
  modelValue,
  setModelValue,
  search,
}) {
  return (
    <Base>
      <TweetSearch
        placeholder={placeholder}
        disabled={!modelValue}
        modelValue={modelValue}
        setModelValue={setModelValue}
        search={search}
      >
        {icon}
      </TweetSearch>
      {children}
    </Base>
  )
}
