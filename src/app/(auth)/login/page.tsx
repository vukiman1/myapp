"use client";

import SignInForm from "@/components/auth/SignInForm";
import { useMe } from "@/hooks/hooks";

const Page = () => {
  const { data } = useMe();
  console.log(data);

  return (
    <div className="flex justify-center items-center bg-gradient-theme flex-1 h-screen">
      <div className="w-auto bg-card rounded-lg p-8 shadow-theme border border-theme">
        <SignInForm />
      </div>
    </div>
  );
};

export default Page;
