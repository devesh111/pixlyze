"use client";

import { useParallax } from '@/hooks/use-parallax';

const FloatingShapes2 = () => {
    const scrollY = useParallax();
    const shapes = [
        { size: 'w-72 h-72', position: 'top-20 left-10', gradient: 'from-purple-500 to-orange-600', delay: 0 },
        { size: 'w-96 h-96', position: 'top-1/3 right-20', gradient: 'from-pink-500 to-purple-500', delay: 2 },
        { size: 'w-80 h-80', position: 'bottom-1/4 left-1/4', gradient: 'from-orange-200 to-purple-500', delay: 4 },
        { size: 'w-64 h-64', position: 'bottom-20 right-10', gradient: 'from-purple-500 to-pink-500', delay: 1 },
    ];

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {shapes.map((shape, index) => (
            <div
            key={index}
            className={`absolute ${shape.size} ${shape.position} bg-gradient-to-r ${shape.gradient} rounded-full  blur-3xl opacity-20 animate-pulse`}
            style={{
                transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
                animationDelay: `${shape.delay}s`,
            }}
            />
        ))}
        </div>
    );
};

export default FloatingShapes2;
