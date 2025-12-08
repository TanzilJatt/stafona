"use client";

import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #667eea)' }}>
            Meet The Team
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Our Expert Teams
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Talented professionals dedicated to delivering excellence in every project
          </p>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <div
                key={index}
                className="bg-[#020202] p-8 rounded-xl border border-white/10 hover:border-[#667eea] transition-all hover:transform hover:-translate-y-2 text-center"
              >
                <div
                  className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ background: team.gradient }}
                >
                  {team.icon}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{team.name}</h2>
                <p className="text-[#667eea] font-semibold mb-4">{team.role}</p>
                <p className="text-white/70 leading-relaxed">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-[#020202] to-[#131929] rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Want to Join Our Team?</h2>
            <p className="text-white/90 text-lg mb-8">
              We're always looking for talented professionals to join our growing family
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/careers"
                className="px-8 py-3 bg-white text-[#020202] rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#667eea] transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const teams = [
  {
    icon: <CodeIcon sx={{ fontSize: 50, color: 'white' }} />,
    name: "Development Team",
    role: "Full-Stack Developers",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "Expert developers proficient in modern frameworks and best coding practices. Our team builds scalable, maintainable applications."
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 50, color: 'white' }} />,
    name: "Design Team",
    role: "UI/UX Designers",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    description: "Creative designers crafting beautiful and intuitive user experiences. We focus on user-centered design principles."
  },
  {
    icon: <SmartToyIcon sx={{ fontSize: 50, color: 'white' }} />,
    name: "AI/ML Team",
    role: "Data Scientists",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    description: "Specialists in artificial intelligence and machine learning solutions. Our data scientists transform complex data into insights."
  },
  {
    icon: <SettingsIcon sx={{ fontSize: 50, color: 'white' }} />,
    name: "DevOps Team",
    role: "Infrastructure Engineers",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    description: "DevOps experts ensuring smooth deployment and system reliability. We automate processes and maintain robust infrastructure."
  },
  {
    icon: <SearchIcon sx={{ fontSize: 50, color: 'white' }} />,
    name: "QA Team",
    role: "Quality Assurance",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    description: "Meticulous testers ensuring flawless product quality and performance. Our QA team guarantees every release meets standards."
  },
  {
    icon: <BarChartIcon sx={{ fontSize: 50, color: 'white' }} />,
    name: "Project Management",
    role: "PMs & Scrum Masters",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    description: "Experienced managers ensuring projects deliver on time and budget. We coordinate teams and stakeholders for success."
  }
];

