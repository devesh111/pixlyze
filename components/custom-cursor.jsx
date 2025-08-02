import { useEffect, useState } from 'react';

const CustomCursor = ({ mousePosition }) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.closest('button, .glass-header, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <div
      className={`fixed w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 transition-transform duration-150 ${
        isHovering ? 'scale-150' : 'scale-100'
      }`}
      style={{
        zIndex: 9999,
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
        transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px) scale(${isHovering ? 1.5 : 1})`,
      }}
    />
  );
};

export default CustomCursor;