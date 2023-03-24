import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
const TodoContainer = ({ elem }) => {
  const { id, title, completed } = elem;
  const router = useRouter();
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      console.log(`Todo with id ${id} deleted successfully`);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{completed}</td>
        <td>
          <Link href={"/edit/" + id}>
            <button>Edit</button>
          </Link>

          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default TodoContainer;
