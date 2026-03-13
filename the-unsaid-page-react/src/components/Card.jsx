import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './Card.css'

export default function Card({ title, excerpt, imgUrl, linkTo, tag, delay = 0 }) {
    return (
        <motion.article
            className="brutal-card article-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
        >
            {imgUrl && (
                <div className="card-image-wrapper">
                    <img src={imgUrl} alt={title} loading="lazy" />
                    {tag && <span className="card-tag">{tag}</span>}
                </div>
            )}

            <div className="card-content">
                {!imgUrl && tag && <span className="card-tag text-only-tag">{tag}</span>}
                <h3>{title}</h3>
                <p>{excerpt}</p>

                <Link to={linkTo} className="read-more">
                    Read More <ArrowRight size={16} />
                </Link>
            </div>
        </motion.article>
    )
}
