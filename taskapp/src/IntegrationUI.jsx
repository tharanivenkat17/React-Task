import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Input, Button } from 'antd';

export default function IntegrationUI() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
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
  );
}