import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const CTA = () => {
  return (
    <section className="text-center py-20" id="cta">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-6">
            Ready To{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Create Something Amazing?
            </span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 font-light">
            Join thousands of creators who are already using AI to taransform their image and bring their vision to life.
        </p>
        <Link href="/dashboard">
            <Button variant="primary" size="xl" className="cursor-pointer">
                🌟 Start Creating Now
            </Button>
        </Link>
      </div>
    </section>
  )
}

export default CTA
