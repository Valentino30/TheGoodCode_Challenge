import { ReactNode } from "react";

export type TodoType = {
  id: string;
  name: string;
  selected: boolean;
  isBeingDeleted: boolean;
  isBeingToggled: boolean;
};
