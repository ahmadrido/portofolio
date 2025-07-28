import React, { useState, useEffect, useRef } from 'react'
import bg1 from '../../assets/images/bg1.mp4'
import Navbar from '../Navbar'
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaComment, 
  FaGamepad,
  FaRocket,
  FaStar,
  FaHeart,
  FaLightbulb,
  FaCode,
  FaCoffee,
  FaMusic
} from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react';

const Message = () => {
   const [state, handleSubmit] = useForm("manoggbb");
  const [showDialog, setShowDialog] = useState(true)
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    messageType: 'general'
  })
  
  // Animation states
  const [isTyping, setIsTyping] = useState(false)
  const [particles, setParticles] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [characterCount, setCharacterCount] = useState(0)
  
  // Chat simulation
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'System',
      message: 'Welcome to the Message Portal! 🚀',
      timestamp: new Date(),
      type: 'system'
    },
    {
      id: 2,
      sender: 'Portfolio Bot',
      message: 'Ready to connect? Send me a message and let\'s start an adventure! ⭐',
      timestamp: new Date(),
      type: 'bot'
    }
  ])
  
  const messagesEndRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages])

  // Message type options
  const messageTypes = [
    { value: 'general', label: 'General Inquiry', icon: FaComment, color: 'bg-blue-500' },
    { value: 'collaboration', label: 'Collaboration', icon: FaRocket, color: 'bg-purple-500' },
    { value: 'feedback', label: 'Feedback', icon: FaStar, color: 'bg-amber-500' },
    { value: 'project', label: 'Project Discussion', icon: FaCode, color: 'bg-green-500' },
    { value: 'coffee', label: 'Coffee Chat', icon: FaCoffee, color: 'bg-amber-600' }
  ]

  // Floating icons for decoration
  const floatingIcons = [FaGamepad, FaRocket, FaStar, FaHeart, FaLightbulb, FaCode, FaMusic]

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (name === 'message') {
      setCharacterCount(value.length)
      setIsTyping(value.length > 0)
    }
  }

  
  // Handle Formspree success/error states
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true)
      createParticles()
      
      // Add success message to chat
      const successMessage = {
        id: chatMessages.length + 1,
        sender: 'System',
        message: '✅ Message sent successfully! Thank you for reaching out.',
        timestamp: new Date(),
        type: 'system'
      }
      setChatMessages(prev => [...prev, successMessage])

          
    // Add user message to chat
    const newMessage = {
      id: chatMessages.length + 1,
      sender: formData.name || 'Anonymous',
      message: formData.message,
      timestamp: new Date(),
      type: 'user',
      subject: formData.subject,
      messageType: formData.messageType
    }
    
    setChatMessages(prev => [...prev, newMessage])

      setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        sender: 'Portfolio Bot',
        message: getBotResponse(formData.messageType),
        timestamp: new Date(),
        type: 'bot'
      }
      setChatMessages(prev => [...prev, botResponse])
    }, 1500)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        messageType: 'general'
      })
      setCharacterCount(0)
      setIsTyping(false)
      
      setTimeout(() => setShowSuccess(false), 5000)
    }
    
    if (state.errors && state.errors.length > 0) {
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
    }
  }, [state.succeeded, state.errors])

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault()

        // Create form data for Formspree
    const formDataForSubmit = new FormData()
    formDataForSubmit.append('type-message', )
    formDataForSubmit.append('name', formData.name)
    formDataForSubmit.append('email', formData.email)
    formDataForSubmit.append('subject', formData.subject)
    formDataForSubmit.append('message', formData.message)
    formDataForSubmit.append('messageType', formData.messageType)
    
    // Submit to Formspree
    await handleSubmit(formDataForSubmit)
  }

  // Get bot response based on message type
const getBotResponse = (type) => {
  const responses = {
    general: "Thank you for your message. I truly appreciate your interest and will get back to you as soon as possible. Please stay tuned. 🙏",
    collaboration: "Thank you for reaching out about a potential collaboration. I'm grateful for the opportunity and will respond shortly. Let's stay connected. 🤝",
    feedback: "Thank you for your thoughtful feedback. It means a lot and will be carefully considered. I’ll be in touch soon. ✨",
    project: "Thank you for sharing your project details. I’m excited to learn more and will respond as soon as I can. Please look forward to it. 💼",
    coffee: "Thanks for the coffee invitation! I appreciate the gesture and will reply soon to coordinate. ☕"
  };
  return responses[type] || responses.general;
};


  // Create particle animation
  const createParticles = () => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      duration: Math.random() * 2 + 1
    }))
    setParticles(newParticles)
    setTimeout(() => setParticles([]), 3000)
  }

  return (
    <div className='relative w-full h-screen overflow-hidden'>

      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>

      {/* Floating Icons */}
      {floatingIcons.map((Icon, index) => (
        <div
          key={index}
          className="absolute text-white/10 animate-float"
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index * 10)}%`,
            animationDelay: `${index * 0.5}s`,
            fontSize: '2rem'
          }}
        >
          <Icon />
        </div>
      ))}

      {/* Success Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute pointer-events-none animate-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
        </div>
      ))}

      {/* <Navbar 
        musicPlay={musicPlay} 
        handle={() => setMusicPlay(!musicPlay)}
        selectedTab={setSelectedTab}
        username={username}
      /> */}

          <div className="overflow-y-scroll border h-full">
      <div className="Message md:h-[85%] relative md:overflow-hidden overflow-y-scroll mt-20 text-white p-5">
        <div className="flex md:flex-row flex-col-reverse h-full gap-6">
          
          {/* Left Side - Message Form */}
          <div className="md:w-1/2 bg-gradient-to-br from-[#1D1527] to-orange-900/30 rounded-2xl p-5 backdrop-blur-sm border border-amber-500/30 relative h-full">
            {/* Message Type Selection */}
            <div className="mb-6">
              <label className="block text-amber-500 mb-3 font-semibold">Message Type</label>
              <div className="grid grid-cols-2 gap-3">
                {messageTypes.map((type) => {
                  const IconComponent = type.icon
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, messageType: type.value }))}
                      className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all transform hover:scale-105 ${
                        formData.messageType === type.value
                          ? `${type.color} border-white text-white shadow-lg`
                          : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      <IconComponent className="text-sm" />
                      <span className="text-xs font-medium">{type.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <FaUser className="absolute left-3 top-4 text-amber-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-amber-500/50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-amber-200/60 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                
                <div className="relative items-center">
                  <FaEnvelope className="absolute left-3 top-4 text-amber-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-amber-500/50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-amber-200/60 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                    required
                  />
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-black/30 border border-amber-500/50 rounded-lg px-4 py-3 text-white placeholder-amber-200/60 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                  required
                />
                <ValidationError 
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your message... Let's create something amazing together!"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full bg-black/30 border border-amber-500/50 rounded-lg px-4 py-3 text-white placeholder-amber-200/60 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                  required
                ></textarea>
                <div className="absolute bottom-3 right-3 text-amber-400/60 text-sm">
                  {characterCount}/500
                </div>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                disabled={state.submitting}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 transform -skew-x-12 group-hover:animate-shimmer"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <FaPaperPlane className={isTyping ? 'animate-bounce' : ''} />
                  <span className="text-lg">Launch Message</span>
                  <FaRocket className="animate-pulse" />
                </div>
              </button>
            </form>
          </div>

          {/* Right Side - Chat Preview */}
          <div className="md:w-1/2 bg-gradient-to-br md:h-full h-100 from-[#1D1527] to-[#1D1527]/20 rounded-2xl backdrop-blur-sm border border-black/30 flex flex-col overflow-hidden">
            
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-black/20 to-[#1D1527] p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <FaGamepad className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Message Portal</h3>
                <p className="text-blue-100 text-sm">Live conversation preview</p>
              </div>
              <div className="ml-auto flex gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-100">Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl relative ${
                    msg.type === 'system' 
                      ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-center w-full max-w-none'
                      : msg.type === 'user'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-br-sm'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-bl-sm'
                  }`}>
                    {msg.type !== 'system' && (
                      <div className="opacity-80 mb-1 font-semibold text-black">
                        {msg.sender}
                      </div>
                    )}
                    {msg.subject && (
                      <div className="text-sm font-bold opacity-90 mb-1">
                        Re: {msg.subject}
                      </div>
                    )}
                    <div className="text-sm leading-relaxed text-wrap break-words">{msg.message}</div>
                    <div className="text-xs opacity-60 mt-2">
                      {msg.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Typing Indicator */}
            {isTyping && (
              <div className="p-4 border-t border-blue-500/30">
                <div className="flex items-center gap-2 text-blue-300">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-sm">You are typing...</span>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>

    
            {/* Success Message */}
            {showSuccess && (
              <div className="absolute inset-0 flex items-center justify-center h-[100vh] bg-black/50 backdrop-blur-sm rounded-2xl">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 rounded-2xl text-center animate-bounce-in shadow-2xl">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-2">Message Launched!</h3>
                  <p className="text-green-100">Your message is on its way to the stars!</p>
                </div>
              </div>
             )} 

    </div>
  )
}

export default Message