"use client";
import React from 'react'
import { increment, decrement } from '@/redux/features/counterSlice';
import {useAppDispatch, useAppSelector}from '@/redux/hooks'

function Homepage() {
  const count = useAppSelector(state => state.counterReducer.value)
  const dispacth = useAppDispatch()

  return (
    <div>
      <h1>
        total : {count}
      </h1>
      <button onClick={()=>dispacth(increment())}>
        Incrementar
      </button>
      <br />
      <button onClick={()=>dispacth(decrement())}>
        Decrementar
      </button>
    </div>
  )
}

export default Homepage