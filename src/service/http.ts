import { SERVER_URL } from "@/constants";
import { HttpResponse, HttpJobResponse, JobFormValues } from "@/types";

export const getJobs = async (): Promise<HttpResponse<HttpJobResponse[]>> => {
  const response = await fetch(`${SERVER_URL}/jobs`);
  return await response.json();
};

export const createJob = async (
  values: JobFormValues
): Promise<HttpResponse<HttpJobResponse>> => {
  const response = await fetch(`${SERVER_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  return await response.json();
};
