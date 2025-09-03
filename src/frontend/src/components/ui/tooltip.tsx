"use client"

import * as React from "react"
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from "@mui/material"

import { cn } from "../../lib/utils"

interface TooltipProps extends Omit<MuiTooltipProps, 'open'> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function Tooltip({ open, onOpenChange, onClose, ...props }: TooltipProps) {
  const handleClose = (event: any) => {
    if (onOpenChange) {
      onOpenChange(false)
    }
    if (onClose) {
      onClose(event)
    }
  }

  const handleOpen = (event: any) => {
    if (onOpenChange) {
      onOpenChange(true)
    }
  }

  return (
    <MuiTooltip
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      data-slot="tooltip"
      {...props}
    />
  )
}

function TooltipContent({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="tooltip-content"
      className={cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=delayed-open]:data-[side=bottom]:slide-in-from-top-2 data-[state=delayed-open]:data-[side=left]:slide-in-from-right-2 data-[state=delayed-open]:data-[side=right]:slide-in-from-left-2 data-[state=delayed-open]:data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Tooltip, TooltipContent }
