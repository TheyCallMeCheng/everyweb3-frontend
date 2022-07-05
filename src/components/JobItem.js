import React from 'react'

const JobItem = (props) => {
  return (
    <div>
        <h2>
            {props.jobItem.Job_title}
        </h2>
        <p>
          {props.jobItem.Company}
        </p>
        <p>
          {props.jobItem.Location}
        </p>
        <p>
          {props.jobItem.Category}
        </p>
        <p>
          {props.jobItem.Contract_Type}
        </p>
    </div>
  )
}

export default JobItem