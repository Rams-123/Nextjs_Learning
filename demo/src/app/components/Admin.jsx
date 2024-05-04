
"use client"
import { useRouter } from 'next/navigatrion'
import React from 'react'

const Admin = () => {
    const router = useRouter();
    console.log("ROuter:", router);
    return (
        <div>Admin Data</div>
    )
}

export default Admin