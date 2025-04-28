import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow">
      <div className="text-2xl font-bold text-primary">JobBoost</div>
      <nav className="space-x-6 hidden md:block">
        <a href="#" className="text-gray-700 hover:text-primary">Home</a>
        <a href="#" className="text-gray-700 hover:text-primary">How it works</a>
        <a href="#" className="text-gray-700 hover:text-primary">Pricing</a>
        <a href="#" className="text-gray-700 hover:text-primary">Contact</a>
      </nav>
      <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600">
        Get Started
      </button>
    </header>
  );
};

export default Header;
