'use client'
import {useState} from 'react'
import styles from './ExpandCollapseButton.module.css'

interface ExpandCollapseButtonProps {
  isExpanded?: boolean
  sectionTitle: string
  children: any
}
const ExpandCollapseButton = ({isExpanded = false, sectionTitle, children}) => {
  const [isContentExpanded, setIsContentExpanded] = useState(isExpanded)
  const buttonTitle = isContentExpanded ? '–' : '+'
  return (
    <div>
      <div
        className={styles.collapsedContainer}
        onClick={() => setIsContentExpanded(!isContentExpanded)}
      >
        <button onClick={() => setIsContentExpanded(!isContentExpanded)}>
          {buttonTitle}
        </button>
        <h1>{sectionTitle}</h1>
      </div>
      {isContentExpanded ? (
        <div className={styles.expandedContainer}>{children}</div>
      ) : (
        <div />
      )}
    </div>
  )
}

export default ExpandCollapseButton
