import "./sideNav.scss";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";

const SideNav = props => {
  let filteredTopics = props.list;
  if (props.searchTerm) {
    filteredTopics = props.list.filter(topic =>
      topic.title.toLowerCase().includes(props.searchTerm.toLowerCase())
    );
    if (filteredTopics.length === 0) {
      filteredTopics = props.list;
    }
  }

  return (
    <aside className="side-nav__container">
      <div className="side-nav__topic-container">
        <h1>Topics</h1>
      </div>
      <nav className="side-nav">
        <ul className="side-nav__list">
          {filteredTopics.map(article => {
            return (
              <li key={v4()}>
                <NavLink to={`/${article.path}`} className="side-nav__item">
                  {article.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
export default SideNav;
