import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HackathonsSection } from './components/HackathonsSection';
import { ConstitutionViewer } from './components/ConstitutionViewer';
import { SignupForm } from './components/SignupForm';
import { DevPortal } from './components/DevPortal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-[#17171d] text-white font-sans selection:bg-[#ec3750] selection:text-white">
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      <main className="flex-1">
        {activeTab === 'overview' && (
          <>
            <Hero setActiveTab={handleTabChange} />
            <HackathonsSection setActiveTab={handleTabChange} />
            <SignupForm />
            <ConstitutionViewer />
          </>
        )}

        {activeTab === 'hackathons' && <HackathonsSection setActiveTab={handleTabChange} />}

        {activeTab === 'constitution' && <ConstitutionViewer />}

        {activeTab === 'signup' && <SignupForm />}

        {activeTab === 'devportal' && <DevPortal />}
      </main>

      <Footer setActiveTab={handleTabChange} />
    </div>
  );
}
