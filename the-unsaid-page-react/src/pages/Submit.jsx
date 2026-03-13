import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUser } from '../context/UserContext'
import { submitPost } from '../data/mockApi'
import ReactMarkdown from 'react-markdown'
import './Submit.css'

export default function Submit() {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset } = useForm({
        defaultValues: {
            name: '',
            email: '',
            title: '',
            type: 'poem',
            content: ''
        }
    });

    const [submitted, setSubmitted] = useState(false);
    const { addPoints } = useUser();
    
    const watchedContent = watch('content');

    const onSubmit = async (data) => {
        try {
            await submitPost(data);
            addPoints(10); // Reward 10 points
            setSubmitted(true);
            reset();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container submit-container"
            style={{ maxWidth: '1000px' }}
        >
            <header className="submit-header">
                <h1>Share Your Words</h1>
                <div className="section-line"></div>
                <p>This is a safe space for your unsaid thoughts. We welcome poems, stories, and quiet reflections. (Supports Markdown!)</p>
            </header>

            {submitted ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="success-message brutal-card"
                >
                    <h2>Thank You</h2>
                    <p>Your piece has been submitted and will be reviewed shortly.</p>
                    <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>+10 Points earned!</p>
                    <button
                        className="btn btn-primary mt-4"
                        onClick={() => setSubmitted(false)}
                    >
                        Submit Another
                    </button>
                </motion.div>
            ) : (
                <motion.form
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="submit-form brutal-card"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <div className="form-group-row">
                        <div className="form-group">
                            <label htmlFor="name">Pen Name (or leave blank for Anonymous)</label>
                            <input
                                type="text"
                                id="name"
                                {...register('name')}
                                className="brutal-input"
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email <span className="required">*</span></label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', { 
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                className="brutal-input"
                                placeholder="jane@example.com"
                            />
                            {errors.email && <span className="error-msg">{errors.email.message}</span>}
                        </div>
                    </div>

                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Type of Submission</label>
                            <div className="radio-group" style={{ marginTop: '0.8rem' }}>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        value="poem"
                                        {...register('type')}
                                    />
                                    <span className="radio-custom"></span>
                                    Poem
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        value="story"
                                        {...register('type')}
                                    />
                                    <span className="radio-custom"></span>
                                    Story
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Title <span className="required">*</span></label>
                            <input
                                type="text"
                                id="title"
                                {...register('title', { required: 'Title is required', minLength: { value: 3, message: 'Title must be at least 3 chars' } })}
                                className="brutal-input"
                                placeholder="The Title of Your Piece"
                            />
                            {errors.title && <span className="error-msg">{errors.title.message}</span>}
                        </div>
                    </div>

                    <div className="content-preview-split">
                        <div className="form-group">
                            <label htmlFor="content">Your Piece <span className="required">*</span></label>
                            <textarea
                                id="content"
                                {...register('content', { 
                                    required: 'Content is required', 
                                    minLength: { value: 20, message: 'Your piece must be at least 20 characters' } 
                                })}
                                rows="12"
                                className="brutal-input"
                                placeholder="Start writing (Markdown supported like **bold**)..."
                                style={{ resize: 'vertical' }}
                            ></textarea>
                            {errors.content && <span className="error-msg">{errors.content.message}</span>}
                        </div>
                        
                        <div className="form-group preview-pane">
                            <label>Live Preview</label>
                            <div className="brutal-card preview-content">
                                {watchedContent ? (
                                    <ReactMarkdown>{watchedContent}</ReactMarkdown>
                                ) : (
                                    <span style={{ color: 'var(--text-muted)' }}>Preview will appear here...</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send to The Void'}
                    </button>
                </motion.form>
            )}
        </motion.div>
    )
}
