const style = {
  color: "white",
  display: "flex",
  height: "80px",
  width: "100vw",
  background: "#333",
  justifyContent: "space around",
  alignItems: "center",
};

const Header = () => {
  return (
    <header style={style}>
      {/* <img src="./lodo/logo2024" alt="logo"></img> */}
      <ul className="menu font-sans flex flex-row gap-40 justify-end">
        <li>home</li>
        <li>service</li>
        <li>home</li>
      </ul>
      <img src="/images/img1.jpeg" />;
    </header>
  );
};
export default Header;
