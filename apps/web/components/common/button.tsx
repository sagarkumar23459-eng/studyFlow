import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type AppButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
  className?: string;
};

export function AppButton({
  children,
  onClick,
  variant = "default",
  className,
}: AppButtonProps) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  );
}