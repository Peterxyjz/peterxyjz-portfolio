"use client";

export function StatsSection() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="rounded-lg bg-secondary/20 py-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="absolute -left-4 top-0 h-12 w-px bg-border hidden md:block"></div>
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="absolute -left-4 top-0 h-12 w-px bg-border hidden md:block"></div>
              <h3 className="text-3xl font-bold">15+</h3>
              <p className="text-sm text-muted-foreground">Clients</p>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="absolute -left-4 top-0 h-12 w-px bg-border hidden md:block"></div>
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="text-sm text-muted-foreground">Years Trading</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
