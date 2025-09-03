"use client"

import * as React from "react"
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  DialogContentText as MuiDialogContentText,
  IconButton
} from "@mui/material"
import { Close as CloseIcon } from "@mui/icons-material"

import { cn } from "../../lib/utils"

interface DialogProps extends Omit<MuiDialogProps, 'open'> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function Dialog({
  open = false,
  onOpenChange,
  onClose,
  ...props
}: DialogProps) {
  const handleClose = (event: any, reason: "backdropClick" | "escapeKeyDown") => {
    if (onOpenChange) {
      onOpenChange(false)
    }
    if (onClose) {
      onClose(event, reason)
    }
  }

  return (
    <MuiDialog
      open={open}
      onClose={handleClose}
      data-slot="dialog"
      {...props}
    />
  )
}

function DialogTrigger({ children, onClick, ...props }: React.ComponentProps<"div"> & { onClick?: () => void }) {
  return (
    <div
      data-slot="dialog-trigger"
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

function DialogPortal({ children }: { children: React.ReactNode }) {
  return (
    <div data-slot="dialog-portal">
      {children}
    </div>
  )
}

function DialogClose({ onClick, ...props }: React.ComponentProps<"button">) {
  return (
    <IconButton
      data-slot="dialog-close"
      onClick={onClick}
      color="default"
      sx={{
        position: 'absolute',
        top: 16,
        right: 16,
        opacity: 0.7,
        transition: 'opacity 0.2s',
        '&:hover': {
          opacity: 1
        }
      }}
      {...props}
    >
      <CloseIcon />
      <span className="sr-only">Close</span>
    </IconButton>
  )
}

function DialogOverlay({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

interface DialogContentProps extends React.ComponentProps<typeof MuiDialogContent> {
  showCloseButton?: boolean
  onClose?: () => void
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  onClose,
  ...props
}: DialogContentProps) {
  return (
    <MuiDialogContent
      data-slot="dialog-content"
      className={cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && onClose && (
        <IconButton
          data-slot="dialog-close"
          onClick={onClose}
          color="default"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            opacity: 0.7,
            transition: 'opacity 0.2s',
            '&:hover': {
              opacity: 1
            }
          }}
        >
          <CloseIcon />
          <span className="sr-only">Close</span>
        </IconButton>
      )}
    </MuiDialogContent>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <MuiDialogActions
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof MuiDialogTitle>) {
  return (
    <MuiDialogTitle
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof MuiDialogContentText>) {
  return (
    <MuiDialogContentText
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
