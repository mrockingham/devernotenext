"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn, useSession } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useUserStore } from "@/app/stores/useUserStore"

import github from "../../public/github.png"
import google from "../../public/google.png"
import GoogleSignIn from "../buttons/GoogleSignIn"

declare global {
  interface Window {
    gapi: any
  }
}

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z.string().min(6),
})

export function Login() {
  const { data, isUserLoading, userError, createUser, logIn } = useUserStore(
    (state: any) => state
  )
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  })

  const router = useRouter()
  const onSubmit = async (data: any) => {
    try {
      await logIn(
        {
          email: data.email,
          password: data.password,
        },
        router
      )
    } catch (err) {
      console.log(err)
    }
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-gray-500  bg-clip-padding bg-opacity-10 border border-opacity-25 border-white rounded-full p-4 text-white "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="rounded-full  border border-white border-opacity-25 bg-gray-500 bg-opacity-10 bg-clip-padding p-4"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          width={"full"}
          className="bg-primary  text-white rounded-full p-4"
          type="submit"
        >
          Submit
        </Button>
        <Link href="/register" className="flex items-center gap-2">
          Register
        </Link>
        <>Forgot Password</>
        <p className="text-center">Or Log In With</p>
        <div className="flex justify-center space-x-8">
          <div>
            <GoogleSignIn />
          </div>

          <Image
            src={github}
            alt="Image"
            width={50}
            height={50}
            // className="md:h-auto md:w-full"
          />
        </div>
        {/* <Button
          width={"full"}
          className="rounded-full  bg-yellow-600 p-4 text-white"
          type="submit"
        >
          Google
        </Button>
        <Button
          width={"full"}
          className="bg-black  rounded-full p-4"
          type="submit"
        >
          Github
        </Button> */}
      </form>
    </Form>
  )
}

export default Login
