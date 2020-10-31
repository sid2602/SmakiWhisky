import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";

// ...
const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        ${emotionNormalize}
        html,
        body {
          padding: 2rem 0 0;
          margin: 0;
          background: white;
          /* height: 100%; */
          min-height: 100vh;
          font-family: "Lato", sans-serif;
          /* font-family: 'Source Sans Pro', sans-serif; */
          overflow-x: hidden;
          position: relative;
        }
        body {
          padding-bottom: 500px;
        }

        * {
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
          color: white;
        }

        li {
          list-style-type: none;
        }

        ul {
          padding: 0;
          margin: 0;
        }

        button {
          background: none;
          border: none;
          padding: 0;
          outline: none;
        }
      `}
    />
  </>
);

export default GlobalStyles;
