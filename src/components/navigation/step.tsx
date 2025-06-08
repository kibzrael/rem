import { useOnboarding } from "@/store/onboarding";
import type { Step } from "@/types/navigation";

interface Props {
  step: Step;

  /**
   *  Completed is a step that the user has already visited, and is before the current step.
   *  Current is the step the user is currently viewing.
   *  Active is a step that the user can visit, but is ahead of the current step.
   *  Disabled is a step that the user is not allowed to visit.
   */
  state: "completed" | "current" | "active" | "disabled";
  index: number;
}

const StepDetails = ({ step, state, index }: Props) => {
  const { setStep } = useOnboarding();

  return (
    <div
      role="tab"
      onClick={() => {
        if (state === "disabled") return;
        setStep(index);
      }}
      className={
        "flex max-lg:flex-col items-center gap-2 lg:gap-5 max-sm:flex-0 transition-all" +
        (state === "completed"
          ? " text-primary"
          : state === "current"
          ? " text-primary"
          : state === "active"
          ? " text-default"
          : " text-subtitle cursor-default")
      }>
      <div
        className={
          "p-2 lg:p-3 rounded-full border transition-all" +
          (state === "completed"
            ? " bg-primary text-white border-transparent"
            : state === "current"
            ? " text-primary border-primary"
            : state === "active"
            ? " text-default border-default"
            : " border-subtitle")
        }>
        <step.icon className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
      </div>
      <span className="text-xs sm:text-sm lg:text-xl max-lg:text-center">
        {step.label}
      </span>
    </div>
  );
};

export default StepDetails;
