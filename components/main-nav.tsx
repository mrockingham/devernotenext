"use client"

import { useEffect, useState } from "react"
import NextImage from "next/image"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { useUserStore } from "@/app/stores/useUserStore"

import osfowdark from "../public/osfowdark.png"
import osfowwhite from "../public/osfowwhite.png"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const { userTheme, setUserTheme } = useUserStore((state: any) => state)

  console.log("userTheme on nav", userTheme)

  console.log("update user theme", userTheme)
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center gap-2">
        <NextImage
          src={userTheme === "light" ? osfowdark : osfowwhite}
          alt="osfowdark"
          width={200}
          height={200}
        />
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-2xl font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  <div className=" text-sm md:text-2xl">{item.title}</div>
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
