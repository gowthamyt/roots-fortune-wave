import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  TrendingUp, Handshake, Landmark, Factory, RefreshCw, Globe,
  Shield, Lightbulb, Users, Sprout, UserPlus, ClipboardList, UsersRound, CheckCircle2, Gift,
  Briefcase, Home as HomeIcon, Coffee, Utensils, Heart, Presentation as PresentIcon,
  Clock, MessageCircle, ChevronDown, Mail, Phone, MapPin, Globe2, Award, Target,
} from "lucide-react";
import { MoneyRain } from "@/components/MoneyRain";
import { Counter } from "@/components/Counter";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import team from "@/assets/team.jpg";
import vision from "@/assets/vision.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roots Cosmo Private Limited | Build Connections. Create Opportunities." },
      { name: "description", content: "Roots Cosmo is a globally focused organization delivering innovative business and financial solutions through the Share & Grow Alliance Program." },
      { property: "og:title", content: "Roots Cosmo Private Limited" },
      { property: "og:description", content: "Build Connections. Create Opportunities. Grow Together." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: TrendingUp, title: "Multi-Level Financing Solutions", desc: "Structured, scalable financing frameworks." },
  { icon: Handshake, title: "Project Funding Facilitation", desc: "Bridge visionary projects with capital partners." },
  { icon: Landmark, title: "Banking Facilitation Services", desc: "Streamlined access to banking channels." },
  { icon: Factory, title: "Industrial Rehabilitation", desc: "Revive and restructure industrial ventures." },
  { icon: RefreshCw, title: "Business Revival Services", desc: "Turnaround strategies for sustained growth." },
  { icon: Globe, title: "Global Financial Consulting", desc: "Cross-border advisory & market intelligence." },
];

const steps = [
  { icon: UserPlus, title: "Become a Member", desc: "Register by choosing your participation plan." },
  { icon: ClipboardList, title: "Choose Your Option", desc: "Option A: Build a group of 5. Option B: Build a group of 10." },
  { icon: UsersRound, title: "Introduce Participants", desc: "Invite individuals interested in the program." },
  { icon: CheckCircle2, title: "Group Qualification", desc: "Once your group completes requirements, it becomes eligible." },
  { icon: Gift, title: "Receive Benefits", desc: "Earn program benefits and continue building new groups." },
];

const places = [
  { icon: Briefcase, label: "Office" },
  { icon: HomeIcon, label: "Home" },
  { icon: Coffee, label: "Café" },
  { icon: Utensils, label: "Restaurant" },
  { icon: Heart, label: "Friends & Family" },
  { icon: PresentIcon, label: "Business Meetings" },
];

const audience = [
  "Working Professionals", "Business Owners", "Self-employed",
  "Homemakers", "Retired Professionals", "Students",
];

const benefits = [
  { title: "Professional Networking", desc: "Build valuable relationships and expand your professional network." },
  { title: "Business Opportunities", desc: "Explore new collaborations and business opportunities." },
  { title: "Global Community", desc: "Be part of an international network across multiple countries." },
  { title: "Flexible Participation", desc: "Participate on your schedule without disrupting your routine." },
  { title: "Leadership Development", desc: "Enhance confidence, teamwork and leadership capabilities." },
  { title: "Collaboration", desc: "Work with like-minded individuals in a supportive environment." },
];

const appreciations = [
  "Simple Participation",
  "Flexible Schedule (Part-time or Full-time)",
  "No Product Inventory Management",
  "No Mandatory Product Selling",
  "Focus on Sharing Information & Building Networks",
  "Work at Your Own Pace",
];

const faqs = [
  { q: "Who can participate?", a: "Eligible professionals, business owners, self-employed individuals, homemakers, retirees, and students (subject to applicable policies)." },
  { q: "Can I participate part-time?", a: "Yes. The program is designed to accommodate both part-time and full-time participation." },
  { q: "Do I need previous experience?", a: "No. The program is intended to be accessible to individuals from a variety of backgrounds." },
  { q: "Is product selling required?", a: "The program is structured around information sharing, networking and community participation rather than mandatory retail product sales." },
];

const stats = [
  { end: 25, suffix: "+", label: "Countries" },
  { end: 10000, suffix: "+", label: "Members" },
  { end: 500, suffix: "+", label: "Partnerships" },
  { end: 15, suffix: "+", label: "Years Experience" },
];

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <ShareGrow />
      <HowItWorks />
      <FlexibleParticipation />
      <WhoCanJoin />
      <Benefits />
      <Appreciate />
      <Stats />
      <Vision />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#program", label: "Program" },
    { href: "#join", label: "Who Can Join" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-lg bg-navy-deep/70 border-b border-gold">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Roots Cosmo" width={44} height={44} className="h-11 w-11 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-gold-gradient">Roots Cosmo</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground">PRIVATE LIMITED</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-gold-gradient transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-navy-deep shadow-gold hover:brightness-110 transition">
            Get Started
          </a>
        </nav>
        <button className="lg:hidden text-gold" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 bg-current" />
            <span className="h-0.5 w-6 bg-current" />
            <span className="h-0.5 w-6 bg-current" />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gold bg-navy-deep/95 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-foreground/80 hover:text-gold-gradient">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={hero} alt="" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-navy-gradient opacity-80" />
      </div>
      <MoneyRain count={30} />

      <div className="relative mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs tracking-widest text-gold-gradient font-semibold">
            <span className="h-2 w-2 rounded-full bg-gold-gradient animate-pulse-gold" />
            GLOBAL FINANCIAL ALLIANCE
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            <span className="text-gold-gradient">Build Connections.</span><br />
            Create Opportunities.<br />
            <span className="text-gold-gradient">Grow Together.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Roots Cosmo is a globally focused organization dedicated to innovative business and financial solutions — building long-term partnerships through professionalism, innovation and integrity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#program" className="rounded-full bg-gold-gradient px-8 py-3.5 font-semibold text-navy-deep shadow-gold hover:brightness-110 transition">
              Explore the Program
            </a>
            <a href="#contact" className="rounded-full border border-gold px-8 py-3.5 font-semibold text-gold-gradient hover:bg-gold/10 transition">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center relative animate-float-slow">
          <div className="absolute inset-0 -m-10 rounded-full bg-gold-gradient/20 blur-3xl" />
          <img src={logo} alt="Roots Cosmo logo" width={480} height={480} className="relative h-[420px] w-[420px] object-contain drop-shadow-[0_0_60px_rgba(212,175,55,0.4)]" />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold-gradient text-xs tracking-widest opacity-70">SCROLL ↓</div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-16">
      <div className="text-xs tracking-[0.3em] text-gold-gradient font-semibold mb-3">{eyebrow}</div>
      <h2 className="font-display text-4xl md:text-5xl font-bold">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
      <div className="mt-6 mx-auto h-px w-24 bg-gold-gradient" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gold-gradient/20 blur-2xl" />
          <img src={team} alt="Roots Cosmo team" width={1200} height={800} loading="lazy" className="relative rounded-2xl shadow-elegant border border-gold" />
        </div>
        <div>
          <div className="text-xs tracking-[0.3em] text-gold-gradient font-semibold mb-3">ABOUT ROOTS COSMO</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">A globally focused organization for <span className="text-gold-gradient">innovative growth.</span></h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Roots Cosmo is dedicated to developing innovative business and financial solutions. As a sister concern of an international organization with operations in the United States and Malta, we are committed to building long-term partnerships through professionalism, innovation and integrity.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: Shield, label: "Trust" },
              { icon: Lightbulb, label: "Innovation" },
              { icon: Handshake, label: "Integrity" },
              { icon: Sprout, label: "Growth" },
              { icon: Users, label: "Partnership" },
              { icon: Award, label: "Excellence" },
            ].map((v) => (
              <div key={v.label} className="flex items-center gap-3 glass-card rounded-xl px-4 py-3">
                <v.icon className="h-5 w-5 text-gold" />
                <span className="font-semibold">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="WHAT WE DO" title="Our Core Services" sub="Six pillars of financial expertise designed to accelerate global growth." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group glass-card rounded-2xl p-8 hover:border-gold transition-all hover:-translate-y-1 hover:shadow-gold">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-gradient text-navy-deep shadow-gold group-hover:scale-110 transition">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShareGrow() {
  return (
    <section id="program" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-navy-gradient opacity-60" />
      <MoneyRain count={18} />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="text-xs tracking-[0.3em] text-gold-gradient font-semibold mb-3">FLAGSHIP INITIATIVE</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold">
          Share & Grow <span className="text-gold-gradient">Alliance Program</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
          An innovative platform that promotes collaboration, networking, and mutual success through a structured sharing model. This is not a traditional MLM program, but a community-driven initiative focused on strategic sharing, business networking, and creating long-term value for participants.
        </p>
        <a href="#how" className="mt-8 inline-block rounded-full bg-gold-gradient px-8 py-3.5 font-semibold text-navy-deep shadow-gold hover:brightness-110 transition">
          See How It Works
        </a>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="STEP BY STEP" title="How the Program Works" />
        <div className="grid md:grid-cols-5 gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="glass-card rounded-2xl p-6 h-full text-center hover:border-gold transition">
                <div className="mx-auto mb-4 relative">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-gold animate-pulse-gold">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-navy-deep border border-gold flex items-center justify-center text-xs font-bold text-gold-gradient">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlexibleParticipation() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="PARTICIPATE ANYWHERE" title="Flexible Participation" sub="Fit the program around your life — not the other way around." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {places.map((p) => (
            <div key={p.label} className="glass-card rounded-xl p-6 flex flex-col items-center gap-3 hover:border-gold transition hover:-translate-y-1">
              <p.icon className="h-8 w-8 text-gold" />
              <span className="text-sm font-medium">{p.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {["Part-time", "Full-time", "Alongside Your Job", "Alongside Your Business", "At Your Own Pace"].map((t) => (
            <span key={t} className="rounded-full border border-gold px-5 py-2 text-sm text-gold-gradient font-semibold flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoCanJoin() {
  return (
    <section id="join" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="OPEN TO ALL" title="Who Can Join?" sub="Designed for individuals interested in networking and business collaboration." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {audience.map((a) => (
            <div key={a} className="text-center group">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gold-gradient p-[2px] group-hover:scale-105 transition">
                <div className="h-full w-full rounded-full bg-navy-deep flex items-center justify-center">
                  <Users className="h-10 w-10 text-gold" />
                </div>
              </div>
              <div className="font-semibold">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="WHY JOIN" title="Benefits of the Program" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card rounded-2xl p-8 hover:border-gold hover:-translate-y-1 transition">
              <Target className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Appreciate() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs tracking-[0.3em] text-gold-gradient font-semibold mb-3">MEMBER EXPERIENCE</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Why members <span className="text-gold-gradient">appreciate</span> the program</h2>
          <div className="mt-8 space-y-4">
            {appreciations.map((a) => (
              <div key={a} className="flex items-start gap-4 glass-card rounded-xl p-4">
                <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-lg">{a}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 glass-card rounded-2xl p-6 border-gold">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-6 w-6 text-gold" />
              <h3 className="font-display text-xl font-bold text-gold-gradient">Transparency & Integrity</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Roots Cosmo believes sustainable growth is built on trust, transparency, professionalism and ethical business practices. Every participant is encouraged to understand the program structure, applicable terms and associated responsibilities before joining.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gold-gradient/20 blur-2xl" />
          <img src={team} alt="" width={1200} height={800} loading="lazy" className="relative rounded-2xl shadow-elegant border border-gold" />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-navy-gradient opacity-60" />
      <MoneyRain count={20} />
      <div className="relative mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-5xl md:text-6xl font-bold text-gold-gradient">
              <Counter end={s.end} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm tracking-widest text-muted-foreground uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 rounded-2xl bg-gold-gradient/20 blur-2xl" />
          <img src={vision} alt="Vision" width={1200} height={800} loading="lazy" className="relative rounded-2xl shadow-elegant border border-gold" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="text-xs tracking-[0.3em] text-gold-gradient font-semibold mb-3">OUR VISION</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            A world where <span className="text-gold-gradient">people and businesses grow together.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            We envision a world where individuals and businesses grow together through trust, innovation, integrity and strong relationships. Our mission is to provide ethical, transparent and forward-thinking financial and business solutions that empower individuals and organizations to achieve sustainable growth and long-term success.
          </p>
          <div className="mt-8 flex items-center gap-4 glass-card rounded-xl p-5">
            <Globe2 className="h-10 w-10 text-gold" />
            <div>
              <div className="font-semibold">Global Presence, Local Impact</div>
              <div className="text-sm text-muted-foreground">Operating across the United States, Malta and expanding into global markets.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="QUESTIONS" title="Frequently Asked Questions" />
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left glass-card rounded-2xl p-6 hover:border-gold transition"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  <h3 className="font-display text-lg font-bold">{f.q}</h3>
                </div>
                <ChevronDown className={`h-5 w-5 text-gold transition-transform ${open === i ? "rotate-180" : ""}`} />
              </div>
              {open === i && (
                <p className="mt-4 pl-8 text-muted-foreground animate-fade-up">{f.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-xs tracking-[0.3em] text-gold-gradient font-semibold mb-3">GET IN TOUCH</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Let's build something <span className="text-gold-gradient">extraordinary.</span></h2>
          <p className="mt-4 text-muted-foreground text-lg">Reach out to learn how Roots Cosmo can partner with you.</p>
          <div className="mt-8 space-y-5">
            {[
              { icon: Mail, label: "Email", value: "info@rootscosmo.com" },
              { icon: Phone, label: "Phone", value: "+1 (123) 456-7890" },
              { icon: Globe2, label: "Website", value: "www.rootscosmo.com" },
              { icon: MapPin, label: "Office", value: "123 Business Avenue, New York, NY 10001, USA" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gold-gradient flex items-center justify-center text-navy-deep flex-shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground uppercase">{c.label}</div>
                  <div className="font-semibold">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="glass-card rounded-2xl p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll be in touch."); }}>
          <h3 className="font-display text-2xl font-bold text-gold-gradient mb-4">Send us a message</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" />
            <Field label="Phone" name="phone" />
          </div>
          <Field label="Email" name="email" type="email" />
          <div>
            <label className="text-xs tracking-widest text-muted-foreground uppercase">Message</label>
            <textarea required rows={5} name="message" className="mt-1 w-full rounded-xl bg-navy-deep/60 border border-gold px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold text-foreground" />
          </div>
          <button type="submit" className="w-full rounded-full bg-gold-gradient py-3.5 font-semibold text-navy-deep shadow-gold hover:brightness-110 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs tracking-widest text-muted-foreground uppercase">{label}</label>
      <input required type={type} name={name} className="mt-1 w-full rounded-xl bg-navy-deep/60 border border-gold px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold text-foreground" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-gold py-12 px-6 bg-navy-deep/60">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" width={48} height={48} className="h-12 w-12 object-contain" />
          <div>
            <div className="font-display text-lg font-bold text-gold-gradient">Roots Cosmo</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground">PRIVATE LIMITED</div>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          Build Connections · Create Opportunities · Grow Together
        </div>
        <div className="text-center md:text-right text-sm text-muted-foreground">
          © {new Date().getFullYear()} Roots Cosmo Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
