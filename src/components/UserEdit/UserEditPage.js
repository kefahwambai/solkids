import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getById, register, updateUser } from '../services/userService';
import { useParams } from 'react-router-dom';
import classes from './userEdit.module.css';
import { EMAIL } from '../patterns';

export default function UserEditPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userId } = useParams();
  const isEditMode = userId;

  useEffect(() => {
    if (isEditMode) loadUser();
  }, [userId]);

  const loadUser = async () => {
    const user = await getById(userId);
    reset(user);
  };

  const submit = userData => {
    updateUser(userData);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {/* <Title title={isEditMode ? 'Edit User' : 'Add User'} /> */}
        <form onSubmit={handleSubmit(submit)} noValidate>
          <input
            label="Name"
            {...register('name', { required: true, minLength: 3 })}
            error={errors.name}
          />
          <input
            label="Email"
            {...register('email', { required: true, pattern: EMAIL })}
            error={errors.email}
          />
          <input
            label="Address"
            {...register('address', { required: true, minLength: 5 })}
            error={errors.address}
          />

          <input label="Is Admin" type="checkbox" {...register('isAdmin')} />
          <button type="submit" />
        </form>
      </div>
    </div>
  );
}
