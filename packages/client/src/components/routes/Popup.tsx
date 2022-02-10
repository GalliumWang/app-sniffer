import React, { useEffect } from 'react'
import { detectNext } from 'detector/detection'

export function Popup() {
  useEffect(() => {
    detectNext()
  }, [])

  return (
    <>
      <h2>请稍候</h2>
    </>
  )
}