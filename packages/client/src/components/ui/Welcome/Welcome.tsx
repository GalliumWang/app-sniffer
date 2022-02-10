import React, { useCallback } from 'react'
import { initDetection } from 'detector/hooks'
import { getBrowserFamily } from 'detector/browser'
import { BrowserFamily } from 'detector/types'
import { Footer, Centered, BrowserIcons, Logo } from 'components/ui'
import { TermsAccept } from '../TermsAccept/TermsAccept'
import { Hr } from '../Hr/Hr'

type Props = {
  onStart: () => unknown
}

export function Welcome({ onStart }: Props) {
  const target = getBrowserFamily()
  const isMobile = window.innerWidth <= 680
  const isChromeLinux = target === BrowserFamily.Chrome && /Linux/.test(navigator.platform)

  const handleStart = useCallback(() => {
    initDetection()
    onStart()
  }, [])

  return (
    <>
      <Centered>
        <Logo />
        <h1>app sniffer</h1>
        <h4>
          此网站仅为展示所用，可检测本地计算机中所安装软件并进行列举
        </h4>
        <BrowserIcons />

        {isChromeLinux && (
          <>
            <h4>This demo may work incorrectly in Chrome on Linux</h4>
            <a onClick={handleStart}>Try it anyway</a>
          </>
        )}

        {!isChromeLinux && isMobile && (
          <>
            <Hr/>
            <h4>
              该追踪模型仅支持桌面浏览器
            </h4>
          </>
        )}
      
        {!isChromeLinux && !isMobile && (
          <>
            <button onClick={handleStart}>开始检测</button>
            <TermsAccept />
          </>
        )}
        <Footer />
      </Centered>
    </>
  )
}