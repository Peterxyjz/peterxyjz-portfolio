"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-base font-medium text-primary">
                Hi, I&apos;m Peter 👋
              </h1>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Fullstack Developer
                <br />& Crypto Enthusiast
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Building modern web applications with React, Next.js and TypeScript.
                <br />
                Passionate about blockchain technologies and cryptocurrency trading.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/blog">Read Blog</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="relative h-[300px] w-[300px] rounded-lg bg-primary/5">
              <div className="absolute right-4 top-4 h-4 w-4 rounded-full bg-primary/30"></div>
              <div className="absolute left-10 top-12 h-4 w-20 rounded-full bg-primary/20"></div>
              <div className="absolute left-10 top-20 h-4 w-32 rounded-full bg-primary/10"></div>
              <div className="absolute left-10 top-28 h-4 w-16 rounded-full bg-primary/30"></div>
              <div className="absolute left-10 top-36 h-4 w-24 rounded-full bg-primary/20"></div>
              <div className="absolute left-10 top-44 h-4 w-20 rounded-full bg-primary/10"></div>
              <div className="absolute right-20 top-16 h-20 w-20">
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full text-primary"
                  style={{ opacity: 0.3 }}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    d="M40,30 L70,50 L40,70"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
