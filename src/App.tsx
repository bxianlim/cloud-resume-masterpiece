import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const queryClient = new QueryClient();

const CloudPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const [skillFilter, setSkillFilter] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Cloud Infrastructure Automation Platform",
      description: "Multi-tier AWS architecture with auto-scaling, infrastructure provisioning, and cost optimization",
      liveUrl: "https://cloud-infra-demo.vercel.app",
      githubUrl: "https://github.com/bxianlim/cloud-automation",
      architecture: "/placeholder-architecture-1.png",
      techStack: ["AWS", "React", "Node.js", "PostgreSQL", "Docker", "Kubernetes", "Terraform"],
      impact: "Reduced deployment time by 75%",
      status: "live"
    },
    {
      title: "DevOps CI/CD Pipeline Dashboard",
      description: "Complete CI/CD workflow with security scanning, automated testing, and multi-environment deployment",
      liveUrl: "https://devops-pipeline.netlify.app",
      githubUrl: "https://github.com/bxianlim/cicd-dashboard",
      architecture: "/placeholder-architecture-2.png",
      techStack: ["GitHub Actions", "Docker", "Kubernetes", "Python", "Grafana", "Security Tools"],
      impact: "40% faster deployments",
      status: "live"
    },
    {
      title: "Multi-Cloud Monitoring Solution",
      description: "Cross-cloud monitoring with real-time dashboards, cost optimization, and compliance reporting",
      liveUrl: "https://multi-cloud-monitor.vercel.app",
      githubUrl: "https://github.com/bxianlim/cloud-monitoring",
      architecture: "/placeholder-architecture-3.png",
      techStack: ["Azure", "AWS", "GCP", "Prometheus", "Grafana", "Python", "Go"],
      impact: "30% cost reduction",
      status: "live"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      verifyUrl: "https://aws.amazon.com/verification",
      badge: "🟠"
    },
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      date: "2025",
      verifyUrl: "https://docs.microsoft.com/learn",
      badge: "🔵"
    },
    {
      title: "DevOps Foundation",
      issuer: "DevOps Institute",
      date: "2024",
      verifyUrl: "https://devopsinstitute.com/verify",
      badge: "🟢"
    },
    {
      title: "Data Center Design Awareness",
      issuer: "DCD Academy",
      date: "2023",
      verifyUrl: "https://dcd.com/academy",
      badge: "🟣"
    }
  ];

  const techStack = {
    "Cloud Platforms": ["AWS EC2", "AWS Lambda", "Azure VMs", "Oracle Cloud", "GCP Compute"],
    "Containers": ["Docker", "Kubernetes", "Mirantis", "Container Registry", "Helm"],
    "Infrastructure as Code": ["Terraform", "CloudFormation", "Ansible", "Pulumi"],
    "CI/CD": ["GitHub Actions", "Jenkins", "Azure DevOps", "GitLab CI", "CircleCI"],
    "Monitoring": ["Prometheus", "Grafana", "CloudWatch", "Azure Monitor", "ELK Stack"],
    "Security": ["Security Scanning", "Compliance Automation", "IAM", "Network Security"],
    "Programming": ["Python", "Bash", "PowerShell", "Go", "JavaScript"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-gradient-to-br from-mint-50 via-white to-mint-100 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${
        isDarkMode 
          ? 'bg-gray-900/95 border-gray-700' 
          : 'bg-white/90 border-mint-200/50'
        } backdrop-blur-xl border-b shadow-lg`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`font-bold text-xl tracking-wide ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Bing Xian Lim
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#projects" className={`transition-all duration-300 text-sm font-medium hover:scale-105 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-mint-400' 
                  : 'text-gray-600 hover:text-mint-600'
              }`}>Projects</a>
              <a href="#architecture" className={`transition-all duration-300 text-sm font-medium hover:scale-105 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-mint-400' 
                  : 'text-gray-600 hover:text-mint-600'
              }`}>Architecture</a>
              <a href="#skills" className={`transition-all duration-300 text-sm font-medium hover:scale-105 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-mint-400' 
                  : 'text-gray-600 hover:text-mint-600'
              }`}>Skills</a>
              <a href="#experience" className={`transition-all duration-300 text-sm font-medium hover:scale-105 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-mint-400' 
                  : 'text-gray-600 hover:text-mint-600'
              }`}>Experience</a>
              <a href="#contact" className={`transition-all duration-300 text-sm font-medium hover:scale-105 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-mint-400' 
                  : 'text-gray-600 hover:text-mint-600'
              }`}>Contact</a>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`ml-4 ${
                isDarkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Profile Image */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              {/* Profile Image */}
              <div className="mb-8 flex justify-center">
                <div className="relative group">
                  <img 
                    src="/profile.png" 
                    alt="Bing Xian Lim - Cloud Infrastructure Engineer" 
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-white/80 transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback Avatar */}
                  <div 
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-mint-400 to-mint-600 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-2xl border-4 border-white/80 transition-all duration-300 group-hover:scale-105"
                    style={{ display: 'none' }}
                  >
                    BX
                  </div>
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-mint-400/20 to-mint-600/20 animate-pulse"></div>
                  {/* Status indicator */}
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-2 border-white rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Cloud Infrastructure
                <span className="bg-gradient-to-r from-mint-400 to-mint-600 bg-clip-text text-transparent block animate-slide-up">
                  & DevOps Engineer
                </span>
              </h1>
              <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Specialized in building scalable cloud infrastructure, automating deployments, 
                and optimizing system performance across multi-cloud environments.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
                <div className={`${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white/80 border-mint-200/50'
                  } backdrop-blur-sm rounded-3xl p-6 border shadow-xl`}>
                  <div className="text-3xl font-bold text-mint-500 mb-2">40%</div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Downtime Reduction</div>
                </div>
                <div className={`${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white/80 border-mint-200/50'
                  } backdrop-blur-sm rounded-3xl p-6 border shadow-xl`}>
                  <div className="text-3xl font-bold text-mint-500 mb-2">3</div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Cloud Platforms</div>
                </div>
                <div className={`${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white/80 border-mint-200/50'
                  } backdrop-blur-sm rounded-3xl p-6 border shadow-xl`}>
                  <div className="text-3xl font-bold text-mint-500 mb-2">75%</div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Faster Deployments</div>
                </div>
                <div className={`${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white/80 border-mint-200/50'
                  } backdrop-blur-sm rounded-3xl p-6 border shadow-xl`}>
                  <div className="text-3xl font-bold text-mint-500 mb-2">4</div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Certifications</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-mint-500 hover:bg-mint-600 text-white px-8 py-4 text-lg"
                  onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Architecture
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-mint-500 text-mint-600 hover:bg-mint-500 hover:text-white px-8 py-4 text-lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Live Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Portfolio Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>Live Project Showcases</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80'} backdrop-blur-sm border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group overflow-hidden`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={project.status === 'live' ? 'default' : 'secondary'} className="bg-green-100 text-green-800">
                      ● {project.status}
                    </Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-mint-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className={`w-full h-48 ${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-mint-100 to-mint-200'} rounded-lg flex items-center justify-center text-gray-500 mb-4`}>
                      Architecture Diagram
                      <br />
                      <span className="text-sm">(Interactive View)</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className={`text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-mint-400' : 'text-mint-600'
                    }`}>Impact: {project.impact}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-mint-500 hover:bg-mint-600" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture Showcase */}
      <section id="architecture" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>System Architecture Portfolio</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80'} backdrop-blur-sm border border-mint-200/50 shadow-xl`}>
              <CardHeader>
                <CardTitle className={isDarkMode ? 'text-gray-100' : 'text-gray-900'}>Multi-Cloud Infrastructure</CardTitle>
                <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Scalable architecture across AWS, Azure, and GCP
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`w-full h-64 ${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-100 to-blue-200'} rounded-lg flex items-center justify-center text-gray-500 mb-4`}>
                  Interactive Architecture Diagram
                  <br />
                  <span className="text-sm">(Click to explore layers)</span>
                </div>
                <p className={`text-sm mb-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Designed and implemented multi-region, multi-cloud infrastructure with automated failover, 
                  load balancing, and cost optimization across three major cloud providers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>AWS</Badge>
                  <Badge>Azure</Badge>
                  <Badge>GCP</Badge>
                  <Badge>Terraform</Badge>
                  <Badge>Kubernetes</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80'} backdrop-blur-sm border border-mint-200/50 shadow-xl`}>
              <CardHeader>
                <CardTitle className={isDarkMode ? 'text-gray-100' : 'text-gray-900'}>CI/CD Pipeline Architecture</CardTitle>
                <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  End-to-end automation with security scanning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`w-full h-64 ${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-green-100 to-green-200'} rounded-lg flex items-center justify-center text-gray-500 mb-4`}>
                  Pipeline Flow Visualization
                  <br />
                  <span className="text-sm">(Real-time status)</span>
                </div>
                <p className={`text-sm mb-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Built comprehensive CI/CD pipelines with automated testing, security scanning, 
                  and multi-environment deployments reducing deployment time by 75%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>GitHub Actions</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Security Scanning</Badge>
                  <Badge>Automated Testing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Matrix with Evidence */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>Technical Expertise Matrix</h2>
          
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            <Button 
              variant={skillFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setSkillFilter('all')}
              className="mb-2"
            >
              All Technologies
            </Button>
            {Object.keys(techStack).map((category) => (
              <Button
                key={category}
                variant={skillFilter === category ? 'default' : 'outline'}
                onClick={() => setSkillFilter(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, technologies]) => {
              if (skillFilter !== 'all' && skillFilter !== category) return null;
              
              return (
                <Card key={category} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80'} backdrop-blur-sm border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105`}>
                  <CardHeader>
                    <CardTitle className={`text-lg ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {technologies.map((tech, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className={`text-sm ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>{tech}</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div
                                key={level}
                                className={`w-2 h-2 rounded-full ${
                                  level <= 4 ? 'bg-mint-500' : (isDarkMode ? 'bg-gray-600' : 'bg-gray-300')
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>Verified Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80'} backdrop-blur-sm border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group`}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cert.badge}
                  </div>
                  <CardTitle className={`text-lg ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{cert.title}</CardTitle>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      Verify Credential
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>Professional Experience</h2>
          
          <div className="space-y-8">
            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80'} backdrop-blur-sm border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className={`text-2xl mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Cloud Infrastructure Trainee</CardTitle>
                    <p className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? 'text-mint-400' : 'text-mint-600'
                    }`}>DBS Bank</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>January 2024 - Present • Singapore</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 mt-4 md:mt-0">Current Role</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`font-semibold mb-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Key Achievements:</h4>
                    <ul className="space-y-2">
                      <li className={`flex items-start gap-3 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <span className="text-mint-500 mt-1">🔧</span>
                        Configured Mirantis Kubernetes Engine on Linux systems
                      </li>
                      <li className={`flex items-start gap-3 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <span className="text-mint-500 mt-1">☁️</span>
                        Managed multiple VMs in Oracle Private Cloud
                      </li>
                      <li className={`flex items-start gap-3 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <span className="text-mint-500 mt-1">📋</span>
                        Documented infrastructure processes and configurations
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Kubernetes</Badge>
                      <Badge>Docker</Badge>
                      <Badge>Oracle Cloud</Badge>
                      <Badge>Linux</Badge>
                      <Badge>Infrastructure as Code</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80'} backdrop-blur-sm border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className={`text-2xl mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Data Center Engineer</CardTitle>
                    <p className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? 'text-mint-400' : 'text-mint-600'
                    }`}>Leaseweb</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>May 2022 - December 2023 • Singapore</p>
                  </div>
                  <Badge variant="outline" className="mt-4 md:mt-0">1.7 Years</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className={`${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600' 
                    : 'bg-mint-50 border-mint-200'
                  } border rounded-xl p-4 mb-6`}>
                  <div className={`flex items-center gap-2 font-semibold ${
                    isDarkMode ? 'text-mint-400' : 'text-mint-800'
                  }`}>
                    <span className="text-lg">🎯</span>
                    Key Achievement: 40% reduction in system downtime
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`font-semibold mb-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Infrastructure Responsibilities:</h4>
                    <ul className="space-y-2">
                      <li className={`flex items-start gap-3 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <span className="text-mint-500 mt-1">🖥️</span>
                        Server hardware installation and troubleshooting
                      </li>
                      <li className={`flex items-start gap-3 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <span className="text-mint-500 mt-1">🔌</span>
                        Network device configuration and maintenance
                      </li>
                      <li className={`flex items-start gap-3 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <span className="text-mint-500 mt-1">🛠️</span>
                        Remote hands support and hardware upgrades
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Technical Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Server Hardware</Badge>
                      <Badge>Network Configuration</Badge>
                      <Badge>System Troubleshooting</Badge>
                      <Badge>Data Center Operations</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-mint-500 to-mint-700 border-none shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            <CardContent className="p-12 text-white relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
              <p className="text-xl mb-8 text-mint-100">
                Ready to discuss cloud infrastructure opportunities? 
                I'm available for full-time roles and consulting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button 
                  size="lg"
                  className="bg-white text-mint-600 hover:bg-mint-50 px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <a href="mailto:hello@bingxian.io">
                    📧 Email Me
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-mint-600 px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <a href="https://linkedin.com/in/bingxian" target="_blank" rel="noopener noreferrer">
                    💼 LinkedIn
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2 text-mint-100">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for new opportunities</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 text-center ${
        isDarkMode 
          ? 'text-gray-500 bg-gray-900/50' 
          : 'text-gray-500 bg-white/50'
      } backdrop-blur-sm`}>
        <p>&copy; 2024 Bing Xian Lim. Cloud Infrastructure & DevOps Engineer.</p>
      </footer>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CloudPortfolio />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
