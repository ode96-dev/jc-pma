import { redirect } from "next/navigation";
import SignInCard from "./_components/sign-in-card";
import { getCurrent } from "../_actions/actions";

const SignInPage = async () => {
  const user = await getCurrent();

  if (user) redirect("/");

  return <SignInCard />;
};

export default SignInPage;
