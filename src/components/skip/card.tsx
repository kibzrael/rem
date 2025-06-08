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
        "group relative | flex max-lg:flex-col p-2 lg:p-4 lg:items-center gap-4 lg:gap-9 rounded-2xl border hover:border-primary hover:-translate-y-1 transition-all" +
        (selected
          ? " bg-surface-highlight border-2 border-primary"
          : " bg-surface-secondary border-transparent")
      }
      onClick={() => setSelected(!selected)}>
      <img
        src={skip.image}
        alt="Skip Image"
        className="w-full lg:max-w-[12rem] h-auto aspect-[3] lg:aspect-[3/2] rounded-2xl object-cover"
      />
      <div className="flex-1 flex flex-col gap-4 p-4">
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
        <div className="flex gap-3 lg:gap-6 flex-wrap">
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
            <CircleCheckBig className="w-7 h-7 text-primary max-lg:bg-white rounded-full ml-auto max-lg:absolute right-4 top-4" />
          ) : (
            <Circle className="w-7 h-7 text-white lg:text-subtitle group-hover:text-primary transition-all ml-auto max-lg:absolute right-4 top-4" />
          )}
        </div>
      </div>
    </article>
  );
};

export default SkipSizeCard;
