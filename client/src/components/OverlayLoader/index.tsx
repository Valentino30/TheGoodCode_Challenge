import { ReactNode } from "react";
import { StyledOverlayLoader } from "./styles";

type OverlayLoaderProps = {
  active: boolean;
  children: ReactNode;
};

export default function OverlayLoader({
  active,
  children,
}: OverlayLoaderProps) {
  return (
    <StyledOverlayLoader active={active} classNamePrefix="OverlayLoader_">
      {children}
    </StyledOverlayLoader>
  );
}
