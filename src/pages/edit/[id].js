import Head from "next/head";
import { useRouter } from "next/router";

const id = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Editor</title>
      </Head>
      <div></div>
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

export default id;
