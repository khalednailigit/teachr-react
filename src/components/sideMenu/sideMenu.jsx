import StepsChecker from "./stepsChecker";

function SideMenu({ children }) {
  return (
    <div className="sideMenu">
      <img src="/assets/logo.png" alt="Logo" className="sideMenu__logo" />
      <StepsChecker />
      {children}
      <img
        src="https://www.teachr.fr/assets/images/Flash.png?v=47b452b22c"
        alt="Image"
        className="sideMenu__picture"
      />
    </div>
  );
}

export default SideMenu;
