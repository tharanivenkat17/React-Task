import React from 'react'
import { useForm } from "react-hook-form"

export default function () {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data) 
        alert(JSON.stringify(data))
    }
    const Input = React.forwardRef(({ label, register, required }, ref) => (
        <>
            <label>{label}</label>
            <input ref={ref} {...register(label, { required })} />
        </>
    ))

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name: </label>
                <input type="text" {...register("firstName", { required: true, minLength: { value: 4, message: "Name must have atleast  4 character" }, maxLength: { value: 26, message: "Name must have maximum 26 character" } })} /> <br />
                {errors.firstName && <span>{errors.firstName.message} <br /> </span>}

                <Input label="Last Name: " register={register} required /> <br />

                <label>Email: </label>
                <input type="email" {...register("email", { required: true, pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Invalid Email" } })} /> <br />
                {errors.email && <span>{errors.email.message} <br /> </span>}

                <label>Age: </label>
                <input type="number" {...register("age", { required: true, min: { value: 10, message: "Age must be greater than 10" }, max: { value: 70, message: "Age must be less than 70" } })} /> <br />
                {errors.age && <span>{errors.age.message} <br /></span> } 

                <label>Gender: </label>
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>

                <br />
                <input type="submit" />
            </form>
        </div>
    )
}