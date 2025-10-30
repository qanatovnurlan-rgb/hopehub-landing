import React from 'react'
export function Button({ className = '', children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }){
  return <button className={`px-4 py-2 text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition rounded ${className}`} {...props}>{children}</button>;
}