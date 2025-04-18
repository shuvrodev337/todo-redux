import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoConatainer = () => {
  // const { todos } = useAppSelector((state) => state.todos);
  const { data: todos, isError, isLoading } = useGetTodosQuery(undefined);
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
        <TodoFilter />
        <AddTodoModal />
      </div>
      <div className="bg-primary-gradient h-full  w-full p-5 rounded-md">
        <div className=" bg-white  h-full  w-full p-5 space-y-3 rounded-md">
          {todos.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoConatainer;
