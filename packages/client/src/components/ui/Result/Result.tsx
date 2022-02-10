import React from 'react'
import { AppGrid, BrowserIcons, Centered, Footer, Hr, Logo } from 'components/ui'
import { useStatistics, useIdentifier } from 'hooks/api'

type Props = {
  onRestart: () => unknown
}

export function Result({ onRestart }: Props) {
  const { stats, isLoading } = useStatistics()
  const idenifier = useIdentifier()
  const percent = (100 - (stats.count / stats.totalCount) * 100).toFixed(2)

  return (
    <>
      <Centered>
        <Logo />
        <h1>{idenifier?.toUpperCase()}</h1>
        {isLoading ? <p>请稍候</p> : '这是此计算机的身份 ID'}
        <a onClick={onRestart} style={{ marginBottom: 32 }}>
          回到首页
        </a>
        <Hr />
      </Centered>
      <AppGrid layout='full' />
      <Centered>
        <h4 style={{ marginTop: -50 }}>可以通过其他浏览器再次检测该运行结果</h4>
        <p>对于同一计算机，该结果将保持不变</p>
        <BrowserIcons />
        <Hr />
      </Centered>
      <Footer />
    </>
  )
}
