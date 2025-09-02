"use client";

import SignInForm from "@/components/SignInForm";

const Page = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-800 to-indigo-900 flex-1 h-screen">
      <div className="w-auto bg-white rounded-lg p-8 shadow-md ">
        <SignInForm />
      </div>
    </div>
  );
};

export default Page;
