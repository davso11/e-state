import { Link } from "react-router-dom";
import { LoginForm } from "./components/login-form";

export const LoginPage = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Accédez à votre espace
        </h1>
        <p className="text-sm text-muted-foreground">
          Saisissez vos identifiants pour continuer
        </p>
      </div>

      <div className="grid gap-6">
        <LoginForm />

        <p className="text-center text-sm">
          Vous n'avez pas de compte ?{" "}
          <Link
            to="/register"
            className="text-primary"
          >
            Créez-en un
          </Link>
        </p>
      </div>
    </>
  );
};
