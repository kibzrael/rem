import StepsNavigation from "./components/navigation/steps";
import ChooseSkipTab from "./components/tabs/skips";

function App() {
  return (
    <div className="container | flex max-lg:flex-col lg:items-start">
      <StepsNavigation />
      <main className="flex-1 bg-surface-default lg:m-8 !mb-0 p-4 sm:p-8 lg:p-12 rounded-t-4xl">
        <ChooseSkipTab />
      </main>
    </div>
  );
}

export default App;
