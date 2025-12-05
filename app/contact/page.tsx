"use client";

import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

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
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #0A9548)' }}>
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
              <div key={index} className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0A9548] to-[#16DB65] flex-shrink-0">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white" style={{ margin: 0 }}>{info.title}</h2>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-white/60 text-base leading-relaxed">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-white/5">
              <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 rounded-xl bg-[#0A9548]/20 hover:bg-[#0A9548] flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[#1e293b] p-8 rounded-2xl border border-white/5">
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
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#0A9548] focus:outline-none"
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
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#0A9548] focus:outline-none"
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
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#0A9548] focus:outline-none"
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
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#0A9548] focus:outline-none"
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
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#0A9548] focus:outline-none"
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
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#0A9548] focus:outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-[#0A9548] to-[#16DB65] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 32, color: 'white' }} />,
    title: "Email",
    details: ["contact@stafona.com", "support@stafona.com"]
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 32, color: 'white' }} />,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 32, color: 'white' }} />,
    title: "Office",
    details: ["123 Tech Avenue", "Silicon Valley, CA 94025"]
  }
];

const socialLinks = [
  { name: "LinkedIn", icon: <LinkedInIcon sx={{ fontSize: 24, color: 'white' }} />, url: "https://www.linkedin.com/company/stafona" },
  { name: "Twitter", icon: <TwitterIcon sx={{ fontSize: 24, color: 'white' }} />, url: "https://twitter.com/stafona" },
  { name: "GitHub", icon: <GitHubIcon sx={{ fontSize: 24, color: 'white' }} />, url: "https://github.com/stafona" },
  { name: "Facebook", icon: <FacebookIcon sx={{ fontSize: 24, color: 'white' }} />, url: "#" }
];

