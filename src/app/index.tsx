import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Package, ExternalLink, Star, Zap, Users, Headphones } from "lucide-react"

export default function WeathermanOsanaStore() {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      <header className="border-b border-border/20 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold neon-text">SHIONPLUS</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="hover:neon-glow transition-all duration-300">
                <Users className="w-4 h-4 mr-2" />
                Community
              </Button>
              <Button variant="ghost" size="sm" className="hover:neon-glow transition-all duration-300">
                <Headphones className="w-4 h-4 mr-2" />
                Listen
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            THE WEATHERMAN
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-4">× OSANA AD</div>
          <p className="text-xl text-muted-foreground mb-4">All-Time Music Update Collection</p>
          <Badge variant="secondary" className="text-sm bg-primary/20 text-primary border-primary/30 neon-glow">
            EXCLUSIVE COLLABORATION
          </Badge>
        </div>

        <Card className="mb-8 bg-card/50 backdrop-blur-sm border-primary/20 neon-glow">
          <CardHeader className="text-center border-b border-primary/20">
            <CardTitle className="text-4xl text-primary neon-text">£45</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">Free Delivery Worldwide</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 p-8">
            <div className="bg-card/30 p-6 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-primary">
                <Package className="w-6 h-6" />
                WHAT YOU GET:
              </h3>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-start gap-3 p-3 rounded bg-background/30">
                  <Star className="w-5 h-5 mt-1 text-accent" />
                  <span>1 exclusive merch item (Shionplus compilation)</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded bg-background/30">
                  <Music className="w-5 h-5 mt-1 text-accent" />
                  <span>Up to 300 music tracks from Osana AD</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded bg-background/30">
                  <Music className="w-5 h-5 mt-1 text-accent" />
                  <span>Set list from The Weatherman collaboration</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/30 p-6 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-primary">
                <Music className="w-6 h-6" />
                FEATURED TRACKS:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="p-2 rounded bg-background/30 text-foreground/90">
                    • Diamonds v1 (June's Salon Radio)
                  </div>
                  <div className="p-2 rounded bg-background/30 text-foreground/90">• Highway</div>
                  <div className="p-2 rounded bg-background/30 text-foreground/90">• Beauty in Black</div>
                  <div className="p-2 rounded bg-background/30 text-foreground/90">• Bordeaux</div>
                  <div className="p-2 rounded bg-background/30 text-foreground/90">• Asher</div>
                </div>
                <div className="space-y-2">
                  <div className="p-2 rounded bg-background/30 text-foreground/90">• wtf this?</div>
                  <div className="p-2 rounded bg-background/30 text-foreground/90">• Tell Me</div>
                  <div className="p-2 rounded bg-background/30 text-foreground/90">• Thanksgiving Jam</div>
                  <div className="p-2 rounded bg-background/30 text-foreground/90">• My Genre is My Hairstyle</div>
                  <div className="p-2 rounded bg-background/30 text-foreground/90">• .. And much more </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg neon-glow">
              <h4 className="font-semibold text-primary mb-3 text-lg">SPECIAL ACCESS:</h4>
              <p className="text-foreground/90 leading-relaxed">
                With your purchase, you'll receive insider alerts for the least expensive option of collectible items,
                including <em className="text-accent">'Master (Osana AD - Wolfpackin')'</em> as soon as it becomes live
                for collection.
              </p>
            </div>

            <div className="text-center pt-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground px-12 py-4 text-xl font-semibold neon-glow hover:scale-105 transition-all duration-300"
              >
                PURCHASE & OWN A PIECE OF HISTORY
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:neon-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg text-primary">COLLECTIBLE INFO</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The aforementioned track has been accessible on OpenSea.io/fancradle
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:neon-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-primary">
                <ExternalLink className="w-5 h-5" />
                SOFT MEMBER LINK
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:neon-glow transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Visit Soft Member Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <footer className="text-center text-muted-foreground border-t border-primary/20 pt-8">
          <p className="text-sm">&copy; WBS&People - Shionplus.com | EDITION</p>
        </footer>
      </div>
    </div>
  )
}
