
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Trophy, 
  Menu, 
  Moon, 
  Sun, 
  Settings,
  Phone
} from 'lucide-react';
import { navigationItems } from '@/lib/constants';
import { useTheme } from 'next-themes';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Trophy className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 h-2 w-2 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Raina's Sports</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Excellence in Motion</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary relative ${
                  isActive(item.href) 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.title}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hidden sm:flex"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link to="/" className="flex items-center space-x-2 mb-6">
                    <Trophy className="h-5 w-5 text-primary" />
                    <span className="font-bold text-primary">Raina's Sports</span>
                  </Link>
                  
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`text-sm font-medium transition-colors hover:text-primary p-2 rounded-md ${
                        isActive(item.href) ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                  
                  <div className="border-t pt-4 space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Coach
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="w-full justify-start"
                    >
                      {theme === 'dark' ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
