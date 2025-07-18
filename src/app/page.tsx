"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play, Clock, Eye, Award, Mail, Calendar, Film } from "lucide-react"

export default function Component() {
  const [glitchActive, setGlitchActive] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    const glitchTimer = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 8000)

    return () => {
      clearInterval(timer)
      clearInterval(glitchTimer)
    }
  }, [])

  const collections = [
    {
      title: "TEMPORAL NEXUS",
      description: "A psychological thriller exploring parallel realities through temporal manipulation",
      pieces: 12,
      views: "2.4K",
      opensea: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
      tags: ["Time Travel", "Psychological Thriller", "Nonlinear Narrative"],
    },
    {
      title: "CIPHER PROTOCOL",
      description: "Futuristic espionage meets cyber thriller in this high-concept sci-fi collection",
      pieces: 8,
      views: "1.8K",
      opensea: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
      tags: ["Cyber Thriller", "Tech-Noir", "Surveillance"],
    },
    {
      title: "PARADOX ENGINE",
      description: "Memory manipulation and identity crisis in a multiverse of possibilities",
      pieces: 15,
      views: "3.1K",
      opensea: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
      tags: ["Multiverse Theory", "Memory Manipulation", "Identity Crisis"],
    },
  ]

  const festivals = [
    { name: "Sundance Film Festival", deadline: "2024-09-15", status: "Preparing" },
    { name: "Cannes Film Festival", deadline: "2024-12-01", status: "Eligible" },
    { name: "Venice International Film Festival", deadline: "2024-11-15", status: "Considering" },
    { name: "Toronto International Film Festival", deadline: "2024-08-30", status: "Submitted" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Glitch Overlay */}
      {glitchActive && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 animate-pulse" />
          <div
            className="absolute inset-0 opacity-30 bg-gray-800"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 0h100v2H0zM0 10h100v1H0zM0 20h100v3H0z' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-orange-400 rounded-sm" />
              <h1 className="text-xl font-bold tracking-wider">TEMPORAL ARTS</h1>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{currentTime.toLocaleTimeString()}</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#collections" className="hover:text-cyan-400 transition-colors">
                  Collections
                </a>
                <a href="#festivals" className="hover:text-cyan-400 transition-colors">
                  Festivals
                </a>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About
                </a>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-black to-orange-900/20" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23ffffff' strokeWidth='0.1' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-4">
              FESTIVAL SUBMISSION PORTFOLIO
            </Badge>
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${glitchActive ? "animate-pulse" : ""}`}>
              <span className="bg-gradient-to-r from-cyan-400 via-white to-orange-400 bg-clip-text text-transparent">
                TEMPORAL
              </span>
              <br />
              <span className="text-white">NARRATIVES</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Exploring the intersection of time, memory, and reality through immersive digital art collections
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-8"
            >
              <Play className="w-5 h-5 mr-2" />
              View Collections
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-8 bg-transparent"
            >
              <Award className="w-5 h-5 mr-2" />
              Festival Submissions
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-2000" />
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-cyan-400">OpenSea</span> Collections
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Curated digital art exploring themes of temporal manipulation, psychological depth, and futuristic
              narratives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={collection.thumbnail || "/placeholder.svg"}
                    alt={collection.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/60 text-cyan-400">
                      {collection.pieces} pieces
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">{collection.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{collection.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {collection.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-orange-400/30 text-orange-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{collection.views}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      OpenSea
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Submissions Section */}
      <section id="festivals" className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Festival <span className="text-orange-400">Submissions</span>
            </h2>
            <p className="text-xl text-gray-400">
              Targeting prestigious international film festivals for digital art recognition
            </p>
          </div>

          <div className="grid gap-6">
            {festivals.map((festival, index) => (
              <Card key={index} className="bg-black/40 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Film className="w-6 h-6 text-orange-400" />
                      <div>
                        <h3 className="text-lg font-semibold">{festival.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>Deadline: {festival.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant={festival.status === "Submitted" ? "default" : "outline"}
                      className={
                        festival.status === "Submitted"
                          ? "bg-green-600 text-white"
                          : festival.status === "Preparing"
                            ? "border-orange-400 text-orange-400"
                            : "border-cyan-400 text-cyan-400"
                      }
                    >
                      {festival.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                About the <span className="text-cyan-400">Artist</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Exploring the boundaries between reality and perception through digital art that challenges our
                understanding of time, memory, and identity. Each collection represents a journey through parallel
                narratives and temporal possibilities.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                My work has been featured in various digital art platforms and is now being submitted to prestigious
                film festivals to bridge the gap between traditional cinema and emerging digital art forms.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Sci-Fi Thriller", "Psychological Thriller", "Time Travel", "Tech-Noir", "High-Concept Sci-Fi"].map(
                  (genre, index) => (
                    <Badge key={index} variant="outline" className="border-cyan-400/30 text-cyan-400">
                      {genre}
                    </Badge>
                  ),
                )}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-cyan-900/20 to-orange-900/20 rounded-lg" />
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 0h100v2H0zM0 10h100v1H0zM0 20h100v3H0z' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get in <span className="text-orange-400">Touch</span>
          </h2>
          <p className="text-gray-400 mb-8">
            For festival submissions, collaborations, or inquiries about the collections
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact for Submissions
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 Temporal Arts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
