import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard, { TTodoCardProps } from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoConatainer = () => {
  // const { todos } = useAppSelector((state) => state.todos);

  const [priority, setPriority] = useState("");
  // redux caches data inteligently, it will cache data by priorities after one fetch each, if we filter again by priority, it will show from cache, not fetch.

  const {
    data: todos,
    isError,
    isLoading,
  } = useGetTodosQuery(priority, {
    // can take this additional object wher we can specify pollingInterval,refetchOnFocus etc
    //  pollingInterval: 30000   // refetch after 30 second
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center mx-auto bg-white p-5 rounded-sm">
        <p className="text-2xl ">Loading</p>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex justify-center items-center mx-auto bg-white p-5 rounded-sm">
        <p className="text-2xl ">Something went wrong</p>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-end gap-6 my-6">
        <TodoFilter priority={priority} setPriority={setPriority} />
        <AddTodoModal />
      </div>
      <div className="bg-primary-gradient h-full  w-full p-5 rounded-md">
        <div className=" bg-white  h-full  w-full p-5 space-y-3 rounded-md">
          {todos.map((item: TTodoCardProps) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoConatainer;
