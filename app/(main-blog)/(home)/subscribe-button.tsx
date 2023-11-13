'use client'

import { useFormStatus } from 'react-dom'

export function SubcribeButton() {
    const { pending } = useFormStatus()

    return (
        <button className='bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300'>
            {pending ? 'Subscribing...' : 'Subscribe'}
        </button>
    )
}