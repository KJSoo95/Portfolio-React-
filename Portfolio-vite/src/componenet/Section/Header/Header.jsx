import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.opacityImg}></div>
      <h1 className={classes.homeHeading}>Welcome to Jisu Portfolio</h1>
    </>
  );
};

export default Header;
