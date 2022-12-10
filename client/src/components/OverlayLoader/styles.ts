import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay-ts";

export const StyledOverlayLoader = styled(LoadingOverlay)`
  .OverlayLoader_overlay {
    background: #242424;
  }
  &.OverlayLoader_wrapper--active {
    overflow: hidden;
  }
`;
