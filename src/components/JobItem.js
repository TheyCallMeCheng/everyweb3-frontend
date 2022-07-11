import React from 'react'

const JobItem = (props) => {
  return (
    <div className='flex flex-wrap p-4 border-b-4 border-dashed border-gray-700'>
        <div className='w-1/12 flex justify-center items-center'>
            <img src='placeholder.jpeg'/>
        </div>
        <div className='w-9/12'>
            <h2 className='text-4xl font-bold'>
                {props.jobItem.Job_title}
            </h2>
            <p className='text-2xl'>
            {props.jobItem.Company}
            </p>
            <p className='text-2xl '>
            {props.jobItem.Location}
            </p>
            <p className='text-2xl'>
            {props.jobItem.Category}
            </p>
            <p className=' text-2xl'>
            {props.jobItem.Contract_Type}  
            </p>
        </div>
        <div className='w-2/12 flex justify-end items-center font-bold'>
            <a className='  text-2xl uppercase p-2 text-black border-4 border-black rounded-xl'>
                Apply 
                {/* <span className='text-3xl '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg>
                </span> */}
            </a>
        </div>
    </div>
  )
}

export default JobItem