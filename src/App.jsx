import { useState, useEffect } from 'react'
import { useForm } from '@formspree/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowRight, 
  Users, 
  Shield, 
  Zap, 
  Target, 
  CheckCircle, 
  Building2,
  Briefcase,
  Star,
  X,
  Moon,
  Sun,
  Menu,
  ChevronDown,
  Clock,
  TrendingUp,
  Award,
  Globe,
  Search,
  UserCheck,
  Rocket,
  Heart,
  Eye,
  Filter,
  Sparkles,
  Brain
} from 'lucide-react'
import vocancyLogo from './assets/vocancy_v_connection_logo.svg'
import './App.css'

// Import Inter font


function App() {
  const [isDark, setIsDark] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('talent')
  const [currentMode, setCurrentMode] = useState('talent')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skill: '',
    company: '',
    role: ''
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleMode = () => {
    setCurrentMode(currentMode === 'talent' ? 'companies' : 'talent')
  }

  const openModal = (type) => {
    setModalType(type)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setFormData({ name: '', email: '', skill: '', company: '', role: '' })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      alert("Thanks for your submission!");
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 text-slate-800 dark:text-slate-200 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={vocancyLogo} alt="Vocancy Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-slate-900 dark:text-white font-['CustomGeometricSans']">VOCANCY</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">

          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => setIsDark(!isDark)}>
              {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
            <Button onClick={() => openModal(currentMode)} className="hidden sm:inline-flex">
              {currentMode === 'talent' ? 'Get Started' : 'Request Demo'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 py-4">
            <nav className="flex flex-col items-center space-y-4">

              <Button onClick={() => { openModal(currentMode); setIsMenuOpen(false); }} className="w-full max-w-xs">
                {currentMode === 'talent' ? 'Get Started' : 'Request Demo'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center bg-slate-200 dark:bg-slate-700 rounded-full p-1">
                <Button 
                  size="sm" 
                  className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${currentMode === 'talent' ? 'bg-white dark:bg-slate-900 shadow text-slate-800 dark:text-slate-200 hover:bg-gray-100'  : 'bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-400 hover:bg-slate-400/50 dark:hover:bg-slate-500/50'}`}
                  onClick={toggleMode}
                >
                  For Talent
                </Button>
                <Button 
                  size="sm" 
                  className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${currentMode === (
                    'companies'
                  ) ? 'bg-white dark:bg-slate-900 shadow text-slate-800 dark:text-slate-200 hover:bg-gray-100' : 'bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-400 hover:bg-slate-400/50 dark:hover:bg-slate-500/50'}`}
                  onClick={toggleMode}
                >
                  For Companies
                </Button>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentMode === 'talent' ? (
                  <>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                      Showcase Your Skills.
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Land Your Dream Job.</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-10">
                      Stop tweaking your resume for every application. Build a single, powerful profile that gets you noticed by the right companies.
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                      Hire Top Talent.
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Faster Than Ever.</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-10">
                      Ditch the endless resume piles. Access a curated pool of verified professionals ready to make an impact from day one.
                    </p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center space-x-4">
              <Button size="lg" onClick={() => openModal(currentMode)} className="text-lg font-semibold px-8 py-4 rounded-full transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                {currentMode === 'talent' ? 'Create My Profile' : 'Post a Job'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/*<Button size="lg" variant="outline" className="text-lg font-semibold px-8 py-4 rounded-full transition-transform transform hover:scale-105">
                Learn More
              </Button>*/}
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section id="how-it-works" className="py-20 bg-slate-100 dark:bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">How Vocancy Works</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                A streamlined process for both talent and companies, ensuring the perfect match every time.
              </p>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMode}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {currentMode === 'talent' ? (
                  <div className="grid md:grid-cols-3 gap-10">
                    <Card className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-transform">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-6">
                          <UserCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Build Your Digital Identity</h3>
                        <p className="text-slate-600 dark:text-slate-300">Create a comprehensive profile that showcases your skills, experience, and career aspirations in one place.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-transform">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 mb-6">
                          <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Get Skills Verified</h3>
                        <p className="text-slate-600 dark:text-slate-300">Our expert-led, structured interviews validate your expertise, adding a layer of trust for employers.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-transform">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                          <Rocket className="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Get Discovered</h3>
                        <p className="text-slate-600 dark:text-slate-300">Sit back and relax. Companies apply to you based on your verified skills and profile.</p>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-3 gap-10">
                    <Card className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-transform">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 dark:bg-orange-900 mb-6">
                          <Search className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Define Your Talent Needs</h3>
                        <p className="text-slate-600 dark:text-slate-300">Post your job requirements and let our platform identify the best-matched candidates from our talent pool.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-transform">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 dark:bg-red-900 mb-6">
                          <Users className="h-8 w-8 text-red-600 dark:text-red-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Find Verified Talent</h3>
                        <p className="text-slate-600 dark:text-slate-300">Access a curated list of candidates whose skills have been pre-verified through our rigorous process.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-transform">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 dark:bg-teal-900 mb-6">
                          <CheckCircle className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Hire with Confidence</h3>
                        <p className="text-slate-600 dark:text-slate-300">Interview top candidates and make your hiring decision with the assurance of their proven abilities.</p>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                {currentMode === 'talent' ? 'Ready to Find Your Next Opportunity?' : 'Ready to Find Your Next Talent?'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Join Vocancy today and take the next step in your career journey. Whether you're looking for your dream job or the perfect candidate, we've got you covered.
              </p>
              <Button size="lg" onClick={() => openModal(currentMode)} className="text-lg font-semibold px-8 py-4 rounded-full transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                {currentMode === 'talent' ? 'Create My Profile' : 'Post a Job'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-100 dark:bg-slate-800 py-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-slate-600 dark:text-slate-400">&copy; 2025 Vocancy. All rights reserved.</p>
          </div>
        </footer>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={closeModal}>
                <X className="h-6 w-6" />
              </Button>
              <h2 className="text-3xl font-bold text-center mb-6">
                {modalType === 'talent' ? 'Join the Talent Pool' : 'Request a Demo'}
              </h2>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {modalType === 'talent' ? (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="skill" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Primary Skill</label>
                      <input
                        type="text"
                        name="skill"
                        value={formData.skill}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="e.g., React, Python, UI/UX Design"
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Your Company"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Role</label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="e.g., HR Manager"
                        required
                      />
                    </div>
                  </>
                )}
                
                <Button 
                  type="submit" 
                  className={`w-full py-3 rounded-xl font-semibold text-lg ${
                    modalType === 'talent' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                  }`}
                  disabled={state.submitting}
                >
                  {modalType === 'talent' ? 'Create My Profile' : 'Request Demo'}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default App