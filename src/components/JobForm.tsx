import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { JobFormValues } from "@/types";

const initialFormValues: JobFormValues = {
  title: "",
  description: "",
};

const JobForm = () => {
  const [formValues, setFormValues] =
    useState<JobFormValues>(initialFormValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const isSubmitDisabled =
    !formValues.title.trim() || !formValues.description.trim();

  return (
    <div className="max-w-[850px] mx-auto my-4">
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <Input name="title" placeholder="Job Title" onChange={handleChange} />
        <Input
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
