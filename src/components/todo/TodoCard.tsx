import { Pencil, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { removeTodo } from "@/redux/features/todoSlice";
type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
};
const TodoCard = ({ id, title, description }: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center p-3 bg-white rounded-sm border">
      <input type="checkbox" name="" id="" />
      <p className="font-medium">{title}</p>
      <p>Time</p>
      <p>{description}</p>
      <div className="space-x-3">
        <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-600">
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
