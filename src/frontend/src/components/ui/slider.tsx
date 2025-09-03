"use client"

import * as React from "react"
import { Slider as MuiSlider, SliderProps as MuiSliderProps } from "@mui/material"

import { cn } from "../../lib/utils"

interface SliderProps extends Omit<MuiSliderProps, 'value' | 'onChange'> {
  value?: number[]
  onValueChange?: (value: number[]) => void
}

function Slider({ className, value, onValueChange, onChange, ...props }: SliderProps) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    const valueArray = Array.isArray(newValue) ? newValue : [newValue]
    if (onValueChange) {
      onValueChange(valueArray)
    }
    if (onChange) {
      onChange(event, newValue)
    }
  }

  return (
    <MuiSlider
      value={value || [0]}
      onChange={handleChange}
      data-slot="slider"
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    />
  )
}

export { Slider }
