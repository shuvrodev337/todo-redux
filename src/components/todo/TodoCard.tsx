import { Pencil, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { removeTodo } from "@/redux/features/todoSlice";
type TTodoCardProps = {
  _id?: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};
const TodoCard = ({
  // id,
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const toggleCompleteState = () => {
    //  dispatch(toggleComplete(id));
  };
  return (
    <div className="flex justify-between items-center p-3 bg-white rounded-sm border">
      <input
        className="mr-3"
        onChange={toggleCompleteState}
        type="checkbox"
        name="complete"
        id=""
      />
      <p className="font-medium flex-1">{title}</p>
      <div className="flex-1 flex gap-2 items-center">
        <div
          className={`size-3 rounded-full 
  ${priority === "high" ? "bg-red-500" : null}
  ${priority === "medium" ? "bg-yellow-500" : null}
  ${priority === "low" ? "bg-green-500" : null}
  
  `}
        ></div>
        <p>{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-800">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <p className="flex-2">{description}</p>
      <div className="space-x-3">
        <Button
          onClick={() => dispatch(removeTodo(_id))}
          className="bg-red-600"
        >
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
