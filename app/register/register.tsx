"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
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
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import GoogleReg from "@/components/buttons/GoogleReg"
import { useUserStore } from "@/app/stores/useUserStore"

import github from "../../public/github.png"
import google from "../../public/google.png"

const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
})

export const Register = () => {
  const { data, isUserLoading, userError, createUser } = useUserStore(
    (state: any) => state
  )
  const [error, setError] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (createData: any) => {
    try {
      await createUser(
        {
          name: createData.name,
          email: createData.email,
          password: createData.password,
        },
        router
      )

      if (userError) {
        setError(true)
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      } else if (!userError) {
        setError(false)
        if (error === false) {
          // router.push("/sendVerification")
        }

        console.log("error", userError)
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      console.log("error", error)
    }

    // .then(() => {
    //   router.push("/sendVerification")
    // })
  }

  console.log("data", data)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
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

        <p className="text-center">Or Log In With</p>
        <div className="flex justify-center space-x-8">
          <div>
            <GoogleReg />
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

export default Register
