import './App.css';
import JobsListings from "./components/JobListings"
import jobsArray from "./jobs.json"
import Header from "./components/Header";
import Search from './components/Search';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className=''>
        <Search />
        <div className='flex justify-center'>
            <JobsListings jobs={jobsArray}/>
        </div>
            
      </main>
    </div>
  );
}

export default App;
