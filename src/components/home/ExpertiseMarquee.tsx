import { Marquee } from "@/components/ui/Marquee";
import { expertiseMarquee } from "@/content/site";

export function ExpertiseMarquee() {
  return <Marquee items={expertiseMarquee} />;
}
