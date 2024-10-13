import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const AppCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>Card Title</CardTitle>
        <Badge variant="default">Status</Badge>
      </CardHeader>
      <CardContent>
        <img
          src="https://images.unsplash.com/photo-1721332150382-d4114ee27eff?ixid=M3w2NjQzNDN8MXwxfGFsbHwxfHx8fHx8fHwxNzI4ODIxMDI4fA&ixlib=rb-4.0.3"
          alt="image-title"
          className="w-full h-[350px] bg-cover rounded-sm"
        />
      </CardContent>
      <CardFooter>
        <CardDescription>Card Description</CardDescription>
      </CardFooter>
    </Card>
  );
};

export default AppCard;
