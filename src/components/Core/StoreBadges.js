import React from "react";
/*import styled from "styled-components";
import {
  color,
  background,
  space,
  border,
  typography,
  shadow,
  flexbox,
  layout,
} from "styled-system";*/
import badgeGoogle from "../../assets/image/svg/badge-google.svg";
import badgeApple from "../../assets/image/svg/badge-apple.svg";

/*const BadgeSolid = styled.span`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.41px;
  border-radius: 5px;
  padding: 4px 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  ${color};
  ${background};
  ${border};
  ${space};
  ${typography};
  ${shadow};
  ${flexbox};
  ${layout};
`;*/

const StoreBadges = ({ color = "light", bg = "primary", ...rest }) => {
  return (
    <div className="flex-column">
      <a href="https://apple.co/2H5lURU" target="_blank" rel="noopener noreferrer"><img src={badgeApple} alt="" width="200px" /></a>
      <a href="https://bit.ly/34ZE1kl" target="_blank" rel="noopener noreferrer"><img src={badgeGoogle} alt="" width="200px" /></a>
    </div>
  );
};

export default StoreBadges;