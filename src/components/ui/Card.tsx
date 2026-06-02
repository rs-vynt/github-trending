import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.3)] hover:border-purple-500/50",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
