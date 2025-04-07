import React from "react";

const getCrowdTag = (level) => {
  switch (level?.toLowerCase()) {
    case "low":
      return <span className="text-green-400">🟢 Low</span>;
    case "moderate":
      return <span className="text-yellow-300">🟡 Moderate</span>;
    case "high":
    default:
      return <span className="text-red-400">🔴 High</span>;
  }
};

const RouteComparison = ({ routes, summary }) => {
  return (
    <div className="bg-gray-900 text-white max-w-4xl mx-auto mt-10 p-8 rounded-xl shadow-2xl border border-gray-800 space-y-6">
      <h2 className="text-2xl font-bold mb-4">🚍 Route Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-gray-800 text-teal-400">
              <th className="px-4 py-3 text-left">Route</th>
              <th className="px-4 py-3 text-left">Duration</th>
              <th className="px-4 py-3 text-left">Transfers</th>
              <th className="px-4 py-3 text-left">Crowd Level</th>
              <th className="px-4 py-3 text-left">Earliest Departure</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((r, i) => (
              <tr key={i} className="border-t border-gray-700 hover:bg-gray-800 transition-all">
                <td className="px-4 py-3">{r.route_name}</td>
                <td className="px-4 py-3">{r.estimated_duration} mins</td>
                <td className="px-4 py-3">{r.number_of_transfers}</td>
                <td className="px-4 py-3">{getCrowdTag(r.crowd_level)}</td>
                <td className="px-4 py-3">{r.earliest_departure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg text-blue-300">
        💡 <strong>Smart Summary:</strong> {summary}
      </div>
    </div>
  );
};

export default RouteComparison;
