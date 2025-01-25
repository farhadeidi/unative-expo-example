import type { LucideProps } from "lucide-react-native";
import { cssInterop } from "nativewind";

export const createNativeIcon = (icon: React.FC<LucideProps>) => {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
};
