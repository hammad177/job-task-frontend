import { HttpJobResponse } from "@/types";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { DEFAULT_IMAGE } from "@/constants";

const AppCard = ({ job }: AppCardProps) => {
  const badgeVariant =
    job.status === "failed"
      ? "destructive"
      : job.status === "pending"
      ? "default"
      : "outline";

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="truncate">{job.title}</CardTitle>
        <Badge className="capitalize" variant={badgeVariant}>
          {job.status}
        </Badge>
      </CardHeader>
      <CardContent>
        <img
          src={job.result ? job.result : DEFAULT_IMAGE}
          alt=""
          className="w-full h-[350px] rounded-sm object-cover"
        />
      </CardContent>
      <CardFooter>
        <CardDescription className="line-clamp-2">
          {job.description}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default AppCard;

type AppCardProps = {
  job: HttpJobResponse;
};
