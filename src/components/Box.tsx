/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ReactNode } from "react";
import { useThemeState } from "../context/ThemeContext";
import { getTheme } from "../utils";

/**
 * Types
 */
export interface BoxProps {
  text: "RICH TEXT" | "MARKDOWN";
  children: ReactNode[];
}

/**
 * Component
 */
const Box = (props: BoxProps) => {
  const { text, children } = props;
  const { mode } = useThemeState();

  const theme = getTheme(mode);

  return (
    <div css={[styles.box, { backgroundColor: theme.background, boxShadow: `15px 15px 0 ${theme.fadedBackground}` }]}>
      <div css={styles.btnContainer} style={{ justifyContent: text === "MARKDOWN" ? "flex-end" : "" }}>
        {children[0]}
      </div>
      {children.slice(1, children.length)}
      <p css={[styles.sidebar, { color: theme.text }]}>{text}</p>
    </div>
  );
};

/**
 * Styles
 */
const styles = {
  box: css({
    position: "relative",
    fontSize: "1.2em",
    flexBasis: "100%",
    height: "90vh",
    margin: "50px"
  }),

  btnContainer: css({
    borderBottom: "2px solid #e3e3e3",
    display: "flex",
    height: "40px"
  }),

  sidebar: css({
    position: "absolute",
    bottom: "0px",
    left: "-50px",
    transform: "rotateZ(180deg)",
    writingMode: "vertical-lr",
    fontSize: "1.5em"
  })
};

export default Box;
