"use client"

import * as React from "react"
import { RadioGroup as MuiRadioGroup, RadioGroupProps as MuiRadioGroupProps } from "@mui/material"
import { Radio, RadioProps } from "@mui/material"
import { FormControlLabel } from "@mui/material"

import { cn } from "../../lib/utils"

interface RadioGroupProps extends Omit<MuiRadioGroupProps, 'value' | 'onChange'> {
  value?: string
  onValueChange?: (value: string) => void
}

function RadioGroup({ value, onValueChange, onChange, children, ...props }: RadioGroupProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    if (onValueChange) {
      onValueChange(newValue)
    }
    if (onChange) {
      onChange(event, newValue)
    }
  }

  return (
    <MuiRadioGroup
      value={value || ''}
      onChange={handleChange}
      data-slot="radio-group"
      {...props}
    >
      {children}
    </MuiRadioGroup>
  )
}

function RadioGroupItem({ className, value, children, ...props }: RadioProps & { value: string }) {
  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          data-slot="radio-group-item"
          className={cn(
            "peer h-4 w-4 shrink-0 rounded-full border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            className
          )}
          {...props}
        />
      }
      label={children}
    />
  )
}

export { RadioGroup, RadioGroupItem }
