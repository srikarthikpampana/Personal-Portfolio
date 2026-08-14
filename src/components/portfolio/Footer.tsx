import { PROFILE } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p className="font-mono text-xs">Secure by default · Built with care</p>
      </div>
    </footer>
  );
}