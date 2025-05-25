
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dumbbell, Menu } from 'lucide-react';
import { navigationItems } from '@/lib/constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Dumbbell className="h-6 w-6 text-primary animate-bounce-gentle" />
          <span className="text-xl font-bold text-primary">Raina's Sports</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[280px]">
            <div className="flex flex-col space-y-4 mt-6">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <Dumbbell className="h-5 w-5 text-primary" />
                <span className="font-bold text-primary">Raina's Sports</span>
              </Link>
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
