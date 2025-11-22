'use client'

import { useQuery, useMutation } from "@tanstack/react-query"
import api from "@/utils/api"
import { useRouter } from 'next/navigation'


export default function page() {
    const router = useRouter();
    const USER_INFO = process.env.NEXT_PUBLIC_USER_INFO as string;
    const SIGNOUT = process.env.NEXT_PUBLIC_SIGNOUT as string;
    const token = localStorage.getItem("token")

    const { data, isLoading } = useQuery({
        queryKey: ["userIfo"],
        queryFn: async () => {
            const res = await api.get(USER_INFO, { headers: { Authorization: `Bearer ${token}` } })
            return res.data
        }
    })


    const mutation = useMutation({
        mutationFn: async () => {
            return await api.post(SIGNOUT, {},{ headers: { Authorization: `Bearer ${token}` } })
        },
        onSuccess: () => {
            router.replace("/signin")
        }
    })

    return (
        <div>
            {isLoading ? "loading..." : (
                <>
                    email : {data?.data?.email}

                    <div>
                        <button onClick={() => mutation.mutate()}>
                            logout
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
