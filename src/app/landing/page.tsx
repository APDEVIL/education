"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      
      {/* NAVBAR */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <h1 className="font-bold text-xl">EduLearn</h1>

          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>

            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h2 className="max-w-2xl font-bold text-4xl">
          Learn Anytime, Anywhere
        </h2>

        <p className="mt-4 max-w-xl text-muted-foreground">
          A modern platform for students and teachers to collaborate, learn,
          and track progress with courses, quizzes, and analytics.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/register">
            <Button size="lg">Get Started</Button>
          </Link>

          <Link href="/login">
            <Button size="lg" variant="outline">
              Login
            </Button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="mb-12 text-center font-bold text-3xl">
          Platform Features
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          
          <Card>
            <CardContent className="p-6">
              <h4 className="mb-2 font-semibold text-xl">
                Interactive Courses
              </h4>
              <p className="text-muted-foreground">
                Access structured courses with lessons designed by teachers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="mb-2 font-semibold text-xl">
                Quiz & Assessment
              </h4>
              <p className="text-muted-foreground">
                Test your knowledge through quizzes and track your results.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="mb-2 font-semibold text-xl">
                Progress Tracking
              </h4>
              <p className="text-muted-foreground">
                Monitor learning progress with real-time analytics.
              </p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-muted px-6 py-20 text-center">
        <h3 className="mb-4 font-bold text-3xl">
          Start Your Learning Journey Today
        </h3>

        <p className="mb-8 text-muted-foreground">
          Join students and teachers building the future of education.
        </p>

        <Link href="/register">
          <Button size="lg">Create Account</Button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t py-6">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} EduLearn Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
}