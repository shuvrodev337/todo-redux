const TodoCard = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-white rounded-sm border">
      <input type="checkbox" name="" id="" />
      <p className="font-medium">Title</p>
      <p>Time</p>
      <p>description</p>
      <div className="space-x-2">
        <button>Edit</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
