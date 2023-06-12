import { Post } from "@prisma/client";
import { Card } from ".";

type Props = {
  otherPosts: Array<Post>
};

const Other = ({otherPosts}: Props) => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />
      {/* HEADER */}
      <p className="font-bold text-2xl my-8 ">Other Trending Posts</p>
      <div className="sm:grid grid-cols-2 gap-16">
        <Card post={otherPosts[0]} imageHeight="h-80" className="bg-wh-500 mt-5 sm:mt-0" />
        <Card post={otherPosts[1]} imageHeight="h-80" className="bg-wh-500 mt-5 sm:mt-0" />
        <Card post={otherPosts[2]} imageHeight="h-80" className="bg-wh-500 mt-5 sm:mt-0" />
        <Card post={otherPosts[3]} imageHeight="h-80" className="bg-wh-500 mt-5 sm:mt-0" />
      </div>
    </section>
  );
};

export default Other;
