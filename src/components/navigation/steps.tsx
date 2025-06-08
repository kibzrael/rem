import { STEPS } from "@/utils/constants";
import { Fragment } from "react/jsx-runtime";
import StepDetails from "./step";

const StepsNavigation = () => {
  return (
    <nav
      role="tabpanel"
      className="flex lg:flex-col gap-1 lg:gap-3 lg:min-h-[min(80vh,50rem)]">
      {STEPS.map((step, i) => (
        <Fragment key={i}>
          {i !== 0 && (
            <div className="flex-1 flex lg:flex-col max-lg:h-10.5 lg:w-14.5 items-center">
              <div
                className={"divider" + (i < 3 ? " divider-active" : "")}></div>
            </div>
          )}
          <StepDetails
            step={step}
            state={i < 2 ? "completed" : i < 3 ? "active" : "disabled"}
          />
        </Fragment>
      ))}
    </nav>
  );
};

export default StepsNavigation;
