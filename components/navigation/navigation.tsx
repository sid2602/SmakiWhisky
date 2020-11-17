import Link from "next/link";

import { useState, useEffect } from "react";
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

import { Navigations, Product } from "types/types";

import { useCart } from "components/cart";

type Props = {
  logo: string;
};

export default function Navigation({ data, logo }: Props & Navigations) {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [searchModalActive, setSearchModalActive] = useState(false);
  const [searchValue, SetSearchValue] = useState("");
  const [quantityOfProducts, setQuantityOfProducts] = useState(0);
  const router = useRouter();

  const products: Product[] = useCart();

  useEffect(() => {
    if (products.length > 0) {
      let quantity = 0;

      products.forEach((product) => {
        quantity += product.quantity!;
      });
      setQuantityOfProducts(quantity);
    }
  }, [products]);

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
                <img src={process.env.API_URL + logo} />
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
              <Link href="/cart">
                <a>
                  <FontAwesomeIcon icon={faShoppingBag} /> ({" "}
                  {quantityOfProducts} )
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
