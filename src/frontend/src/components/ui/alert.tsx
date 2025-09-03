import * as React from "react"
import { Alert as MuiAlert, AlertProps as MuiAlertProps } from "@mui/material"

import { cn } from "../../lib/utils"

interface AlertProps extends Omit<MuiAlertProps, 'variant'> {
  variant?: 'default' | 'destructive'
}

function Alert({ className, variant = "default", ...props }: AlertProps) {
  const getMuiSeverity = () => {
    switch (variant) {
      case 'destructive':
        return 'error'
      default:
        return 'info'
    }
  }

  return (
    <MuiAlert
      severity={getMuiSeverity()}
      data-slot="alert"
      className={cn(
        "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
        variant === "default" && "bg-background text-foreground",
        variant === "destructive" && "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        className
      )}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"h5">) {
  return (
    <h5
      data-slot="alert-title"
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
