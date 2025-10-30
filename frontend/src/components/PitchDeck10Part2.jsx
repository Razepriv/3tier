import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Award, DollarSign, Target, Shield,
  CheckCircle2, Mail, Phone, ExternalLink, Sparkles,
  BarChart3, PieChart, Clock, ArrowUpRight
} from 'lucide-react';
import { Button } from './ui/button';

// Slide 6: Performance & Traction
export const Slide6 = () => {
  const metrics = [
    { value: '2.5X', label: 'Revenue Growth', subtext: 'Last fiscal year', icon: TrendingUp, color: 'blue' },
    { value: '95%', label: 'Customer Retention', subtext: 'Industry leading', icon: Users, color: 'indigo' },
    { value: '30+', label: 'Strategic Alliances', subtext: 'Key partnerships', icon: Award, color: 'orange' },
    { value: '15%', label: 'Market Share', subtext: 'Premium segment', icon: Target, color: 'blue' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-auto snap-start py-8 sm:py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12"
        >
          Market Performance
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-xl text-gray-400 mb-16"
        >
          Performance metrics that demonstrate market leadership
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${metric.color}-500/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 h-full hover:border-blue-500/40 transition-all duration-300">
                <metric.icon className={`w-10 h-10 text-${metric.color}-500 mb-4`} />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className={`text-4xl font-bold text-${metric.color}-400 mb-2`}
                >
                  <AnimatedCounter end={metric.value} />
                </motion.div>
                <div className="text-lg font-semibold text-gray-200 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.subtext}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="bg-gradient-to-br from-blue-950/50 to-indigo-950/50 border border-blue-500/30 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Partnership</h4>
            <p className="text-gray-300">Proud partner of <span className="font-bold">Bodybuilders Federation (FIF)</span></p>
            <p className="text-gray-500 text-sm mt-2">Promoting brand through fitness and bodybuilding competitions</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-950/50 to-blue-950/50 border border-indigo-500/30 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-indigo-400 mb-3">Market Position</h4>
            <p className="text-gray-300">Leading presence in <span className="font-bold">Commercial, Semi-Commercial & Domestic</span> segments</p>
            <p className="text-gray-500 text-sm mt-2">Serving gyms, corporate wellness, hotels, and home users</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Slide 7: Financials & Forecast
export const Slide7 = () => {
  const revenueData = [
    { year: 'Year 1', revenue: 8, percentage: 30 },
    { year: 'Year 2', revenue: 18, percentage: 65 },
    { year: 'Year 3', revenue: 30, percentage: 100 }
  ];

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
        className="relative z-10 px-8 max-w-7xl mx-auto w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Financial Projections
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Revenue Forecast */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Revenue Forecast</h3>
            {revenueData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{data.year}</span>
                  <span className="text-2xl font-bold text-blue-400">₹{data.revenue} Cr</span>
                </div>
                <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${data.percentage}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 bg-gradient-to-r from-blue-950/50 to-indigo-950/50 border border-blue-500/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-semibold text-gray-200">Expected ROI</span>
              </div>
              <p className="text-3xl font-bold text-blue-400">2-3 Years</p>
              <p className="text-sm text-gray-500 mt-2">Break-even achieved in Year 2</p>
            </motion.div>
          </motion.div>

          {/* Profitability */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Profitability Breakdown</h3>
            
            {/* Profit Margin Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-3xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="inline-block"
                  >
                    <div className="relative">
                      <svg className="w-48 h-48 transform -rotate-90">
                        <circle cx="96" cy="96" r="80" fill="none" stroke="#1e293b" strokeWidth="16" />
                        <motion.circle
                          cx="96" cy="96" r="80" fill="none" stroke="url(#gradient)" strokeWidth="16"
                          strokeDasharray="502"
                          initial={{ strokeDashoffset: 502 }}
                          whileInView={{ strokeDashoffset: 502 - (502 * 0.35) }}
                          transition={{ duration: 2, delay: 0.8 }}
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#6366f1" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-blue-400">30-40%</div>
                          <div className="text-sm text-gray-400">Profit Margin</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="text-gray-400">After-Sales Service</span>
                    <span className="text-blue-400 font-semibold">Highest</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="text-gray-400">Referral Sales</span>
                    <span className="text-indigo-400 font-semibold">High</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="text-gray-400">B2C Sales</span>
                    <span className="text-blue-400 font-semibold">Medium</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400">B2B Sales</span>
                    <span className="text-indigo-400 font-semibold">Medium</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Slide 8: Investment Ask
export const Slide8 = () => {
  const usageBreakdown = [
    { label: 'Showroom Setup', percentage: 40, color: 'blue' },
    { label: 'Inventory', percentage: 30, color: 'indigo' },
    { label: 'Marketing', percentage: 15, color: 'orange' },
    { label: 'Digital Infrastructure', percentage: 10, color: 'blue' },
    { label: 'Working Capital', percentage: 5, color: 'indigo' }
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950" />
      
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
          className="text-5xl md:text-6xl font-bold text-center mb-8"
        >
          <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Investment Opportunity
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-gradient-to-r from-blue-950/50 to-indigo-950/50 border border-blue-500/30 rounded-2xl px-12 py-6">
            <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
              ₹2-3 Crores
            </div>
            <div className="text-xl text-gray-400 mt-2">Funding the Next Phase of Growth</div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Use of Funds */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Use of Funds</h3>
            {usageBreakdown.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{item.label}</span>
                  <span className="text-lg font-bold text-blue-400">{item.percentage}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1.2, delay: 0.6 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ROI Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Why Invest Now?</h3>
            
            <div className="space-y-4">
              {[
                { icon: TrendingUp, title: '17-20% Market CAGR', desc: 'High-growth industry trajectory' },
                { icon: Target, title: '30-40% Profit Margins', desc: 'Premium positioning & after-sales' },
                { icon: Award, title: 'Proven Track Record', desc: '2.5X revenue growth, 95% retention' },
                { icon: DollarSign, title: '2-3 Year ROI', desc: 'Clear path to profitability' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-4 bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 hover:border-blue-500/40 transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-200 font-semibold mb-1">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Slide 9: Roadmap & Risk Mitigation
export const Slide9 = () => {
  const milestones = [
    { quarter: 'Q1', title: 'Setup & Launch', items: ['Showroom establishment', 'Team hiring', 'Inventory procurement'] },
    { quarter: 'Q2', title: 'Market Entry', items: ['Grand opening', 'Marketing campaigns', 'Partnership activation'] },
    { quarter: 'Q3-Q4', title: 'Expansion', items: ['Franchise rollout', 'Digital scaling', 'Revenue ramp-up'] },
    { quarter: 'Q5-Q6', title: 'Scale', items: ['Multi-city presence', 'Brand leadership', 'Profitability goals'] }
  ];

  const risks = [
    { risk: 'Competition', mitigation: 'Service excellence & exclusive partnerships' },
    { risk: 'Economic Cycles', mitigation: 'Diversified revenue streams' },
    { risk: 'Franchise Quality', mitigation: 'Rigorous training & monitoring' }
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950"
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
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Strategic Roadmap
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="mb-12">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500" />
            <div className="grid grid-cols-4 gap-4 relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center relative z-10">
                      <span className="text-white font-bold">{milestone.quarter}</span>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 hover:border-blue-500/40 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-200 mb-2">{milestone.title}</h4>
                    <ul className="space-y-1">
                      {milestone.items.map((item, i) => (
                        <li key={i} className="text-xs text-gray-400">{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Mitigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-200 mb-6 text-center">Risk Mitigation</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {risks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div className="font-semibold text-gray-300">{item.risk}</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <div className="text-sm text-gray-400">{item.mitigation}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Slide 10: Team & CTA
export const Slide10 = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-8 max-w-5xl mx-auto w-full text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12"
        >
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
            Led by Expertise, Driven by Vision
          </span>
        </motion.h2>

        {/* Team Leader */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="inline-block bg-gradient-to-br from-blue-950/50 to-indigo-950/50 border border-blue-500/30 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-gray-200 mb-2">Balaji Ramachandan</h3>
            <p className="text-blue-400 font-semibold mb-3">Director & Founder</p>
            <p className="text-gray-400">24+ years experience | PRECOR (USA) veteran | Industry pioneer</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-4xl font-bold text-gray-200 mb-6">
            Let's Transform Fitness in India Together
          </h3>
          
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">₹2-3 Cr</div>
              <div className="text-sm text-gray-500">Investment</div>
            </div>
            <div className="w-px bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">30-40%</div>
              <div className="text-sm text-gray-500">Margin</div>
            </div>
            <div className="w-px bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">2-3 Years</div>
              <div className="text-sm text-gray-500">ROI</div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
        >
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <a href="mailto:sales@3tierfitness.in" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
              <span>sales@3tierfitness.in</span>
            </a>
            <a href="tel:+919600038718" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+91 9600038718</span>
            </a>
            <a href="https://www.3tierfitness.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <ExternalLink className="w-5 h-5" />
              <span>www.3tierfitness.in</span>
            </a>
          </div>
        </motion.div>

        {/* Brand Logo Fade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            3Tier Fitness
          </div>
          <div className="text-sm text-gray-500 mt-2">Empowering a Healthier India</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end }) => {
  return <span>{end}</span>;
};