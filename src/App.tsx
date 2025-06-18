
import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, BookOpen, Server, Zap, Calendar, ArrowRight, Terminal } from "lucide-react";

const queryClient = new QueryClient();

const TechBlog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      title: "Building My First Kubernetes Homelab",
      excerpt: "Journey from zero to deploying Mirantis Kubernetes Engine on my home infrastructure",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "homelab",
      tags: ["Kubernetes", "Docker", "Linux", "Homelab"],
      image: "/api/placeholder/400/200",
      slug: "kubernetes-homelab-setup",
      featured: true
    },
    {
      title: "Oracle Cloud Infrastructure Deep Dive",
      excerpt: "Hands-on experience provisioning and managing VMs in enterprise cloud environments",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "cloud",
      tags: ["Oracle Cloud", "VM Management", "Cloud Infrastructure"],
      image: "/api/placeholder/400/200",
      slug: "oracle-cloud-deep-dive"
    },
    {
      title: "Data Center Hardware: Lessons from the Field",
      excerpt: "Real-world experience with server racking, cable management, and hardware troubleshooting",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "datacenter",
      tags: ["Hardware", "Server Management", "Troubleshooting"],
      image: "/api/placeholder/400/200",
      slug: "datacenter-hardware-lessons"
    },
    {
      title: "Automating Infrastructure with Terraform",
      excerpt: "Building reusable infrastructure code for consistent deployments",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "automation",
      tags: ["Terraform", "IaC", "Automation", "DevOps"],
      image: "/api/placeholder/400/200",
      slug: "terraform-automation-guide"
    },
    {
      title: "Home Network Design: From Basic to Enterprise",
      excerpt: "Designing and implementing a production-grade network in my homelab environment",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "networking",
      tags: ["Networking", "VLAN", "Security", "Homelab"],
      image: "/api/placeholder/400/200",
      slug: "home-network-design"
    },
    {
      title: "Monitoring Everything: Prometheus & Grafana Setup",
      excerpt: "Complete monitoring stack implementation for infrastructure visibility",
      date: "2023-12-10",
      readTime: "9 min read",
      category: "monitoring",
      tags: ["Prometheus", "Grafana", "Monitoring", "Observability"],
      image: "/api/placeholder/400/200",
      slug: "prometheus-grafana-monitoring"
    }
  ];

  const homelabProjects = [
    {
      title: "Multi-Node Kubernetes Cluster",
      description: "Production-grade Kubernetes cluster running on repurposed enterprise hardware",
      status: "active",
      tech: ["Kubernetes", "Docker", "MetalLB", "Longhorn"],
      specs: "3x Dell R720, 192GB RAM, 24TB Storage"
    },
    {
      title: "Network Infrastructure",
      description: "Enterprise-grade networking with VLANs, firewall rules, and monitoring",
      status: "active",
      tech: ["pfSense", "UniFi", "VLAN", "VPN"],
      specs: "10Gb backbone, 4x VLANs, Site-to-Site VPN"
    },
    {
      title: "Storage Array",
      description: "High-availability storage solution with automatic backups and replication",
      status: "active", 
      tech: ["TrueNAS", "ZFS", "iSCSI", "S3"],
      specs: "48TB usable, RAID-Z2, 3-2-1 backup strategy"
    },
    {
      title: "CI/CD Pipeline",
      description: "Automated testing and deployment pipeline for homelab applications",
      status: "development",
      tech: ["GitLab CI", "Docker Registry", "Helm"],
      specs: "Automated testing, security scanning, staged deployments"
    }
  ];

  const certificationJourney = [
    {
      title: "AWS Certified Cloud Practitioner",
      status: "completed",
      date: "2025",
      description: "Foundation certification covering AWS core services and cloud concepts",
      nextStep: "AWS Solutions Architect Associate"
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      status: "completed", 
      date: "2025",
      description: "Microsoft Azure basics including core services and pricing models",
      nextStep: "Azure Administrator Associate"
    },
    {
      title: "DevOps Foundation",
      status: "completed",
      date: "2024",
      description: "DevOps principles, practices, and cultural transformation",
      nextStep: "Advanced DevOps certifications"
    },
    {
      title: "Data Center Design Awareness",
      status: "completed",
      date: "2023", 
      description: "Physical infrastructure design and data center operations",
      nextStep: "DCCA (Data Center Certified Associate)"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen },
    { id: 'homelab', name: 'Homelab', icon: Server },
    { id: 'datacenter', name: 'Data Center', icon: Zap },
    { id: 'cloud', name: 'Cloud', icon: Terminal },
    { id: 'automation', name: 'Automation', icon: ArrowRight },
    { id: 'networking', name: 'Networking', icon: Server },
    { id: 'monitoring', name: 'Monitoring', icon: Zap }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${
        isDarkMode 
          ? 'bg-gray-900/95 border-gray-700' 
          : 'bg-white/95 border-gray-200'
        } backdrop-blur-xl border-b shadow-sm`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg ${
                isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
              } flex items-center justify-center`}>
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className={`font-bold text-lg ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  Bing Xian's Tech Journey
                </div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Data Center & Cloud Infrastructure
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#blog" className={`transition-colors text-sm font-medium ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>Blog</a>
              <a href="#homelab" className={`transition-colors text-sm font-medium ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>Homelab</a>
              <a href="#journey" className={`transition-colors text-sm font-medium ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>Journey</a>
              <a href="#about" className={`transition-colors text-sm font-medium ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>About</a>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-4"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                isDarkMode 
                  ? 'bg-green-900/50 text-green-400 border border-green-800' 
                  : 'bg-green-50 text-green-700 border border-green-200'
              }`}>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Currently: Cloud Infrastructure Trainee @ DBS Bank
              </div>
              
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Building Tomorrow's
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent block">
                  Infrastructure Today
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Follow my journey from homelab enthusiast to enterprise data center technician. 
                Documenting real-world projects, lessons learned, and the path to infrastructure mastery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4"
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read Latest Posts
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="px-8 py-4"
                  onClick={() => document.getElementById('homelab')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Server className="w-5 h-5 mr-2" />
                  Explore Homelab
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className={`text-center p-4 rounded-xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                  <div className="text-2xl font-bold text-blue-500">24+</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Blog Posts
                  </div>
                </div>
                <div className={`text-center p-4 rounded-xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                  <div className="text-2xl font-bold text-green-500">40%</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Downtime Reduced
                  </div>
                </div>
                <div className={`text-center p-4 rounded-xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                  <div className="text-2xl font-bold text-purple-500">4</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Certifications
                  </div>
                </div>
                <div className={`text-center p-4 rounded-xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                  <div className="text-2xl font-bold text-orange-500">2+</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Latest from the Lab
            </h2>
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Real-world projects, technical deep-dives, and lessons learned
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Featured Post */}
          {selectedCategory === 'all' && (
            <div className="mb-12">
              <div className={`rounded-2xl overflow-hidden shadow-xl ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className={`h-64 md:h-full ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    } flex items-center justify-center`}>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>
                        Featured Image
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-blue-100 text-blue-800">Featured</Badge>
                      <Badge variant="outline">Homelab</Badge>
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                      {blogPosts[0].title}
                    </h3>
                    <p className={`text-lg mb-6 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {blogPosts[0].excerpt}
                    </p>
                    <div className={`flex items-center gap-4 text-sm mb-6 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(selectedCategory === 'all' ? 1 : 0).map((post, index) => (
              <Card key={index} className={`${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
              } hover:shadow-xl transition-all duration-300 overflow-hidden group`}>
                <div className={`h-48 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                } flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>
                    Article Image
                  </span>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className={`text-xs ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className={`text-lg group-hover:text-blue-500 transition-colors ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </CardTitle>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className={`flex items-center justify-between text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Homelab Section */}
      <section id="homelab" className={`py-16 px-6 ${
        isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Homelab Infrastructure
            </h2>
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Production-grade infrastructure running in my home environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homelabProjects.map((project, index) => (
              <Card key={index} className={`${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
              } hover:shadow-xl transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className={`text-xl ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </CardTitle>
                    <Badge className={
                      project.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className={`font-semibold mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Specifications
                      </h4>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {project.specs}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Journey */}
      <section id="journey" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Certification Journey
            </h2>
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Continuous learning and professional development path
            </p>
          </div>

          <div className="space-y-6">
            {certificationJourney.map((cert, index) => (
              <Card key={index} className={`${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
              } hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      cert.status === 'completed' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {cert.status === 'completed' ? '✓' : '○'}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-xl font-semibold ${
                          isDarkMode ? 'text-gray-100' : 'text-gray-900'
                        }`}>
                          {cert.title}
                        </h3>
                        <Badge className={
                          cert.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }>
                          {cert.status}
                        </Badge>
                        <span className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {cert.date}
                        </span>
                      </div>
                      <p className={`mb-3 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {cert.description}
                      </p>
                      <div className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <span className="font-medium">Next Step:</span> {cert.nextStep}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-6 ${
        isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            About My Journey
          </h2>
          <div className={`text-lg leading-relaxed space-y-6 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <p>
              Starting as a curious homelab enthusiast, I've grown into a data center professional 
              with hands-on experience in enterprise infrastructure. My journey combines practical 
              experience with continuous learning and certification.
            </p>
            <p>
              Currently working as a Cloud Infrastructure Trainee at DBS Bank, I focus on 
              containerization technologies, cloud platforms, and infrastructure automation. 
              My background in data center operations provides a solid foundation for understanding 
              the full stack from hardware to cloud.
            </p>
            <p>
              This blog documents my learning process, shares real-world implementations, 
              and serves as a resource for others on similar journeys in infrastructure and DevOps.
            </p>
          </div>
          
          <div className="mt-12">
            <Card className={`${
              isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
            } shadow-xl`}>
              <CardContent className="p-8">
                <h3 className={`text-xl font-semibold mb-6 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  Let's Connect
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white" asChild>
                    <a href="mailto:hello@bingxian.io">
                      📧 Email Me
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 text-center ${
        isDarkMode 
          ? 'text-gray-500 bg-gray-900/50' 
          : 'text-gray-500 bg-white/50'
      } backdrop-blur-sm`}>
        <p>&copy; 2024 Bing Xian Lim. Data Center & Cloud Infrastructure Specialist.</p>
        <p className="text-sm mt-2">
          Documenting the journey from homelab to enterprise infrastructure
        </p>
      </footer>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <TechBlog />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
