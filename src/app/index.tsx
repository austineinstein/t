import HeroSection from "./components/HeroSection";
import IPFSUploadSection from "./components/IPFSUploadSection";
import MusicSubmissionForm from "./components/MusicSubmissionForm";
import TagsSection from "./components/TagsSection";
import LinksSection from "./components/LinksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "fancradle",
            "alternateName": "$FANC.DEV",
            "description": "A genre-bending multimedia project inviting collaborators to submit music and participate in an upcoming sci-fi thriller film.",
            "genre": ["Sci-Fi Thriller", "Psychological Thriller", "Time Travel", "Nonlinear Narrative"],
            "keywords": [
              "Temporal Pincer",
              "Memory Manipulation",
              "Multiverse Theory",
              "Real-Time Tension",
              "High Frame Rate",
              "Glitch Aesthetics",
              "Puzzle Narrative"
            ],
            "creator": {
              "@type": "Person",
              "name": "Anonymous"
            },
            "dateCreated": "2025-07-18"
          })
        }}
      />

      <HeroSection />

      <main className="container mx-auto px-4 py-12 space-y-8 max-w-4xl">
        <IPFSUploadSection />
        <MusicSubmissionForm />
        <TagsSection />
        <LinksSection />
      </main>

      <footer className="border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 fancradle • $FANC.DEV</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
