
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import AIAssistant from './pages/AIAssistant';
import Research from './pages/Research';
import Dashboard from './pages/Dashboard';
import Toolkit from './pages/Toolkit';
import StudyHub from './pages/StudyHub';
import Auth from './pages/Auth';
import ProfileSetup from './pages/ProfileSetup';
import Support from './pages/Support';
import LiveBuddy from './pages/LiveBuddy';
import About from './pages/About';
import Features from './pages/Features';
import { UserProfile } from './types';

const SidebarLink = ({ to, icon, label, active }: { to: string; icon: string; label: string; active: boolean }) => (
  <Link 
    to={to} 
    className={`flex items-center space-x-4 px-6 py-4 rounded-2xl font-black transition-all duration-200 ${
      active 
        ? 'bg-yellow-400 text-slate-900 shadow-lg scale-105' 
        : 'text-slate-500 hover:bg-slate-100'
    }`}
  >
    <i className={`fas ${icon} w-6 text-xl`}></i>
    <span className="text-sm uppercase tracking-wider">{label}</span>
  </Link>
);

const Footer = () => (
  <footer className="mt-20 py-12 px-8 bg-white border-t border-slate-100 rounded-t-[4rem]">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
            <i className="fas fa-bolt text-slate-900 text-xl"></i>
          </div>
          <span className="text-xl font-black text-slate-900 tracking-tighter">NeuroBuzz</span>
        </div>
        <p className="text-slate-500 font-medium max-w-sm mb-6">
          Empowering neurodivergent minds in India through multimodal AI cognitive scaffolding.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition"><i className="fab fa-twitter"></i></a>
          <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/ankur-gautam-759251366/" target="_blank" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div>
        <h4 className="text-xs font-black uppercase text-slate-400 mb-6 tracking-widest">Platform</h4>
        <ul className="space-y-4 font-bold text-slate-600">
          <li><Link to="/features" className="hover:text-yellow-500 transition">Features</Link></li>
          <li><Link to="/research" className="hover:text-yellow-500 transition">Research Paper</Link></li>
          <li><Link to="/support" className="hover:text-yellow-500 transition">Help Center</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-black uppercase text-slate-400 mb-6 tracking-widest">Developer</h4>
        <ul className="space-y-4 font-bold text-slate-600">
          <li><Link to="/about" className="hover:text-yellow-500 transition underline decoration-yellow-400 underline-offset-4">About Ankur Gautam</Link></li>
          <li><a href="mailto:support@neurobuzz.in" className="hover:text-yellow-500 transition">Contact Me</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-50 text-center text-[10px] font-black uppercase text-slate-300 tracking-widest">
      &copy; 2024 NeuroBuzz. Built for Research Implementation by Ankur Gautam.
    </div>
  </footer>
);

const AppContent = ({ user, logout }: { user: UserProfile | null; logout: () => void }) => {
  const location = useLocation();
  
  if (!user?.onboardingComplete) return null;

  return (
    <div className="flex min-h-screen bg-[#FFFCF0]">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col fixed h-full z-50">
        <div className="p-8">
          <Link to="/" className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
              <i className="fas fa-bolt text-slate-900 text-2xl"></i>
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">NeuroBuzz</span>
          </Link>

          <nav className="space-y-2">
            <SidebarLink to="/" icon="fa-house" label="Home" active={location.pathname === '/'} />
            <SidebarLink to="/features" icon="fa-star" label="Features" active={location.pathname === '/features'} />
            <SidebarLink to="/study-hub" icon="fa-map" label="Adventure" active={location.pathname === '/study-hub'} />
            <SidebarLink to="/toolkit" icon="fa-toolbox" label="Toolkit" active={location.pathname === '/toolkit'} />
            <SidebarLink to="/live-buddy" icon="fa-bee" label="Buzz Live" active={location.pathname === '/live-buddy'} />
            <SidebarLink to="/ai-assistant" icon="fa-robot" label="Buddy" active={location.pathname === '/ai-assistant'} />
            <SidebarLink to="/education" icon="fa-graduation-cap" label="Learn" active={location.pathname === '/education'} />
            <SidebarLink to="/research" icon="fa-microscope" label="Research" active={location.pathname === '/research'} />
            <SidebarLink to="/support" icon="fa-life-ring" label="Support" active={location.pathname === '/support'} />
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-slate-50">
          <Link to="/dashboard" className="flex items-center space-x-4 mb-6 group">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg transition-transform group-hover:scale-110">
              <i className="fas fa-user-astronaut"></i>
            </div>
            <div>
              <p className="text-sm font-black text-slate-900 truncate w-32">{user.name}</p>
              <p className="text-[10px] font-black text-yellow-500 uppercase">⭐ {user.points} Stars</p>
            </div>
          </Link>
          <button 
            onClick={logout}
            className="w-full text-slate-400 font-bold text-xs uppercase hover:text-red-500 transition text-left pl-4"
          >
            <i className="fas fa-sign-out-alt mr-2"></i> Log Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow ml-72 flex flex-col min-h-screen">
        <div className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/study-hub" element={<StudyHub />} />
            <Route path="/education" element={<Education />} />
            <Route path="/toolkit" element={<Toolkit />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/live-buddy" element={<LiveBuddy />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/dashboard" element={<Dashboard user={user} logout={logout} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem('neurobuzz_profile');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setUser(profile);
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('neurobuzz_profile');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <HashRouter>
      {!isAuthenticated ? (
        <Auth onLogin={login} />
      ) : !user?.onboardingComplete ? (
        <ProfileSetup onComplete={(profile) => setUser(profile)} />
      ) : (
        <AppContent user={user} logout={logout} />
      )}
    </HashRouter>
  );
};

export default App;
