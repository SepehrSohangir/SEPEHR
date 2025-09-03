"use client"

import * as React from "react"
import { LinearProgress, LinearProgressProps } from "@mui/material"

import { cn } from "../../lib/utils"

function Progress({ className, value, ...props }: LinearProgressProps & { value?: number }) {
  return (
    <LinearProgress
      variant={value !== undefined ? "determinate" : "indeterminate"}
      value={value}
      data-slot="progress"
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    />
  )
}

export { Progress }
