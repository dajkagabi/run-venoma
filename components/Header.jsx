'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  MagnifyingGlassIcon, 
  HeartIcon, 
  ShoppingBagIcon, 
  Bars3Icon, 
  XMarkIcon,
  UserIcon,
  SparklesIcon,
  TrophyIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { 
      name: 'Men', 
      sectionId: 'hero', 
      icon: UserIcon 
    },
    { 
      name: 'Women', 
      sectionId: 'latest', 
      icon: SparklesIcon 
    },
    { 
      name: 'Kids', 
      sectionId: 'category', 
      icon: TrophyIcon 
    },
    { 
      name: 'Sale', 
      sectionId: 'latest', 
      icon: FireIcon 
    },
  ];

  return (
    <>
      <header className="bg-white border-b border-grey200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-1">
              <button 
                onClick={() => scrollToSection('hero')}
                className="flex items-center"
              >
                <div className="relative w-32 h-8">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </button>
            </div>

            {/* Asztali navigáció */}
            <nav className="hidden lg:flex flex-1 justify-center">
              <ul className="flex space-x-8">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={item.name}>
                      <button
                        onClick={() => scrollToSection(item.sectionId)}
                        className="link-primary text-lg hover:text-accent flex items-center space-x-2 transition-colors duration-200"
                      >
                        <IconComponent className="w-5 h-5" />
                        <span>{item.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Ikonok */}
            <div className="flex items-center space-x-4 lg:flex-1 lg:justify-end">
              <button className="btn-icon">
                <MagnifyingGlassIcon className="w-6 h-6 text-primary" />
              </button>
              <button className="btn-icon">
                <HeartIcon className="w-6 h-6 text-primary" />
              </button>
              <button className="btn-icon">
                <ShoppingBagIcon className="w-6 h-6 text-primary" />
              </button>
              
              {/* Hamburger menu */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="btn-icon"
                >
                  <Bars3Icon className="w-6 h-6 text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobil Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-grey200">
              <div className="relative w-32 h-8">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-icon"
              >
                <XMarkIcon className="w-6 h-6 text-primary" />
              </button>
            </div>

            {/* Navigációs items */}
            <nav className="p-4">
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={item.name}>
                      <button
                        onClick={() => scrollToSection(item.sectionId)}
                        className="flex items-center space-x-3 p-3 link-primary text-lg hover:bg-grey50 rounded-lg transition-all duration-300 w-full text-left"
                      >
                        <IconComponent className="w-6 h-6" />
                        <span>{item.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;