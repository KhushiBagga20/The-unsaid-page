import { motion } from 'framer-motion'
import Card from '../components/Card'

import { useFetch } from '../hooks/useFetch'
import { fetchPostsList } from '../data/mockApi'
import { CardSkeleton } from '../components/Skeleton'

export default function Stories() {
    const { data: storiesList, loading } = useFetch(fetchPostsList, 'Story')

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ padding: '4rem 2rem', minHeight: '80vh' }}
        >
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Stories</h1>
                <div className="section-line"></div>
                <p style={{ color: 'var(--text-muted)', marginTop: '2rem' }}>
                    Short fiction and personal reflections.
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '3rem'
            }}>
                {loading ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} style={{ height: '450px' }}>
                            <CardSkeleton />
                        </div>
                    ))
                ) : (
                    storiesList?.map((story, index) => (
                        <div key={story.id} style={{ height: '450px' }}>
                            <Card
                                tag="Story"
                                title={story.title}
                                excerpt={story.excerpt}
                                imgUrl={story.imgUrl}
                                linkTo={`/read/${story.id}`}
                                delay={index * 0.15}
                            />
                        </div>
                    ))
                )}
            </div>
        </motion.div>
    )
}
