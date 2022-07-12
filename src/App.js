import React from 'react';
import './App.css';
import JobsListings from "./components/JobListings"
import jobsArray from "./jobs.json"
import Header from "./components/Header";
import Search from './components/Search';

function App() {
    const [searchIsLoading, setSearchIsLoading] = React.useState(false)
    const [searchedItems, setSearchedItems] = React.useState([])
    const [jobs, setJobs] = React.useState(jobsArray)

    // function handleSearchIsLoading (isLoading) {
    //     setSearchIsLoading(isLoading)
    // }

    console.log(jobs)
    function handleJobsChange(change) {

        setSearchedItems(prevJobs => {
            // Object.assign(prevJobs, change)
            if(!prevJobs.includes(change)){
                prevJobs.push(change)
            }
            return prevJobs
        })
        console.log(searchedItems.length)
    }

      return (
        <div className="App">
        <header className="App-header">
            <Header />
        </header>
        <main className=''>
            <Search jobs={jobsArray} handleJobsChange={handleJobsChange}  />
            <div className='flex justify-center'>
                {/* { !searchIsLoading && <JobsListings jobs={jobs}/>} */}
                { searchedItems.length > 0 ?
                    <JobsListings jobs={searchedItems}/> 
                    :
                    <JobsListings jobs={jobs}/> 
                }
            </div>
                
        </main>
        </div>
    );
}

export default App;
