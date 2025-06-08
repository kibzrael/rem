import { STEPS } from "@/utils/constants";
import { useState, type ReactNode } from "react";
import { defaultOnboardingState, OnboardingContext } from "./onboarding";

interface Props {
  children: ReactNode;
}

const OnboardingProvider = ({ children }: Props) => {
  const [selectedSkip, setSelectedSkip] = useState<number | null>(
    defaultOnboardingState.selectedSkip
  );
  const [step, setCurrentStep] = useState<number>(defaultOnboardingState.step);
  const [maxStep, setMaxStep] = useState<number>(
    defaultOnboardingState.maxStep
  );

  const setStep = (val: number) => {
    console.log("val", val);
    if (val > maxStep) setMaxStep(val);
    console.log("setting");
    setCurrentStep(val < 0 ? 0 : val >= STEPS.length ? STEPS.length - 1 : val);
  };

  return (
    <OnboardingContext.Provider
      value={{
        selectedSkip,
        setSelectedSkip,
        step,
        setStep,
        maxStep,
      }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingProvider;
