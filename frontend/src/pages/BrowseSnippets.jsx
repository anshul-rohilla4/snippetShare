
import React, { useState, useEffect, useMemo } from 'react';
import SnippetService from "../services/SnippetService";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { js_beautify } from 'js-beautify';
import TargetCursor from "../components/TargetCursor";
import DarkVeil from '../components/DarkVeil';

const AnimatedSnippetCard = ({ snippet, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const formattedCode = useMemo(() => {
        try {
            return js_beautify(snippet.code, {
                indent_size: 2,
                space_in_empty_paren: true,
            });
        } catch (e) {
            return snippet.code;
        }
    }, [snippet.code]);

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.2, delay: index * 0.01 }}
            key={snippet.id}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-2xl overflow-hidden transition-all duration-500 hover:duration-300 p-3 border border-cyan-400/50 cursor-target group"
        >
            <div className="p-3">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-500">
                    {snippet.title}
                </h3>
                <p className="text-gray-300 mt-1 group-hover:text-cyan-200 transition-colors duration-300">{snippet.description}</p>
            </div>
            <div className="text-sm">
                <SyntaxHighlighter
                    language="javascript"
                    style={atomDark}
                    wrapLines={true}
                    className="hide-scrollbar"
                    customStyle={{
                        margin: 0,
                        padding: '1.25rem',
                        borderRadius: '0 0 0.5rem 0.5rem',
                        maxHeight: '20rem',
                        background: 'linear-gradient(145deg, #1a202c, #2d3748)',
                    }}
                >
                    {formattedCode}
                </SyntaxHighlighter>
            </div>
        </motion.div>
    );
};

const BrowseSnippets = () => {
    const [snippets, setSnippets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        SnippetService.getAllSnippets()
            .then(response => {
                setSnippets(response.data);
            })
            .catch(err => {
                console.error("Error fetching snippets:", err);
                setError("Could not load snippets. Please make sure the backend server is running.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="relative min-h-screen">
                {/* DarkVeil Background - Full window height */}
                <div style={{ 
                    width: '100%', 
                    height: '100vh', 
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    zIndex: -1 
                }}>
                    <DarkVeil />
                </div>

                {/* Loading Spinner */}
                <div className="flex items-center justify-center text-center text-gray-300 min-h-screen">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
                    <p className="mt-2 ml-2">Loading snippets...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="relative min-h-screen">
                {/* DarkVeil Background - Full window height */}
                <div style={{ 
                    width: '100%', 
                    // height: '', 
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    zIndex: -1 
                }}>
                    <DarkVeil />
                </div>

                {/* Error Message */}
                <div className="flex items-center justify-center text-center text-red-400 min-h-screen">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen">
            {/* DarkVeil Background - Extends full window height and beyond */}
            <div style={{ 
                width: '100%', 
                minHeight: '100vh', 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                zIndex: -1 
            }}>
                <DarkVeil />
            </div>

            {/* Content */}
            <div className="container mx-auto pt-28 px-4 relative z-10">
                <TargetCursor 
                    className="fixed inset-0 pointer-events-none z-50"
                    spotlightRadius={0.35}
                    spotlightSoftness={1}
                    spotlightOpacity={1}
                    mouseDampening={0.58}
                    distortAmount={13}
                    shineDirection="left"
                    mixBlendMode="lighten"
                    gradientColors={['#00f5ff', '#8a2be2']}
                />

                <header className="text-center mb-12">
                    <motion.h1 
                        className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Browse All Snippets
                    </motion.h1>
                    <motion.p 
                        className="text-gray-300 mt-2 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Explore the collection of shared code.
                    </motion.p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
                    {snippets.length === 0 ? (
                        <div className="text-center text-gray-400 py-16 md:col-span-2 lg:col-span-3">
                            <p className="text-xl">No snippets have been shared yet.</p>
                        </div>
                    ) : (
                        snippets.map((snippet, index) => (
                            <AnimatedSnippetCard key={snippet.id} snippet={snippet} index={index} />
                        ))
                    )}
                </section>
            </div>
        </div>
    );
};

export default BrowseSnippets;