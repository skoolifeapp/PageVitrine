import { SkoolifeHeader } from "./SkoolifeHeader";
import { SkoolifeWaitlistForm } from "./SkoolifeWaitlistForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, CheckSquare, CreditCard, FileText, Target, TrendingUp, Brain, Smartphone, CheckCircle, ArrowRight } from "lucide-react";

export const SkoolifeLanding = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkoolifeHeader />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6 leading-tight">
              Skoolife helps you manage{" "}
              <span className="text-primary">student life</span> — not just homework.
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-body leading-relaxed">
              Planner, to-do, finances & documents. All in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection('signup')}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body px-8 py-3 text-lg"
              >
                Join the waitlist
              </Button>
              <Button 
                onClick={() => scrollToSection('principle')}
                variant="outline"
                size="lg"
                className="font-body px-8 py-3 text-lg border-border hover:bg-accent"
              >
                Learn more
              </Button>
            </div>

            {/* Light App Mockup Placeholder */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-xl shadow-skoolife p-8 animate-slide-up">
                <div className="bg-primary/10 rounded-lg p-6 mb-4">
                  <Smartphone className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground font-body text-sm">
                    App mockup coming soon — clean, mobile-first interface designed for students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Principle */}
      <section id="principle" className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
              Three Simple Principles
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Skoolife is built around what actually helps students succeed in their daily lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-heading text-xl">Organize</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Everything in its right place. No more scattered tasks, appointments, and documents across multiple apps.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-heading text-xl">Stay on track</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Clear priorities and gentle reminders help you focus on what matters most without overwhelming you.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-heading text-xl">Understand habits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Learn from your patterns. See what works, what doesn't, and build better study and life habits.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The 4 Modules */}
      <section id="modules" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
              Four Essential Modules
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Everything a student needs to manage their daily life, integrated seamlessly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg">Planner</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  Clear agenda, sync with existing calendars, helpful reminders that don't overwhelm.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <CheckSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg">To-Do</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  Simple priorities, focus mode for deep work, zero friction task capture.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg">Student Finances</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  Expense tracking, quick budget setup, clear overview of your financial health.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg">Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  All PDFs and important documents in one place. Sort, tag, and search instantly.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Skoolife Solves */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Sound familiar? You're not alone.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">Scattered tasks and events</h3>
                <p className="text-muted-foreground font-body text-sm">
                  No more juggling between calendar apps, sticky notes, and random reminders.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">Missed deadlines and appointments</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Smart reminders and clear priorities help you stay on top of everything.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">Unclear personal finances</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Simple tracking and budgeting tools designed specifically for students.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">Hard-to-find documents</h3>
                <p className="text-muted-foreground font-body text-sm">
                  All your important files organized, tagged, and searchable in seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-up Section */}
      <section id="signup" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
              Ready to Get Organized?
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Join thousands of students who are already on the waitlist. Be the first to experience a calmer, more organized student life.
            </p>
          </div>
          
          <SkoolifeWaitlistForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Everything you need to know about Skoolife.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                When will Skoolife be available?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                We're currently in development and planning to launch the beta version in early 2024. Waitlist members will get early access before the public release.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                What platforms will Skoolife support?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Skoolife is designed mobile-first for iOS and Android. We're also working on a web version for desktop access, with full sync across all your devices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                How much will Skoolife cost?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                We're planning a freemium model with essential features free for all students. Premium features like advanced analytics and unlimited document storage will be available through a student-friendly subscription.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                Can I sync with my existing calendar and tools?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Yes! Skoolife will integrate with popular calendar apps (Google Calendar, Apple Calendar), learning management systems, and other tools you already use. We believe in enhancing your workflow, not replacing it entirely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                Is my data secure and private?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Absolutely. We use industry-standard encryption and never sell your personal data. Your academic and financial information stays private and secure. You can export or delete your data anytime.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                What makes Skoolife different from other student apps?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Skoolife focuses on the complete student life experience, not just academics. We combine planning, tasks, finances, and document management in one beautiful, easy-to-use app designed specifically for post-secondary students.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left">
                Can I be a beta tester?
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                Yes! When you join the waitlist, you can opt-in to be a beta tester. We'll reach out to selected beta testers for early access and feedback sessions before the public launch.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border px-4 sm:px-6 lg:px-8 py-12">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold font-heading text-foreground mb-2">
                Skoolife
              </div>
              <p className="text-sm text-muted-foreground font-body">
                Manage student life, not just homework.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-body">
                Cookie Settings
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground font-body">
              © 2024 Skoolife. All rights reserved. Pre-launch — coming soon.
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Banner Placeholder */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-card border border-border rounded-lg shadow-skoolife p-4 animate-slide-up">
        <p className="text-sm text-muted-foreground font-body mb-3">
          We use essential cookies to make our site work. No tracking yet — we're still in development!
        </p>
        <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body">
          Got it
        </Button>
      </div>
    </div>
  );
};