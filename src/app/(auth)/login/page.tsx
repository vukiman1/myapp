"use client";

import SignInForm from "@/components/auth/SignInForm";
import { useMe } from "@/hooks/hooks";

const Page = () => {
  const { data } = useMe();
  console.log(data);
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-800 to-indigo-900 flex-1 h-screen">
      <div className="w-auto bg-white rounded-lg p-8 shadow-md ">
        <SignInForm />
      </div>
    </div>
  );
};

export default Page;
