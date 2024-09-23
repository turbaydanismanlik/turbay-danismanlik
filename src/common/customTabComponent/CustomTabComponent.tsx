'use client'
import SwitchSelector from 'react-switch-selector'
import styles from './CustomTab.module.css'
import {ReactElement} from 'react'

interface CustomTabProps {
  options: Array<{
    label: string | ReactElement
    value: string | number
  }>
  initialTab: number
  onTabChange: (value: number) => void
  disabled?: boolean
  switchBgColor?: string
  switchSelectedBgColor?: string
  borderRadius?: number
  switchWrapperStyle?: any
  switchName?: string
}

const CustomTabComponent = ({
  options,
  initialTab,
  onTabChange,
  disabled,
  switchBgColor,
  switchSelectedBgColor,
  borderRadius,
  switchWrapperStyle,
  switchName,
}: CustomTabProps) => {
  return (
    <div className={`${styles.switchWrapper} ${switchWrapperStyle}`}>
      <SwitchSelector
        onChange={onTabChange}
        options={options}
        initialSelectedIndex={initialTab}
        backgroundColor={switchBgColor ? switchBgColor : '#ffffff'}
        selectedBackgroundColor={
          switchSelectedBgColor ? switchSelectedBgColor : '#d8fec7'
        }
        fontColor={switchSelectedBgColor ? switchSelectedBgColor : '#2a1f17'}
        selectedFontColor={switchBgColor ? switchBgColor : '#2a1f17'}
        optionBorderRadius={borderRadius ? borderRadius : 10}
        wrapperBorderRadius={borderRadius ? borderRadius : 10}
        disabled={disabled}
        name={switchName}
      />
    </div>
  )
}
CustomTabComponent.displayName = 'CustomTabComponent'
export default CustomTabComponent
