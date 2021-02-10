import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <div>
        <StaticImage
          className="absolute top-16 sm:top-20 left-0 w-full h-96 -z-10"
          placeholder="blurred"
          src="../images/banner1.jpg"
          alt="Banner"
        />
        <section className="relative h-96 z-10 p-5 text-white font-bold text-4xl flex justify-center items-center">
          <span className="p-4 bg-purple-500 bg-opacity-50 mb-8 rounded">YOUR PATH TO WELLNESS</span>
        </section>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="relative">
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-10">
            <p className="text-white font-bold text-2xl px-4 py-3 bg-gray-900 bg-opacity-50 rounded capitalize">
              anxiety
            </p>
          </div>
          <StaticImage
            aspectRatio={3 / 2}
            className="w-full rounded"
            placeholder="blurred"
            src="../images/anxiety1.jpg"
            alt="anxiety"
          />
        </div>

        <div className="relative">
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-10">
            <p className="text-white font-bold text-2xl px-4 py-3 bg-gray-900 bg-opacity-50 rounded capitalize">
              depression
            </p>
          </div>
          <StaticImage
            aspectRatio={3 / 2}
            className="w-full rounded"
            placeholder="blurred"
            src="../images/depression1.jpg"
            alt="depression"
          />
        </div>

        <div className="relative">
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-10">
            <p className="text-white font-bold text-2xl px-4 py-3 bg-gray-900 bg-opacity-50 rounded capitalize">
              gambling
            </p>
          </div>
          <StaticImage
            aspectRatio={3 / 2}
            className="w-full rounded"
            placeholder="blurred"
            src="../images/gambling1.jpg"
            alt="gambling"
          />
        </div>

        <div className="relative">
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-10">
            <p className="text-white font-bold text-2xl px-4 py-3 bg-gray-900 bg-opacity-50 rounded capitalize">
              grief
            </p>
          </div>
          <StaticImage
            aspectRatio={3 / 2}
            className="w-full rounded"
            placeholder="blurred"
            src="../images/grief1.jpg"
            alt="grief"
          />
        </div>

        <div className="relative">
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-10">
            <p className="text-white font-bold text-2xl px-4 py-3 bg-gray-900 bg-opacity-50 rounded capitalize">
              marriage
            </p>
          </div>
          <StaticImage
            aspectRatio={3 / 2}
            className="w-full rounded"
            placeholder="blurred"
            src="../images/marriage1.jpg"
            alt="marriage"
          />
        </div>

        <div className="relative">
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-10">
            <p className="text-white font-bold text-2xl px-4 py-3 bg-gray-900 bg-opacity-50 rounded capitalize">
              parenting
            </p>
          </div>
          <StaticImage
            aspectRatio={3 / 2}
            className="w-full rounded"
            placeholder="blurred"
            src="../images/parenting1.jpg"
            alt="parenting"
          />
        </div>

        <div className="relative">
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-10">
            <p className="text-white font-bold text-2xl px-4 py-3 bg-gray-900 bg-opacity-50 rounded capitalize">
              stress
            </p>
          </div>
          <StaticImage
            aspectRatio={3 / 2}
            className="w-full rounded"
            placeholder="blurred"
            src="../images/stress1.jpg"
            alt="stress"
          />
        </div>

        <div className="relative">
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-10">
            <p className="text-white font-bold text-2xl px-4 py-3 bg-gray-900 bg-opacity-50 rounded capitalize">
              and more...
            </p>
          </div>
          <StaticImage
            aspectRatio={3 / 2}
            className="w-full rounded"
            placeholder="blurred"
            src="../images/andmore1.jpg"
            alt="And more..."
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
