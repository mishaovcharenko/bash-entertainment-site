export default function Footer() {
  return (
    <footer className="px-6 py-10 text-center">
      <p className="text-[10px] uppercase tracking-[0.35em] text-muted/60">
        &copy; {new Date().getFullYear()} BASH. All rights reserved.
      </p>
      <div className="mt-3 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[0.3em] text-muted/40">
        <span>Privacy Policy</span>
        <span>|</span>
        <span>Terms of Use</span>
      </div>
    </footer>
  );
}
