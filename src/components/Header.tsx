import React, { useState } from 'react';
import Icon from '@hackclub/icons';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-40 bg-[#17171d] border-b border-[#252429]">
      <a
        href="https://hackclub.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 left-0 z-50 transition-transform hover:translate-y-1 block focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden"
        title="Hack Club HQ"
        aria-label="Hack Club Main HQ"
      >
        <img
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          alt="Hack Club Flag"
          className="w-18 sm:w-28 md:w-36 drop-shadow-md"
        />
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-20 sm:pl-32 md:pl-44 py-3 sm:py-3.5 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('overview')}
          className="flex items-center gap-2 sm:gap-3 text-left group focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden cursor-pointer"
          aria-label="Hack Club Marina Overview"
        >
          <img
            src="https://assets.hackclub.com/icon-square.svg"
            alt="Hack Club Logo"
            className="w-7 h-7 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-black text-sm sm:text-lg lg:text-xl tracking-tight text-white group-hover:text-[#ec3750] transition-colors leading-none">
              HACK CLUB <span className="text-[#ec3750]">MARINA</span>
            </span>
            <span className="text-xs font-semibold text-white/80 mt-0.5">
              Marina High School Chapter
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-2 lg:gap-3">
          <button
            onClick={() => handleNavClick('overview')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden ${
              activeTab === 'overview'
                ? 'bg-[#252429] text-white border border-[#ec3750]/60'
                : 'text-white hover:text-[#ec3750]'
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('hackathons')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden ${
              activeTab === 'hackathons'
                ? 'bg-[#252429] text-white border border-[#ec3750]/60'
                : 'text-white hover:text-[#ec3750]'
            }`}
          >
            Hackathons & Devpost
          </button>

          <button
            onClick={() => handleNavClick('constitution')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#338eda] focus-visible:outline-hidden ${
              activeTab === 'constitution'
                ? 'bg-[#252429] text-white border border-[#338eda]/60'
                : 'text-white hover:text-[#338eda]'
            }`}
          >
            Constitution
          </button>

          <button
            onClick={() => handleNavClick('signup')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#33d6a6] focus-visible:outline-hidden ${
              activeTab === 'signup'
                ? 'bg-[#252429] text-white border border-[#33d6a6]/60'
                : 'text-white hover:text-[#33d6a6]'
            }`}
          >
            Contact & Join
          </button>

          <button
            onClick={() => handleNavClick('devportal')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#f1c40f] focus-visible:outline-hidden ${
              activeTab === 'devportal'
                ? 'bg-[#252429] text-[#f1c40f] border border-[#f1c40f]/60'
                : 'text-[#f1c40f] hover:text-white'
            }`}
            title="Internal Finance & Developer Portal"
          >
            <Icon glyph="private" size={16} />
            <span>Dev Portal</span>
          </button>
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://hcb.hackclub.com/donations/start/hackclub-marina-chapter"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-bold text-xs bg-[#f1c40f]/15 hover:bg-[#f1c40f]/25 text-[#f1c40f] border border-[#f1c40f]/40 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#f1c40f] focus-visible:outline-hidden"
            title="Donate via Hack Club Bank 501(c)(3)"
          >
            <Icon glyph="purse" size={14} />
            <span>Donate</span>
          </a>

          <button
            onClick={() => handleNavClick('signup')}
            className="hidden xs:flex px-4 py-2 rounded-md font-black text-xs sm:text-sm bg-[#ec3750] hover:bg-[#d62b42] text-white transition-all shadow-md cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
          >
            Join Chapter
          </button>

          {/* Three-dash hamburger menu toggle for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md bg-[#252429] hover:bg-[#32303c] text-white border border-[#3c4858] transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <Icon glyph="menu" size={20} />
          </button>
        </div>
      </div>

      {/* Visually Pleasing Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#252429] bg-[#1a1a22] px-4 py-4 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1.5">
            <button
              onClick={() => handleNavClick('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#ec3750] text-white shadow-md'
                  : 'bg-[#252429] text-white hover:bg-[#32303c]'
              }`}
            >
              <Icon glyph="home" size={18} />
              <span>About</span>
            </button>

            <button
              onClick={() => handleNavClick('hackathons')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'hackathons'
                  ? 'bg-[#ec3750] text-white shadow-md'
                  : 'bg-[#252429] text-white hover:bg-[#32303c]'
              }`}
            >
              <Icon glyph="event-code" size={18} />
              <span>Hackathons & Devpost</span>
            </button>

            <button
              onClick={() => handleNavClick('constitution')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'constitution'
                  ? 'bg-[#338eda] text-white shadow-md'
                  : 'bg-[#252429] text-white hover:bg-[#32303c]'
              }`}
            >
              <Icon glyph="docs" size={18} />
              <span>Chapter Constitution</span>
            </button>

            <button
              onClick={() => handleNavClick('signup')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'signup'
                  ? 'bg-[#33d6a6] text-[#121217] shadow-md font-black'
                  : 'bg-[#252429] text-white hover:bg-[#32303c]'
              }`}
            >
              <Icon glyph="friend" size={18} />
              <span>Contact & Join</span>
            </button>

            <button
              onClick={() => handleNavClick('devportal')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'devportal'
                  ? 'bg-[#f1c40f] text-[#121217] shadow-md font-black'
                  : 'bg-[#252429] text-[#f1c40f] hover:bg-[#32303c]'
              }`}
            >
              <Icon glyph="private" size={18} />
              <span>Dev & Treasury Portal</span>
            </button>
          </div>

          <div className="pt-3 border-t border-[#252429] flex flex-col gap-2">
            <a
              href="https://hcb.hackclub.com/donations/start/hackclub-marina-chapter"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-md font-bold text-xs bg-[#f1c40f]/20 hover:bg-[#f1c40f]/30 text-[#f1c40f] border border-[#f1c40f]/50 flex items-center justify-center gap-2 transition-all"
            >
              <Icon glyph="purse" size={16} />
              <span>Donate via HCB (Tax-Deductible)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

