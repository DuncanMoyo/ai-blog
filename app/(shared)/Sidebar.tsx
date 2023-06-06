import { SocialLinks, Subscribe } from ".";

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
      <div className="bg-wh-900 my-8">Advert Images</div>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="bg-wh-900 my-8">Profile Image</div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Geoffery Epstein
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
