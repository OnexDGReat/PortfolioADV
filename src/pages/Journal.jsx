import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";

export const Journal = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main className="container mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold mb-6">Journal</h1>
        <p className="text-foreground/80 mb-8">
          Welcome to the journal. Start writing your thoughts, notes, and
          project ideas here. This is a placeholder page — feel free to
          customize it.
        </p>

        <section className="space-y-6">
          <article className="p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">First Entry</h2>
            <p className="text-foreground/80">This is your first journal entry.</p>
          </article>

          <article className="p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Ideas</h2>
            <p className="text-foreground/80">Add notes and brainstorm here.</p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
};
