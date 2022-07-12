import React from 'react'

const JobItem = (props) => {
  return (
    <div className='flex flex-wrap py-4 border-b-4 border-dashed border-gray-700 tracking-wide leading-relaxed'>
        <div className='w-1/12 flex justify-center items-center pl-2 md:pl-0'>
            <img src={props.jobItem.logoSrc} className="md:w-9/12 md:h-9/12 m-2 rounded-full" />
        </div>
        <div className='w-10/12 p-4'>
            <h2 className='text-4xl font-bold p-1 pb-4'>
                {props.jobItem.Job_title}
            </h2>
            <p className='text-3xl p-1'>
            {props.jobItem.Company}
            </p>
            <p className='text-2xl p-1'>
            {props.jobItem.Location}
            </p>
            <div className='flex p-1'>
                <p className='text-2xl'>
                {props.jobItem.Category} 
                </p>
                <p className='text-2xl'>
                , {props.jobItem.Contract_Type}  
                </p>
            </div>
        </div>
        <div className='w-1/12 flex justify-end items-center font-bold'>
            <a className='  text-2xl uppercase p-2 text-black border-4 border-black rounded-xl' href={props.jobItem.applyLink} target="_blank">
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