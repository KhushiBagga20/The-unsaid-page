import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import './Home.css'

export default function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={containerVariants}
        >
            <section className="hero-section">
                <div className="hero-background">
                    <div className="glow glow-1"></div>
                    <div className="glow glow-2"></div>
                </div>
                <div className="container hero-content">
                    <motion.h1 variants={itemVariants} className="hero-title">
                        A Quiet Place for <span className="title-accent">Loud Minds</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="hero-subtitle">
                        Read, reflect, and rest awhile.
                    </motion.p>
                    <motion.div variants={itemVariants} className="hero-actions">
                        <Link to="/stories" className="btn btn-primary">Read Stories</Link>
                        <Link to="/poems" className="btn">Read Poems</Link>
                    </motion.div>
                </div>
            </section>

            <section className="featured-section container">
                <motion.div variants={itemVariants} className="section-header">
                    <h2>Featured Works</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="bento-grid">
                    <div className="bento-item main-feature">
                        <Card
                            tag="Editor's Pick"
                            title="The Dust on the Window Sill"
                            excerpt="A short reflection on the passage of time and the things we leave behind when the seasons change. The golden hour hits the dust motes just right, making them dance in the stillness of the afternoon."
                            imgUrl="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            linkTo="/read/dust-window"
                        />
                    </div>
                    <div className="bento-item side-feature">
                        <Card
                            tag="Featured Poem"
                            title="Morning Fog"
                            excerpt="The world is soft today, edges blurred by the grey breath of a sleeping giant..."
                            imgUrl="https://images.unsplash.com/photo-1478641300939-0ec5188d3802?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            linkTo="/read/morning-fog"
                            delay={0.2}
                        />
                    </div>
                    <div className="bento-item side-feature">
                        <Card
                            tag="Story"
                            title="Gardening in Winter"
                            excerpt="What we plant when the ground is frozen, waiting for the thaw that always comes."
                            linkTo="/read/gardening-winter"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
