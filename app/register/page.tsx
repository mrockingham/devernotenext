import React from "react"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Register from "@/app/register/register"

import manatcomputerp from "../../public/manatcomputerp.png"

const login = () => {
  return (
    <section className="container h-full mx-auto mt-20  flex flex-wrap items-center justify-center">
      <div className="md:mb:0 order-2 mb-10 w-full md:order-1 md:w-1/2">
        <h1 className="text-4xl font-bold text-primary md:text-5xl mt-16 mb-8 ">
          DEVerNote
        </h1>
        <p className="text-2xl font-bold  text-muted-foreground md:text-3xl">
          Save your Code snippets for ease of access,have one you like, share
          it!
        </p>
        <div className="flex justify-center md:justify-end">
          <Image
            src={manatcomputerp}
            alt="Image"
            width={500}
            height={300}
            className="md:h-auto md:w-full"
          />
        </div>

        <div className="flex justify-center "></div>
      </div>
      {/* <Card className="order-1 w-full md:order-2 md:w-1/2 flex items-center justify-center ">
        <div className=" w-4/6">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-primary md:text-5xl mt-16 mb-8 ">
              Log In
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-12">
            <Login />
          </CardContent>
        </div>
      </Card> */}
      <div className="order-1 flex w-full items-center justify-center  rounded-lg border border-white border-opacity-25 bg-gray-800 bg-opacity-10 bg-clip-padding p-4 md:order-2 md:w-1/2">
        <div className="h-full w-3/6 text-center md:pb-6 md:pt-6 md:text-left   ">
          <h1 className="mb-10 text-4xl font-bold text-primary md:text-5xl text-center ">
            Register
          </h1>
          <Register />
        </div>
      </div>
    </section>
  )
}

export default login
