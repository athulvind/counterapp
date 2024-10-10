import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'

const counter = () => {

  const handleIncrementAmount =()=>{
    if (amount){
      // action dispatch
      dispatch(incrementByAmount(amount))
    }
    else{
      alert("please input valid amount!!!")
    }
  }
  const [amount,setAmount]= useState(0)
const {count}=  useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()

  return (
    <div  className='border rounded p-5 text-center border-dark'>
        <h1 style={{fontSize:"100px"}} className='text-danger'>{count}</h1>
        <div style={{width:"500px"}} className='d-flex justify-content-between my-5'>
            <buttonon onClick={()=>dispatch(decrement())} className='btn btn-warning text-light'>Decrement</buttonon>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger text-light'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success text-light'>Increment</button>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
            <input onChange={e=>setAmount(e.target.value)} placeholder='Input amount to be incremented' type="text" className='form-control' />
            <button onClick={handleIncrementAmount}  className='btn btn-primary ms-3'>Increment by Amount</button>
        </div>
    </div>
  )
}

export default counter