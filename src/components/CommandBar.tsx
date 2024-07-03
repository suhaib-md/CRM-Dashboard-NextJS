"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  SquarePen,
  FilePlus,
  Building2,
  BriefcaseBusiness,
  ClipboardList,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading = "Create">
            <CommandItem>
                <SquarePen className="mr-2 h-4 w-4" />
                <span>Create Task</span>
            </CommandItem>
            <CommandItem>
                <FilePlus className="mr-2 h-4 w-4" />
                <span>Add Customers</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Navigate">
            <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Go to People</span>
            </CommandItem>
            <CommandItem>
                <Building2 className="mr-2 h-4 w-4" />
                <span>Go to Companies</span>
            </CommandItem>
            <CommandItem>
                <BriefcaseBusiness className="mr-2 h-4 w-4" />
                <span>Go to Opportunities</span>
            </CommandItem>
            <CommandItem>
                <ClipboardList className="mr-2 h-4 w-4" />
                <span>Go to Tasks</span>
            </CommandItem>
            <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Go to Settings</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
