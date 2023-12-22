import AuthForm from "@/components/auth/AuthForm";

const Register = async () => {
  // const session = await getServerSession(authOptions);

  // if (session) redirect("/");
  return <AuthForm type="register" />;
};

export default Register;
