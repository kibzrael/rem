import { useOnboarding } from "@/store/onboarding";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  disabled?: boolean;
}

const TabFooter = ({ disabled, children }: Props) => {
  const { step, setStep, maxStep } = useOnboarding();
  return (
    <div className="sticky bottom-0 right-0 left-0 !mt-0 -m-4 sm:-m-8 lg:-m-12 flex max-lg:flex-col lg:items-center justify-between gap-4 px-6 sm:px-10 py-6 border-t border-default bg-surface-default/60 backdrop-blur-2xl">
      {children || <div></div>}

      <div className="flex gap-4 min-w-[min(80vw,20rem)]">
        <button
          className="flex-1 btn btn-tonal"
          onClick={() => setStep(step - 1)}>
          Back
        </button>
        <button
          className="flex-[3] btn"
          disabled={disabled === undefined ? step >= maxStep : disabled}
          onClick={() => setStep(step + 1)}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default TabFooter;
