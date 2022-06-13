import "./sideNav.scss";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";

const SideNav = (props) => {
  return (
    <aside className="side-nav__container">
      <div className="side-nav__topic-container"><h1>Topics</h1></div>
      <nav className="side-nav">
        <ul className="side-nav__list">
          {props.list.map((article) => {
            return (
              <li className="side-nav__item" key={v4()}>
                <NavLink to={`/${article.path}`}>{article.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
export default SideNav;
