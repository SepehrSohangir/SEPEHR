"use client"

import * as React from "react"
import {  FormControlProps } from "@mui/material"
import { FormHelperText, FormHelperTextProps } from "@mui/material"
import { FormLabelProps } from "@mui/material"
import { FormLabel as MuiFormLabel } from "@mui/material"

import { cn } from "../../lib/utils"

function Form({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form
      className={cn("space-y-6", className)}
      {...props}
    />
  )
}

function FormField({ className, ...props }: FormControlProps) {
  return (
    <FormControl
      className={cn("space-y-2", className)}
      {...props}
    />
  )
}

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("space-y-2", className)}
      {...props}
    />
  )
}

function FormLabel({ className, ...props }: FormLabelProps) {
  return (
    <MuiFormLabel
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

function FormControl({ className, ...props }: FormControlProps) {
  return (
    <FormControl
      className={cn("space-y-2", className)}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: FormHelperTextProps) {
  return (
    <FormHelperText
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function FormMessage({ className, children, ...props }: FormHelperTextProps) {
  return (
    <FormHelperText
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {children}
    </FormHelperText>
  )
}

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
}
