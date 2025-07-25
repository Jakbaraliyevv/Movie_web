import React, { useState } from "react";
import {
  Search,
  Menu,
  X,
  Home,
  DollarSign,
  Film,
  Tv,
  Bookmark,
  HelpCircle,
} from "lucide-react";

import logo from "../../assets/logo.svg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Pricing", path: "/pricing", icon: DollarSign },
    { name: "Movies", path: "/movies", icon: Film },
    { name: "Series", path: "/series", icon: Tv },
    { name: "Collection", path: "/collection", icon: Bookmark },
    { name: "FAQ", path: "/faq", icon: HelpCircle },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search for:", searchValue);
    // Search logic here
    setIsSearchOpen(false);
    setSearchValue("");
  };

  return (
    <section className="bg-[#030a1b] py-4 md:py-[30px] relative z-50">
      <div className="w-[90%] m-auto">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between border border-[#11426f] rounded-[20px] px-[15px] py-3 backdrop-blur-md bg-[#0a0f1b]/80">
          {/* Logo & Navigation */}
          <div className="flex items-center gap-[80px]">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Film className="text-white" size={24} />
              </div>
            </div>
            <nav className="text-white font-medium text-lg xl:text-[24px] flex items-center gap-[40px]">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-[30px]">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              <Search className="text-white cursor-pointer" size={24} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300">
              <Bookmark className="text-white cursor-pointer" size={24} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300">
              <HelpCircle className="text-white cursor-pointer" size={24} />
            </button>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-white text-sm font-bold">U</span>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between border border-[#11426f] rounded-[20px] px-4 py-3 backdrop-blur-md bg-[#0a0f1b]/80">
          {/* Mobile Menu Button */}
          <div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="text-white" size={24} />
              ) : (
                <Menu className="text-white" size={24} />
              )}
            </button>
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              <Search className="text-white" size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <img src={logo} alt="This is img" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-[5%] bg-[#0a0f1b]/95 backdrop-blur-md border border-[#11426f] rounded-[20px] overflow-hidden">
            <nav className="py-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    className="flex items-center gap-3 px-6 py-3 text-white hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <IconComponent size={20} />
                    <span className="text-lg">{item.name}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        )}

        {/* Search Modal */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
            <div className="w-[90%] max-w-2xl bg-[#0a0f1b]/95 backdrop-blur-md border border-[#11426f] rounded-[20px] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-xl font-semibold">
                  Search Movies & Series
                </h3>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                >
                  <X className="text-white" size={24} />
                </button>
              </div>

              <div onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search for movies, series, collections..."
                  className="w-full bg-[#1a1f2e] border border-[#11426f] rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  autoFocus
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/10 rounded-lg transition-colors duration-300"
                >
                  <Search className="text-gray-400" size={20} />
                </button>
              </div>

              {/* Search Suggestions */}
              <div className="mt-4">
                <p className="text-gray-400 text-sm mb-2">Popular Searches:</p>
                <div className="flex flex-wrap gap-2">
                  {["Action Movies", "Comedy Series", "Sci-Fi", "Thriller"].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchValue(tag)}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm hover:bg-blue-600/30 transition-colors duration-300"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Navbar;
