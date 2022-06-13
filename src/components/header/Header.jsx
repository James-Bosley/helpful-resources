import logo from "../../assets/icons/logo.jpg";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__icon-container">
          <img src={logo} alt="Logo" className="header__icon" />
        </div>
        <p className="header__title">Synapse - Helpful Resources</p>
      </div>
    </div>
  );
};
export default Header;
