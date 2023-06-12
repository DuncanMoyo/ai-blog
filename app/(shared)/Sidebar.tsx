import Image from "next/image";
import { SocialLinks, Subscribe } from ".";
import Ad2 from "public/assets/ad-2.png";
import AboutProfile from "public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-sm font-bold text-center">
        SUBSCRIBE and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <Image
        className="hidden md:block my-8 w-full"
        style={{ objectFit: "cover" }}
        alt="advert-2"
        src={Ad2}
        width={500}
        height={1000}
        placeholder="blur"
      />
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          style={{ width: "500px", height: "250px", objectFit: "cover" }}
          alt="about-profile"
          src={AboutProfile}
          placeholder="blur"
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Judith Epstein
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        voluptatem labore minima aliquid magni fugiat inventore, cumque ab,
        mollitia nesciunt sit consectetur eligendi enim ut tenetur voluptates
        modi illum accusamus?
      </p>
    </section>
  );
};

export default Sidebar;
