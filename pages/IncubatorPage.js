import React from "react";
import Image from "next/legacy/image";
import Footer from "@/components/Footer";
import Nav from "../components/navbar/NavLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Lightbulb, Zap, Rocket, Cpu, BarChart3, Sprout } from 'lucide-react';

const incubators = [
  {
    id: 1,
    title: "Ideation Innovation & Incubation Foundation",
    shortTitle: "I3 Foundation",
    description: "Umbrella organization at IIT BHU for nurturing start-ups with comprehensive support and mentorship programs.",
    logo: <Lightbulb className="w-12 h-12 text-yellow-500" />,
    category: "Innovation Hub",
    website: "https://i3f.iitbhu.ac.in/",
    color: "from-yellow-100 to-orange-100",
    features: ["Startup Mentorship", "Funding Support", "Networking Events"]
  },
  {
    id: 2,
    title: "NCL-IIT BHU Incubation Centre",
    shortTitle: "NCL-IIT BHU",
    description: "A Northern Coalfields Limited (NCL) CSR initiative funded incubator focusing on sustainable and impactful innovations.",
    logo: <Zap className="w-12 h-12 text-blue-500" />,
    category: "CSR Initiative",
    website: "https://ncl-iitbhu.ac.in/",
    color: "from-blue-100 to-indigo-100",
    features: ["CSR Funding", "Sustainable Tech", "Industry Partnership"]
  },
  {
    id: 3,
    title: "R-ABI, IIT BHU",
    shortTitle: "R-ABI",
    description: "An Agribusiness and Agri-preneurship focused incubator at IIT BHU promoting agricultural innovation and rural development.",
    logo: <Sprout className="w-12 h-12 text-green-500" />,
    category: "Agribusiness",
    website: "https://rabi.iitbhu.ac.in/",
    color: "from-green-100 to-emerald-100",
    features: ["Agricultural Innovation", "Rural Development", "Agri-preneurship"]
  },
  {
    id: 4,
    title: "Cisco thingQbator",
    shortTitle: "ThingQbator",
    description: "An internal makerspace 'Internet of Things' - focused incubator fostering IoT innovation and connected device development.",
    logo: <Cpu className="w-12 h-12 text-purple-500" />,
    category: "IoT Focus",
    website: "https://cisco-thingqbator.com/",
    color: "from-purple-100 to-pink-100",
    features: ["IoT Development", "Connected Devices", "Hardware Support"]
  },
  {
    id: 5,
    title: "IDAPT-Hub Foundation",
    shortTitle: "IDAPT-Hub",
    description: "Technology Innovation Hub for 'Data Analytics and Predictive Technologies' driving data-driven innovation solutions.",
    logo: <BarChart3 className="w-12 h-12 text-red-500" />,
    category: "Data Analytics",
    website: "https://idapt-hub.ac.in/",
    color: "from-red-100 to-rose-100",
    features: ["Data Analytics", "Predictive Tech", "AI/ML Support"]
  },
  {
    id: 6,
    title: "Innovation & Start-up Policy IIT BHU",
    shortTitle: "Startup Policy",
    description: "Official Startup Policy of IIT BHU providing framework and guidelines for entrepreneurial activities within the institute.",
    logo: <Rocket className="w-12 h-12 text-indigo-500" />,
    category: "Policy Framework",
    website: "https://startup-policy.iitbhu.ac.in/",
    color: "from-indigo-100 to-purple-100",
    features: ["Policy Framework", "Guidelines", "Institutional Support"]
  }
];

const IncubatorPage = ({
  title,
  highlightedTitle,
  description,
  logoSrc,
  questionMarkSrc,
  mainImage,
  buttonText,
  buttonLink,
  programs = [],
  facilities = [],
  selectionProcess = [],
  preIncubationPrograms = [],
  incubationPrograms = [],
  selectionCriteria = [],
  description2,
  title2,
  title3,
  i3Image,
  i3Logo,
  idaptLogo,
  nclLogo,
  currentData=[],
  services=[],
  currentDatai3=[],
}) => {

  const handleCardClick = (website) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };
  return (
   <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
     
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Innovation <span className="text-yellow-200">Incubators</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover our ecosystem of incubators fostering innovation, entrepreneurship, and technological advancement
          </p>
          <div className="flex justify-center items-center space-x-2 text-lg">
            <Lightbulb className="w-6 h-6 animate-pulse" />
            <span>Nurturing Ideas Into Reality</span>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">6+</div>
            <div className="text-gray-600">Active Incubators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
            <div className="text-gray-600">Startups Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600">Mentors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">₹10Cr+</div>
            <div className="text-gray-600">Funding Facilitated</div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {incubators.map((incubator) => (
            <Card 
              key={incubator.id}
              className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${incubator.color} border-0 overflow-hidden`}
              onClick={() => handleCardClick(incubator.website)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {incubator.logo}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-orange-600 transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-700 transition-colors duration-300">
                  {incubator.title}
                </CardTitle>
                <Badge variant="secondary" className="w-fit bg-white/70 text-gray-700">
                  {incubator.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-gray-700 mb-6 leading-relaxed">
                  {incubator.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-gray-800 mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {incubator.features.map((feature, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs bg-white/50 border-gray-300 text-gray-700"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/50">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="font-medium">Click to visit website</span>
                    <div className="flex items-center space-x-1 text-orange-600 group-hover:translate-x-1 transition-transform duration-300">
                      <span>Learn More</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
        <div className="mt-20 text-center bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our thriving ecosystem of innovators and entrepreneurs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300 hover:scale-105 transform">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncubatorPage;
