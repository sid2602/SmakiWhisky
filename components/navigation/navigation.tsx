import Link from "next/link";

import { useState, useRef } from "react";
import {
  faShoppingBag,
  faSearch,
  faBars,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Header,
  Nav,
  LogoContainer,
  NavBtn,
  DropDown,
  SearchPopUp,
} from "./navigation.css.js";
import { useRouter } from "next/router";

import { Navigations, MenuItem } from "types/types";

// import Logo from "public/img/logo.png";

export default function Navigation({ data }: Navigations) {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const [searchModalActive, setSearchModalActive] = useState(false);
  const [searchValue, SetSearchValue] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchValue.length > 0 && router.push(`/${searchValue}`);
    setSearchModalActive(false);
    SetSearchValue("");
  };

  return (
    <>
      <Header>
        <Nav>
          <LogoContainer>
            <Link href="/">
              <a>
                <img src="img/logo.png" />
              </a>
            </Link>
          </LogoContainer>

          <NavBtn>
            <div className={activeMobileMenu ? "navLinks active" : "navLinks"}>
              <ul>
                {data.map((navi) => (
                  <li className="navLink" key={navi.id}>
                    <Link href={`/${navi.slug}`}>
                      <a>
                        {navi.name}
                        {navi.item.length > 0 && (
                          <FontAwesomeIcon icon={faCaretDown} />
                        )}
                      </a>
                    </Link>
                    {navi.item.length > 0 && (
                      <DropDown>
                        <ul>
                          {navi.item.map((it) => (
                            <li className="dropDownLink" key={it.id}>
                              <Link href={`/${it.slug}`}>
                                <a>{it.name}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </DropDown>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="navActions">
              <button onClick={() => setSearchModalActive(true)}>
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

      <SearchPopUp>
        <div className={`container ${searchModalActive && "active"}`}>
          <button
            className="closeBtn"
            onClick={() => setSearchModalActive(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <form onSubmit={handleSubmit}>
            <div className="inputContainer">
              <input
                type="text"
                placeholder="Wyszukaj ..."
                value={searchValue}
                onChange={(e) => SetSearchValue(e.target.value)}
              />
              <p>Wpisz nazwe produktu który chceszy wyszukać</p>
            </div>
          </form>
        </div>
      </SearchPopUp>
    </>
  );
}
