import React from 'react'

const Search = (props) => {
    const [search, setSearch] = React.useState("")

    function handleInputChange(event) {
        // props.handleSearchIsLoading(true)
        setSearch(event.target.value)
        if(search.length > 2){
            props.jobs.forEach(element => {
                if(element.Job_title.includes(search)){
                    props.handleJobsChange(element)
                }
            });
        }
        // props.handleSearchIsLoading(false)
    }

    return (
        <div className='flex justify-center w-screen'>
            <input
                type="text" 
                placeholder='Search...'
                className='h-12 w-2/3 font-bold text-2xl p-8 m-8 text-black border-2 border-black rounded-xl' 
                onChange={handleInputChange}
                maxLength="40"
            />
            
        </div>
  )
}

export default Search