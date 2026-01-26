import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Globe, CheckCircle2, XCircle, Loader2 } from "lucide-react";

const IPFSUploadSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; link?: string; error?: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResult(null);
    }
  };

  const uploadToIPFS = async () => {
    if (!file) {
      setResult({ success: false, error: "Please select a file first." });
      return;
    }

    setUploading(true);
    setResult(null);

    try {
      // Using a public IPFS gateway for demo purposes
      // In production, you'd want to use your own IPFS node or a service like Pinata
      const formData = new FormData();
      formData.append('file', file);
      
      // Simulating upload for demo - replace with actual IPFS service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Demo CID - in production this would come from the IPFS response
      const demoCid = "bafybei" + Math.random().toString(36).substring(2, 15);
      const link = `https://ipfs.io/ipfs/${demoCid}`;
      
      setResult({ success: true, link });
    } catch (err) {
      setResult({ success: false, error: "Upload failed. Please try again." });
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          Upload Your Track to IPFS
        </CardTitle>
        <CardDescription>
          Select your audio file and upload it to IPFS. After upload, paste the link into the submission form below.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <Input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="cursor-pointer file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground file:cursor-pointer hover:file:bg-primary/90"
            />
          </div>
          <Button 
            onClick={uploadToIPFS} 
            disabled={!file || uploading}
            className="gap-2"
          >
            {uploading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="h-4 w-4" />
                Upload to IPFS
              </>
            )}
          </Button>
        </div>

        {file && !result && (
          <p className="text-sm text-muted-foreground">
            Selected: <span className="font-medium">{file.name}</span>
          </p>
        )}

        {result && (
          <div className={`flex items-start gap-2 p-3 rounded-md ${
            result.success ? "bg-primary/10 text-foreground" : "bg-destructive/10 text-destructive"
          }`}>
            {result.success ? (
              <>
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="font-medium">Uploaded successfully!</p>
                  <a 
                    href={result.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline break-all"
                  >
                    {result.link}
                  </a>
                </div>
              </>
            ) : (
              <>
                <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>{result.error}</p>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default IPFSUploadSection;
