"use client"

import { useToast } from "@/components/ui/use-toast"

export const ToastDestructive = (title: string, description: string) => {
  const { toast } = useToast()

  const alertToast = toast({
    variant: "destructive",
    title,
    description,
  })

  return alertToast
}
