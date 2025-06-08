import type { OnboardingState } from "@/types/onboarding";
import { createContext, useContext } from "react";

export const defaultOnboardingState: OnboardingState = {
  step: 2,
  setStep: () => {},
  maxStep: 2,
  selectedSkip: null,
  setSelectedSkip: () => {},
};

export const OnboardingContext = createContext<OnboardingState>(
  defaultOnboardingState
);

export function useOnboarding() {
  return useContext(OnboardingContext);
}
