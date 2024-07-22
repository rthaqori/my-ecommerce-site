import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const footer = () => {
  return (
    <footer className="footer relative mt-40 bg-gray-200 pt-40 md:mt-32 md:pt-32">
      <div className="absolute -top-40 left-1/2 w-full -translate-x-1/2 px-6 md:w-4/5 lg:w-3/5">
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-black p-8">
          <span className="text-4xl font-extrabold uppercase text-white">
            Stay upto date about our latest offers
          </span>
          <input
            className="w-full rounded-full bg-white px-6 py-4 text-base font-medium text-black outline-none"
            type="text"
            placeholder="enter your email address"
          />
          <button className="w-full rounded-full bg-gray-100 p-4 text-lg font-semibold">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      <div className="flex h-fit w-full flex-col p-6 md:flex-row md:gap-16 md:px-16">
        <div className="flex min-h-full w-full flex-col gap-3 md:w-1/4">
          <span className="text-5xl font-extrabold">rthaqori</span>
          <p className="text-base text-gray-500">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div>logossss</div>
        </div>
        <div className="flex flex-wrap gap-y-6 py-6 md:w-3/4">
          <div className="w-1/2 md:w-1/4">
            <h4 className="mb-4 text-xl font-medium uppercase text-gray-700">
              company
            </h4>
            <ul className="flex flex-col gap-2 text-base text-gray-500">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Works</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 md:w-1/4">
            <h4 className="mb-4 text-xl font-medium uppercase text-gray-700">
              help
            </h4>
            <ul className="flex flex-col gap-2 text-base text-gray-500">
              <li>
                <a href="">Costumer Support</a>
              </li>
              <li>
                <a href="">Delivery Details</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 md:w-1/4">
            <h4 className="mb-4 text-xl font-medium uppercase text-gray-700">
              faq
            </h4>
            <ul className="flex flex-col gap-2 text-base text-gray-500">
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Manage Deliveries</a>
              </li>
              <li>
                <a href="">Orders</a>
              </li>
              <li>
                <a href="">Payment</a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 md:w-1/4">
            <h4 className="mb-4 text-xl font-medium uppercase text-gray-700">
              resources
            </h4>
            <ul className="flex flex-col gap-2 text-base text-gray-500">
              <li>
                <a href="">Free eBook</a>
              </li>
              <li>
                <a href="">Development Tutorial</a>
              </li>
              <li>
                <a href="">How to - Blog</a>
              </li>
              <li>
                <a href="">youtobe Playlist</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <span className="text-sm font-medium text-gray-500">
          rthaqori &copy;. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default footer;
