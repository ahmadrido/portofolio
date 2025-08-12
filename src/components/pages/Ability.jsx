import React, { useState, useEffect } from 'react'
import { 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaReact, 
  FaPython, 
  FaNodeJs, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaGitAlt,
  FaCloud,
  FaTools,
  FaGithub
} from 'react-icons/fa'
import { 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiRedux, 
  SiTailwindcss, 
  SiExpress, 
  SiNextdotjs, 
  SiDocker, 
  SiKubernetes, 
  SiGooglecloud,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiPhp
} from 'react-icons/si'
import bg1 from '../../assets/images/bg1.mp4'

// Skill Category Component
const SkillCategory = ({ title, skills, categoryIcon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden mb-4 border border-gray-700 hover:border-amber-500 transition-all">
      <div 
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700 transition-all"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          {categoryIcon}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <span className="text-white text-xl">
          {isExpanded ? '−' : '+'}
        </span>
      </div>
      
      {isExpanded && (
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-900 animate-fade-in">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 bg-gray-800 p-3 rounded hover:bg-gray-700 transition-all"
            >
              {skill.icon}
              <div>
                <p className="text-white font-medium">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                  <div 
                    className="bg-amber-500 h-2 rounded-full" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Abilities = () => {
  // Skill categories
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-3xl text-blue-500" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-2xl" />, proficiency: 70 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-2xl" />, proficiency: 30 },
        { name: "Python", icon: <FaPython className="text-blue-600 text-2xl" />, proficiency: 30 },
        { name: "Java", icon: <FaJava className="text-red-500 text-2xl" />, proficiency: 30 },
        { name: "PHP", icon: <SiPhp className="text-purple-600 text-2xl" />, proficiency: 70 },
      ]
    },
    {
      title: "Frontend Technologies",
      icon: <FaReact className="text-3xl text-cyan-400" />,
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400 text-2xl" />, proficiency: 70 },
        // { name: "Next.js", icon: <SiNextdotjs className="text-white text-2xl" />, proficiency: 50 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-2xl" />, proficiency: 90 },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl" />, proficiency: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl" />, proficiency: 90 },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-2xl" />, proficiency: 85 }
      ]
    },
    {
      title: "Backend Technologies",
      icon: <FaServer className="text-3xl text-green-500" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" />, proficiency: 70 },
        { name: "Express.js", icon: <SiExpress className="text-white text-2xl" />, proficiency: 55 },
        // { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" />, proficiency: 80 },
        // { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-2xl" />, proficiency: 75 },
        { name: "MySQL", icon: <SiMysql className="text-blue-500 text-2xl" />, proficiency: 70 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <FaCloud className="text-3xl text-sky-500" />,
      skills: [
        // { name: "Docker", icon: <SiDocker className="text-blue-500 text-2xl" />, proficiency: 80 },
        // { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 text-2xl" />, proficiency: 70 },
        // { name: "Google Cloud", icon: <SiGooglecloud className="text-red-500 text-2xl" />, proficiency: 75 },
        // { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-2xl" />, proficiency: 85 },
      ]
    },
    {
      title: "Tools & Version Control",
      icon: <FaTools className="text-3xl text-gray-400" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-2xl" />, proficiency: 70 },
        { name: "GitHub", icon: <FaGithub className="text-gray-400 text-2xl" />, proficiency: 70 },
        { name: "Postman", icon: <SiPostman className="text-red-500 text-2xl" />, proficiency: 70 }
      ]
    }
  ];

  return (
    <div className='relative w-full h-screen overflow-hidden'>

      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>

      <div className="relative z-10 p-6 md:p-10 overflow-y-auto h-[calc(100vh-80px)] text-white mt-20">
        <div className="max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              categoryIcon={category.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Abilities