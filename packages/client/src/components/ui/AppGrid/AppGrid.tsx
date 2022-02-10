import React from 'react'
import { useDetectionProgress } from 'detector/hooks'
import { applications } from 'detector/const'
import styles from './AppGrid.module.css'
import { App } from '../App/App'
import { Hr } from '../Hr/Hr'

type Props = { layout: 'short' | 'full' }

export function AppGrid({ layout }: Props) {
  const { state } = useDetectionProgress()
  const detectedApps: React.ReactNode[] = []
  const notDetectedApps: React.ReactNode[] = []

  for (let i = 0; i < state.length; i++) {
    const isDetected = state[i]
    const appData = applications[i]

    if (appData) {
      const component =  <App {...appData} key={appData.scheme} isDetected={isDetected} />
      
      if (isDetected) {
        detectedApps.push(component)
      } else {
        notDetectedApps.push(component)
      }
    }
  }

  switch (layout) {
    case 'short':
      return (
        <ul className={styles.container}>
          {detectedApps}
        </ul>
      )

    default:
      return (
        <div className={styles.wrapper}>
          <p>此身份 ID 根据该计算机上所安装的 {detectedApps.length} 个应用计算所得</p>
          <ul className={styles.container}>
            {detectedApps}
          </ul>
          <p>总共检测 {applications.length} 个应用的安装情况</p>
          <ul className={styles.container}>
            {notDetectedApps}
          </ul>
          <Hr />
        </div>
      )
  }
}