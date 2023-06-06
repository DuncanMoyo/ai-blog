import { Card } from ".";

type Props = {};

const Other = (props: Props) => {
  return (
    <section>
      <hr className="border-1" />
      {/* HEADER */}
      <p className="font-bold text-2xl my-8 ">Other Trending Posts</p>
      <div className="sm:grid grid-cols-2 gap-16">
        <Card imageHeight="h-80" className="bg-wh-500 mt-5 sm:mt-0" />
        <Card imageHeight="h-80" className="bg-wh-500 mt-5 sm:mt-0" />
        <Card imageHeight="h-80" className="bg-wh-500 mt-5 sm:mt-0" />
        <Card imageHeight="h-80" className="bg-wh-500 mt-5 sm:mt-0" />
      </div>
    </section>
  );
};

export default Other;
