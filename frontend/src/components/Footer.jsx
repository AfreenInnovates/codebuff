import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 text-center bg-gray-950 text-gray-500">
      © {new Date().getFullYear()} SmartRoute. All rights reserved.
    </footer>
  );
};

export default Footer;
