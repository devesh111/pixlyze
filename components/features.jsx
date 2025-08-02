import { useIntersectionObserver } from "@/hooks/use-landing-hooks";
import { Crop, FilePenLine, Image, Proportions, Scaling, Sparkles } from "lucide-react";
import { useState } from "react";

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 transition-all duration-700 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${isHovered ? "transform scale-115 rotate-1 shadow-2xl" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed font-normal">{description}</p>
    </div>
  );
};

// Features Section Component
const FeaturesSection = () => {

  const features = [
    {
      icon: <Crop />,
      title: "Smart Crop & Resize",
      description:
        "Interactive cropping with aspect ratio constraints and intelligent resizing that preserves image quality across any dimension.",
    },
    {
      icon: <Scaling />,
      title: "Color & Light Adjustment",
      description:
        "Professional-grade brightness, contrast, saturation controls with real-time preview and auto-enhance capabilities.",
    },
    {
      icon: <Sparkles />,
      title: "AI Background Removal",
      description:
        "Remove or replace backgrounds instantly using advanced AI that detects complex edges and fine details with precision.",
    },
    {
      icon: <FilePenLine />,
      title: "AI Content Editor",
      description:
        "Edit images with natural language prompts. Remove objects, change elements, or add new content using generative AI.",
    },
    {
      icon: <Image />,
      title: "Image Extender",
      description:
        "Expand your canvas in any direction with AI-powered generative fill that seamlessly blends new content with existing images.",
    },
    {
      icon: <Proportions />,
      title: "AI Upscaler",
      description:
        "Enhance image resolution up to 4x using AI upscaling technology that preserves details and reduces artifacts.",
    },
  ];

  return (
    <section className="py-20" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Unleash the Power
            </span>
            <br />
            of Next-Gen AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Our cutting-edge AI technology combines quantum computing principles with deep learning to deliver unprecedented image editing capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;