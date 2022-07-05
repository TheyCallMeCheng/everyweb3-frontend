//import './App.css';
import JobsListings from "./components/JobListings"
import jobsArray from "./jobs.json"

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <main>
        <JobsListings jobs={jobsArray}/>
      </main>
    </div>
  );
}

export default App;
