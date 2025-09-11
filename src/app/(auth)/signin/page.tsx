"use client";

import SignInForm from "@/components/auth/SignInForm";

const Page = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-theme flex-1 h-screen">
      <div className="w-auto bg-card rounded-lg p-8 shadow-theme border border-theme">
        <SignInForm />
      </div>
    </div>
  );
};

export default Page;
