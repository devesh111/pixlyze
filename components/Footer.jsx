import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
            <div className="items-center flex flex-col">
                <button
                    onClick={scrollToTop}
                    className="p-3 rounded-full transition-all duration-500 mb-6 cursor-pointer backdrop-blur-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent hover:shadow-2xl hover:shadow-blue-500/25 hover:transform hover:scale-120"
                >
                    <ArrowUp size={20} />
                </button>

                <p className="text-gray-300 text-center flex items-center gap-2 font-bold">
                    Made with <Heart size={16} className="text-red-500" /> by Devesh Pandey
                </p>

                <p className="text-gray-400 text-sm mt-2">
                    &copy; 2025 Pixlyze. All rights reserved.  
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
