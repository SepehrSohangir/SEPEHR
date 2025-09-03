import * as React from "react"
import { TextField, TextFieldProps } from "@mui/material"

import { cn } from "../../lib/utils"

interface TextareaProps extends Omit<TextFieldProps, 'variant' | 'multiline'> {
  variant?: 'outlined' | 'filled' | 'standard'
}

function Textarea({ className, variant = 'outlined', ...props }: TextareaProps) {
  return (
    <TextField
      variant={variant}
      multiline
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
