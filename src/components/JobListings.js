import React from 'react'
import JobItem from './JobItem'

const JobsListings = (props) => {
    return (
    <div className='md:w-8/12'>
        {
            props.jobs.map(jobItem => {
                return (
                        <div className="bg-white" >
                            <JobItem  jobItem={jobItem} />
                        </div>
                        )
            })
        }
    </div>
  )
}

export default JobsListings