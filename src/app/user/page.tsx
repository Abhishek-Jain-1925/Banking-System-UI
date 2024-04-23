import { DepositCard } from "@/components/DepositCard";
import { ViewBalanceCard } from "@/components/ViewBalance";
import { WithdrawCard } from "@/components/WithdrawCard";
import React from "react";

const UserProfile = () => {
  return (
    <div className="flex flex-row justify-center items-center w-200">
      <div className="p-4">
        <DepositCard />
      </div>
      <div className="p-4">
        <WithdrawCard />
      </div>
      <div className="p-4">
        <ViewBalanceCard />
      </div>
    </div>
  );
};

export default UserProfile;
