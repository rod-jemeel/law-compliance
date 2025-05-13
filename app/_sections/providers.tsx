'use client'
import { store } from "@/store"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"
import { Provider } from "react-redux"


export default function Providers({children}:{children:ReactNode}) {
    const router = useRouter()
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )

}
