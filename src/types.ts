export type JobFormValues = {
  title: string;
  description: string;
};

export type HttpResponse<T> = {
  success: boolean;
  message: string | string[];
  data: T;
};

export type HttpJobResponse = {
  _id: string;
  title: string;
  description: string;
  status: "pending" | "resolved" | "failed";
  createdAt: string;
  updatedAt: string;
  __v: number;
  result: string;
};
