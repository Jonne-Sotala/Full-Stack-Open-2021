import React from 'react'

const Header = ({ title }) => {
  return (
    <h2>{title}</h2>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => <Part key={part.id} part={part} />)}
    </>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((a, part) => a + part.exercises, 0)
  return <p><strong>Total of {total} exercises</strong></p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course