import { useForm } from "react-hook-form"


export default function HandleErrors() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        alert('Submitted')
        reset()
    }

    return (
        <div>
            <h3>Handle Errors</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName?.type === "required" && (
                    <p role="alert">First name is required</p>
                )}
                <input
                    placeholder="Email"
                    {...register("mail", { required: "Email Address is required" })}
                    aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.mail && <p role="alert">{errors.mail.message}</p>}
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}