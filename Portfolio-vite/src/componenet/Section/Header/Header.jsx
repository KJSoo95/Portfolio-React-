import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={classes.opacityImg}></div>
      <h1 className={classes.homeHeading}>Welcome to Jisu Portfolio</h1>
    </header>
  );
};

export default Header;
