import React from 'react'

const Filter = ({ filter, setFilter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      filter shown with <input
        value={filter}
        onChange={handleChange}
      />
    </>
  )
}

export default Filter