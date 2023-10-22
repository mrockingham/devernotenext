" use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import google from "next-auth/providers/google"
import { signIn, signOut, useSession } from "next-auth/react"

import { useUserStore } from "@/app/stores/useUserStore"

const GoogleSignIn = () => {
  const { data: session } = useSession()
  const { data, isUserLoading, userError, createProviderUser, logProviderIn } =
    useUserStore((state: any) => state)
  const router = useRouter()
  console.log("session data", session)

  useEffect(() => {
    if (session?.user) {
      try {
        logProviderIn({
          email: session?.user.email,
        })
      } catch (err) {
        console.log(err)
      }
    }
  }, [session?.user])

  useEffect(() => {
    if (userError?.response?.status === 409) {
      signOut()
    }

    if (userError?.response?.status === 412) {
      try {
        createProviderUser({
          name: session?.user?.name,
          email: session?.user?.email,
          provider: true,
        })
        console.log("user error", userError)
      } catch (err) {
        console.log("is ther an error", err)
      }
    }
  }, [userError?.response?.status])

  if (session && session.user) {
    return (
      <div>
        <p>{session.user.name}</p>
        <button style={{ cursor: "pointer" }} onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    )
  }
  return (
    <button
      onClick={() => {
        signIn()
        router.push("/home")
      }}
    >
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

export default GoogleSignIn
