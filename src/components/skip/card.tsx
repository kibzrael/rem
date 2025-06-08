import { Circle, CircleCheckBig } from "lucide-react";
import { useState } from "react";
import type { Skip } from "../../types/skip";
import SkipTag from "./tag";

interface Props {
  skip: Skip;
}

const SkipSizeCard = ({ skip }: Props) => {
  // TODO: switch to useContext
  const [selected, setSelected] = useState(false);
  return (
    <article
      role="radio"
      className={
        "group relative | flex @max-xl:flex-col p-2 @4xl:p-4 @xl:items-center gap-4 @4xl:gap-9 rounded-2xl border hover:border-primary hover:-translate-y-1 transition-all" +
        (selected
          ? " bg-surface-highlight border-2 border-primary"
          : " bg-surface-secondary border-transparent")
      }
      onClick={() => setSelected(!selected)}>
      <img
        src={`/images/skip-${skip.size}.webp`}
        alt="Skip Image"
        className="w-full @xl:max-w-[9rem] @4xl:max-w-[12rem] h-auto aspect-[3] @xl:aspect-[3/2] rounded-2xl object-cover"
      />
      <div className="flex-1 flex flex-col gap-4 p-2 @4xl:p-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col flex-1">
            <h2 className="text-headline-sm">{skip.size} Yards</h2>
            <span className="text-body-md text-subtitle">
              {skip.hire_period_days} day hire period
            </span>
          </div>
          <span className="text-headline-md">
            £{skip.price_before_vat + skip.vat}
          </span>
        </div>
        <div className="flex gap-3 @4xl:gap-x-6 flex-wrap">
          <SkipTag
            state={skip.allowed_on_road}
            trueLabel="Allowed on the road"
            falseLabel="Not allowed on the road"
          />
          <SkipTag
            state={skip.allows_heavy_waste}
            trueLabel="Allows heavy waste"
            falseLabel="No heavy waste"
          />
          {selected ? (
            <CircleCheckBig className="w-7 h-7 text-primary @max-xl:bg-white rounded-full ml-auto @max-xl:absolute right-4 top-4" />
          ) : (
            <Circle className="w-7 h-7 text-white @xl:text-subtitle group-hover:text-primary transition-all ml-auto @max-xl:absolute right-4 top-4" />
          )}
        </div>
      </div>
    </article>
  );
};

export default SkipSizeCard;
