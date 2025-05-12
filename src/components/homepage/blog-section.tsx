"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function BlogSection() {
  return (
    <section className="py-16 bg-muted/30 md:py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">Latest Blog Posts</h2>

        {/* Featured Blog Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 bg-muted aspect-video md:aspect-auto md:h-full">
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">Featured Post Image</p>
              </div>
            </div>
            <div className="p-6 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                The Future of DeFi: Trends to Watch in 2023
              </h3>
              <p className="text-muted-foreground mb-6">
                An in-depth analysis of emerging trends in the DeFi ecosystem and
                predictions for the future of decentralized finance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-primary/10">
                  DeFi
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  Blockchain
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                May 12, 2023 • 8 min read
              </p>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {/* Blog Post 1 */}
          <Card className="flex flex-col h-full">
            <div className="bg-muted aspect-video w-full">
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">Blog Image</p>
              </div>
            </div>
            <CardContent className="pt-6 flex-grow">
              <h3 className="text-xl font-bold mb-2">
                Building a Trading Bot with Node.js
              </h3>
              <p className="text-muted-foreground">
                Learn how to create an automated trading system using Node.js and
                exchange APIs
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <p className="text-sm text-muted-foreground">
                April 28, 2023 • 10 min read
              </p>
            </CardFooter>
          </Card>

          {/* Blog Post 2 */}
          <Card className="flex flex-col h-full">
            <div className="bg-muted aspect-video w-full">
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">Blog Image</p>
              </div>
            </div>
            <CardContent className="pt-6 flex-grow">
              <h3 className="text-xl font-bold mb-2">
                Smart Contract Security Best Practices
              </h3>
              <p className="text-muted-foreground">
                Essential security considerations when developing Ethereum smart
                contracts
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <p className="text-sm text-muted-foreground">
                April 15, 2023 • 12 min read
              </p>
            </CardFooter>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button size="lg" asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
