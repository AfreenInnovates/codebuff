import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RouteForm from "../components/RouteForm";

const GetRoutePage = () => {
  return (
    <div className="bg-gray-950 text-white font-sans min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-24 px-4 md:px-8">
        <div
          className="max-w-3xl mx-auto text-center mb-12 animate-fade-in"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Plan Your Route
          </h1>
          <p className="mt-4 text-gray-400">
            Enter your journey details and let SmartRoute suggest the best public transport options for you.
          </p>
        </div>

        <div className="animate-fade-in-slow">
          <RouteForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetRoutePage;
