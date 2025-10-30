import React from 'react'
export function Textarea({ className = '', ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string }){
  return <textarea className={`border border-zinc-300 rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200 ${className}`} {...props} />;
}