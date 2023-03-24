import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const ID = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const postReq = async (data) => {
    fetch(`http://localhost:3000/todos`, {
      method: "POST",
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
      </Head>
      <form onSubmit={handleSubmit(postReq)}>
        <label>Title</label>
        <br />
        <input
          placeholder="Enter the 2Do"
          {...register("title", { required: true })}
        />
        <br />
        {errors.title && <span>This field is required</span>}

        <br />
        <br />
        <label>Completed?</label>
        <br />
        <input
          placeholder="true/false"
          {...register("completed", { required: true })}
        />
        <br />
        {errors.completed && <span>This field is required</span>}
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default ID;
