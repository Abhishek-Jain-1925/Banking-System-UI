"use client";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import FeatureDetails from "./FeatureDetails";

const BankingFeatures = () => {
  return (
    <div className="py-12 bg-gray-950">
      <div>
        <div className="text-center">
          <h1 className="text-teal-500 font-semibold tracking-wide uppercase text-2xl mb-5">
            Our Banking Features
          </h1>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Facilities that provides the way better Banking
          </p>
        </div>
      </div>
      <FeatureDetails />
      <div className="mt-20 text-center">
        <Link href={"/"}>View All Facilities</Link>
      </div>
    </div>
  );
};

export default BankingFeatures;
