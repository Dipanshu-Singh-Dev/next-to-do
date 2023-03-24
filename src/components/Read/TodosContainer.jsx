import TodoContainer from "./TodoContainer";
import Link from "next/link";
const TodosContainer = ({ data }) => {
  return (
    <>
      <Link href="/create">
        <button>Create a ToDo</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Completed?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => (
            <TodoContainer key={elem.id} elem={elem} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodosContainer;
