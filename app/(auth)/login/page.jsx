import AuthForm from "@/components/auth/AuthForm";

const Login = async () => {
  // const session = await getServerSession(authOptions);

  // if (session) redirect("/");

  return <AuthForm type="login" />;
};

export default Login;
