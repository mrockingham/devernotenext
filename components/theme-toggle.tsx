"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useUserStore } from "@/app/stores/useUserStore"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const { userTheme, setUserTheme } = useUserStore((state: any) => state)

  useEffect(() => {
    setUserTheme(theme)
  }, [setUserTheme, theme])

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}
    >
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
