import classes from "./Layout.module.css"

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <header>
        <h1>Random Meal</h1>
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
