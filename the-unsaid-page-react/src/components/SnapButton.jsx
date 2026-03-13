import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function SnapButton() {
    const [snapped, setSnapped] = useState(false);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSnapped(true)}
                className={`btn ${snapped ? 'btn-primary' : ''}`}
                style={{ position: 'relative', zIndex: 2 }}
                disabled={snapped}
            >
                <Sparkles size={18} /> {snapped ? 'Snapped!' : 'Snap to appreciate'}
            </motion.button>
            <AnimatePresence>
                {snapped && (
                    <motion.div
                        initial={{ opacity: 1, scale: 0 }}
                        animate={{ opacity: 0, scale: 2 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '40px',
                            height: '40px',
                            marginLeft: '-20px',
                            marginTop: '-20px',
                            borderRadius: '50%',
                            border: '4px solid var(--accent-color)',
                            zIndex: 1,
                            pointerEvents: 'none'
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
