import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

const features = [
  {
    name: "Personal Banking",
    description:
      "Experience seamless management of your personal finances with our comprehensive banking services. Whether you're depositing money for savings, withdrawing funds for everyday expenses, or simply checking your balance, our user-friendly platform ensures a hassle-free banking experience tailored to your needs.",
  },
  {
    name: "Mobile Banking",
    description:
      "Bank conveniently anytime, anywhere with our mobile banking app, compatible with iOS and Android devices. Our mobile platform empowers you to deposit money on the fly, withdraw cash effortlessly, and keep track of your account balance and transactions, all from the palm of your hand.",
  },
  {
    name: "Online Banking",
    description:
      "Gain round-the-clock access to your accounts from the comfort of your home with our robust online banking platform. With online banking, you can initiate transfers, set up direct deposits, and manage your funds with ease. Plus, our intuitive interface allows you to monitor your account activity and financial health effortlessly.",
  },
];
const FeatureDetails = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-6">
      {features.map((feat: any) => (
        <div className="mt-10">
          <div className="flex w-full gap-8 justify-center">
            <div className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {feat?.name}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {feat?.description}
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureDetails;
