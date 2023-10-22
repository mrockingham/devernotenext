"use client"

import { Button, buttonVariants } from "@/components/ui/button"

export const MainButton = (props: any) => {
  const { children, ...buttonProps } = props
  return (
    <Button width={"lg"} size={"lg"} mwidth={"sm"} {...buttonProps}>
      {children}
    </Button>
  )
}
