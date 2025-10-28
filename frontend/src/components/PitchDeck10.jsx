import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Zap, Target, Globe, TrendingUp, Users, Award, 
  DollarSign, Rocket, Shield, Mail, Phone, ExternalLink,
  Building2, Network, ShoppingCart, Activity, BarChart3,
  CheckCircle2, ArrowRight, Sparkles, ChevronDown
} from 'lucide-react';
import { Button } from './ui/button';
import { Slide6, Slide7, Slide8, Slide9, Slide10 } from './PitchDeck10Part2';

const PitchDeck10 = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const slideIndex = Math.floor(scrollPosition / windowHeight);
      setActiveSlide(Math.min(slideIndex, 9));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-slate-950">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-orange-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Slide Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            onClick={() => window.scrollTo({ top: i * window.innerHeight, behavior: 'smooth' })}
            className="group flex items-center gap-2"
          >
            <span className={`text-xs font-medium transition-all duration-300 ${
              activeSlide === i ? 'text-blue-400 opacity-100' : 'text-gray-600 opacity-0 group-hover:opacity-100'
            }`}>
              {['Vision', 'Market', 'Legacy', 'Ecosystem', 'Growth', 'Traction', 'Financials', 'Investment', 'Roadmap', 'Team'][i]}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === i ? 'bg-blue-500 w-3 h-3' : 'bg-gray-700 group-hover:bg-gray-500'
            }`} />
          </button>
        ))}
      </div>

      {/* Slide 1: Title & Vision */}
      <Slide1 />

      {/* Slide 2: Market Opportunity */}
      <Slide2 />

      {/* Slide 3: Foundation & Legacy */}
      <Slide3 />

      {/* Slide 4: Product & Business Model */}
      <Slide4 />

      {/* Slide 5: Growth Strategy */}
      <Slide5 />

      {/* Slide 6: Performance & Traction */}
      <Slide6 />

      {/* Slide 7: Financials & Forecast */}
      <Slide7 />

      {/* Slide 8: Investment Ask */}
      <Slide8 />

      {/* Slide 9: Roadmap & Risk Mitigation */}
      <Slide9 />

      {/* Slide 10: Team & CTA */}
      <Slide10 />
    </div>
  );
};

// Slide 1: Title & Vision
const Slide1 = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 blur-3xl opacity-30" />
              <h1 className="relative text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                3Tier Fitness
              </h1>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl md:text-5xl font-light text-gray-200"
          >
            Powering the Future of Fitness in India
          </motion.h2>

          {/* Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-8 py-8"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="flex flex-col items-center gap-2"
            >
              <Zap className="w-12 h-12 text-orange-500" />
              <span className="text-sm text-gray-400">Innovation</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <Target className="w-12 h-12 text-blue-500" />
              <span className="text-sm text-gray-400">Excellence</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="flex flex-col items-center gap-2"
            >
              <Globe className="w-12 h-12 text-indigo-500" />
              <span className="text-sm text-gray-400">Scale</span>
            </motion.div>
          </motion.div>

          {/* Presenter Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-3 pt-8"
          >
            <p className="text-xl text-gray-300">
              Presented by <span className="font-semibold text-blue-400">Balaji Ramachandan</span>, Director
            </p>
            <p className="text-lg text-gray-500">Investment Proposal | 2025 Expansion Strategy</p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Slide 2: Market Opportunity
const Slide2 = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 px-8 max-w-7xl mx-auto w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            India's Fitness Boom
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Growth Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-3xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="w-10 h-10 text-blue-500" />
                  <div>
                    <div className="text-5xl font-bold text-blue-400">17-20%</div>
                    <div className="text-gray-400">CAGR Growth</div>
                  </div>
                </div>
                <motion.div 
                  className="h-3 bg-slate-800 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard icon={Users} value="1.4B" label="Population" delay={0.3} />
              <StatCard icon={Activity} value="₹XXB" label="Market Size" delay={0.4} />
            </div>
          </motion.div>

          {/* Right: Key Drivers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">Growth Drivers</h3>
            
            {[
              { icon: Users, text: 'Young, health-conscious population', color: 'blue' },
              { icon: TrendingUp, text: 'Rising disposable incomes', color: 'indigo' },
              { icon: Activity, text: 'Growing health awareness', color: 'blue' },
              { icon: Globe, text: 'Tier 2 & Tier 3 city penetration', color: 'indigo' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-center gap-4 bg-slate-900/30 backdrop-blur-sm border border-blue-500/10 rounded-xl p-4 hover:border-blue-500/30 transition-all duration-300"
              >
                <item.icon className={`w-6 h-6 text-${item.color}-500`} />
                <span className="text-gray-300">{item.text}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-950/50 to-indigo-950/50 border border-blue-500/30 rounded-xl"
            >
              <p className="text-gray-300 italic text-lg leading-relaxed">
                "India stands at the tipping point of a fitness revolution — a young, health-conscious population fueling exponential growth in wellness and fitness equipment."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Slide 3: Foundation & Legacy
const Slide3 = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-blue-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-8 max-w-6xl mx-auto w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Our Foundation & Legacy
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-500" />

          <div className="space-y-16">
            {/* PRECOR Experience */}
            <TimelineItem
              icon={Building2}
              year="Pre-2016"
              title="PRECOR (USA) Experience"
              description="24+ years of expertise in fitness equipment with global leader PRECOR"
              side="left"
              delay={0.2}
            />

            {/* Founded */}
            <TimelineItem
              icon={Rocket}
              year="2016"
              title="3Tier Fitness Founded"
              description="Launched with vision to transform India's fitness landscape"
              side="right"
              delay={0.4}
            />

            {/* Pvt Ltd */}
            <TimelineItem
              icon={Award}
              year="2020+"
              title="Private Limited Expansion"
              description="Rapid success led to incorporation as 3Tier Fitness India Pvt Ltd"
              side="left"
              delay={0.6}
            />
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl" />
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 md:p-12">
            <Sparkles className="w-8 h-8 text-blue-400 mb-4" />
            <blockquote className="text-2xl md:text-3xl text-gray-200 font-light italic mb-4">
              "Our success is built on trust, loyalty, and delivering world-class service."
            </blockquote>
            <p className="text-blue-400 font-semibold">— Balaji Ramachandan, Director</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Slide 4: Product & Business Model
const Slide4 = () => {
  const cards = [
    {
      icon: ShoppingCart,
      title: 'Commercial & Domestic Sales',
      description: 'Premium fitness equipment for gyms, hotels, corporates, and homes',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Recurring Memberships',
      description: 'Fitness center hybrid model with steady revenue streams',
      color: 'indigo'
    },
    {
      icon: DollarSign,
      title: 'After-Sales Services',
      description: 'Maintenance, installation, and support with 50-60% margins',
      color: 'orange'
    },
    {
      icon: Globe,
      title: 'Digital Marketplace',
      description: 'Amazon, Flipkart, and e-commerce platform presence',
      color: 'blue'
    }
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-8 max-w-7xl mx-auto w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Integrated Fitness Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-400">Showroom + Franchise + Fitness Center + Digital Marketplace</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/40 transition-all duration-300">
                <card.icon className={`w-12 h-12 text-${card.color}-500 mb-4`} />
                <h3 className="text-2xl font-bold text-gray-200 mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Slide 5: Growth Strategy
const Slide5 = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-orange-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-8 max-w-7xl mx-auto w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Multi-Channel Growth Strategy
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mega Showroom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/40 transition-all duration-300">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6"
              >
                <Building2 className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-200 mb-4">Mega Experience Center</h3>
              <p className="text-gray-400 mb-4">6,000 sq ft flagship showroom showcasing premium equipment</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>15+ Treadmills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>15+ Elliptical Trainers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>20+ Spin Bikes</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Franchise Network */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 h-full hover:border-indigo-500/40 transition-all duration-300">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6"
              >
                <Network className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-200 mb-4">Franchise & Community</h3>
              <p className="text-gray-400 mb-4">Rapid expansion through strategic franchise partnerships</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                  <span>Tamil Nadu Penetration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                  <span>Gated Communities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                  <span>Local Brand Presence</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Digital Expansion */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 h-full hover:border-orange-500/40 transition-all duration-300">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6"
              >
                <Globe className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-200 mb-4">Digital Marketplace</h3>
              <p className="text-gray-400 mb-4">Dominating online platforms and e-commerce channels</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Amazon & Flipkart</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Direct B2C Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Pan-India Reach</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PitchDeck10;

// Helper Components
const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
  >
    <Icon className="w-8 h-8 text-blue-500 mb-3" />
    <div className="text-3xl font-bold text-blue-400">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </motion.div>
);

const TimelineItem = ({ icon: Icon, year, title, description, side, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay }}
    className={`flex items-center gap-8 ${side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
  >
    <div className={`flex-1 ${side === 'left' ? 'md:text-right' : 'md:text-left'}`}>
      <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300">
        <div className="text-blue-400 font-semibold mb-2">{year}</div>
        <h3 className="text-xl font-bold text-gray-200 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
    
    <div className="relative z-10">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-white" />
      </div>
    </div>
    
    <div className="flex-1" />
  </motion.div>
);