import { SERVER_URL } from "@/constants";
import { useEffect } from "react";

const userId = crypto.randomUUID();

const useServerEvent = (refetchJob: (id: string) => void) => {
  useEffect(() => {
    const eventSource = new EventSource(`${SERVER_URL}/notification/${userId}`);

    eventSource.onmessage = function (event) {
      try {
        const newMessage = JSON.parse(event.data);

        if (newMessage?.jobId) refetchJob(newMessage?.jobId);
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
