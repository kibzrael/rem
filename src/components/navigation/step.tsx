import type { Step } from "@/types/navigation";

interface Props {
  step: Step;
  state: "completed" | "active" | "disabled";
}

const StepDetails = ({ step, state }: Props) => {
  return (
    <div
      role="tab"
      className={
        "flex max-lg:flex-col items-center gap-2 lg:gap-5 max-sm:flex-0 transition-all" +
        (state === "completed"
          ? " text-primary"
          : state === "active"
          ? " text-default"
          : " text-subtitle cursor-default")
      }>
      <div
        className={
          "p-2 lg:p-3 rounded-full border border-subtitle transition-all" +
          (state === "completed"
            ? " bg-primary text-white border-transparent"
            : state === "active"
            ? " text-default bg-surface-highlight"
            : "")
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
