import React from 'react'
export function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }){
  return <input className={`border border-zinc-300 rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200 ${className}`} {...props} />;
}