import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-950 text-white font-sans scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black pt-24"
        data-aos="fade-up"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          Find Your Best Bus Route
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-300">
          AI-powered, location-aware public transport assistant. Stop guessing—start riding smart.
        </p>
        <Link to="/get-route">
            <button className="mt-8 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-lg transition-all">
                Get Started
            </button>
        </Link>
      </section>

      {/* Why SmartRoute */}
      <section className="py-20 px-6 bg-black" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Why SmartRoute?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-gray-300">
          {[
            ["⚡", "Fast & Accurate", "Get instant results using AI on real route data."],
            ["📍", "Location-Based", "Find routes nearest to your actual location."],
            ["💬", "Natural Queries", "Just type origin/destination — we handle the logic."],
            ["📊", "Data-Driven", "Backed by actual BMTC routes, not guesses."],
          ].map(([icon, title, desc]) => (
            <div
              key={title}
              className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-950" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Input Your Location",
              desc: "Tell us where you are and where you want to go.",
              icon: "📍",
            },
            {
              title: "Let AI Do the Work",
              desc: "We search and suggest the smartest routes from real-time data.",
              icon: "🤖",
            },
            {
              title: "Hop On With Confidence",
              desc: "Follow the suggestion and ride smart—no second guessing.",
              icon: "🚌",
            },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Example Output */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950" data-aos="zoom-in-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">See It In Action</h2>
          <p className="text-gray-400 mb-8">Example route suggestion based on your location:</p>
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl text-left">
            <pre className="text-green-400 text-sm overflow-auto">
{`{
  "routes": [
    "Route 61: KBS (Majestic) to Vijayanagar",
    "Route 63: KBS (Majestic) to Vijayanagar"
  ],
  "justification": [
    "Route 61 starts at Majestic which is closest to the user's location.",
    "Route 63 also serves the same destination with minimal transfers."
  ]
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Mobile Ready */}
      <section className="py-20 px-6 bg-black" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">Mobile Ready</h2>
            <p className="text-gray-400">
              Whether you’re at a bus stop or walking in the city, SmartRoute works beautifully on your phone.
              No clutter, no confusion — just clean info, when you need it.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg">
            <div className="aspect-[9/16] w-full h-auto bg-gradient-to-br from-teal-400/10 to-blue-500/10 flex items-center justify-center text-teal-300 text-xl rounded-lg">
              📱 Mobile Preview Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-950" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What People Are Saying
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            {
              quote: "This literally changed how I commute. No more asking random people!",
              name: "Priya R.",
            },
            {
              quote: "Clean UI, quick results, and actually accurate. 10/10!",
              name: "Arjun M.",
            },
          ].map(({ quote, name }) => (
            <div
              key={name}
              className="bg-gray-900 p-6 rounded-lg border border-gray-700"
            >
              <p className="text-gray-300 italic mb-4">“{quote}”</p>
              <p className="text-teal-400 font-semibold">— {name}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
