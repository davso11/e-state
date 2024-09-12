import { cn } from "@/lib/utils";
import { Loader2, LucideProps } from "lucide-react";

export const ActivityIndicator = ({
  size = 28,
  className,
  ...props
}: LucideProps) => {
  return (
    <Loader2
      size={size}
      className={cn("animate-spin", className)}
      {...props}
    />
  );
};
