import Link from "next/link";
const TodoContainer = ({ elem }) => {
  const { id, title, completed } = elem;
  const handleDelete = () => {
    console.log(id);
  };
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{completed}</td>
        <td>
          <button>
            <Link href={"/edit/" + id}>Edit</Link>
          </button>
        </td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default TodoContainer;
