import { BadgeCheck, TriangleAlert } from "lucide-react";

interface Props {
  state: boolean;
  trueLabel: string;
  falseLabel: string;
}

const SkipTag = ({ state, trueLabel, falseLabel }: Props) => {
  return (
    <div className={"chip" + (state ? " text-success" : " text-warning")}>
      {state ? <BadgeCheck /> : <TriangleAlert />}
      <span>{state ? trueLabel : falseLabel}</span>
    </div>
  );
};

export default SkipTag;
