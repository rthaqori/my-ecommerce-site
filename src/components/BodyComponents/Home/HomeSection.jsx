import React from "react";
import frontImg from "../../../assets/trendy-fashionable-couple-posing.png";
import Card from "../../Card";
import casualWear from "../../../assets/casualWare.png";
import gymWear from "../../../assets/gymWare.png";
import formalWear from "../../../assets/formalWare.png";
import partyWear from "../../../assets/partyWare.png";

const HomeSection = () => {
  return (
    <section>
      <section className="overflow-hidden bg-gray-100 px-4 pt-8 md:flex md:h-full md:w-full md:px-12">
        <div className="md:w-1/2 md:p-12 md:pb-0 md:pr-8 lg:p-16 lg:pb-16">
          <h1 className="mb-2 text-5xl font-black uppercase md:mb-4">
            find clothes that matches your style
          </h1>
          <p className="mb-4 text-sm font-normal text-gray-400 md:mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="mb-4 w-full rounded-full bg-black p-3 text-lg text-white hover:bg-gray-800 md:mb-10 md:w-56 md:font-bold">
            Shop Now
          </button>
        </div>
        {/* <div className="flex justify-start md:relative md:-left-16 md:h-full md:w-1/2 md:scale-110 md:pr-0">
          <img
            className="h-screen-50 lg:h-screen-50 relative right-10 border-red-400 object-cover"
            src={frontImg}
            alt="trendy-fashionable-couple-posing"
          />
        </div> */}
        <div className="h-100 md:h-screen-50 lg:h-screen-75 relative w-full md:w-1/2">
          <img
            className="h-screen-50 lg:scale-200 absolute -left-6 bottom-0 object-cover md:scale-125 lg:bottom-20"
            src={frontImg}
            alt="trendy-fashionable-couple-posing"
          />
        </div>
      </section>

      <div className="flex h-16 max-w-full overflow-hidden bg-black">
        <div className="flex h-16 animate-loop-scroll items-center gap-10 bg-black px-2">
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
        </div>
        <div
          aria-hidden="true"
          className="flex h-16 animate-loop-scroll items-center gap-10 bg-black px-2"
        >
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
          <span className="font-bolt text-3xl text-white">Logo</span>
        </div>
      </div>

      <section className="flex flex-col items-center p-8 pr-0 md:pr-8">
        <h2 className="mb-4 p-4 text-4xl font-black text-black md:p-0">
          New Arrivals
        </h2>
        <div className="no-scrollbar mb-4 flex h-fit w-full gap-4 overflow-x-scroll md:mb-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button className="w-full rounded-full border border-gray-500 p-3 hover:bg-gray-200 md:w-32">
          View All
        </button>
      </section>

      <div className="mt-8 w-full px-6 md:px-10">
        <hr className="w-full border border-gray-500" />
      </div>

      <section className="flex flex-col items-center p-8 pr-0 md:pr-8">
        <h2 className="mb-4 p-4 text-4xl font-black text-black md:p-0">
          New Arrivals
        </h2>
        <div className="no-scrollbar mb-4 flex h-fit w-full gap-4 overflow-x-scroll md:mb-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button className="w-full rounded-full border border-gray-500 p-3 hover:bg-gray-200 md:w-32">
          View All
        </button>
      </section>

      <section className="p-4 md:p-16">
        <div className="rounded-3xl bg-gray-200 p-8 lg:px-12">
          <h2 className="mb-4 items-center p-4 text-center text-3xl font-black uppercase text-black">
            Browse by dress style
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <div className="relative h-60 w-full overflow-hidden rounded-3xl border bg-white text-gray-700 md:w-2/5">
                <span className="absolute right-10 top-6 text-4xl font-bold">
                  Casual
                </span>
                <img
                  className="h-60 w-full object-contain"
                  src={casualWear}
                  alt="casual-ware"
                />
              </div>
              <div className="relative h-60 w-full overflow-hidden rounded-3xl border bg-white md:w-3/5">
                <span className="absolute right-10 top-6 text-4xl font-bold text-gray-700">
                  Gym
                </span>
                <img
                  className="h-60 w-full object-contain"
                  src={gymWear}
                  alt="gym-ware"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <div className="relative h-60 w-full overflow-hidden rounded-3xl border bg-white text-gray-700 md:w-3/5">
                <span className="absolute right-10 top-6 text-4xl font-bold">
                  Formal
                </span>
                <img
                  className="h-60 w-full object-contain"
                  src={formalWear}
                  alt="formal-ware"
                />
              </div>
              <div className="relative h-60 w-full overflow-hidden rounded-3xl border bg-white text-gray-700 md:w-2/5">
                <span className="absolute right-10 top-6 text-4xl font-bold">
                  Party
                </span>
                <img
                  className="h-60 w-full object-contain"
                  src={partyWear}
                  alt="party-ware"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeSection;
