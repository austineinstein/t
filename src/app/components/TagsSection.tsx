import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Film, Copy, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const projectMetadata = {
  genre: ["Sci-Fi Thriller", "Psychological Thriller", "Time Travel", "Nonlinear Narrative"],
  keywords: [
    "Temporal Pincer",
    "Memory Manipulation",
    "Multiverse Theory",
    "Real-Time Tension",
    "High Frame Rate",
    "Glitch Aesthetics",
    "Puzzle Narrative"
  ]
};

const TagsSection = () => {
  const { toast } = useToast();
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  const allTags = [...new Set([...projectMetadata.genre, ...projectMetadata.keywords])];

  const copyTag = async (tag: string) => {
    await navigator.clipboard.writeText(tag);
    setCopiedTag(tag);
    toast({
      title: "Copied!",
      description: `"${tag}" copied to clipboard`,
    });
    setTimeout(() => setCopiedTag(null), 2000);
  };

  return (
    <Card className="border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Film className="h-5 w-5 text-primary" />
          Project Tags & Genre Metadata
        </CardTitle>
        <CardDescription>
          Click any tag to copy it to your clipboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1.5 text-sm gap-1.5"
              onClick={() => copyTag(tag)}
            >
              {copiedTag === tag ? (
                <CheckCircle2 className="h-3 w-3" />
              ) : (
                <Copy className="h-3 w-3 opacity-50" />
              )}
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TagsSection;
