import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link2, ExternalLink, Music2, BookOpen, Instagram } from "lucide-react";

const links = [
  {
    title: "PRE-SAVE HOMEDOM",
    url: "https://untd.io/r/AsFysEp847Cj",
    icon: Music2,
    description: "Pre-save the upcoming release"
  },
  {
    title: "MEDIUM",
    url: "https://medium.com/@austinagbo/about",
    icon: BookOpen,
    description: "Read articles and updates"
  },
  {
    title: "OSANAGRAM",
    url: "https://www.instagram.com/fancradle",
    icon: Instagram,
    description: "Follow on Instagram"
  }
];

const LinksSection = () => {
  return (
    <Card className="border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link2 className="h-5 w-5 text-primary" />
          Links & Previews
        </CardTitle>
        <CardDescription>
          Stay connected and explore more
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-primary/50 transition-all duration-200 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <link.icon className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {link.title}
                  </span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LinksSection;
