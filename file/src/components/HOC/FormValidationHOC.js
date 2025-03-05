import React, { useState } from 'react';

const FormValidationHOC = (HOCComponent) => {
  return (props) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password:'',
    });

    const [errors, setErrors] = useState({
      name: '',
      email: '',
      password:'',
    });

    const validate = () => {
      let valid = true;
      const newErrors = {};

      const namePattern = /^[a-zA-Z]{4,}$/;
      if (!formData.name) {
        newErrors.name = 'Username is required';
        valid = false;
      } else if (!namePattern.test(formData.name)) {
        newErrors.name = 'Name Sholud be Character only';
        valid = false;
      }

      const emailPattern = /^[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,8}$/;
      if (!formData.email) {
        newErrors.email = 'Email is required';
        valid = false;
      } else if (!emailPattern.test(formData.email)) {
        newErrors.email = 'Email is not valid';
        valid = false;
      }

      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
      if (!formData.password) {
        newErrors.password = 'Password is required';
        valid = false;
      } else if (!passwordPattern.test(formData.password)) {
        newErrors.password = 'Password must be at least 7 characters long, including uppercase, lowercase, number, and special character';
        valid = false;
      }

      setErrors(newErrors);
      return valid;
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        setFormData({
            name: '',
            email: '',
            password: ''
        });
        console.log('Form Submitted:', formData);
        alert("Form Submitted");
      }
    };

    return (
      <HOCComponent
        {...props}
        formData={formData}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    );
  };
};

export default FormValidationHOC;