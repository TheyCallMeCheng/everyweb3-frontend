import React from 'react'
import JobItem from './JobItem'

const JobsListings = (props) => {
  return (
    <div className='listing'>
        {
            props.jobs.map(jobItem => {
                return <JobItem jobItem={jobItem} />
            })
        }
    </div>
  )
}

export default JobsListings