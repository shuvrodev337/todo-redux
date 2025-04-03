import TodoCard from "./TodoCard";

const TodoConatainer = () => {
  return (
    <div>
      <div>
        <p>Add todo</p>
        <p>Filter</p>
      </div>
      <div className="bg-primary-gradient h-full  w-full p-5 rounded-md">
        <div className=" bg-white  h-full  w-full p-5 space-y-3 rounded-md">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>

        {/* <div className="flex justify-center items-center mx-auto bg-white p-5 rounded-sm">
          <p className="text-2xl ">There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoConatainer;
