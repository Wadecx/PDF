import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img
          src="https://assets.softr-files.com/applications/057d44a2-d021-4387-a972-0b37531cceee/assets/fb3fe59e-273e-4dd3-b468-1b16809dac25.png"
          alt=""
        />
        <h1>MKBOX</h1>
      </div>

      <div className="rightSide">
        <a href="https://www.marketingbox.fr/" target="_blank">
          Accueil
        </a>
      </div>
    </div>
  );
};

export default Navbar;
