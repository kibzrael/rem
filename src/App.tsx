import StepsNavigation from "./components/navigation/steps";
import TabPlaceholder from "./components/tabs/placeholder";
import ChooseSkipTab from "./components/tabs/skips";
import { OnboardingContext } from "./store/onboarding";
import OnboardingProvider from "./store/onboardingProvider";
import { STEPS } from "./utils/constants";

function App() {
  return (
    <OnboardingProvider>
      <div className="container | flex max-lg:flex-col lg:items-start">
        <StepsNavigation />
        <main className="flex-1 bg-surface-default lg:m-8 !mb-0 p-4 sm:p-8 lg:p-12 rounded-t-4xl">
          <OnboardingContext.Consumer>
            {({ step }) =>
              step === 2 ? (
                <ChooseSkipTab />
              ) : (
                <TabPlaceholder label={STEPS[step].label} />
              )
            }
          </OnboardingContext.Consumer>
        </main>
      </div>
    </OnboardingProvider>
  );
}

export default App;
