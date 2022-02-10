import React, { useCallback } from 'react'
import { createAdditionalWindow, isAdditinalWindowOpened } from 'detector/window'
import { Footer, Centered, Logo } from 'components/ui'
import { Hr } from '../Hr/Hr'
import { revertLatestResult } from 'detector/detection'

type Props = {
  text: string
  onResume: () => unknown
  onCancel: () => unknown
}

export function Alert({ text, onResume, onCancel }: Props) {
  const handleResume = useCallback(() => {
    revertLatestResult()
  
    if (!isAdditinalWindowOpened()) {
      createAdditionalWindow()
    }
  
    onResume()
  }, [])

  return (
    <>
      <Centered>
        <Logo />
        <h4>{text}</h4>
        <Hr />
        <button onClick={handleResume}>继续</button>
        <br/>
        <a onClick={onCancel}>重新开始</a>
        <Footer />
      </Centered>
    </>
  )
}