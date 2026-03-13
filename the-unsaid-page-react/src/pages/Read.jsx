import { motion, useScroll, useSpring } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useFetch } from '../hooks/useFetch'
import { fetchPostById } from '../data/mockApi'
import { ReadSkeleton } from '../components/Skeleton'
import SnapButton from '../components/SnapButton'
import './Read.css'

export default function Read() {
    const { id } = useParams()
    const { data, loading, error } = useFetch(fetchPostById, id);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (loading) return <ReadSkeleton />;

    const article = error || !data ? {
        title: 'Content Not Found',
        date: '',
        author: '',
        type: '',
        body: 'The page you are looking for has faded into the mist.'
    } : data;

    return (
        <>
        <motion.div
            style={{
                scaleX,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                originX: 0,
                backgroundColor: 'var(--accent-color)',
                zIndex: 1001
            }}
        />
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="read-container"
        >
            <div className="read-header">
                <Link to={-1} className="back-link">
                    <ArrowLeft size={18} /> Back
                </Link>
                <div className="article-meta">
                    {article.type && <span className="meta-tag">{article.type}</span>}
                    <span className="meta-date">{article.date}</span>
                </div>
                <h1 className="article-title">{article.title}</h1>
                {article.author && <p className="article-author">By {article.author}</p>}
            </div>

            <div className="article-body">
                {article.body.split('\n').map((paragraph, idx) => (
                    paragraph ? <p key={idx}>{paragraph}</p> : <br key={idx} />
                ))}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center', paddingBottom: '2rem' }}>
                <SnapButton />
            </div>
        </motion.article>
        </>
    )
}
