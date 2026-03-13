import { motion } from 'framer-motion'
import Card from '../components/Card'

import { useFetch } from '../hooks/useFetch'
import { fetchPostsList } from '../data/mockApi'
import { CardSkeleton } from '../components/Skeleton'

export default function Poems() {
    const { data: poemsList, loading } = useFetch(fetchPostsList, 'Poem')

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ padding: '4rem 2rem', minHeight: '80vh' }}
        >
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Poems</h1>
                <div className="section-line"></div>
                <p style={{ color: 'var(--text-muted)', marginTop: '2rem' }}>
                    Verses written in the margins of life.
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {loading ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} style={{ height: '400px' }}>
                            <CardSkeleton />
                        </div>
                    ))
                ) : (
                    poemsList?.map((poem, index) => (
                        <div key={poem.id} style={{ height: '400px' }}>
                            <Card
                                tag="Poem"
                                title={poem.title}
                                excerpt={poem.excerpt}
                                imgUrl={poem.imgUrl}
                                linkTo={`/read/${poem.id}`}
                                delay={index * 0.1}
                            />
                        </div>
                    ))
                )}
            </div>
        </motion.div>
    )
}
