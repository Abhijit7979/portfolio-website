import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceList from './components/ExperienceList';
import Projects from './components/Projects';
import SkillsGrid from './components/SkillsGrid';
import Footer from './components/Footer';

/**
 * Main App Component
 * Fetches resume data from the backend API and renders all sections
 */
function App() {
  // State management for resume data
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch resume data from backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/resume`);
        if (!response.ok) {
          throw new Error('Failed to fetch resume data');
        }
        const data = await response.json();
        setResumeData(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  // Show error message if data fetch fails
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-red-500">
        Error: {error}. Please ensure the backend is running.
      </div>
    );
  }

  // Render the portfolio website with all sections
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          {/* Hero section with name, title, and profile photo */}
          <Hero data={resumeData} />

          {/* About section with summary and education */}
          <About data={resumeData} />

          {/* Experience timeline */}
          <ExperienceList data={resumeData} />

          {/* Projects grid */}
          <Projects data={resumeData} />

          {/* Skills organized by category */}
          <SkillsGrid data={resumeData} />
        </main>

        {/* Footer with social links */}
        <Footer data={resumeData} />
      </div>
    </ThemeProvider>
  );
}

export default App;

