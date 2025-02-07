"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { pakistanCities } from "@/data/cities"
import { motion } from "framer-motion"

interface SearchProps {
  onSearch: (city: string) => void
  isLoading?: boolean
}

export function Search({ onSearch, isLoading }: SearchProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const handleSelect = (currentValue: string) => {
    setValue(currentValue)
    setOpen(false)
    onSearch(currentValue)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-sm mx-auto"
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
            disabled={isLoading}
          >
            {value ? value : "Select a city..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search city..." />
            <CommandList>
              <CommandEmpty>No city found.</CommandEmpty>
              {pakistanCities.map((group) => (
                <React.Fragment key={group.province}>
                  <CommandGroup heading={group.province}>
                    {group.cities.map((city) => (
                      <CommandItem key={city} value={city} onSelect={handleSelect}>
                        <Check className={cn("mr-2 h-4 w-4", value === city ? "opacity-100" : "opacity-0")} />
                        {city}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  <CommandSeparator />
                </React.Fragment>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </motion.div>
  )
}

