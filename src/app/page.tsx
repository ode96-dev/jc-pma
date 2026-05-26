import { redirect } from "next/navigation";
import { getCurrent } from "./(auth)/_actions/actions";
import { UserButton } from "./(auth)/_components/user-button";

const Home = async () => {
  const user = await getCurrent();
  console.log("[user]", user);

  if (!user) redirect("/sign-in");

  return (
    <div>
      <UserButton />
    </div>
  );
};

export default Home;
