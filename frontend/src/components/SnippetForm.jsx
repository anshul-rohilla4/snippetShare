
import React from 'react';
import { useState } from 'react';
import SnippetService from '../services/SnippetService';
import { motion, AnimatePresence } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer'; 
import LightRays from './LightRays';

const SnippetForm = ({ onSnippetCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [code, setCode] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    // --- SCROLL ANIMATION SETUP ---
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const formVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };
    // --- END SCROLL ANIMATION SETUP ---

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title || !description || !code) {
            setError("All fields are required.");
            return;
        }
        setIsSubmitting(true);
        setError(null);
        const newSnippet = { title, description, code };
        SnippetService.createSnippet(newSnippet)
            .then(response => {
                onSnippetCreated(response.data);
                setTitle('');
                setDescription('');
                setCode('');
                setSuccessMessage('Snippet added successfully!');
                setTimeout(() => setSuccessMessage(''), 3000);
            })
            .catch(error => {
                console.error("Failed to create snippet:", error);
                const errorMessage = error.response?.data?.message || "Something went wrong. Please try again.";
                setError(errorMessage);
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <div className="container mx-auto min-h-screen pt-20 px-4 flex items-center justify-center relative">
            {/* LightRays Background */}
            <div style={{ 
                width: '100%', 
                height: '100vh', 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                zIndex: -1 
            }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#609ae6"
                    raysSpeed={1.3}
                    lightSpread={0.6}
                    rayLength={1.1}
                    followMouse={true}
                    mouseInfluence={0.03}
                    noiseAmount={0.2}
                    distortion={0}
                    className="custom-rays"
                />
            </div>

            {/* Success Message */}
            <AnimatePresence>
                {successMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{successMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Animated Form Card */}
            <motion.div
                ref={ref}
                variants={formVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                id='Add' 
                className="bg-gray-800/90 p-6 rounded-lg shadow-2xl w-full max-w-2xl backdrop-blur-sm border border-cyan-500/30"
            >
                <motion.h2 
                    variants={formVariants} 
                    className="text-3xl font-semibold mb-6 text-cyan-300 text-center"
                >
                    Add a New Snippet
                </motion.h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={formVariants}>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                            Title
                        </label>
                        <input 
                            id="title" 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            className="w-full bg-gray-700/70 text-white rounded-md p-2 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition backdrop-blur-sm" 
                            placeholder="e.g., Simple Java Loop" 
                            disabled={isSubmitting} 
                        />
                    </motion.div>
                    <motion.div variants={formVariants}>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                            Description
                        </label>
                        <input 
                            id="description" 
                            type="text" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            className="w-full bg-gray-700/70 text-white rounded-md p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition backdrop-blur-sm" 
                            placeholder="What does this code do?" 
                            disabled={isSubmitting} 
                        />
                    </motion.div>
                    <motion.div variants={formVariants}>
                        <label htmlFor="code" className="block text-sm font-medium text-gray-300 mb-2">
                            Code
                        </label>
                        <textarea 
                            id="code" 
                            value={code} 
                            onChange={(e) => setCode(e.target.value)} 
                            rows="10" 
                            className="w-full bg-gray-700/70 text-white rounded-md p-3 font-mono text-sm border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition backdrop-blur-sm" 
                            placeholder="for (int i = 0; i < 5; i++) { ... }" 
                            disabled={isSubmitting}
                        ></textarea>
                    </motion.div>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <motion.button 
                        variants={formVariants} 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sharing...' : 'Share Snippet'}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default SnippetForm;