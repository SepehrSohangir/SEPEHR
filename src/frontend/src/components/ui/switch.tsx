"use client"

import * as React from "react"
import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from "@mui/material"

import { cn } from "../../lib/utils"

function Switch({ className, ...props }: MuiSwitchProps) {
  return (
    <MuiSwitch
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )}
      {...props}
    />
  )
}

export { Switch }
