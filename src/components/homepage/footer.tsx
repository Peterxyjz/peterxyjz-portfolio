"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">peter@example.com</p>
            <p className="text-muted-foreground">Ho Chi Minh City, Vietnam</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground"
              >
                Blog
              </Link>
              <Link
                href="/tools"
                className="text-muted-foreground hover:text-foreground"
              >
                Tools
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="space-y-2">
              <Button
                variant="secondary"
                className="w-full justify-center md:justify-start"
                asChild
              >
                <Link
                  href="https://github.com/peterxyjz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="w-full justify-center md:justify-start"
                asChild
              >
                <Link
                  href="https://facebook.com/peterxyjz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="w-full justify-center md:justify-start"
                asChild
              >
                <Link
                  href="https://linkedin.com/in/peterxyjz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 peterxyjz • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
