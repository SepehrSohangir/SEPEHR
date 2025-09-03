import * as React from "react"
import { Card as MuiCard, CardProps as MuiCardProps } from "@mui/material"
import { CardContent as MuiCardContent, CardContentProps as MuiCardContentProps } from "@mui/material"
import { CardHeader as MuiCardHeader, CardHeaderProps as MuiCardHeaderProps } from "@mui/material"
import { Typography, TypographyProps } from "@mui/material"

import { cn } from "../../lib/utils"

function Card({ className, ...props }: MuiCardProps) {
  return (
    <MuiCard
      data-slot="card"
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: MuiCardHeaderProps) {
  return (
    <MuiCardHeader
      data-slot="card-header"
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: TypographyProps) {
  return (
    <Typography
      variant="h5"
      component="h3"
      data-slot="card-title"
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: MuiCardContentProps) {
  return (
    <MuiCardContent
      data-slot="card-content"
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
