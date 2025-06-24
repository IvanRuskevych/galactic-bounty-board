import { Button } from "@mui/material";

interface BountyCardActionButtonProps {
  onClick?: () => void;
  label: string;
  color?: "primary" | "success" | "warning" | "error";
  show?: boolean;
}

export const BountyCardActionButton = ({
  onClick,
  label,
  color = "primary",
  show = true,
}: BountyCardActionButtonProps) => {
  if (show) return null;
  
  return (
    <Button size="small" color={color} onClick={onClick}>
      {label}
    </Button>
  );
};
