import { useState, type ReactNode } from "react";
import { defaultOnboardingState, OnboardingContext } from "./onboarding";

interface Props {
  children: ReactNode;
}

const OnboardingProvider = ({ children }: Props) => {
  const [selectedSkip, setSelectedSkip] = useState<number | null>(
    defaultOnboardingState.selectedSkip
  );
  const [step, setStep] = useState<number>(defaultOnboardingState.step);

  return (
    <OnboardingContext.Provider
      value={{ selectedSkip, setSelectedSkip, step, setStep }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingProvider;
