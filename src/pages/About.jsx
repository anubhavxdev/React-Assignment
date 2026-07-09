import { useLocation, Link } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const submittedData = location.state;

  return (
    <div className="min-h-screen bg-[#0d0d0d] px-3 py-4 text-white sm:px-4 sm:py-8">
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-zinc-800 bg-[#171717] p-4 shadow-xl sm:p-6">
        <h1 className="text-2xl font-bold sm:text-3xl">About</h1>
        <p className="mt-1 text-sm text-zinc-400">
          {submittedData
            ? "The submitted form data is shown below."
            : "No form data was received. Go back and submit the register form."}
        </p>

        {submittedData ? (
          <div className="mt-6 space-y-3 rounded-xl border border-zinc-800 bg-[#101010] p-4 text-sm sm:p-5">
            <div className="flex flex-col gap-1 border-b border-zinc-800 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span className="text-zinc-400">Name</span>
              <span>{submittedData.name}</span>
            </div>
            <div className="flex flex-col gap-1 border-b border-zinc-800 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span className="text-zinc-400">Email</span>
              <span>{submittedData.email}</span>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span className="text-zinc-400">Age</span>
              <span>{submittedData.age}</span>
            </div>
          </div>
        ) : null}

        <div className="mt-6">
          <Link
            to="/register"
            className="inline-flex w-full justify-center rounded-lg bg-white px-4 py-3 font-semibold text-black transition hover:bg-zinc-200 sm:w-auto"
          >
            Go to Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
