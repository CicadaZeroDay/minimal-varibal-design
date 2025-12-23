
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channel: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will get back to you within 24 hours.');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] overflow-hidden shadow-2xl shadow-purple-900/20 text-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 bg-gradient-to-br from-[#8B7EC8] to-[#6366F1] text-white">
            <h2 className="text-4xl font-extrabold mb-6">Ready to scale?</h2>
            <p className="text-white/80 mb-10 text-lg">Have questions about ClickPilot or want to report an issue? We'll respond within 24 hours.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <span className="font-semibold">support@clickpilot.app</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <i className="fa-brands fa-discord"></i>
                </div>
                <span className="font-semibold">Join Creator Discord</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-12 bg-white">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your full name"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8B7EC8] transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8B7EC8] transition-all"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="How can we help?"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8B7EC8] transition-all resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-[#6366F1] text-white rounded-2xl font-bold text-lg hover:bg-[#5255d4] transition-all shadow-xl shadow-indigo-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
