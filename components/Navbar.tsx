"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Pages', id: 'pages' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  // Effect لتعقب السكرول
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // إغلاق السيرش عند الضغط خارج الإطار
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchOpen && !(e.target as Element).closest('.search-container')) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[85%] xl:w-300 transition-all duration-500 ${
        scrolled
          ? 'rounded-none bg-white/70 backdrop-blur-md shadow-lg'
          : 'rounded-2xl bg-white/40 backdrop-blur-md'
      }`}
      style={{
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.7)' 
          : 'rgba(255, 255, 255, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* Logo */}
<motion.div
  whileHover={{ scale: 1.05 }}
  className="relative w-32 h-12 flex items-center cursor-pointer shrink-0"
>
  <Image 
    src="/logo-1.png" 
    alt="Salepush Logo" 
    width={128} 
    height={48}
    priority
    className="object-contain"
    sizes="128px"
  />
</motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative px-3 py-2 group"
                onMouseEnter={() => setActiveNav(item.name)}
                onMouseLeave={() => setActiveNav('')}
              >
                <button
                  onClick={() => setActiveNav(item.name)}
                  className="text-gray-700 hover:text-[#775fb1] font-medium transition-colors duration-300 relative z-10"
                >
                  {item.name}
                </button>
                
                {/* Animated Underline - يظهر تدريجياً من الشمال لليمين */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5"
                  initial={{ width: 0 }}
                  animate={{
                    width: activeNav === item.name ? '100%' : 0,
                    background: activeNav === item.name 
                      ? 'linear-gradient(90deg, #775fb1, #cda0b4)' 
                      : 'transparent'
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeOut",
                    width: { type: "spring", stiffness: 200, damping: 30 }
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Section - Contact & Search */}
          <div className="flex items-center space-x-4">
            {/* Phone Number with GIF */}
            <div className="hidden md:flex items-center space-x-2 rounded-full px-4 py-2">
              {/* GIF Icon with Hover Tilt Effect */}
              <motion.div
                className="w-12 h-12 flex items-center justify-center"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                <Image 
                  width={50}
                  height={50}
                  src="/telephon.png" 
                  alt="Phone" 
                  className="object-contain w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#775fb1">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    `;
                  }}
                />
              </motion.div>
              <span className="text-gray-700 font-medium">+20 123 456 7890</span>
            </div>

            {/* Search Button */}
            <div className="relative search-container">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-10 h-10 rounded-full bg-linear-to-r from-[#775fb1] to-[#cda0b4] flex items-center justify-center text-white shadow-lg"
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {/* Search Popup */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#775fb1]"
                        autoFocus
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-linear-to-r from-[#775fb1] to-[#cda0b4] text-white rounded-lg font-medium"
                      >
                        Search
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 relative group"
            >
              {/* Animated Hamburger Lines */}
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0,
                  width: isOpen ? '1.5rem' : '1.5rem',
                }}
                transition={{ duration: 0.3 }}
                className="block h-0.5 bg-linear-to-r from-[#775fb1] to-[#cda0b4] rounded-full group-hover:w-6 transition-all duration-300"
              />
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                  width: isOpen ? '0rem' : '1.5rem',
                }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 bg-linear-to-r from-[#775fb1] to-[#cda0b4] rounded-full group-hover:w-6 transition-all duration-300"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0,
                  width: isOpen ? '1.5rem' : '1.5rem',
                }}
                transition={{ duration: 0.3 }}
                className="block h-0.5 bg-linear-to-r from-[#775fb1] to-[#cda0b4] rounded-full group-hover:w-6 transition-all duration-300"
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 10 }}
                    onClick={() => {
                      setActiveNav(item.name);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 relative group ${
                      activeNav === item.name
                        ? 'bg-linear-to-r from-[#775fb1] to-[#cda0b4] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                    {/* تأثير الخط للموبايل أيضًا */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5"
                      initial={{ width: 0 }}
                      animate={{
                        width: activeNav === item.name ? '100%' : 0,
                        background: activeNav === item.name 
                          ? 'linear-gradient(90deg, #775fb1, #cda0b4)' 
                          : 'transparent'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
                
                {/* Mobile Phone Number with GIF - حجم مكبر */}
                <div className="flex items-center space-x-3 px-4 py-3">
                  {/* Mobile GIF with Hover Tilt Effect */}
                  <motion.div
                    className="w-10 h-10 flex items-center justify-center"
                    whileHover={{ rotate: -10 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  >
                    <Image 
                      width={40}
                      height={40}
                      src="/telephon.png" 
                      alt="Phone" 
                      className="object-contain w-full h-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#775fb1">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                          </svg>
                        `;
                      }}
                    />
                  </motion.div>
                  <span className="text-gray-700 font-medium text-lg">+20 123 456 7890</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;