
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientBlinds from '../components/GradientBlinds'; 

const CodeGraphic = () => (
    <svg className="w-24 h-24 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const HomePage = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const animationVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="w-full h-screen relative overflow-hidden">
            {/* Background layer - explicitly set to be behind */}
            <div className="absolute inset-0 z-0">
                <GradientBlinds
                    gradientColors={['#FF9FFC', '#5227FF']}
                    angle={50}
                    noise={0.05}
                    blindCount={34}
                    blindMinWidth={110}
                    spotlightRadius={0.35}
                    spotlightSoftness={1}
                    spotlightOpacity={1}
                    mouseDampening={0.58}
                    distortAmount={13}
                    shineDirection="left"
                    mixBlendMode="lighten"
                />
            </div>
            
            {/* Content layer - explicitly set to be in front */}
            <div className="container mx-auto h-full pt-20 relative z-10">
                <div ref={ref} className="flex flex-col items-center justify-center h-full">
                    <motion.header
                        variants={animationVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-cyan-400">SnippetsShare</h1>
                        <p className="text-gray-400 mt-4 text-lg md:text-xl">
                            The easiest way to store, find, and share reusable code.
                        </p>
                    </motion.header>
                    <main className="flex flex-col items-center justify-center space-y-8 text-center">
                        <motion.div
                            variants={animationVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="w-full max-w-md h-64 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl flex items-center justify-center border border-gray-700"
                        >
                            <CodeGraphic />
                        </motion.div>
                        <motion.p
                            variants={animationVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-gray-300 max-w-2xl"
                        >
                            Streamline your development workflow. Stop reinventing the wheel and start building faster with our community-driven snippet library.
                        </motion.p>
                        <motion.div
                            variants={animationVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex space-x-4"
                        >
                            <Link to="/browse" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                                Browse Snippets
                            </Link>
                            <Link to="/add" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                                Add a Snippet
                            </Link>
                        </motion.div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default HomePage;