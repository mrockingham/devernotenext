" use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { signIn, signOut, useSession } from "next-auth/react"

import { useToast } from "@/components/ui/use-toast"
import { useUserStore } from "@/app/stores/useUserStore"

import google from "../../public/google.png"
import { ToastAction } from "../ui/toast"

const GoogleReg = () => {
  const { data: session } = useSession()
  const { data, isUserLoading, userError, createProviderUser, logIn } =
    useUserStore((state: any) => state)
  const { toast } = useToast()
  console.log("session data", session)

  useEffect(() => {
    if (session?.user) {
      try {
        createProviderUser({
          name: session?.user.name,
          email: session?.user.email,
          provider: true,
        })
        console.log("user error", userError)
      } catch (err) {
        console.log("is ther an error", err)
      }
    }
  }, [session?.user])

  useEffect(() => {
    if (userError?.response.status === 409) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: (
          <ToastAction altText="Try again">User Already Exist</ToastAction>
        ),
      })
    }
  }, [userError?.response.status])

  console.log("user error2------------", userError)

  if (session && session.user) {
    return (
      <div>
        <button style={{ cursor: "pointer" }} onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    )
  }

  if (userError?.response.status === 409) {
    signOut()
  }
  return (
    <button onClick={() => signIn()}>
      <Image
        src={google}
        alt="Image"
        width={50}
        height={50}
        // className="md:h-auto md:w-full"
      />
    </button>
  )
}

export default GoogleReg
