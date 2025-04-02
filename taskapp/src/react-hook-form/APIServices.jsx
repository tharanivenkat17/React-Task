import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";

export default function APIServices() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/api/save", data);

            if (response.status === 200) {
                alert("Your application is updated.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Submission has failed.");
        }
    };

    return (
        <div>
            <h3>API Services</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Name"
                    {...register("Name", {
                        required: "Name is required"
                    })}
                />
                {errors.Name && <span>{errors.Name.message}</span>}
                <input
                    placeholder="Email"
                    {...register("Email", {
                        required: "Email Address is required",
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: "Invalid Email"
                        }
                    })}
                />
                {errors.Email && <span>{errors.Email.message}</span>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}