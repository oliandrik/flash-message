import { Bubbles } from "Bubbles";
import { Union } from "Union";

import { FlashProps } from "./Flash.types";

export const FlashComponent: React.FC<FlashProps> = ({ icon, variant }) => {
  return (
    <div>
      <Union icon={icon} variant={variant} />
      <Bubbles />
    </div>
  );
};

FlashComponent.displayName = "Flash";
