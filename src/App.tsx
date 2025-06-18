import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Calendar, ArrowRight, Server, Monitor, Cpu, HardDrive, Network } from "lucide-react";

const queryClient = new QueryClient();

const HomelabBlog = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const blogPosts = [
    {
      title: "Building My First Kubernetes Homelab",
      date: "January 15, 2024", 
      excerpt: "A complete guide to setting up Mirantis Kubernetes Engine on repurposed enterprise hardware. From initial planning to production deployment.",
      readTime: "8 min read",
      category: "Kubernetes",
      tags: ["Kubernetes", "Docker", "Homelab", "Enterprise"],
      featured: true
    },
    {
      title: "Data Center Hardware: Dell R720 Deep Dive",
      date: "January 10, 2024", 
      excerpt: "Comprehensive review of the Dell PowerEdge R720 - specifications, upgrade paths, and real-world performance in homelab environments.",
      readTime: "12 min read",
      category: "Hardware",
      tags: ["Dell", "Server Hardware", "R720", "Enterprise"]
    },
    {
      title: "Oracle Cloud Infrastructure: Lessons from Production",
      date: "January 5, 2024",
      excerpt: "Hands-on experience with OCI compute instances, networking, and storage solutions in enterprise environments.",
      readTime: "10 min read", 
      category: "Cloud",
      tags: ["Oracle Cloud", "OCI", "Cloud Infrastructure", "Enterprise"]
    },
    {
      title: "Network Design: VLANs and Security in the Homelab",
      date: "December 28, 2023",
      excerpt: "Implementing enterprise-grade network segmentation using VLANs, firewall rules, and monitoring in a home environment.",
      readTime: "15 min read",
      category: "Networking", 
      tags: ["Networking", "VLAN", "Security", "pfSense"]
    },
    {
      title: "Storage Solutions: ZFS vs Hardware RAID",
      date: "December 20, 2023",
      excerpt: "Comparing ZFS software RAID with traditional hardware RAID controllers - performance, reliability, and cost analysis.",
      readTime: "9 min read",
      category: "Storage",
      tags: ["ZFS", "RAID", "Storage", "TrueNAS"]
    },
    {
      title: "Monitoring Everything: Prometheus and Grafana Setup",
      date: "December 15, 2023", 
      excerpt: "Building a comprehensive monitoring stack for homelab infrastructure - metrics collection, alerting, and visualization.",
      readTime: "11 min read",
      category: "Monitoring",
      tags: ["Prometheus", "Grafana", "Monitoring", "Observability"]
    }
  ];

  const hardwareSpecs = [
    {
      component: "Servers",
      details: "3x Dell PowerEdge R720",
      specs: "2x Intel Xeon E5-2670, 64GB RAM each",
      icon: Server
    },
    {
      component: "Storage",
      details: "TrueNAS Scale Server", 
      specs: "48TB usable, ZFS RAID-Z2",
      icon: HardDrive
    },
    {
      component: "Networking",
      details: "UniFi Dream Machine Pro",
      specs: "10Gb backbone, 4x VLANs",
      icon: Network
    },
    {
      component: "Monitoring",
      details: "Dedicated monitoring server",
      specs: "Prometheus, Grafana, Alertmanager",
      icon: Monitor
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className={`border-b ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Bing Xian Lim
              </h1>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Data Center Technician & Cloud Infrastructure
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <a href="#" className={`text-sm hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Home
                </a>
                <a href="#hardware" className={`text-sm hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Hardware
                </a>
                <a href="#about" className={`text-sm hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  About
                </a>
                <a href="#contact" className={`text-sm hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Contact
                </a>
              </nav>
              <Button
                variant="ghost"
                size="sm" 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-sm"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Intro Section */}
        <section className="mb-12">
          <div className={`prose max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Homelab Hardware & Infrastructure
            </h2>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Welcome to my documentation of building and maintaining enterprise-grade infrastructure 
              in a home environment. As a Cloud Infrastructure Trainee at DBS Bank with data center 
              experience, I document real-world implementations, lessons learned, and technical deep-dives 
              into modern infrastructure technologies.
            </p>
            <p className={`mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              This site covers everything from hardware selection and server configuration to 
              Kubernetes deployments, cloud integration, and monitoring solutions. Each post 
              includes practical examples, configuration files, and real performance data.
            </p>
          </div>
        </section>

        {/* Current Hardware Section */}
        <section id="hardware" className="mb-12">
          <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Current Hardware Setup
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {hardwareSpecs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <IconComponent className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                          {item.component}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {item.details}
                        </p>
                        <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {item.specs}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="mb-12">
          <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Latest Posts
          </h3>
          
          {/* Featured Post */}
          <Card className={`mb-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-blue-100 text-blue-800 text-xs">Featured</Badge>
                <Badge variant="outline" className="text-xs">Kubernetes</Badge>
              </div>
              <CardTitle className={`text-xl ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {blogPosts[0].title}
              </CardTitle>
              <div className={`flex items-center gap-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </span>
                <span>{blogPosts[0].readTime}</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className={`text-base mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {blogPosts[0].excerpt}
              </CardDescription>
              <Button variant="outline" size="sm">
                Read Full Post
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Other Posts */}
          <div className="space-y-6">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} hover:shadow-md transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {post.readTime}
                    </span>
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 hover:text-blue-600 transition-colors ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    <a href="#" className="hover:underline">
                      {post.title}
                    </a>
                  </h4>
                  <p className={`mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-12">
          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <CardHeader>
              <CardTitle className={isDarkMode ? 'text-gray-100' : 'text-gray-900'}>
                About This Site
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`prose max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  This documentation site chronicles my journey from homelab enthusiast to 
                  data center technician. Currently working as a Cloud Infrastructure Trainee 
                  at DBS Bank, I combine hands-on enterprise experience with continuous learning 
                  in cloud technologies, containerization, and infrastructure automation.
                </p>
                <p className={`mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Each post includes real configuration examples, performance metrics, and 
                  lessons learned from both success and failure. The goal is to provide 
                  practical guidance for others building similar infrastructure.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <CardHeader>
              <CardTitle className={isDarkMode ? 'text-gray-100' : 'text-gray-900'}>
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" asChild>
                  <a href="mailto:hello@bingxian.io">
                    📧 Email
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/bingxian" target="_blank" rel="noopener noreferrer">
                    💼 LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/bxianlim" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className={`mt-16 py-8 border-t text-center ${isDarkMode ? 'border-gray-700 bg-gray-900 text-gray-500' : 'border-gray-200 bg-white text-gray-500'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm">
            &copy; 2024 Bing Xian Lim. Documenting the journey from homelab to enterprise infrastructure.
          </p>
        </div>
      </footer>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HomelabBlog />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
