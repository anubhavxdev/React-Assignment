import React from "react";
import data from "../data.json";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl rounded-xl border border-zinc-800 bg-[#171717] shadow-lg">

        {/* Header */}
        <div className="border-b border-zinc-800 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">
            Student Information
          </h1>
          <p className="mt-1 text-xs text-zinc-400">
            Assignment Demonstrating React Router and Forms
          </p>
        </div>

        {/* Body */}
        <div className="grid grid-cols-[140px_1fr] gap-6 p-6">

          {/* Profile */}
          <div className="flex flex-col items-center">
            <img
              src={data.pfp}
              alt={data.Name}
              className="w-28 h-28 rounded-lg object-cover border border-zinc-700"
            />

            <h2 className="mt-3 text-lg font-semibold text-white text-center">
              {data.Name}
            </h2>

            <p className="text-xs text-zinc-400 text-center">
              {data.Designation}
            </p>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">
              
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Registration No.</span>
                <span className="text-white">{data.reg_no}</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Batch</span>
                <span className="text-white">{data.batch}</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Designation</span>
                <span className="text-white">{data.Designation}</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-2">
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

              <div className="flex justify-between">
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
        <div className="border-t border-zinc-800 py-3 text-center text-[11px] text-zinc-500">
          Built with React • Tailwind CSS
        </div>
      </div>
    </div>
  );
};

export default Home;