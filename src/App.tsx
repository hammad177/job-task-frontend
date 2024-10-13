import AppCard from "./components/AppCard";
import Heading from "./components/Heading";
import JobForm from "./components/JobForm";

function App() {
  return (
    <div className="container mx-auto">
      <Heading />
      <JobForm />
      <div className="grid grid-cols-4 gap-4">
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    </div>
  );
}

export default App;
