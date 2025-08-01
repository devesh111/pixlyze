"use client";

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { Button } from './ui/button';
import { useStoreUser } from '@/hooks/use-store-user';
import { Authenticated, Unauthenticated } from 'convex/react';
import { LayoutDashboard } from "lucide-react";
import { BarLoader } from "react-spinners";

const Header = () => {
    const { isLoading } = useStoreUser();
    const path = usePathname();

    if(path.includes("/editor")) {
        return null;
    }
    return (
        <header className="fixed left-1/2 top-6 z-50 transform -translate-x-1/2 text-nowrap">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3 flex items-center justify-between w-full">
                <Link href="/" className="mr-10 md:mr-20">
                    <Image
                        src="/pixlyze-logo-v4.png"
                        alt="Pixlyze Logo"
                        className="min-w-24 object-cover"
                        width={96}
                        height={36}
                    />
                </Link>
                {path === "/" && 
                    <div className="hidden md:flex space-x-6">
                        <Link 
                            href="#features"
                            className="text-white text-sm font-semibold transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                        >
                            Features
                        </Link>
                        <Link 
                            href="#pricing"
                            className="text-white text-sm font-semibold transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                        >
                            Pricing
                        </Link>
                        <Link 
                            href="#cta"
                            className="text-white text-sm font-semibold transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                        >
                            Contact
                        </Link>
                    </div>
                }
                <div className="flex items-center gap-3 ml-10 md:ml-20">
                    <Authenticated>
                        <Link href="/dashboard">
                            <Button variant="glass" className="hidden sm:flex cursor-pointer">
                                <LayoutDashboard className="h-3 w-3" />
                                <span className="hidden md:flex">Dashboard</span>
                            </Button>
                        </Link>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10 rounded-lg border border-white/20",
                                    userButtonPopoverCard: "shadow-xl backdrop-blur-md bg-slate-900/90 border border-white/20",
                                    userPreviewMainIdentifier: "font-semibold text-white",
                                }
                            }}
                            afterSignOutUrl="/"
                        />
                    </Authenticated>

                    <Unauthenticated>
                        <SignInButton>
                            <Button variant="glass" className="hidden sm:flex cursor-pointer">
                                Sign In
                            </Button>
                        </SignInButton>

                        <SignUpButton>
                            <Button variant="primary" className="hidden sm:flex cursor-pointer">Get Started</Button>
                        </SignUpButton>
                    </Unauthenticated>
                </div>
                {isLoading && (
                    <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
                        <BarLoader width={"95%"} color="#06b6d4" />
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
