import AppCard from "./components/AppCard";
import AppCardSkeleton from "./components/AppCardSkeleton";
import Heading from "./components/Heading";
import JobForm from "./components/JobForm";
import useFetchJobs from "./hooks/useFetchJobs";
import useServerEvent from "./hooks/useServerEvent";

const userId = crypto.randomUUID();

function App() {
  const { jobs, isLoading, pushNewJob, refetchJob, refetchJobs } =
    useFetchJobs();

  useServerEvent({ refetchJob, userId, refetchJobs });

  return (
    <div className="container mx-auto">
      <Heading />
      <JobForm pushNewJob={pushNewJob} userId={userId} />

      {!jobs.length && !isLoading ? (
        <h3 className="text-center text-xl">
          No jobs have been created yet. Create one to get started!
        </h3>
      ) : jobs.length && !isLoading ? (
        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {jobs.map((job) => (
            <AppCard key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {new Array(6).fill(0).map((_, i) => (
            <AppCardSkeleton key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
