import * as React from "react"
import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from "@mui/material"

import { cn } from "../../lib/utils"

interface BadgeProps extends Omit<MuiBadgeProps, 'variant'> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const getBadgeColor = () => {
    switch (variant) {
      case 'destructive':
        return 'error'
      case 'secondary':
        return 'secondary'
      case 'outline':
        return 'default'
      default:
        return 'primary'
    }
  }

  return (
    <MuiBadge
      color={getBadgeColor()}
      data-slot="badge"
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        variant === "secondary" && "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "destructive" && "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        variant === "outline" && "text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
