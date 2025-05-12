"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">About Me</h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex justify-center">
            <Avatar className="h-[180px] w-[180px]">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
              <AvatarFallback className="bg-secondary/40 text-lg">PX</AvatarFallback>
            </Avatar>
          </div>
          <div className="col-span-2 space-y-4">
            <p className="text-foreground">
              I&apos;m a passionate Fullstack Developer with expertise in modern
              web technologies. My background includes building complex
              applications, APIs, and blockchain-related projects.
            </p>
            <p className="text-foreground">
              Beyond coding, I actively trade and analyze cryptocurrencies,
              bringing technical insights to both my development work and
              investment strategies.
            </p>
            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10">Next.js</Badge>
                <Badge variant="outline" className="bg-primary/10">React</Badge>
                <Badge variant="outline" className="bg-primary/10">TypeScript</Badge>
                <Badge variant="outline" className="bg-primary/10">Node.js</Badge>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10">Blockchain</Badge>
                <Badge variant="outline" className="bg-primary/10">Solidity</Badge>
                <Badge variant="outline" className="bg-primary/10">Trading</Badge>
                <Badge variant="outline" className="bg-primary/10">Tailwind</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
