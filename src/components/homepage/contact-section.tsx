"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="py-16 bg-muted/30 md:py-20">
      <div className="container">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Have a project in mind or want to discuss crypto? Let&apos;s talk!
          </p>
          <div className="pt-6">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
