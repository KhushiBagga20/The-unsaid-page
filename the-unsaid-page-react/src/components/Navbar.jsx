import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'
import { Menu, X, Sun, Moon, BookOpen } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useUser } from '../context/UserContext'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const { theme, toggleTheme } = useTheme()
    const { points } = useUser()

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Poems', path: '/poems' },
        { name: 'Stories', path: '/stories' },
        { name: 'Submit', path: '/submit' },
    ]

    return (
        <header className="navbar-container">
            <div className="container navbar">
                <Link to="/" className="site-title">
                    The Unsaid Page
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul>
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="nav-controls desktop-only">
                    <span className="user-points" title="User Points">{points} pts</span>
                    <div className="theme-toggles">
                        <button onClick={() => toggleTheme('light')} className={`theme-btn ${theme === 'light' ? 'active' : ''}`} aria-label="Light Mode"><Sun size={18} /></button>
                        <button onClick={() => toggleTheme('dark')} className={`theme-btn ${theme === 'dark' ? 'active' : ''}`} aria-label="Dark Mode"><Moon size={18} /></button>
                        <button onClick={() => toggleTheme('sepia')} className={`theme-btn ${theme === 'sepia' ? 'active' : ''}`} aria-label="Sepia Mode"><BookOpen size={18} /></button>
                    </div>
                </div>

                {/* Mobile Nav Toggle */}
                <button 
                    className="mobile-toggle" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="mobile-nav"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <ul>
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={location.pathname === link.path ? 'active' : ''}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="nav-controls mobile-controls">
                            <span className="user-points" title="User Points">{points} pts</span>
                            <div className="theme-toggles">
                                <button onClick={() => toggleTheme('light')} className={`theme-btn ${theme === 'light' ? 'active' : ''}`} aria-label="Light Mode"><Sun size={18} /></button>
                                <button onClick={() => toggleTheme('dark')} className={`theme-btn ${theme === 'dark' ? 'active' : ''}`} aria-label="Dark Mode"><Moon size={18} /></button>
                                <button onClick={() => toggleTheme('sepia')} className={`theme-btn ${theme === 'sepia' ? 'active' : ''}`} aria-label="Sepia Mode"><BookOpen size={18} /></button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}
