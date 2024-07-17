import { useState } from 'react'
import RandomSection from './components/RandomSection'
import SelectSection from './components/SelectSection'
import { getRandomResult } from '../../assets/constants/helper'
import { FACES } from '../../assets/constants'
import Heading from './components/heading'

function Home() {
  const [result, setResult] = useState(null)
  const [isWaiting, setIsWaiting] = useState(false)

  const handleRandom = () => {
    setIsWaiting(true)
    const newResult = getRandomResult()
    setResult(newResult)

    
    setTimeout(() => {
      setIsWaiting(false)
      console.info('KET QUA LA: ', newResult)
    }, 4000)
  }

  return (
    <div className='home-page'>
      <Heading/>
      <RandomSection
        result={result}
        onRandom={handleRandom}
        isWaiting={isWaiting}
      />
      <SelectSection isWaiting={isWaiting} result={result || FACES} />
    </div>
  )
}

export default Home
