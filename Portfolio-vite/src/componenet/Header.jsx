import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div class={classes.opacityImg}></div>
      <div class={classes.homeHeading}>Welcome to Jisu's Portfolio</div>
    </>
  );
};

export default Header;
