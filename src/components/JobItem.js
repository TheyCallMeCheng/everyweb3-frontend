import React from 'react'

const JobItem = (props) => {
  return (
    <div className='flex flex-wrap justify-evenly  h-40 p-4'>
        <h2 className='bg-red-400 w-1/3 flex '>
            {props.jobItem.Job_title}
        </h2>
        <p className='bg-amber-400 w-1/3'>
          {props.jobItem.Company}
        </p>
        <p className='bg-lime-400 w-1/3'>
          {props.jobItem.Location}
        </p>
        <p className='bg-emerald-400 w-1/3'>
          {props.jobItem.Category}
        </p>
        <p className='bg-cyan-400 w-1/3'>
          {props.jobItem.Contract_Type}  
        </p>
        <a className='bg-violet-400 text-2xl uppercase w-1/3'>
            Apply 
            <span className='text-3xl '> ⇨</span>
        </a>
    </div>
  )
}

export default JobItem