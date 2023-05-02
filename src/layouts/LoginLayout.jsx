import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import HeroIcon from '../components/ui/HeroIcon';
import TextField from '../components/ui/TextField';
import { fetchAuth } from '../store/slices/auth';
import MainLayout from './MainLayout';
import styles from './Layouts.module.scss';

const LoginLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const emailValidation = {
    ...register('email', {
      required: 'Укажите email',
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'email указан неверно',
      },
    }),
  };

  const passwordValidation = {
    ...register('password', {
      required: 'Укажите пароль',
      minLength: { value: 3, message: 'Пароль должен быть длиннее 3см' },
    }),
  };

  const handleChange = (event, type) => {
    setValue(type.name, event.target.value);
    trigger(type.name);
  };

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      return alert('Не удалось авторизоваться');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
      navigate('/');
    }
  };
  return (
    <>
      <div className={styles.loginWrapper} onClick={() => navigate('/')}>
        <MainLayout />
      </div>
      <div className={styles.loginContainer}>
        <div className="flex justify-between">
          <h3 className="text-white text-center">Авторизация</h3>
          <HeroIcon name="XMarkIcon" onClick={() => navigate('/')} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="E-mail"
            inputId="email"
            errors={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            type="text"
            onChange={(e) => handleChange(e, emailValidation)}
          />
          <TextField
            label="Пароль"
            inputId="password"
            errors={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            type="password"
            onChange={(e) => handleChange(e, passwordValidation)}
          />
          <div className="m-auto text-center mt-10">
            <span>
              <Link to="/register">У меня нет аккаунта</Link>
            </span>
            <div type="submit">
              <Button customStyle="mt-5" isDisable={!isValid} type="submit">
                Войти
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginLayout;
