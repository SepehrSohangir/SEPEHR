"use client"

import * as React from "react"


import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from "@mui/material"

import { cn } from "../../lib/utils"

function Avatar({ className, ...props }: MuiAvatarProps) {
  return (
    <MuiAvatar
      data-slot="avatar"
      
      className={cn(
        "relative shrink-0 overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, src, alt = "", ...props }: React.ComponentProps<"img">) {
  return (
    <img
      src={src}
      alt={alt}
      data-slot="avatar-image"
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-fallback"
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
