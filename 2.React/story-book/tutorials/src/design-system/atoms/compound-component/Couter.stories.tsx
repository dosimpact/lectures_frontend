import React from 'react'
import { Counter } from './Counter'
import { Usage } from './Usage'

export default {
  title: 'Design System/Atoms/Compound-Counter', // group / folder / component
  component: Usage,
}

export const Commmon = () => <Usage />

export const v3 = () => {
  const handleChangeCounter = (count) => {
    console.log('count', count)
  }

  return (
    <Counter onChange={handleChangeCounter}>
      <Counter.Decrement icon="minus" />
      <Counter.Label>Counter</Counter.Label>
      <Counter.Count max={10} />
      <Counter.Increment icon="plus" />
    </Counter>
  )
}

export const v2 = () => {
  const handleChangeCounter = (count) => {
    console.log('count', count)
  }

  return (
    <Counter onChange={handleChangeCounter}>
      <Counter.Label>Counter</Counter.Label>
      <Counter.Count max={10} />
      <Counter.Increment icon="plus" />
    </Counter>
  )
}
