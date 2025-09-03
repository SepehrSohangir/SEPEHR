"use client"

import * as React from "react"
import { Snackbar, SnackbarProps } from "@mui/material"
import { Alert, AlertProps } from "@mui/material"

import { cn } from "../../lib/utils"

interface ToastProps extends Omit<SnackbarProps, 'open'> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function Toast({ open = false, onOpenChange, onClose, ...props }: ToastProps) {
  const handleClose = (event: any, reason: string) => {
    if (onOpenChange) {
      onOpenChange(false)
    }
    if (onClose) {
      onClose(event, reason)
    }
  }

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      data-slot="toast"
      {...props}
    />
  )
}

interface ToastActionProps extends AlertProps {
  altText?: string
}

function ToastAction({ className, altText, ...props }: ToastActionProps) {
  return (
    <Alert
      data-slot="toast-action"
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        className
      )}
      {...props}
    />
  )
}

function ToastClose({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="toast-close"
      className={cn(
        "group absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      )}
      {...props}
    />
  )
}

function ToastDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toast-description"
      className={cn("text-sm opacity-90", className)}
      {...props}
    />
  )
}

function ToastProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function ToastTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toast-title"
      className={cn("text-sm font-semibold [&+div]:mt-0.5", className)}
      {...props}
    />
  )
}

function ToastViewport({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toast-viewport"
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )}
      {...props}
    />
  )
}

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
}
