import React from 'react';

function skill(props) {
  const { percentage, label, style } = props
  const widthPer = percentage && { width: percentage }
  return (
    <div>
      <div style={{ ...styles.label, ...style }}>{label}</div>
      <div style={styles.progress}>
        <div style={{ ...styles.percentage, ...widthPer }}></div>
      </div>
    </div >
  )
}

const styles = {
  label: {
    marginBottom: 10
  },
  progress: {
    width: '100%',
    height: 4,
    backgroundColor: '#d8dbe2'
  },
  percentage: {
    backgroundColor: '#78cc6d',
    height: 4,
    width: '90%',
  }
}

export default skill;