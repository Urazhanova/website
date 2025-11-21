import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Methodology", path: "/methodology" },
        { name: "Who Leads", path: "/leader" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold font-heading text-heading">
                    Executive Clarity
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    isActive(link.path) ? "text-primary" : "text-body"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <ContactModal>
                        <Button size="sm" className="rounded-full px-6">
                            Register
                        </Button>
                    </ContactModal>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col gap-8 mt-8">
                                <div className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "text-lg font-medium transition-colors hover:text-primary",
                                                isActive(link.path) ? "text-primary" : "text-body"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <ContactModal>
                                    <Button className="w-full rounded-full">
                                        Register
                                    </Button>
                                </ContactModal>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
