import RegisterForm from "@/components/auth/RegisterForm";

const Page = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-xl p-8">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
