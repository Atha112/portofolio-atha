import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

const Cloud = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>;
const GitBranch = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>;
const GithubIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const Code2 = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>;
const Package = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>;
const MessageSquare = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const Send = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>;
const LinkedinIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const InstagramIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const PhoneIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MailIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>;
const ChevronDown = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>;

/* ══════════════════════════════════════════════════════════════
   SCROLL ANIMATION WRAPPER
   ══════════════════════════════════════════════════════════════ */
function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: directions[direction].y,
        x: directions[direction].x,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              y: directions[direction].y,
              x: directions[direction].x,
            }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════
   STAGGER CONTAINER & ITEM
   ══════════════════════════════════════════════════════════════ */
function StaggerContainer({ children, className = '', staggerDelay = 0.15 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════
   TYPEWRITER — animasi ketik berganti teks
   ══════════════════════════════════════════════════════════════ */
function TypeWriter({ texts, speed = 80, deleteSpeed = 50, pauseDuration = 1500 }) {
  const [displayText, setDisplayText] = useState('');
  const phaseRef = useRef('typing');
  const indexRef = useRef(0);
  const timerRef = useRef();

  useEffect(() => {
    const tick = () => {
      const idx = indexRef.current;
      const currentText = texts[idx];
      const phase = phaseRef.current;

      if (phase === 'typing') {
        if (displayText.length < currentText.length) {
          timerRef.current = setTimeout(() => {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          }, speed);
        } else {
          phaseRef.current = 'paused';
          timerRef.current = setTimeout(tick, pauseDuration);
        }
      } else if (phase === 'paused') {
        phaseRef.current = 'deleting';
        timerRef.current = setTimeout(tick, 0);
      } else if (phase === 'deleting') {
        if (displayText.length > 0) {
          timerRef.current = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, deleteSpeed);
        } else {
          phaseRef.current = 'switching';
          timerRef.current = setTimeout(tick, 0);
        }
      } else {
        indexRef.current = (idx + 1) % texts.length;
        phaseRef.current = 'typing';
        timerRef.current = setTimeout(tick, 0);
      }
    };

    tick();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [displayText, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7, ease: 'steps(2)' }}
        className="ml-0.5 inline-block w-[3px] h-[1em] bg-[#60a5fa] align-middle"
      />
    </span>
  );
}

/* ══════════════════════════════════════════════════════════════
   NAVBAR
   ══════════════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0b2e]/90 backdrop-blur-md shadow-lg shadow-purple-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left - Ready to innovate */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('home')}
            className="hidden sm:flex items-center gap-2 bg-[#6366f1] hover:bg-[#7c3aed] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            <Cloud className="w-4 h-4" />
            Ready to innovate
          </motion.button>

          {/* Mobile logo */}
          <button
            onClick={() => scrollTo('home')}
            className="sm:hidden flex items-center gap-2 text-white font-bold text-lg"
          >
            <Cloud className="w-5 h-5 text-[#6366f1]" />
            Portfolio
          </button>

          {/* Right - Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-white hover:text-[#a78bfa] font-medium text-sm sm:text-base transition-colors relative group cursor-pointer"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a78bfa] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-[#0f0b2e]/95 backdrop-blur-md"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {['Home', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-white hover:text-[#a78bfa] font-medium text-base transition-colors text-left cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO SECTION
   ══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const techStack = ['React', 'Javascript', 'Node.js', 'Tailwind'];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl" />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Title */}
        <div className="mb-4 sm:mb-6">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
          >
            <span className="text-[#60a5fa]">WEB</span>{' '}
            <span className="text-white">DEVELOPER</span>
          </motion.h1>
        </div>

        {/* Subtitle with typewriter */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white/80 text-base sm:text-lg md:text-xl mb-3 sm:mb-4 h-7 sm:h-8 md:h-9 flex items-center justify-center"
        >
          <TypeWriter
            texts={['Tech Enthusiast', 'Technology Information Student']}
            speed={80}
            deleteSpeed={45}
            pauseDuration={1500}
          />
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-400 text-sm sm:text-base md:text-lg italic mb-8 sm:mb-10"
        >
          Create. Connect. Captivate.
        </motion.p>

        {/* Tech badges */}
        <StaggerContainer
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
          staggerDelay={0.12}
        >
          {techStack.map((tech) => (
            <StaggerItem key={tech}>
              <motion.span
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
                className="inline-block bg-[#6366f1] hover:bg-[#7c3aed] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-gray-400 text-xs">Scroll Down</span>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   TOOL CARD — hover menampilkan deskripsi kuning
   ══════════════════════════════════════════════════════════════ */
function ToolCard({ tool }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="bg-[#6366f1]/80 hover:bg-[#7c3aed] rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-1 sm:gap-2 cursor-default transition-colors overflow-hidden"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-white/10">
        <tool.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: tool.color }} />
      </div>
      <span className="text-white font-medium text-sm sm:text-base mt-1">{tool.name}</span>
      <motion.p
        initial={false}
        animate={hovered ? { opacity: 1, height: 'auto', marginTop: 4 } : { opacity: 0, height: 0, marginTop: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="text-yellow-300 font-medium text-[10px] sm:text-xs overflow-hidden"
      >
        {tool.desc}
      </motion.p>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════
   TOOLS SECTION
   ══════════════════════════════════════════════════════════════ */
function ToolsSection() {
  const tools = [
    { name: 'Git', icon: GitBranch, color: '#f05032', desc: 'Version Control' },
    { name: 'Github', icon: GithubIcon, color: '#ffffff', desc: 'Git Hosting' },
    { name: 'Vscode', icon: Code2, color: '#007acc', desc: 'Code Editor' },
    { name: 'Npm', icon: Package, color: '#cb3837', desc: 'Package Manager' },
  ];

  return (
    <section id="tools" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">
          My Tools
        </h2>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.15}>
        {tools.map((tool) => (
          <StaggerItem key={tool.name}>
            <ToolCard tool={tool} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   ABOUT SECTION
   ══════════════════════════════════════════════════════════════ */
function AboutSection() {
  const tags = ['Prodi : Teknologi Informasi', 'Kelas T2F', 'Domisili : Malang'];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#60a5fa]">
          About Me
        </h2>
      </AnimatedSection>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12">
        {/* ── CARA GANTI FOTO: ──
            1. Taruh file foto kamu ke folder: public/profile.jpg
            2. Ganti blok <div> di bawah ini dengan:
               <img src="/profile.jpg" alt="Teuku Atha" className="w-full h-full rounded-full object-cover" />
        */}
        <AnimatedSection direction="left" delay={0.2} className="flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] p-1"
          >
          <img src="/profile.jpg" alt="Teuku Atha" className="w-full h-full rounded-full object-cover" />  
          </motion.div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection direction="right" delay={0.3} className="flex-1">
          <div className="bg-[#1e1152]/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#60a5fa] mb-4 sm:mb-6">
              Hello, I'm{' '}
              <span className="text-white">Teuku Atha Athaya Nafi</span>
            </h3>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-justify">
              Saya orang yang lagi serius belajar di dunia teknologi informasi. Saya memiliki ketertarikan besar dalam
              pengembangan web dan teknologi modern. Saat ini saya sedang mendalami berbagai teknologi seperti React,
              JavaScript, Node.js, dan Tailwind CSS untuk membangun aplikasi web yang menarik dan fungsional. Saya
              percaya bahwa teknologi dapat mengubah dunia menjadi lebih baik, dan saya ingin menjadi bagian dari
              perubahan tersebut. Dengan semangat belajar yang tinggi dan dedikasi yang kuat, saya terus mengembangkan
              kemampuan saya setiap hari. Selain coding, saya juga aktif mengikuti komunitas developer dan berbagi
              pengetahuan melalui berbagai platform. Tujuan saya adalah menjadi full-stack developer yang handal dan
              berkontribusi pada proyek-proyek open source yang bermanfaat bagi banyak orang.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.15, duration: 0.4 }}
                  className="bg-[#6366f1] hover:bg-[#7c3aed] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   CONTACT SECTION
   ══════════════════════════════════════════════════════════════ */
function ContactSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setComments((prev) => [...prev, { name: name.trim(), message: message.trim() }]);
      setName('');
      setMessage('');
    }
  };


  const socialLinks = [
    { name: 'Github', icon: GithubIcon, url: 'https://github.com/Atha112', desc: 'github.com/Atha112' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/teuku-atha-athaya-nafi-276505373/', desc: 'linkedin.com/in/teukuatha' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/athnfio/', desc: '@athnfio' },
    { name: 'WhatsApp', icon: PhoneIcon, url: 'https://wa.me/6281385179438', desc: '+62 813-8517-9438' },
    { name: 'Email', icon: MailIcon, url: 'mailto:teukuatha19@gmail.com', desc: 'teukuatha19@gmail.com' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#a78bfa]">
          Contact me
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Connect with me — kiri/atas */}
        <AnimatedSection direction="left" delay={0.2}>
          <div className="bg-[#1e1152]/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full flex flex-col">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-6 sm:mb-8">
              Connect with me
            </h3>

            <div className="flex flex-col gap-4 sm:gap-5 flex-1">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.12, duration: 0.5 }}
                  whileHover={{ x: 5, backgroundColor: 'rgba(99, 102, 241, 0.15)' }}
                  className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#6366f1]/40 transition-all group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#6366f1]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6366f1]/30 transition-colors">
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-medium text-sm sm:text-base">{social.name}</p>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">{social.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Comments — kanan/bawah */}
        <AnimatedSection direction="right" delay={0.3}>
          <div className="bg-[#1e1152]/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-5 sm:mb-6">
              <MessageSquare className="w-5 h-5 text-[#a78bfa]" />
              <h3 className="text-white font-semibold text-lg sm:text-xl">
                Comments ({comments.length})
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1.5">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-[#0f0b2e]/60 border border-[#6366f1]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1.5">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here"
                  rows={3}
                  className="w-full bg-[#0f0b2e]/60 border border-[#6366f1]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm sm:text-base cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Post Comment
              </motion.button>
            </form>

            {/* Comments list */}
            {comments.length > 0 && (
              <div className="mt-5 space-y-2 max-h-48 overflow-y-auto pr-1">
                {comments.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0f0b2e]/50 rounded-xl p-3 border border-[#6366f1]/20"
                  >
                    <p className="text-[#60a5fa] font-medium text-sm mb-1">{c.name}</p>
                    <p className="text-gray-300 text-sm">{c.message}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-gray-400 text-xs sm:text-sm">
          &copy; 2026 Teuku Atha Athaya Nafi. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {['Home', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════════
   APP — Komponen Utama
   ══════════════════════════════════════════════════════════════ */
function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ToolsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/teuku-atha-athaya-nafi" element={<PortfolioPage />} />
    </Routes>
  );
}
