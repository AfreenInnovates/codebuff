import React from "react";
import "../index.css";
import RouteComparison from "./RouteComparison";

const ResultsView = ({ data }) => {
  const hasDetailedRoutes =
    Array.isArray(data.routes) &&
    data.routes.length > 0 &&
    data.routes[0]?.estimated_duration !== undefined;

  return (
    <div className="max-w-4xl mx-auto mt-20 px-6">
      <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black border border-gray-800 shadow-[0_0_60px_#0f766e30] rounded-2xl p-10 space-y-10 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 drop-shadow-lg">
          Route Results
        </h2>

        {data?.error && (
          <div className="bg-red-950/60 border border-red-500/30 text-red-300 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">❌ Error</h3>
            <p className="text-sm">{data.error}</p>
            {data.raw && (
              <p className="text-xs text-gray-500 mt-2">{data.raw}</p>
            )}
          </div>
        )}

        {hasDetailedRoutes ? (
          <>
            <RouteComparison routes={data.routes} summary={data.summary} />
          </>
        ) : (
          <>
            {data?.routes && (
              <div className="bg-gray-900/70 backdrop-blur-lg rounded-xl border border-teal-500/20 p-6 shadow-inner transition hover:shadow-teal-500/10">
                <h3 className="text-2xl font-semibold text-teal-400 mb-4 flex items-center gap-2">
                  🚍 Suggested Routes
                </h3>
                <ul className="list-disc list-inside space-y-3 text-lg text-green-300">
                  {data.routes.map((route, idx) => (
                    <li key={idx} className="leading-relaxed tracking-wide">
                      {route}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {data?.justification && (
              <div className="bg-gray-900/70 backdrop-blur-lg rounded-xl border border-blue-400/20 p-6 shadow-inner transition hover:shadow-blue-500/10">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  💡 Why These Routes?
                </h3>
                <ul className="list-disc list-inside space-y-3 text-base text-blue-200">
                  {data.justification.map((reason, idx) => (
                    <li key={idx} className="leading-relaxed tracking-wide">
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        <div className="text-center pt-4">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 mt-4 text-white bg-teal-600 hover:bg-teal-700 rounded-lg font-semibold shadow-md transition duration-200"
          >
            🔁 Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
