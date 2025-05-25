
import { Dumbbell } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Raina's Sports</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Raina's Sports. Empowering athletes through expert coaching.
          </p>
          <p className="text-xs text-muted-foreground">
            Unlock your potential with professional sports coaching and yoga instruction.
          </p>
        </div>
      </div>
    </footer>
  );
}
