"use client"

import * as React from "react"
import { Select as MuiSelect, SelectProps as MuiSelectProps } from "@mui/material"
import { MenuItem } from "@mui/material"
import { FormControl, FormControlProps } from "@mui/material"
import { InputLabel, InputLabelProps } from "@mui/material"

import { cn } from "../../lib/utils"

interface SelectProps extends Omit<MuiSelectProps, 'value' | 'onChange'> {
  value?: string
  onValueChange?: (value: string) => void
}

function Select({ value, onValueChange, children, ...props }: SelectProps) {
  const handleChange = (event: any) => {
    const newValue = event.target.value
    if (onValueChange) {
      onValueChange(newValue)
    }
  }

  return (
    <MuiSelect
      value={value || ''}
      onChange={handleChange}
      data-slot="select"
      className="font-persian"
      sx={{
        fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
        '& .MuiSelect-select': {
          fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
        }
      }}
      {...props}
    >
      {children}
    </MuiSelect>
  )
}

function SelectTrigger({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="select-trigger"
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 font-persian",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SelectValue({ placeholder }: { placeholder?: string }) {
  return (
    <span
      data-slot="select-value"
      className="text-sm font-persian"
    >
      {placeholder}
    </span>
  )
}

function SelectContent({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="select-content"
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-persian",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SelectItem({ className, value, children, ...props }: React.ComponentProps<"li"> & { value: string }) {
  return (
    <MenuItem
      value={value}
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 font-persian",
        className
      )}
      sx={{
        fontFamily: 'Vazirmatn, IBM Plex Sans Arabic, system-ui, sans-serif',
      }}
      {...props}
    >
      {children}
    </MenuItem>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
