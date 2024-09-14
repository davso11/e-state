import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/services/auth/hooks";
import { Alert, AlertDescription } from "@/components/ui/alert";

type RegistrationFormProps = React.ComponentPropsWithoutRef<"form">;

export const RegistrationForm = (props: RegistrationFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const regMutation = useRegister();
  const navigate = useNavigate();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // Reset states
    setError(null);
    setIsRegistering(true);

    if (!email || !password || !firstName || !lastName || !phone) {
      setError("Veuillez tous les champs.");
      setIsRegistering(false);
      return;
    }

    await regMutation.mutateAsync(
      {
        email,
        password,
        firstName,
        lastName,
        phone,
      },
      {
        onSuccess() {
          setIsRegistering(false);
          navigate("/login");
        },
        async onError(err: any) {
          setIsRegistering(false);
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

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <div className="grid w-full flex-1 gap-2">
            <Label htmlFor="lastName">Nom</Label>
            <Input
              type="text"
              value={lastName}
              placeholder="Ex: Konan"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="grid w-full flex-[2] gap-2">
            <Label htmlFor="firstName">Prénoms</Label>
            <Input
              type="text"
              value={firstName}
              placeholder="Ex: Kouakou Bertin"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            type="tel"
            value={phone}
            placeholder="Ex: 0701020304"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

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
            placeholder="----------------"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          disabled={isRegistering}
        >
          {isRegistering ? "Inscription..." : "Créer un compte"}
        </Button>
      </div>
    </form>
  );
};
