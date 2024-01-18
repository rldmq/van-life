import React from 'react'
import { Form, useActionData } from 'react-router-dom'
import { loginUser } from '../api'

export async function action({ request }){
    const formData = await request.formData()
    console.log(formData)
    // return (formData.email, formData.password)
}

export default function Login(){

    return(
        <div>
            <Form className='login--' method='post' action='/login'>
                <h1 className='login--motto'>Sign in to your account</h1>
                <label>
                    <input type='email' placeholder='E-mail' name='email' className='login--input email'/>
                </label>
                <label>
                    <input type='password' placeholder='Password' name='password' className='login--input password'/>
                </label>
                <label>
                    <button name='login button' className='login--button'>
                        Log in
                    </button>
                </label>
            </Form>
        </div>

    )
}