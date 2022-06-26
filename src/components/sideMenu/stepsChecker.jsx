import CheckFilled from "../svgs/checkFilled";
import StepCheckerItem from "./stepCheckerItem";
import NumberedCircle from "../svgs/numberedCircle";

function StepsChecker(props) {
  return (
    <div className="sideMenu__stepsChecker">
      <ul className="sideMenu__stepsChecker--list">
        <li>...</li>
        <StepCheckerItem listItem="Votre demande">
          <CheckFilled />
        </StepCheckerItem>

        <StepCheckerItem listItem="Nos propositions">
          <NumberedCircle numbering={2} />
        </StepCheckerItem>
        <StepCheckerItem listItem="paiement">
          <NumberedCircle numbering={3} />
        </StepCheckerItem>
      </ul>
    </div>
  );
}

export default StepsChecker;
