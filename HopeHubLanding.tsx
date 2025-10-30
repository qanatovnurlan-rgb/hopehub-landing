import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HeartPulse, Stethoscope, Users, Pill, Activity, ShieldCheck, Globe2, HandHeart, FileText, Video, Brain, GraduationCap, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function HopeHubLanding(){
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const fade = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-6 h-6" />
            <span className="font-semibold">HopeHub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#problem" className="hover:opacity-70">Problem</a>
            <a href="#solution" className="hover:opacity-70">Solution</a>
            <a href="#features" className="hover:opacity-70">Features</a>
            <a href="#doctors" className="hover:opacity-70">Doctors</a>
            <a href="#forum" className="hover:opacity-70">Forum</a>
            <a href="#community" className="hover:opacity-70">Community</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#waitlist" className="hidden sm:block"><Button className="rounded-2xl">Join waitlist</Button></a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={fade} initial="hidden" animate="show">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              A global ecosystem for <span className="underline underline-offset-4 decoration-emerald-400">cancer care</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-600">
              HopeHub unites patients, doctors, families, pharmacies, and donors in one secure platform. From diagnosis to recovery — coordinated, transparent, human.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#waitlist"><Button className="rounded-2xl">Get early access</Button></a>
              <a href="#solution" className="px-5 py-3 rounded-2xl border border-zinc-200 hover:bg-zinc-50 text-sm">See how it works</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-zinc-500">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4"/>HIPAA-ready*</div>
              <div className="flex items-center gap-2"><Globe2 className="w-4 h-4"/>Multilingual</div>
              <div className="flex items-center gap-2"><Activity className="w-4 h-4"/>Telehealth-first</div>
            </div>
            <p className="mt-2 text-xs text-zinc-400">*Compliance scope depends on region & partners</p>
          </motion.div>
          <motion.div variants={fade} initial="hidden" animate="show" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard icon={<Pill className="w-5 h-5"/>} title="Medication map" desc="Availability & pricing in nearby pharmacies"/>
              <FeatureCard icon={<Stethoscope className="w-5 h-5"/>} title="Oncologist cabinet" desc="Profiles, consults, EMR-lite"/>
              <FeatureCard icon={<Users className="w-5 h-5"/>} title="Patient passport" desc="Diagnosis, protocols, results"/>
              <FeatureCard icon={<HandHeart className="w-5 h-5"/>} title="Transparent donations" desc="Targeted, auditable aid"/>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="waitlist" className="py-20 bg-emerald-50 border-t border-emerald-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Join the early access list</h2>
          <p className="mt-3 text-zinc-600">We’re assembling pilot sites and partners. Leave your email — we’ll reach out with next steps.</p>
          <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3">
            <Input type="email" required placeholder="Work email" value={email} onChange={(e)=>setEmail(e.target.value)} className="rounded-2xl"/>
            <Button type="submit" className="rounded-2xl">Request invite</Button>
          </form>
          {submitted && (<p className="mt-3 text-emerald-600">Thanks! You’re on the list. We’ll be in touch.</p>)}
        </div>
      </section>

      <footer className="py-10 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><HeartPulse className="w-4 h-4"/> HopeHub • Health with dignity</div>
          <div className="flex items-center gap-4">
            <a href="#problem" className="hover:opacity-70">Problem</a>
            <a href="#solution" className="hover:opacity-70">Solution</a>
            <a href="#features" className="hover:opacity-70">Features</a>
            <a href="#waitlist" className="hover:opacity-70">Join</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }){
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-widest text-emerald-600 font-semibold">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold">{title}</h2>
      {subtitle && <p className="mt-2 text-zinc-600">{subtitle}</p>}
    </div>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }){
  return (
    <div className="rounded-2xl border border-zinc-200 p-5 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl border border-zinc-200">{icon}</div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-zinc-600">{desc}</p>
        </div>
      </div>
    </div>
  )
}