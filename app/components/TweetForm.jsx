import { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from 'react-autosize-textarea'

import { useSlug, useCountCharacterLimit } from '../utils/'
import { sendTweet } from '../pages/api/send-tweet'

export default function TweetForm({ added, forcedTopic }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => send(data)

  // Form data.
  const [topic, setTopic] = useState('')
  const [content, setContent] = useState('')
  const slugTopic = useSlug(topic)
  const effectiveTopic = forcedTopic ?? slugTopic

  // Character limit / count-down.
  const characterLimit = useCountCharacterLimit(watch('content'), 280)
  let characterLimitColour = 'text-gray-400'
  if (characterLimit <= 10) characterLimitColour = 'text-yellow-500'
  if (characterLimit < 0) characterLimitColour = 'text-red-500'

  // Permissions.
  const [connected, setConnected] = useState(true) // TODO: Check connected wallet.

  // Actions.
  const send = async (data) => {
    const tweet = await sendTweet(effectiveTopic, data.content)
    added(tweet)
    setTopic('')
    setContent('')
  }
  return (
    <>
      {connected ? (
        <form onSubmit={handleSubmit(onSubmit)} className="border-b px-8 py-4">
          {/* <!-- Content field. --> */}
          <TextareaAutosize
            {...register('content', {
              required: true,
              maxLength: 280,
            })}
            id="content"
            rows={1}
            className="mb-3 w-full resize-none text-xl focus:outline-none"
            placeholder="What's happening?"
          ></TextareaAutosize>

          <div className="-m-2 flex flex-wrap items-center justify-between">
            {/* <!-- Topic field. --> */}
            <div className="relative m-2 mr-4">
              <input
                {...register('topic')}
                onChange={(e) => setTopic(e.target.value)}
                value={effectiveTopic}
                type="text"
                placeholder="topic"
                className="rounded-full bg-gray-100 py-2 pl-10 pr-4 text-pink-500"
                disabled={forcedTopic}
              />
              <div className="absolute inset-y-0 left-0 flex pl-3 pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    (watch('topic') ? 'text-pink-500 ' : 'text-gray-400 ') +
                    'm-auto h-5 w-5'
                  }
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="m-2 ml-auto flex items-center space-x-6">
              {/* <!-- Character limit. --> */}
              <div className={characterLimitColour}>{characterLimit} left</div>

              {/* <!-- Tweet button. --> */}
              <button
                disabled={errors.content}
                className={
                  (!errors.content
                    ? 'bg-pink-500 '
                    : 'cursor-not-allowed bg-pink-300 ') +
                  'rounded-full px-4 py-2 font-semibold text-white'
                }
                type="submit"
              >
                Tweet
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="border-b bg-gray-50 px-8 py-4 text-center text-gray-500">
          Connect your wallet to start tweeting...
        </div>
      )}
    </>
  )
}
