export interface OnboardingState {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedSkip: number | null;
  setSelectedSkip: React.Dispatch<React.SetStateAction<number | null>>;
}
