"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { ArrowDown, Cpu, Crop, Proportions, Scaling, Star } from 'lucide-react';
import Image from 'next/image'

const HeroSection = () => {
    const [textVisible, setTextVisible] = useState(false);
    const [demoHovered, setDemoHovered] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setTextVisible(true), 500);
        return () => clearTimeout(timer);
    },[]);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10 px-6">
                <div className={`transition-all duration-1000 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" }`}>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                            Create
                        </span>
                        <br />
                        <span className="text-white">Without Limits</span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                        Professional image editing powered by AI. Crop, resize, adjust colors, remove backgrounds, and enhance your image with cutting-edge technology.
                    </p>
                    <div className="animate-bounce">
                        <a href="#features" className="p-2 rounded-full transition-all duration-500 mb-6 cursor-pointer backdrop-blur-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent hover:shadow-2xl hover:shadow-blue-500/25 hover:transform hover:scale-120 block w-10 h-10 mx-auto">
                            <ArrowDown size={22} className="mx-auto" />
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <Link href="/dashboard">
                            <Button variant="primary" size="xl" className="cursor-pointer">
                                Start Creating
                            </Button>
                        </Link>
                        <Button variant="glass" size="xl" className="cursor-pointer">
                            Watch Demo
                        </Button>
                    </div>
                </div>

                { /* 3D Demo Interface */}
                <div
                    className={`relative max-w-4xl mx-auto transition-all duration-1000 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} ${demoHovered ? "transform scale-105 rotate-y-6": ""}`}
                    onMouseEnter={() => setDemoHovered(true)}
                    onMouseLeave={() => setDemoHovered(false)}
                    style={{ perspective: "1000px"}}
                >
                    <div className="backdrop-blur-lg bg-white/10 borser border-white/20 rounded-3xl p-6 transform-gpu">
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 min-h-96">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="text-gray-400 text-sm">
                                    <Badge className="h-10 px-4 bg-gray-900/50" variant="outline"> 
                                         <Image width={70} height={27} alt="Pixlyze Logo" src="/pixlyze-logo-v4.png" /> Pro <Star />
                                    </Badge>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6 sm:grid-cols-4">
                                {[
                                    { icon: <Crop className="mx-auto" color="#51bac7" />, label: "Crop" },
                                    { icon: <Scaling className="mx-auto" color="#bb36bb" />, label: "Resize" },
                                    { icon: <Proportions className="mx-auto" color="#b1b13c" />, label: "Adjust" },
                                    { icon: <Cpu className="mx-auto" color="#38c299" />, label: "AI Tools" },
                                ].map((tool, index) => (
                                    <div 
                                        key={index}
                                        className="backdrop-blur-lg bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all cursor-pointer"
                                        title={tool.label}
                                    >
                                        <div className="text-2xl mb-2">{ tool.icon }</div>
                                        <div className="text-xs text-gray-400">{ tool.label }</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="w-full h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 roundex-2xl shadow-blue-500/50 flex items-center justify-center">
                                    <div className="text-white font-bold">Your Canvas</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
