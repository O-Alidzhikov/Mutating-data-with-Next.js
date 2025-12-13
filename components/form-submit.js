"use client"

import { useFormStatus } from "react-dom"

export default function FormSubmission(){
    
    const status = useFormStatus()

    if(status.pending){
        return <p>Sending...</p>
    }

    return ( 
        <>
          <button type="reset">Reset</button>
            <button>Create Post</button>
        </>
    )
}