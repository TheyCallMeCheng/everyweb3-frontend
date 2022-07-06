import React from 'react'

const JobItem = (props) => {
  return (
    <div className='flex flex-wrap p-4 '>
        <div className='w-1/12 flex justify-center items-center'>
            <img src='placeholder.jpeg'/>
        </div>
        <div className='w-9/12'>
            <h2 className='bg-red-400 text-4xl'>
                {props.jobItem.Job_title}
            </h2>
            <p className='bg-amber-400 text-2xl'>
            {props.jobItem.Company}
            </p>
            <p className='bg-lime-400 text-2xl '>
            {props.jobItem.Location}
            </p>
            <p className='bg-emerald-400 text-2xl'>
            {props.jobItem.Category}
            </p>
            <p className='bg-cyan-400  text-2xl'>
            {props.jobItem.Contract_Type}  
            </p>
        </div>
        <div className='w-2/12 flex justify-end items-center'>
            <a className='  text-2xl uppercase p-2 text-indigo-800 border-solid border-l-8 border-indigo-600 rounded-full'>
                Apply 
                <span className='text-3xl '> ⇨</span>
            </a>
        </div>
    </div>
  )
}

export default JobItem