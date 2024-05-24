import React from 'react'

const Trail = ({isAuthenticated }) => {
  if (!isAuthenticated) {
    return null;
  }
  return (
    <div>Trail</div>
  )
}

export default Trail