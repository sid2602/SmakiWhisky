import Link from "next/link";
import { useState } from "react";
import {
  faShoppingBag,
  faSearch,
  faBars,
  faCaretDown,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Header,
  Nav,
  LogoContainer,
  NavBtn,
  DropDown,
} from "./navigation.css.js";

export default function Navigation() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  return (
    <Header>
      <Nav>
        <LogoContainer>
          <img src="img/logo.png" />
        </LogoContainer>
        <NavBtn>
          {/* ACITVE */}
          <div className={activeMobileMenu ? "navLinks active" : "navLinks"}>
            <ul>
              <li className="navLink">
                <Link href="">
                  <a>Whiskey Amerykanska</a>
                </Link>
              </li>
              <li className="navLink">
                <Link href="">
                  <a>
                    Whisky Szkocka <FontAwesomeIcon icon={faCaretDown} />
                  </a>
                </Link>
                <DropDown>
                  <ul>
                    <li className="dropDownLink">
                      <Link href="#">
                        <a>Blended whisky</a>
                      </Link>
                    </li>
                    <li className="dropDownLink">
                      <Link href="#">
                        <a>Single Malt whisky</a>
                      </Link>
                    </li>
                    <li className="dropDownLink">
                      <Link href="#">
                        <a>Blended Malt whisky</a>
                      </Link>
                    </li>
                    <div className="arrow">
                      <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                  </ul>
                </DropDown>
              </li>
              <li className="navLink">
                <Link href="">
                  <a>Whiskey Irlandska</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navActions">
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <Link href="#">
              <a>
                <FontAwesomeIcon icon={faShoppingBag} />
              </a>
            </Link>
            <button
              className={activeMobileMenu ? "hamburger active" : "hamburger"}
              onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </NavBtn>
      </Nav>
    </Header>
  );
}
