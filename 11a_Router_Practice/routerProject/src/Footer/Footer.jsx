import React from "react";

function Footer() {
  return (
    <div className="flex text-2xl text-white fixed bottom-0 w-full bg-gray-800 h-1/4 justify-center">
      <ul className="flex w-3/4 gap-20 justify-between p-10 ">
        <li>Locations</li>
        <li>Services</li>
        <li>News</li>
        <li>Follow Us</li>
      </ul>
    </div>
  );
}

export default Footer;
