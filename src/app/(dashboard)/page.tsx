import { redirect } from "next/navigation";
import { getCurrent } from "../(auth)/_actions/actions";

const Home = async () => {
  const user = await getCurrent();
  console.log("[user]", user);

  if (!user) redirect("/sign-in");

  return <div>this is home</div>;
};

export default Home;
