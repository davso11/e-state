import { Link } from "react-router-dom";
import { RegistrationForm } from "./components/registration-form";

export const RegistrationPage = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Créez votre compte
        </h1>
        <p className="text-sm text-muted-foreground">
          Remplissez le formulaire pour continuer
        </p>
      </div>

      <div className="grid gap-6">
        <RegistrationForm />

        <p className="text-center text-sm">
          Vous avez déjà un compte ?{" "}
          <Link
            to="/login"
            className="text-primary"
          >
            Connectez-vous
          </Link>
        </p>
      </div>
    </>
  );
};
