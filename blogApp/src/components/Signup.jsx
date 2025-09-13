import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../store/authenticationSlice";
import AuthObject from '../Authentication/Authentication';
import { useForm } from 'react-hook-form';
import { Button, Input, Logo } from "../components/index"

function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const { handleSubmit, register } = useForm()

    const signup = async (data) => {
        setError("")
        try {
            const createUser = await AuthObject.userSignUp(data)
            if (createUser) {
                const userData = await AuthObject.userAuthenticationState()
                if (userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='flex items-center justify-center'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(signup)}>
                    <div className='space-y-5'>
                        <Input
                            label="Name"
                            Placeholder="Enter your full name"
                            type="text"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email"
                            placeholder="Enter email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password"
                            Placeholder="Enter password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <button type='submit'>Create Account</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup;