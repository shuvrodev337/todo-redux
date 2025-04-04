import TodoConatainer from "@/components/todo/TodoConatainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-3xl font-semibold my-12  text-center text-slate-900">
        My todos...
      </h1>
      <TodoConatainer />
    </Container>
  );
};

export default Todo;
