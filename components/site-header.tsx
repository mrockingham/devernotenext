import Link from "next/link"
import { MdOutlineLogin } from "react-icons/md"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { useUserStore } from "@/app/stores/useUserStore"

// import {osfowdark} from "../public/osfowdark.png"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* <Link href="/login" target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <MdOutlineLogin className="h-5 w-5" />
              <span className="sr-only">Login</span>
            </div>
          </Link> */}
          <Link
            href="/login"
            className={cn(
              "flex items-center text-2xl font-medium text-muted-foreground"
            )}
          >
            <div className=" text-sm md:text-2xl">Login</div>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
