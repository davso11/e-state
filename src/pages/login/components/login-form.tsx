import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/services/auth/hooks";
import { useAuth } from "@/contexts/auth";
import { Alert, AlertDescription } from "@/components/ui/alert";

type LoginFormProps = React.ComponentPropsWithoutRef<"form">;

export const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loginMutation = useLogin();
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // Reset states
    setError(null);
    setIsLogin(true);

    if (!email || !password) {
      setError("Veuillez tous les champs.");
      setIsLogin(false);
      return;
    }

    await loginMutation.mutateAsync(
      {
        email,
        password,
      },
      {
        onSuccess(data) {
          setIsLogin(false);
          setAuth(data);
          localStorage.setItem("auth", JSON.stringify(data));
          navigate("/dashboard", { replace: true });
        },
        async onError(err: any) {
          setIsLogin(false);
          const res = await err.response.json();
          setError(res.error);
        },
      },
    );
  };

  return (
    <form
      {...props}
      onSubmit={onSubmit}
    >
      <div className="grid gap-4">
        {!!error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            value={email}
            placeholder="Ex: nom@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            type="password"
            value={password}
            placeholder="--------"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          disabled={isLogin}
        >
          Se connecter
        </Button>
      </div>
    </form>
  );
};
