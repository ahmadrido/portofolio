import React, { useEffect, useState } from 'react'
import certivicate from '../../assets/images/showcerti.png'
import project from '../../assets/images/project.png'
import { FaEye, FaGithub, FaExternalLinkAlt, FaTimes, FaPlay, FaCode } from 'react-icons/fa'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-black/50 p-6 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

const Achievment = () => {
    const [showCertificateModal, setShowCertificateModal] = useState(false)
    const [showProjectModal, setShowProjectModal] = useState(false)
    const [selectedCertificate, setSelectedCertificate] = useState(null)
    const [selectedProject, setSelectedProject] = useState(null)

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowDialog(false);
        }, 3000);

        return () => clearTimeout(timer);
    } , [])

    // Project details with more interactive content
    const projectDetails = [
      {
        id: 1,
        title: "Pixel Adventure Game",
        description: "An immersive 2D pixel art adventure game built with modern web technologies. Features include character progression, interactive environments, and engaging storylines.",
        technologies: ["React", "Three.js", "WebGL", "Canvas API"],
        imageUrl: project,
        githubLink: "#",
        liveLink: "#",
        status: "Completed",
        difficulty: "Advanced",
        features: ["Pixel Art Animation", "Sound Effects", "Save System", "Multiplayer Support"]
      },
      {
        id: 2,
        title: "Portfolio Dashboard",
        description: "A dynamic portfolio dashboard with real-time analytics, interactive charts, and responsive design. Perfect for showcasing professional work.",
        technologies: ["React", "D3.js", "Node.js", "MongoDB"],
        imageUrl: project,
        githubLink: "#",
        liveLink: "#",
        status: "In Progress",
        difficulty: "Intermediate",
        features: ["Real-time Data", "Interactive Charts", "Dark Mode", "Mobile Responsive"]
      },
      {
        id: 3,
        title: "AI Chat Interface",
        description: "Modern chat interface with AI integration, featuring real-time messaging, file sharing, and intelligent responses.",
        technologies: ["Python", "FastAPI", "React", "WebSocket"],
        imageUrl: project,
        githubLink: "#",
        liveLink: "#",
        status: "Completed",
        difficulty: "Expert",
        features: ["AI Integration", "File Upload", "Real-time Chat", "Voice Messages"]
      }
    ];

    // Certificate details
    const certificateDetails = [
      {
        id: 1,
        title: "Advanced Web Development Certification",
        issuer: "Pixel Academy",
        date: "June 2024",
        imageUrl: certivicate,
        skills: ["React", "Node.js", "MongoDB", "TypeScript"],
        credentialId: "PWD-2024-001",
        description: "Comprehensive certification covering modern web development practices, including frontend frameworks, backend APIs, and database management."
      },
      {
        id: 2,
        title: "Game Development Mastery",
        issuer: "Interactive Learning Hub",
        date: "January 2024",
        imageUrl: certivicate,
        skills: ["Unity", "C#", "Game Design", "3D Modeling"],
        credentialId: "GDM-2024-042",
        description: "Specialized certification in game development fundamentals, covering game mechanics, player experience, and interactive storytelling."
      },
      {
        id: 3,
        title: "UI/UX Design Excellence",
        issuer: "Design Institute",
        date: "March 2024",
        imageUrl: certivicate,
        skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
        credentialId: "UXE-2024-128",
        description: "Professional certification in user interface and user experience design, focusing on human-centered design principles."
      }
    ];

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className='relative w-full h-screen overflow-hidden'>

      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
{/* 
      <Navbar 
        musicPlay={musicPlay} 
        handle={() => setMusicPlay(!musicPlay)}
        selectedTab={setSelectedTab}
        username={username}
      /> */}

      <div className="Ability h-[85%] relative md:overflow-hidden overflow-y-scroll mt-20 text-white p-5 text-pixelify">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-10">
          <div 
            className="cursor-pointer hover:-translate-y-3 transition-all transform hover:scale-105"
            onClick={() => setShowCertificateModal(true)}
          >
            <div className="relative group">
              <img src={certivicate} alt="Certificates" className="rounded-lg shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-end p-4">
                <span className="text-white font-bold text-lg">View Certificates</span>
              </div>
            </div>
          </div>
          <div 
            className="cursor-pointer hover:-translate-y-3 transition-all transform hover:scale-105"
            onClick={() => setShowProjectModal(true)}
          >
            <div className="relative group">
              <img src={project} alt="Projects" className="rounded-lg shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-end p-4">
                <span className="text-white font-bold text-lg">Explore Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate modal with split view */}
      <Modal isOpen={showCertificateModal} onClose={() => {setShowCertificateModal(false); setSelectedCertificate(null)}}>
        <div className="flex md:flex-row flex-col h-full">
          {/* Left side - Certificate list */}
          <div className={`${selectedCertificate ? 'md:w-1/2' : 'w-full'} transition-all duration-500 pr-4`}>
            <h2 className="text-2xl font-bold mb-4 pixelify border-b border-black py-2">Certificates</h2>
            <div className="space-y-4 h-[80vh] overflow-y-auto overflow-x-hidden">
              {certificateDetails.map((cert) => (
                <div 
                  key={cert.id}
                  className={`card border h-auto flex w-full items-center gap-5 p-5 bg-white/10 rounded-lg shadow-lg cursor-pointer hover:bg-white/20 transition-all transform ${selectedCertificate?.id === cert.id ? 'bg-white/50' : ''}`} 
                  onClick={() => handleCertificateClick(cert)}
                >
                  <img src={cert.imageUrl} className='h-16 w-16 object-cover rounded' alt="" />
                  <div className="desc-certi flex-1">
                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                    <p className="text-white/70 text-sm">Issuer: {cert.issuer}</p>
                    <p className="text-white/70 text-sm">Date: {cert.date}</p>
                    <div className="flex gap-2 mt-2">
                      {cert.skills.slice(0, 2).map((skill, idx) => (
                        <span key={idx} className="bg-amber-500 text-xs px-2 py-1 rounded text-white">{skill}</span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="bg-gray-600 text-xs px-2 py-1 rounded text-white">+{cert.skills.length - 2}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Certificate details */}
          {selectedCertificate && (
            <div className="md:w-1/2 md:pl-4 md:border-l border-white/20 animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Certificate Details</h3>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 space-y-4">
                <img 
                  src={selectedCertificate.imageUrl} 
                  alt={selectedCertificate.title}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{selectedCertificate.title}</h4>
                  <p className="text-white/80 text-sm mb-4">{selectedCertificate.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/60">Issuer:</span>
                      <p className="text-white font-medium">{selectedCertificate.issuer}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Date:</span>
                      <p className="text-white font-medium">{selectedCertificate.date}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-white/60">Credential ID:</span>
                      <p className="text-white font-medium font-mono">{selectedCertificate.credentialId}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-white/60 text-sm">Skills Covered:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedCertificate.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="bg-amber-500 text-xs px-3 py-1 rounded-full text-white font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all">
                    Verify Certificate
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>

      {/* Project modal with enhanced design */}
      <Modal isOpen={showProjectModal} onClose={() => {setShowProjectModal(false); setSelectedProject(null)}}>
        <div className="flex md:flex-row gap-5 md:gap-0 flex-col h-full">
          {/* Left side - Project list */}
          <div className={`${selectedProject ? 'md:w-1/2' : 'w-full'} transition-all duration-500 md:pr-4`}>
            <h2 className="text-2xl font-bold mb-4 pixelify border-b border-black py-2">Projects Showcase</h2>
            <div className="space-y-6 max-h-[80vh] overflow-y-auto overflow-x-hidden">
              {projectDetails.map((proj) => (
                <div 
                  key={proj.id}
                  className={`relative group bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 cursor-pointer hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-[1.02] border border-white/10 ${selectedProject?.id === proj.id ? 'bg-white/30' : ''}`} 
                  onClick={() => handleProjectClick(proj)}
                >
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <img src={proj.imageUrl} className='h-20 w-20 object-cover rounded-lg' alt="" />
                      <div className="absolute -top-2 -right-2">
                        <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                          proj.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                        }`}>
                          {proj.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded font-medium ${
                          proj.difficulty === 'Expert' ? 'bg-red-500 text-white' :
                          proj.difficulty === 'Advanced' ? 'bg-orange-500 text-white' :
                          'bg-amber-500 text-white'
                        }`}>
                          {proj.difficulty}
                        </span>
                      </div>
                      
                      <p className="text-white/80 text-sm mb-3 line-clamp-2">{proj.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {proj.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="bg-amber-500/20 border border-amber-500/50 text-amber-200 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                        {proj.technologies.length > 3 && (
                          <span className="bg-gray-600/50 text-white/70 text-xs px-2 py-1 rounded">
                            +{proj.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-colors">
                          <FaGithub className="text-xs" /> Code
                        </button>
                        <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded text-sm transition-colors">
                          <FaPlay className="text-xs" /> Demo
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Project details */}
          {selectedProject && (
            <div className="md:w-1/2 md:pl-4 border-l border-white/20 animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Project Details</h3>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 space-y-6">
                <div className="relative">
                  <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedProject.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                    }`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-xl font-bold text-white">{selectedProject.title}</h4>
                    <span className={`px-2 py-1 text-xs rounded font-medium ${
                      selectedProject.difficulty === 'Expert' ? 'bg-red-500 text-white' :
                      selectedProject.difficulty === 'Advanced' ? 'bg-orange-500 text-white' :
                      'bg-amber-500 text-white'
                    }`}>
                      {selectedProject.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-white/80 mb-4">{selectedProject.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-white/70 text-sm font-semibold mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-amber-500/20 border border-amber-500/50 text-amber-200 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="text-white/70 text-sm font-semibold mb-2">Key Features:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-all">
                      <FaGithub /> View Code
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-lg font-semibold transition-all">
                      <FaExternalLinkAlt /> Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  )
}

export default Achievment