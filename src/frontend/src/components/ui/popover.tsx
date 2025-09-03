"use client"

import * as React from "react"
import { Popover as MuiPopover, PopoverProps as MuiPopoverProps } from "@mui/material"

import { cn } from "../../lib/utils"

interface PopoverProps extends Omit<MuiPopoverProps, 'open'> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function Popover({ open = false, onOpenChange, onClose, ...props }: PopoverProps) {
  const handleClose = (event: any, reason: string) => {
    if (onOpenChange) {
      onOpenChange(false)
    }
    if (onClose) {
      onClose(event, reason)
    }
  }

  return (
    <MuiPopover
      open={open}
      onClose={handleClose}
      data-slot="popover"
      {...props}
    />
  )
}

function PopoverTrigger({ children, onClick, ...props }: React.ComponentProps<"div"> & { onClick?: () => void }) {
  return (
    <div
      data-slot="popover-trigger"
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

function PopoverContent({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-content"
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Popover, PopoverTrigger, PopoverContent }
