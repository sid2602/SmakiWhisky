import styled from "@emotion/styled";

export const Header = styled.header`
  position: fixed;
  top: 0px;
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  z-index: 1000;
`;

export const Nav = styled.nav`
  max-width: 1024px;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  font-family: "Source Sans Pro", sans-serif;
`;

export const LogoContainer = styled.div`
  flex: 1;
  max-height: 2.7rem;
  img {
    height: 2.7rem;
    padding: 0.2rem 0;
  }
`;

export const NavBtn = styled.div`
  flex: 3;
  display: flex;

  .navLinks {
    flex: 2;

    > ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .navLink {
      position: relative;
    }

    .navLink > a {
      line-height: 3rem;
      font-size: 0.85rem;
      padding: 0 0.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: 0.5s;
    }

    .navLink > a > svg {
      margin-left: 0.2rem;
    }

    .navLink:hover > div {
      opacity: 1;
      pointer-events: auto;
      transform: translate(0, 0);
    }
  }

  .navActions {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    a,
    button {
      display: inline-block;
      color: white;
      padding: 0.5rem 1rem;
      margin: 0 0.2rem;
      cursor: pointer;
    }

    .hamburger {
      display: none;
    }
  }

  @media (max-width: 920px) {
    .navLinks {
      /* display: none; */
      position: fixed;
      height: calc(100vh - 2rem);
      left: 0%;
      top: 2.7rem;
      width: 100%;
      background-color: ${(props) => props.theme.colors.lighterBlack};
      transform: translateX(100%);
      transition: 0.2s;

      > ul {
        flex-direction: column;
      }

      .navLink > a {
        line-height: 1;
        padding: 1.6rem 2rem;
      }

      .navLink:hover > a {
        transform: scale(1);
        background-color: ${(props) => props.theme.colors.black};
      }

      .navLink {
        width: 100%;
      }
    }

    .navActions {
      justify-content: flex-end;

      .hamburger {
        display: block;
        transition: 0.2s;
      }

      .active {
        transform: rotate(90deg);
      }
    }

    .navLink > a > svg {
      transform: rotate(-90deg);
      transition: 0.2s;
    }

    .navLink:hover > div {
      display: block;
    }

    .navLink:hover > a > svg {
      transform: rotate(0);
    }

    .active {
      transform: translate(0);
    }
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 100%;
  width: 160px;
  left: 0;
  transform: translateY(10px);
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;

  ul {
    position: relative;
  }

  .dropDownLink > a {
    display: flex;
    background-color: ${(props) => props.theme.colors.black};
    color: white;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .arrow {
    position: absolute;
    top: -10px;
    left: 32px;
  }

  .arrow > svg {
    color: white;
    transform: rotate(180deg);
  }

  @media (max-width: 920px) {
    position: initial;
    top: initial;
    left: initial;
    transform: initial;
    opacity: 1;
    pointer-events: auto;
    width: 100%;
    padding: 0;
    background-color: ${(props) => props.theme.colors.black};
    display: none;

    .dropDownLink > a {
      background-color: transparent;
      border-bottom: none;
      padding: 1.2rem 2rem 1.2rem 4rem;
    }

    .dropDownLink:hover > a {
      background-color: ${(props) => props.theme.colors.lighterBlack};
    }

    .arrow {
      display: none;
    }
  }
`;

export const SearchPopUp = styled.div`
  .container.active {
    left: 0;
  }

  .container {
    top: 0;
    position: fixed;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    left: 100%;
    background: white;
    transition: 0.3s ease-in-out;
  }

  .closeBtn {
    cursor: pointer;
    position: absolute;
    right: 10%;
    top: 10%;
    transform: translate(-50%, -50%);
    svg {
      font-size: 2.5rem;
      color: ${(props) => props.theme.colors.gray};
      transition: 0.2s ease-in-out;
    }

    :hover > svg {
      transform: scale(1.2);
    }
  }

  .inputContainer {
    position: absolute;
    margin: 0 15%;
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    font-size: 5rem;
    border: none;
    outline: none;

    color: ${(props) => props.theme.colors.lighterBlack};
    ::placeholder {
      color: ${(props) => props.theme.colors.lighterBlack};
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${(props) => props.theme.colors.lighterBlack};
    }

    ::-ms-input-placeholder {
      color: ${(props) => props.theme.colors.lighterBlack};
    }
  }

  p {
    font-size: 1.5rem;
    font-family: "Source Sans Pro", sans-serif;
  }

  @media (max-width: 1024px) {
    input {
      font-size: 4rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    input {
      font-size: 2.5rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
