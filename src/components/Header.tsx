import React, { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems:any = [
    // { path: "/", label: "Home" },
    // { path: "/services", label: "Massage Types" },
    // { path: "/masseuses", label: "Masseuses" },
    // { path: "/about", label: "About Us" },
    // { path: "/faq", label: "FAQ" },
    // { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <Zap className="h-8 w-8 text-teal-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">ZenTouch</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems?.map((item:any) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-teal-600 bg-teal-50"
                        : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Book Now Button */}
          <Link
            to="/booking"
            className="hidden md:block bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
          >
            Book Now
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems?.map((item:any) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    isActive
                      ? "text-teal-600 bg-teal-50"
                      : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div
              onClick={() => navigate("/booking")}
              className="block w-full bg-teal-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700 transition-colors duration-200"
            >
              Book Now
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;