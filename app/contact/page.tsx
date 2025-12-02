"use client";

import { useState } from "react";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #667eea)' }}>
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-[#131929] p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2]">
                  <span className="text-2xl">{info.icon}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{info.title}</h2>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-white/70">{detail}</p>
                ))}
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-[#131929] p-6 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 rounded-lg bg-[#667eea]/20 hover:bg-[#667eea] flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[#131929] p-8 rounded-xl border border-white/10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                    placeholder="Your Company"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    details: ["contact@stafona.com", "support@stafona.com"]
  },
  {
    icon: "📞",
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
  },
  {
    icon: "📍",
    title: "Office",
    details: ["123 Tech Avenue", "Silicon Valley, CA 94025"]
  }
];

const socialLinks = [
  { name: "LinkedIn", icon: "💼", url: "#" },
  { name: "Twitter", icon: "🐦", url: "#" },
  { name: "GitHub", icon: "💻", url: "#" },
  { name: "Facebook", icon: "📘", url: "#" }
];

