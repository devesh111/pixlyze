import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 1000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-20 right-4 z-50 p-4 rounded-lg backdrop-blur-lg border transition-all duration-300 ${
      type === 'success' 
        ? 'bg-green-500/20 border-green-500/50 text-green-100' 
        : 'bg-red-500/20 border-red-500/50 text-red-100'
    }`}>
      {message}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setToast({ message: 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setToast({ message: 'Please fix the errors in the form.', type: 'error' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to transform your creative workflow? Let's discuss how Pixlyze can revolutionize your image editing experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Email Us</h3>
                  <p className="text-white/70">contact@pixlyze.devpy.rest</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Call Us</h3>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Visit Us</h3>
                  <p className="text-white/70">Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
                    errors.name ? 'border-red-500' : 'border-white/20'
                  }`}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  }`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
                    errors.subject ? 'border-red-500' : 'border-white/20'
                  }`}
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/20'
                  }`}
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:transform hover:scale-105"
              >
                Send Message
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Contact;