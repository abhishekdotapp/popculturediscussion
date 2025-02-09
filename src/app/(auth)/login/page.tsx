"use client";

import React, { HTMLAttributeReferrerPolicy, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useAuthStore } from "@/store/Auth";
import Link from "next/link";



function LoginPage() {
    const {login} = useAuthStore()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault()

      const formData = new FormData(e.currentTarget)
      const email = formData.get("email")
      const password = formData.get("password")
      
      if(!email || !password){
        setError(() => "fill all the credentials")
        return;
      }

      setIsLoading(() => true)
      setError(() => "")

      const loginResponse = await login(email.toString(),password.toString())
      if(loginResponse.error){

        setError(() => loginResponse.error!.message)
      }
      setIsLoading(() => false)
    }

  return (
    <div>
        
    </div>
  )
}

export default LoginPage