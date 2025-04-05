import React from 'react';
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';

function Navbar() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <div className="relative z-10">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=80')`,
        }}
      ></div>

      {/* Overlay for content */}
      <div className="relative bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 bg-opacity-80 shadow-md">
        <div className="navbar max-w-7xl mx-auto px-4 py-3 text-white">

          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52"
              >
                <li><a href="/">Home</a></li>
                <li><a href="/findeve">FindEvent</a></li>
                <li><a href="/bookevent">BookEvent</a></li>
                <li><a href="/eventcreation">CreateEvent</a></li>
              </ul>
            </div>
            <a
              href="/"
              className="btn btn-ghost normal-case text-2xl font-extrabold text-white tracking-wider"
            >
              EventVerse
            </a>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white font-medium space-x-2">
              <li><a className="hover:text-yellow-200 transition" href="/">Home</a></li>
              <li><a className="hover:text-yellow-200 transition" href="/findeve">FindEvent</a></li>
              <li><a className="hover:text-yellow-200 transition" href="/bookevent">BookEvent</a></li>
              <li><a className="hover:text-yellow-200 transition" href="/eventcreation">CreateEvent</a></li>
            </ul>
          </div>

          {/* Navbar End: Login / Logout */}
          {authUser ? (
            <div className="navbar-end">
              <Logout />
            </div>
          ) : (
            <div className="navbar-end">
              <button
                className="bg-white text-purple-600 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-100 transition"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
