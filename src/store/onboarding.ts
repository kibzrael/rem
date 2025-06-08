import type { OnboardingState } from "@/types/onboarding";
import { createContext, useContext } from "react";

export const defaultOnboardingState: OnboardingState = {
  step: 3,
  setStep: () => {},
  selectedSkip: null,
  setSelectedSkip: () => {},
};

export const OnboardingContext = createContext<OnboardingState>(
  defaultOnboardingState
);

export function useOnboarding() {
  return useContext(OnboardingContext);
}
