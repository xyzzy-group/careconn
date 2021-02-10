import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <>
      <footer className="max-w-full pt-2 px-4 sm:px-6 border-t-2 border-gray-100 bg-gray-50 flex flex-col sm:flex-row justify-between items-center absolute bottom-0 right-0 left-0">
        <div className="pb-2 text-base font-medium text-gray-500 text-center sm:text-left">
          <div>Care Connection</div>
          <div>215-331-3200</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="mr-5">
            <StaticImage
              placeholder="blurred"
              src="https://dy7glz37jgl0b.cloudfront.net/home/hipaa.png?v=26"
              alt="HIPPA"
            />
          </div>
          <div className="">
            <StaticImage
              placeholder="blurred"
              src="../images/pt_verified.png"
              alt="Pshchology Today Verified"
              height={60}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
