import { NextPage } from 'next'
import { useEffect, useState } from 'react'

interface Props {
  time: number
  onTimeout: () => void
}

const Timer: NextPage<Props> = ({ time, onTimeout }) => {
  const [count, setCount] = useState(time !== 0 ? time : 60)

  useEffect(() => {
    const countDown = setInterval(() => {
      setCount((count) => {
        if (count === 0) {
          clearInterval(countDown)
          onTimeout?.()

          return count
        }

        return count - 1
      })

      return () => {
        clearInterval(countDown)
      }
    }, 1000)
  }, [onTimeout])

  return <div>{count}</div>
}

export default Timer
