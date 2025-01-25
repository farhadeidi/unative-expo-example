import { useContext } from "react";
import { cssInterop } from "nativewind";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export type VectorIconName = VectorIconIconProps["name"];
export type VectorIconIconProps = React.ComponentProps<typeof Ionicons>;

cssInterop(Ionicons, {
  className: {
    target: "style",
  },
});

export const VectorIcon = ({
  className,
  size = 24,
  ...props
}: VectorIconIconProps) => {
  const textClass = useContext(TextClassContext);

  return (
    <Ionicons
      className={cn("text-foreground", textClass, className)}
      size={size}
      {...props}
    />
  );
};
