export interface OnboardingState {
  step: number;
  setStep: (val: number) => void;
  maxStep: number;
  selectedSkip: number | null;
  setSelectedSkip: (val: number | null) => void;
}
