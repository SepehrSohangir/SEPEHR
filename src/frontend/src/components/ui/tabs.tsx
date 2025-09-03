"use client"

import * as React from "react"
import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from "@mui/material"
import { Tab as MuiTab, TabProps as MuiTabProps } from "@mui/material"
import { Box } from "@mui/material"

import { cn } from "../../lib/utils"

interface TabsProps extends Omit<MuiTabsProps, 'value' | 'onChange'> {
  value?: string
  onValueChange?: (value: string) => void
}

function Tabs({ value, onValueChange, onChange, ...props }: TabsProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue)
    }
    if (onChange) {
      onChange(event, newValue)
    }
  }

  return (
    <MuiTabs
      value={value || false}
      onChange={handleChange}
      data-slot="tabs"
      {...props}
    />
  )
}

function TabsList({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <Box
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
}

interface TabsTriggerProps extends Omit<MuiTabProps, 'value'> {
  value: string
}

function TabsTrigger({ className, value, ...props }: TabsTriggerProps) {
  return (
    <MuiTab
      value={value}
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, value, ...props }: React.ComponentProps<"div"> & { value: string }) {
  return (
    <div
      data-slot="tabs-content"
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
