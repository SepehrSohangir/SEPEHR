"use client"

import * as React from "react"
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from "@mui/material"

import { cn } from "../../lib/utils"

function Checkbox({ className, ...props }: MuiCheckboxProps) {
  return (
    <MuiCheckbox
      data-slot="checkbox"
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Checkbox }
