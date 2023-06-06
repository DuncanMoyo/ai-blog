import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="py-5">
            This website is a blog about artificial intelligence. We write about
            the latest news and trends in AI, as well as provide tutorials and
            resources for learning about AI.
          </p>
          <p>© Blog of the Future All Rights Reserved</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5" >About</p>
          <p className="my-5" >Privacy Policy</p>
          <p className="my-5" >Terms of Service</p>
        </div>
          {/* THIRD COLUMN */}
          <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5" >123 Main Street, Harare, Zimbabwe</p>
          <p className="my-5" >+263 773 123 456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
