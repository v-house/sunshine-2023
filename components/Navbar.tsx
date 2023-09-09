"use client";

import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import UpdatesPage from "./UpdatesPage";
import MenuItems from "./Menu";
import useWindowSize from "@rooks/use-window-size";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUpdatesOpen, setIsUpdatesOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [scrollheight, setScrollHeight] = useState(innerHeight);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUpdates = () => {
    setIsUpdatesOpen(!isUpdatesOpen);
  };

  const scrollreceived = () => {
    console.log(scrollheight);
    setScrollHeight(innerHeight);
  };

  useEffect(() => {
    const handleScroll = () => {
      scrollreceived();
      if (scrollheight != null) {
        // setIsNavbarVisible(window.scrollY > scrollheight - 100);
        // setIsNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isNavbarVisible && (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent">
          <div className="flex items-center space-x-2 bg-cyan-400 p-4 rounded-3xl">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <span className="text-white text-lg font-bold">Sunshine</span>
          </div>
          <div className="flex items-center space-x-4 bg-cyan-400 p-4 rounded-3xl">
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleUpdates}
            >
              <span className="relative">Updates</span>
            </button>
            <button
              className="text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              <RiMenu3Fill size={24} />
            </button>
          </div>
        </nav>
      )}
      <UpdatesPage isOpen={isUpdatesOpen} onClose={toggleUpdates} />
      <MenuItems isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Navbar;
