import Link from "next/link";
import { Logo } from "./logo";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Sources", href: "/#sources" },
  { label: "Limitations", href: "/#limitations" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#EAE2D6] bg-[#F7F2EB]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="text-lg font-semibold text-[#2D2D2D]">Votable</span>
            </div>
            <p className="text-sm text-[#2D2D2D]/60 italic">
              &ldquo;Restoring the Right to Vote&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#2D2D2D]/60 transition-colors hover:text-[#8B9A6E]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[#EAE2D6] pt-6">
          <p className="text-center text-xs text-[#2D2D2D]/50">
            Votable is an independent civic-information prototype by Team Coddify.
          </p>
          <p className="mt-2 text-center text-xs text-[#2D2D2D]/40 max-w-2xl mx-auto">
            Not an official Election Commission of India website. Information and tribunal data shown
            in the demo may include illustrative data and should be verified against current official
            notices.
          </p>
        </div>
      </div>
    </footer>
  );
}
