import { useOnboarding } from "@/store/onboarding";
import type { Skip } from "@/types/skip";
import { SKIPS } from "@/utils/constants";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";
import LoadingIndicator from "../common/loading";
import SkipSizeCard from "../skip/card";
import TabFooter from "./footer";

const ChooseSkipTab = () => {
  const [skips, setSkips] = useState<Skip[]>();

  const { selectedSkip: selectedId } = useOnboarding();
  const selectedSkip = skips?.find((s) => s.id === selectedId);

  const fetchSkips = async () => {
    const response = await fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    );
    if (response.status !== 200) return [];
    const data = await response.json();
    return data as Skip[];
  };

  useEffect(() => {
    fetchSkips().then((data) => {
      if (data.length > 0) setSkips(data);
      else setSkips(SKIPS);
    });
  }, []);

  if (!skips) return <LoadingIndicator />;

  return (
    <section className="@container | flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-headline-lg text-center">Choose Your Skip Size</h1>
        <p className="text-body-lg text-subtitle text-center">
          Select the skip size that best suits your needs
        </p>

        <div className="flex gap-4 items-center px-4 py-3 border border-default rounded-2xl max-w-3xl mx-auto mt-4">
          <Info className="text-subtitle w-4 h-4 lg:w-5 lg:h-5" />
          <span className="flex-1 text-body-sm text-subtitle">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </span>
        </div>
      </div>

      {skips.map((skip) => (
        <SkipSizeCard key={skip.id} skip={skip} />
      ))}

      <TabFooter disabled={!selectedSkip}>
        {selectedSkip ? (
          <div className="flex items-center gap-4 w-full lg:max-w-xs">
            <div className="flex flex-col flex-1">
              <h2 className="text-headline-sm">{selectedSkip.size} Yards</h2>
              <span className="text-body-md text-subtitle">
                {selectedSkip.hire_period_days} day hire period
              </span>
            </div>
            <span className="text-headline-md">
              £{selectedSkip.price_before_vat + selectedSkip.vat}
            </span>
          </div>
        ) : (
          <span className="text-body-lg text-subtitle">
            Please select a skip size
          </span>
        )}
      </TabFooter>
    </section>
  );
};

export default ChooseSkipTab;
