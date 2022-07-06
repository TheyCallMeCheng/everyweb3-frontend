import React from 'react'
import JobItem from './JobItem'

const JobsListings = (props) => {
    return (
    <div>
        {
            props.jobs.map(jobItem => {
                return (
                        <div className="bg-gray-200">
                            <JobItem  jobItem={jobItem} />
                        </div>
                        )
            })
        }
    </div>
  )
}

export default JobsListings