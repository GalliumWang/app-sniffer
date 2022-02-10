import React, { useEffect, useState } from 'react'
import { useDetectionProgress } from 'detector/hooks'
import { detectNext, DetectionResult, AlertMessage } from 'detector/detection'
import { AppGrid, Centered, Footer, Logo, ProgressBar } from 'components/ui'
// import { isAdditinalWindowOpened } from 'detector/window'

type Props = {
  onComplete: () => unknown
  onAlert: (message: AlertMessage) => unknown
}

export function InProgress({ onAlert, onComplete }: Props) {
  const [localCounter, setLocalCounter] = useState(0)
  const progress = useDetectionProgress()

  useEffect(() => {
    detectNext()
      .then((result) => {
        if (result === DetectionResult.Ready) {
          setLocalCounter(localCounter + 1)
        }
      })
      .catch((message: AlertMessage | Error) => {
        onAlert(message instanceof Error ? AlertMessage.Unexpected : message)
      })
  }, [localCounter])

  useEffect(() => {
    if (progress.current >= progress.total) {
      onComplete()
    }
  }, [localCounter, progress])

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (!isAdditinalWindowOpened()) {
  //       onAlert(AlertMessage.MissingPopup)
  //     }
  //   }, 500)

  //   return (() => clearInterval(intervalId))
  // }, [])

  return (
    <>
      <Centered>
        <Logo />
        <h4>请稍等</h4>
        <p>正在检测中...</p>
        <ProgressBar total={progress.total} current={progress.current} />
      </Centered>
      <AppGrid layout='short' />
      <Footer />
    </>
  )
}