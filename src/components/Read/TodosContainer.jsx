import TodoContainer from "./TodoContainer";

const TodosContainer = ({ data }) => {
  return (
    <table>
      <tbody>
        {data.map((elem) => (
          <TodoContainer key={elem.id} elem={elem} />
        ))}
      </tbody>
    </table>
  );
};

export default TodosContainer;
