"use client"

import * as React from "react"
import { FormControlLabel, FormControlLabelProps } from "@mui/material"

import { cn } from "../../lib/utils"

function Label({ className, ...props }: FormControlLabelProps) {
  return (
    <FormControlLabel
      data-slot="label"
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

export { Label }
