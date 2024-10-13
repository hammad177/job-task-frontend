import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { HttpJobResponse, JobFormValues } from "@/types";
import { createJob } from "@/service/http";
import { useToast } from "@/hooks/use-toast";

const initialFormValues: JobFormValues = {
  title: "",
  description: "",
};

const JobForm = ({ pushNewJob }: JobFormProps) => {
  const [formValues, setFormValues] =
    useState<JobFormValues>(initialFormValues);

  const { toast } = useToast();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { success, message, data } = await createJob(formValues);

    if (!success) {
      toast({
        title: "Error",
        description: message,
      });
    } else {
      pushNewJob(data);
      setFormValues(initialFormValues);
      toast({
        title: "Success",
        description: "Job added successfully",
      });
    }
  };

  const isSubmitDisabled =
    !formValues.title.trim() || !formValues.description.trim();

  return (
    <div className="max-w-[850px] mx-auto my-4">
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <Input
          value={formValues.title}
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
        />
        <Input
          value={formValues.description}
          name="description"
          placeholder="Job Description"
          onChange={handleChange}
        />
        <Button type="submit" disabled={isSubmitDisabled}>
          Add Job
        </Button>
      </form>
    </div>
  );
};

export default JobForm;

type JobFormProps = {
  pushNewJob: (job: HttpJobResponse) => void;
};
