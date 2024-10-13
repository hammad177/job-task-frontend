import { useEffect, useState } from "react";
import { getJobs } from "@/service/http";
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

  return { jobs, pushNewJob };
};

export default useFetchJobs;
