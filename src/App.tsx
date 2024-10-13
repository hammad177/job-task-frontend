import AppCard from "./components/AppCard";
import Heading from "./components/Heading";
import JobForm from "./components/JobForm";
import useFetchJobs from "./hooks/useFetchJobs";

function App() {
  const { jobs, pushNewJob } = useFetchJobs();

  return (
    <div className="container mx-auto">
      <Heading />
      <JobForm pushNewJob={pushNewJob} />
      <div className="grid grid-cols-4 gap-4">
        {jobs.map((job) => (
          <AppCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default App;
