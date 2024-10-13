import { useEffect, useState } from "react";
import { getJobById, getJobs } from "@/service/http";
import { HttpJobResponse } from "@/types";
import { useToast } from "./use-toast";

const useFetchJobs = () => {
  const [jobs, setJobs] = useState<HttpJobResponse[]>([]);

  const { toast } = useToast();

  useEffect(() => {
    (async () => {
      const { success, message, data } = await getJobs();

      if (success) setJobs(data ?? []);

      if (!success)
        toast({
          title: "Error",
          description: message,
          variant: "destructive",
        });
    })();
  }, []);

  const pushNewJob = (job: HttpJobResponse) =>
    setJobs((prev) => [job, ...prev]);

  const refetchJob = async (id: string) => {
    const { success, data } = await getJobById(id);

    if (success && data)
      setJobs((prev) => prev.map((job) => (job._id === id ? data : job)));
  };

  return { jobs, pushNewJob, refetchJob };
};

export default useFetchJobs;
