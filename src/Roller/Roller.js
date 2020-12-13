import React from 'react'
import styles from './styles.css'

const Roller = props => (
  <>
    <style>{`${styles}`}</style>
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>
)

export default Roller
