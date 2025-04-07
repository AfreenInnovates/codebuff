import axios from "axios";
import React, { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import ResultsView from "./ResultsView";

const RouteForm = () => {
  const [form, setForm] = useState({
    origin: "",
    destination: "",
    user_loc: "",
  });

  const [view, setView] = useState("form"); // form | loading | result
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setView("loading");

    try {
      const res = await axios.post("http://127.0.0.1:5000/get-route", form);
      setResult(res.data);
      setView("result");
    } catch (err) {
      setResult({ error: "Something went wrong!", raw: err.message });
      setView("result");
    }
  };

  const fields = [
    { name: "origin", label: "Origin", icon: "🧭" },
    { name: "destination", label: "Destination", icon: "🧭" },
    { name: "user_loc", label: "Your Location", icon: "📍" },
  ];

  return (
    <>
      {view === "form" && (
        <div className="max-w-xl mx-auto mt-24 px-6">
          <div className="bg-gray-900/70 border border-teal-600/30 backdrop-blur-lg rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.1)] p-10 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none rounded-2xl border border-gray-700 shadow-[inset_0_0_20px_rgba(0,255,255,0.05)]"></div>

            <h2 className="text-3xl font-bold text-center text-white mb-10 tracking-tight drop-shadow-sm">
              🚍 SmartRoute Assistant
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {fields.map(({ name, label, icon }) => (
                <div key={name} className="relative">
                  <input
                    type="text"
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    className="peer w-full bg-gray-800/60 text-white border border-gray-600 rounded-lg px-12 pt-6 pb-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                    placeholder={label}
                    required
                  />
                  <label
                    htmlFor={name}
                    className="absolute left-12 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-teal-300"
                  >
                    {label}
                  </label>
                  <span className="absolute left-4 top-4 text-lg text-gray-400 pointer-events-none">
                    {icon}
                  </span>
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-3 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-cyan-600/40"
              >
                Get Route
              </button>
            </form>
          </div>
        </div>
      )}

      {view === "loading" && <LoadingScreen />}
      {view === "result" && <ResultsView data={result} />}
    </>
  );
};

export default RouteForm;
