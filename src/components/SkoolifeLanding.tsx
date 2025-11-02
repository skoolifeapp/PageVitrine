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
              Transform your schedule into an{" "}
              <span className="text-primary">AI-powered study plan</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-body leading-relaxed">
              Import your .ics calendar, add your constraints, and let AI create your personalized revision schedule. Adapts weekly to your pace.
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

      {/* How It Works */}
      <section id="principle" className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Three simple steps to a personalized, AI-powered study schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-heading text-xl">1. Import Your Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Import your .ics file from Google Calendar, Apple Calendar, or your school. Skoolife automatically understands your timetable.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <CheckSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-heading text-xl">2. Add Your Constraints</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Tell us about your exams, preferred study times, and availability. AI creates a plan that fits your real life.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-heading text-xl">3. AI Adapts to You</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Every week, your plan evolves based on your pace and progress. No overload, just effectiveness.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="modules" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
              Why Skoolife?
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              We know studying is stressful. Skoolife reduces your mental load.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg">Stop Procrastinating</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  A clear plan tells you what to study and when. No more guessing or overthinking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg">Adapted to Your Pace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  AI adjusts your schedule weekly based on your progress. Not too much, not too little.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg">Save Time</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  No more spending hours planning. Skoolife does it for you automatically.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-skoolife transition-shadow duration-200">
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-heading text-lg">Reduce Mental Load</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm">
                  Let AI handle the organization. Focus on what matters: your studies.
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
              What Makes Skoolife Different
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Built specifically for students who want to study smarter, not harder.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">AI-Powered Personalization</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Your revision plan adapts weekly to your actual progress and pace, not a generic template.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">Works With Your Schedule</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Import your existing .ics calendar and Skoolife builds around your real commitments.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">Reduces Decision Fatigue</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Clear daily plans eliminate the stress of figuring out what to study next.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">Respects Your Constraints</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Tell us when you can't study, and AI works around your real-life constraints.
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
                AI-powered study planning that adapts to you.
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