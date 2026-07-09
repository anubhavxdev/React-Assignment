import { useLocation, Link } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const submittedData = location.state;

  return (
    <div className="min-h-screen bg-[#0d0d0d] px-4 py-10 text-white">
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-zinc-800 bg-[#171717] p-6 shadow-xl">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-1 text-sm text-zinc-400">
          {submittedData
            ? "The submitted form data is shown below."
            : "No form data was received. Go back and submit the register form."}
        </p>

        {submittedData ? (
          <div className="mt-6 space-y-3 rounded-xl border border-zinc-800 bg-[#101010] p-5 text-sm">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Name</span>
              <span>{submittedData.name}</span>
            </div>
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Email</span>
              <span>{submittedData.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Age</span>
              <span>{submittedData.age}</span>
            </div>
          </div>
        ) : null}

        <div className="mt-6">
          <Link
            to="/register"
            className="inline-flex rounded-lg bg-white px-4 py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            Go to Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
