import { redirect } from "next/navigation";

export const metadata = {
  title: "Conta | Nevermine 2",
  description: "Redirecionando para a tela principal de login.",
};

const AuthRedirect = () => {
  redirect("/");
};

export default AuthRedirect;
