"use server"

import apiRoutes from "@/app/lib/apiRoutes";
import { toast } from "sonner";
import { z } from "zod";

const formState = z.object({
    email: z.string().email({ message: 'Please enter a valid email' }),
});

export default async function submitSubscribe(prevState: any, formdata: FormData) {
    if (!formdata.get('email')) return { message: 'Please enter a valid email' }
    try {
        const parsed = formState.parse({
            email: formdata.get('email'),
        })
        if (parsed) {
            const email = formdata.get('email') as string
            if (email) {
                try {
                    const res = await fetch(apiRoutes.subscribeNewsletter, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email
                        })
                    })
                    console.log(res)

                    if (res.status === 201) return toast.success('You have successfully subscribed to our newsletter');

                    return { info: 'Something went wrong, please try again later' }
                } catch (e) {
                    // console.log(e)
                    return { info: 'Something went wrong, please try again later' }

                }

            }
        }

    } catch (err: any) {
        console.log(err)
        return { message: err?.errors ? err?.errors[0]?.message : null }
    }
}