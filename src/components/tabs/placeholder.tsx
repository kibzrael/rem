import TabFooter from "./footer";

interface Props {
  label: string;
}

const TabPlaceholder = ({ label }: Props) => {
  return (
    <section className="relative flex flex-col gap-8 min-h-dashboard">
      <span className="m-auto text-headline-md text-subtitle">{label}</span>

      <TabFooter />
    </section>
  );
};

export default TabPlaceholder;
