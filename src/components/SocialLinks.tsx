import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function SocialLinks() {
  return (
    <div className="fixed bottom-5 left-5 flex flex-col gap-5 items-center z-10">
      <Link
        href="https://github.com/unisol1020"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="GitHub"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={20} />
        </Button>
      </Link>

      <Link
        href="https://www.linkedin.com/in/max-levchuk-69109a1ab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin size={20} />
        </Button>
      </Link>

      <Link
        href="https://www.instagram.com/_unisol_"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Instagram size={20} />
        </Button>
      </Link>
    </div>
  );
}
