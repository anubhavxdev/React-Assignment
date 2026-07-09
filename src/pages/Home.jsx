import React from "react";
import data from "../data.json";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] px-3 py-4 text-white sm:px-4 sm:py-6">
      <div className="mx-auto w-full max-w-2xl rounded-xl border border-zinc-800 bg-[#171717] shadow-lg">

        {/* Header */}
        <div className="border-b border-zinc-800 px-4 py-4 sm:px-6">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Student Information
          </h1>
          <p className="mt-1 text-xs text-zinc-400">
            Assignment Demonstrating React Router and Forms
          </p>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 md:grid-cols-[140px_1fr]">

          {/* Profile */}
          <div className="flex flex-col items-center md:items-center">
            <img
              src={data.pfp}
              alt={data.Name}
              className="h-24 w-24 rounded-lg border border-zinc-700 object-cover sm:h-28 sm:w-28"
            />

            <h2 className="mt-3 text-center text-lg font-semibold text-white sm:text-xl">
              {data.Name}
            </h2>

            <p className="text-center text-xs text-zinc-400 sm:text-sm">
              {data.Designation}
            </p>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white">
              
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex flex-col gap-1 border-b border-zinc-800 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-zinc-500">Registration No.</span>
                <span className="text-white">{data.reg_no}</span>
              </div>

              <div className="flex flex-col gap-1 border-b border-zinc-800 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-zinc-500">Batch</span>
                <span className="text-white">{data.batch}</span>
              </div>

              <div className="flex flex-col gap-1 border-b border-zinc-800 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-zinc-500">Designation</span>
                <span className="text-white">{data.Designation}</span>
              </div>

              <div className="flex flex-col gap-1 border-b border-zinc-800 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-zinc-500">GitHub</span>
                <a
                  href={`https://github.com/${data.Github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-zinc-300"
                >
                  @{data.Github}
                </a>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-zinc-500">LinkedIn</span>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-zinc-300"
                >
                  View →
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800 px-4 py-3 text-center text-[11px] text-zinc-500 sm:px-6">
          Built with React • Tailwind CSS
        </div>
      </div>
    </div>
  );
};

export default Home;