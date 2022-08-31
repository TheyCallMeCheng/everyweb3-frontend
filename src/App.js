import React from 'react';
import './App.css';
import JobsListings from "./components/JobListings"
import jobsArray from "./AllCryptoJobs.json"
import Header from "./components/Header";
import Search from './components/Search';

function App() {
    const [searchedItems, setSearchedItems] = React.useState([])
    const [jobs, setJobs] = React.useState(jobsArray)

    console.log(jobs)
    function handleJobsChange(change) {
        setSearchedItems(prevJobs => {
            // Object.assign(prevJobs, change)
            if(!prevJobs.includes(change)){
                prevJobs.push(change)  
            }
            return prevJobs
        })
        setJobs(searchedItems)
        console.log(searchedItems.length)
    }

    function handleEmptyClearArray() {
        setJobs(jobsArray)
        setSearchedItems([])
    }

      return (
        <div className="App">
        {console.log("Component rendered")}
        <header className="App-header">
            <Header />
        </header>
        <main className=''>
            <Search jobs={jobsArray} handleJobsChange={handleJobsChange} handleEmptyClearArray={handleEmptyClearArray} />
            <div className='flex justify-center'>
                <JobsListings jobs={jobs}/> 
            </div>
                
        </main>
        </div>
    );
}

export default App;
