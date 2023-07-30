import style from "./Footer.module.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiSolidCopyright } from "react-icons/bi";

export const Footer = () => {
  return (
    <>
      <div></div>
      <footer className={style.footer}>
        <div className={style.footerContainer}>
          <div className={style.footerTop}>
            <div>
              <h6 className={style.footerTitle}>Microsoft Store</h6>
              <ul className={style.footerList}>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    About
                  </a>
                </li>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    Careers
                  </a>
                </li>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    Affiliates
                  </a>
                </li>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className={style.footerTitle}>Microsoft Store</h6>
              <ul className={style.footerList}>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    About
                  </a>
                </li>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    Careers
                  </a>
                </li>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    Affiliates
                  </a>
                </li>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className={style.footerTitle}>Microsoft Store</h6>
              <ul className={style.footerList}>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    About
                  </a>
                </li>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    Careers
                  </a>
                </li>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    Affiliates
                  </a>
                </li>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className={style.footerTitle}>Microsoft Store</h6>
              <ul className={style.footerList}>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    About
                  </a>
                </li>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    Careers
                  </a>
                </li>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    Affiliates
                  </a>
                </li>
                <li className={style.footerListItem}>
                  <a href="#" className={style.footerListLink}>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className={style.footerDivide} />
          <div className={style.footerBottom}>
            <span className={style.copyright}>
              {" "}
              <BiSolidCopyright /> 2023 SamCastro
            </span>
            <ul className={style.footerList}>
              <li className={style.footerListItem}>
                <a href="#" className={style.footerListLink}>
                  <BiLogoFacebookCircle color="#666873" size="18px" />
                </a>
              </li>
              <li className={style.footerListItem}>
                <a href="#" className={style.footerListLink}>
                  <BiLogoInstagram color="#666873" size="18px" />
                </a>
              </li>
              <li className={style.footerListItem}>
                <a href="#" className={style.footerListLink}>
                  <BiLogoTwitter color="#666873" size="18px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
