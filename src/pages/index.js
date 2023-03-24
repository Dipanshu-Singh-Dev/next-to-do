import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import TodosContainer from "@/components/Read/TodosContainer";
const inter = Inter({ subsets: ["latin"] });
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/todos");
  const data = await res.json();

  return { props: { data } };
}
export default function Home({ data }) {
  return (
    <>
      <Head>
        <link
          href="https://img.icons8.com/external-outline-black-m-oki-orlando/32/null/external-crud-database-outline-outline-black-m-oki-orlando.png"
          rel="icon"
          type="image/x-icon"
        />
        <title>Read</title>
      </Head>
      <main>
        <h1>Todos</h1>
        <TodosContainer data={data} />
      </main>
    </>
  );
}
