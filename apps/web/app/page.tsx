"use client"

import { Authenticated, Unauthenticated } from "convex/react"
import { SignInButton, UserButton } from "@clerk/nextjs"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"


export default function Page() {

  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <>

      <Authenticated>

        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>
            app/web
          </p>
          <UserButton />
          
          <Button onClick={() => addUser()}>Add User</Button>
          <div className="max-w-sm w-full mx-auto gap">
            {JSON.stringify(users)}

          </div>

        </div>
      </Authenticated>

      <Unauthenticated>
        <p>MUst be signed in </p>
        <SignInButton> Sign IN </SignInButton>
        
      </Unauthenticated>
    </>
  )


}
