import { redirect } from "next/navigation";
import { getCurrent } from "../_actions/actions";
import SignUpCard from "./_components/sign-up-card";

const SignUpPage = async () => {
  const user = await getCurrent();

  if (user) redirect("/");

  return <SignUpCard />;
};

export default SignUpPage;
