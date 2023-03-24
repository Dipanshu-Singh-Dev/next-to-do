import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const ID = ({ data }) => {
  const router = useRouter();
  const { id, title, completed } = data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const patchReq = async (data) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Editor</title>
        <link
          href="https://img.icons8.com/external-outline-black-m-oki-orlando/32/null/external-crud-database-outline-outline-black-m-oki-orlando.png"
          rel="icon"
          type="image/x-icon"
        />
      </Head>
      <form onSubmit={handleSubmit(patchReq)}>
        <label>Title</label>
        <br />
        <input defaultValue={title} {...register("title")} />
        <br />
        <br />
        <label>Completed</label>
        <br />
        <input defaultValue={completed} {...register("completed")} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};
export const getServerSideProps = async (context) => {
  let ToDoID = context.query.id;
  const url = "http://localhost:3000/todos/" + ToDoID;
  const res = await fetch(url);
  const data = await res.json();
  return { props: { data } };
};

export default ID;
