import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Input, Button } from 'antd';

export default function IntegrationUI() {
  const { control, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset()
  };

  return (
    <div>
      <h3>Integrating with UI Library</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Invalid email address" }
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Enter your email"
              status={errors.email ? 'error' : ''}
            />
          )}
        />

        <Button type="primary" htmlType="submit">Submit</Button>
      </form>
      <br />
    </div>
  );
}