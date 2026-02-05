import { SocialLink } from "@/data/portfolio";

interface SocialLinksProps {
  socialLinks: SocialLink[];
}

export default function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
