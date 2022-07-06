import './App.css';
import JobsListings from "./components/JobListings"
import jobsArray from "./jobs.json"
import Header from "./components/Header";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='flex justify-center bg-slate-500'>
        <JobsListings jobs={jobsArray}/>
      </main>
    </div>
  );
}

export default App;
