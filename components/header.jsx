const style = {
  color: "white",
  display: "flex",
  height: "80px",
  background: "#333",
  justifyContent: "space around",
  alignItems: "center",
};

const Header = () => {
  return (
    <header style={style}>
      <img src="./lodo/logo2024" alt="logo"></img>
      <ul className="menu">
        <li>home</li>
        <li>service</li>
        <li>home</li>
      </ul>
    </header>
  );
};
export default Header;
