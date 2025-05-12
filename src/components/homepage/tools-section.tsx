"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ToolsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">Tools & Utilities</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mb-12">
          {/* Tool 1 */}
          <Card className="flex flex-col h-full">
            <CardHeader className="pb-3 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl">📈</span>
              </div>
              <CardTitle>Market Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground flex-grow">
              <p>Cryptocurrency market analysis dashboard</p>
            </CardContent>
          </Card>

          {/* Tool 2 */}
          <Card className="flex flex-col h-full">
            <CardHeader className="pb-3 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl">🔀</span>
              </div>
              <CardTitle>Token Converter</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground flex-grow">
              <p>Calculate token exchange rates and fees</p>
            </CardContent>
          </Card>

          {/* Tool 3 */}
          <Card className="flex flex-col h-full sm:col-span-2 md:col-span-1">
            <CardHeader className="pb-3 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl">🔐</span>
              </div>
              <CardTitle>Hash Calculator</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground flex-grow">
              <p>Generate various hash values for any input</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button size="lg" asChild>
            <Link href="/tools">View All Tools</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
