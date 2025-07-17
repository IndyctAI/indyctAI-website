import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import './App.css';

// Import images
import abstractAi1 from './assets/images/abstract_ai_1.jpg';
import abstractAi2 from './assets/images/abstract_ai_2.jpg';
import abstractAi3 from './assets/images/abstract_ai_3.jpg';
import futuristicAi1 from './assets/images/futuristic_ai_1.png';
import futuristicAi2 from './assets/images/futuristic_ai_2.png';
import neuralNetwork1 from './assets/images/neural_network_1.jpg';
import vorixaAILogo from './assets/images/vorixa_ai_logo.png';

import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Diensten', href: '#services' },
    { name: 'Over Ons', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  // Services data
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Strategie & Advies",
      description: "Ontwikkel een heldere AI-strategie die perfect aansluit bij uw bedrijfsdoelstellingen en ambities.",
      features: ["Strategische roadmap", "ROI analyse", "Implementatieplan"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Machine Learning Ontwikkeling",
      description: "Geavanceerde ML-modellen voor voorspellende analyses, NLP en computer vision toepassingen.",
      features: ["Voorspellende modellen", "NLP systemen", "Computer vision"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "AI-gestuurde Automatisering",
      description: "Optimaliseer uw bedrijfsprocessen door intelligente automatisering van repetitieve taken.",
      features: ["Proces automatisering", "Workflow optimalisatie", "Efficiëntie verbetering"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Data Wetenschap & Analyse",
      description: "Transformeer uw data in waardevolle inzichten met geavanceerde data science technieken.",
      features: ["Data analyse", "Visualisatie", "Inzicht generatie"]
    }
  ];

  // Stats data
  const stats = [
    { number: "40%", label: "Efficiëntie Verbetering" },
    { number: "30%", label: "Kostenbesparing" },
    { number: "10x", label: "Snellere Output" },
    { number: "100%", label: "Tevreden Klanten" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <img src={vorixaAILogo} alt="VorixaAI Logo" className="h-8 w-auto mr-2" />
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    VorixaAI
                  </h1>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-800/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
          <img
            src={abstractAi1}
            alt="AI Background"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Uw Partner in{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Artificiële Intelligentie
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transformeer uw bedrijf met geavanceerde AI-oplossingen. Wij combineren menselijke creativiteit 
              met de kracht van artificiële intelligentie voor ongekende groei.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3">
                Ontdek Onze Diensten
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="secondary" className="bg-slate-700 text-white hover:bg-slate-600 px-8 py-3">
                    Neem Contact Op
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-slate-800 border-slate-700 text-white">
                  <DialogHeader>
                    <DialogTitle>Neem Contact Op</DialogTitle>
                    <DialogDescription>
                      Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met u op.
                    </DialogDescription>
                  </DialogHeader>
                  <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name" className="text-right">
                          Naam
                        </label>
                        <Input id="name" name="name" className="col-span-3 bg-slate-700 border-slate-600" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="email" className="text-right">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" className="col-span-3 bg-slate-700 border-slate-600" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="message" className="text-right">
                          Bericht
                        </label>
                        <Textarea id="message" name="message" className="col-span-3 bg-slate-700 border-slate-600" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Verstuur</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Onze <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Diensten</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Van strategisch advies tot implementatie van complexe AI-systemen, 
              wij zijn uw complete partner in artificiële intelligentie.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-slate-300 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Over <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ons</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                VorixaAI is opgericht met de visie om de kracht van artificiële intelligentie 
                toegankelijk te maken voor bedrijven van elke omvang. Ons team bestaat uit gepassioneerde 
                AI-experts, datawetenschappers en strategische consultants.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                Wij geloven in de synergie tussen mens en machine. Onze AI-oplossingen zijn ontworpen 
                om uw team te versterken, niet te vervangen, waardoor uw medewerkers zich kunnen richten 
                op taken met hogere waarde.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={futuristicAi1}
                  alt="AI Technology"
                  className="rounded-lg shadow-2xl"
                />
                <img
                  src={neuralNetwork1}
                  alt="Neural Network"
                  className="rounded-lg shadow-2xl mt-8"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Neem <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Contact</span> Op
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Bent u klaar om de toekomst van uw bedrijf te transformeren met artificiële intelligentie? 
              Laten we de mogelijkheden bespreken.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Contactgegevens</CardTitle>
                  <CardDescription className="text-slate-300">
                    Wij staan klaar om uw vragen te beantwoorden
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">E-mail</p>
                      <p className="text-slate-300">vorixaai@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Telefoon</p>
                      <p className="text-slate-300">+31 6 20 70 92 56</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Adres</p>
                      <p className="text-slate-300">
                        Leidsestraatweg 237<br />
                        3443BT Utrecht<br />
                        Nederland
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={futuristicAi2}
                alt="Contact AI"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={vorixaAILogo} alt="VorixaAI Logo" className="h-8 w-auto mr-2" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  VorixaAI
                </h3>
              </div>
              <p className="text-slate-300 mb-4">
                Uw partner in artificiële intelligentie. Transformeer uw bedrijf met geavanceerde AI-oplossingen.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Diensten</h4>
              <ul className="space-y-2 text-slate-300">
                <li>AI Strategie & Advies</li>
                <li>Machine Learning Ontwikkeling</li>
                <li>AI-gestuurde Automatisering</li>
                <li>Data Wetenschap & Analyse</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-300">
                <li>vorixaai@gmail.com</li>
                <li>+31 6 20 70 92 56</li>
                <li>Utrecht, Nederland</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 VorixaAI. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

