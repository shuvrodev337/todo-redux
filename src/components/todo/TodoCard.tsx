import { Pencil, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};
const TodoCard = ({ id, title, description, isCompleted }: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const toggleCompleteState = () => {
    console.log("complete");
    dispatch(toggleComplete(id));
  };
  return (
    <div className="flex justify-between items-center p-3 bg-white rounded-sm border">
      <input
        onChange={toggleCompleteState}
        type="checkbox"
        name="complete"
        id=""
      />
      <p className="font-medium">{title}</p>
      <div>
        {isCompleted ? (
          <p className="text-green-800">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
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
