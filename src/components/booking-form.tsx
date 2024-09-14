import { useState } from "react";
import { add, format, setDefaultOptions } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarClock, Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "./ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TimePickerDemo } from "./time-picker-demo";
import { useNewBooking } from "@/services/booking/hooks";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

setDefaultOptions({ locale: fr });

export const BookingForm = ({ onBooked }: { onBooked?: () => void }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [message, setMessage] = useState("");
  const { mutateAsync: book } = useNewBooking();
  const [isBooking, setIsBooking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * carry over the current time when a user clicks a new day
   * instead of resetting to 00:00
   */
  const handleSelect = (newDay: Date | undefined) => {
    if (!newDay) return;
    if (!date) {
      setDate(newDay);
      return;
    }
    const diff = newDay.getTime() - date.getTime();
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    const newDateFull = add(date, { days: Math.ceil(diffInDays) });
    setDate(newDateFull);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !date) {
      return setError("Veuillez remplir tous les champs");
    }

    setIsBooking(true);
    setError(null);

    try {
      await book({
        firstName,
        lastName,
        email,
        date,
        message,
      });

      setIsBooking(false);
      toast.success("Réservation effectuée avec succès");
      onBooked?.();
    } catch (err) {
      setIsBooking(false);
      setError("Une erreur s'est produite lors de la réservation");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="grid w-full flex-1 gap-2">
            <Label htmlFor="firstName">Prénoms</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <div className="grid w-full flex-1 gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid w-full flex-1 gap-2">
            <Label htmlFor="date">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? (
                    format(date, "PPP HH:mm:ss")
                  ) : (
                    <span>Sélectionnez une date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => handleSelect(d)}
                  initialFocus
                />
                <div className="border-t border-border p-3">
                  <TimePickerDemo
                    setDate={setDate}
                    date={date}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Message (optionel)</Label>
          <Textarea
            id="message"
            value={message}
            rows={8}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <Button
        type="submit"
        size="sm"
        className="mt-4 w-full space-x-2"
        disabled={isBooking}
      >
        {isBooking ? (
          <Loader2
            size={16}
            className="animate-spin"
          />
        ) : (
          <CalendarClock size={16} />
        )}
        <span>{isBooking ? "Réservation en cours" : "Réserver"}</span>
      </Button>
    </form>
  );
};
