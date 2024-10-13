import { SERVER_URL } from "@/constants";
import { useEffect } from "react";

const useServerEvent = ({ userId, refetchJob, refetchJobs }: ServerEvent) => {
  useEffect(() => {
    const eventSource = new EventSource(`${SERVER_URL}/notification/${userId}`);

    eventSource.onmessage = function (event) {
      try {
        const newMessage = JSON.parse(event.data);

        if (newMessage?.jobId) refetchJob(newMessage?.jobId);

        if (newMessage?.code === 201 && newMessage?.clientId !== userId)
          refetchJobs();
      } catch (error) {
        console.log("Failed to parse event data:", event.data);
      }
    };

    return () => {
      eventSource.close(); // Close the connection when the component unmounts
    };
  }, []);
};

export default useServerEvent;

type ServerEvent = {
  userId: string;
  refetchJob: (jobId: string) => void;
  refetchJobs: () => void;
};
