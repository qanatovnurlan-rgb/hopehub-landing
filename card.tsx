import React from 'react'
export function Card({ className = '', children }: React.HTMLAttributes<HTMLDivElement> & { className?: string }){
  return <div className={`border border-zinc-200 bg-white rounded-2xl shadow-sm ${className}`}>{children}</div>;
}
export function CardHeader({ children }: { children: React.ReactNode }){ return <div className="px-6 pt-6">{children}</div>; }
export function CardTitle({ children }: { children: React.ReactNode }){ return <h3 className="text-base font-semibold">{children}</h3>; }
export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }){ return <div className={`px-6 pb-6 ${className}`}>{children}</div>; }