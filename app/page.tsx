import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { MainButton } from "@/components/buttons/mainButton"

import standingdev from "../public/standingdev-PhotoRoom.png"

export default function IndexPage() {
  return (
    <section className="container mx-auto mt-24 flex flex-wrap-reverse items-center justify-center">
      <div className="md:mb:0 order-2 mb-10 w-full md:order-1 md:w-1/2">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-primary md:text-5xl ">
            Developer
          </h1>
          <h1 className="text-4xl font-bold md:ml-20 md:mt-5 md:text-5xl">
            Resource
          </h1>
          <h1 className="text-4xl font-bold md:ml-32 md:mt-5 md:text-5xl">
            Hub
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            <strong className="text-primary">DEVerNote </strong>makes it easy to
            save all of your favorite code snippets and articles in one place
            for ease of access. Have a snippet or article you think others will
            like? Share it! Connect with like-minded people on a platform
            created for developers by developers.
          </p>
        </div>
        <div className="flex justify-center ">
          <MainButton className="mt-10  rounded-full text-xl md:mr-8">
            <Link href="/register">Register</Link>
          </MainButton>
        </div>
      </div>
      <div className="order-1 w-full md:order-2 md:w-1/2">
        <div className="flex justify-center md:justify-end">
          <Image
            src={standingdev}
            alt="Image"
            width={400}
            height={300}
            className="md:h-auto md:w-full"
          />
        </div>
      </div>
    </section>
  )
}
