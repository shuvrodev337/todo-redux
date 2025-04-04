import { Pencil, Trash } from "lucide-react";
import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-white rounded-sm border">
      <input type="checkbox" name="" id="" />
      <p className="font-medium">Title</p>
      <p>Time</p>
      <p>description</p>
      <div className="space-x-3">
        <Button className="bg-red-600">
          <Trash />
        </Button>
        <Button className="bg-blue-700">
          <Pencil />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
