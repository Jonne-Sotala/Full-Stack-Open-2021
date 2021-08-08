import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }

    if (persons.find((person) => person.name === newPerson.name)) {
      window.alert(`${newPerson.name} is already added to phonebook`)
    } else {
      const newPersons = persons.concat(newPerson)
      setPersons(newPersons)
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={addPerson}>
      <div>
        name:
        <input
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        /><br />
        number:
        <input
          value={newNumber}
          onChange={(event) => setNewNumber(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>

  )
}

export default PersonForm