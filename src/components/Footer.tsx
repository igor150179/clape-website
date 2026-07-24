import Link from "next/link";
import { Logo } from "@/components/Logo";
import { FACEBOOK_URL, INSTAGRAM_URL, NAV_LINKS, SITE, YOUTUBE_URL } from "@/lib/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M14 8h2.5V5.5C16.3 5.4 15.4 5.3 14 5.3c-2.8 0-4.5 1.7-4.5 4.7V12H7v3h2.5v7.5H14V15h2.5l.5-3H14V9.8c0-.9.3-1.5 1.5-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M21.5 8.2c-.2-1-1-1.8-2-2C17.8 5.7 12 5.7 12 5.7s-5.8 0-7.5.5c-1 .2-1.8 1-2 2C2 9.9 2 12 2 12s0 2.1.5 3.8c.2 1 1 1.8 2 2 1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5c1-.2 1.8-1 2-2 .5-1.7.5-3.8.5-3.8s0-2.1-.5-3.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M10 15.5V8.5l5.5 3.5L10 15.5Z" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-clape-dark-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo size="lg" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-clape-cream/70">
              A felicidade só existe quando compartilhada.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-clape-orange">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-clape-cream/70 transition hover:text-clape-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#lista-espera"
                  className="text-sm text-clape-cream/70 transition hover:text-clape-cream"
                >
                  Lista de Espera
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-clape-orange">
              Redes sociais
            </h3>
            <div className="mt-4 flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram CLAPE"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-clape-cream transition hover:border-clape-orange hover:text-clape-orange"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook CLAPE"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-clape-cream transition hover:border-clape-orange hover:text-clape-orange"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube CLAPE"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-clape-cream transition hover:border-clape-orange hover:text-clape-orange"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-clape-cream/50">
          © {SITE.name} {new Date().getFullYear()}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
