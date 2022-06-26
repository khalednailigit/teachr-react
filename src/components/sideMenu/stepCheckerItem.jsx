import React from "react";

function StepCheckerItem({ listItem, children }) {
  return (
    <li className="sideMenu__stepsChecker--listItem">
      {children}
      <span>{listItem}</span>
    </li>
  );
}

export default StepCheckerItem;
