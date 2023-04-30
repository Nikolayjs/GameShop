import React from 'react';
import MainLayout from './MainLayout';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchRegister } from '../store/slices/auth';
import TextField from '../components/ui/TextField';

const RegisterLayout = () => {
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

  const email = {
    ...register('email', {
      required: 'Укажите email',
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'email указан неверно',
      },
    }),
  };

  const password = {
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
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) {
      return alert('Не удалось зарегистрироваться');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
      navigate('/');
    }
  };

  return (
    <>
      <div
        className="absolute top-0 l-0 w-full h-full cursor-default blur-sm"
        onClick={() => navigate('/')}
      >
        <MainLayout />
      </div>
      <div className="absolute right-0 w-[20%] bg-black/50 p-10 h-screen">
        <h1 className="text-white text-center">Регистрация</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="E-mail"
            inputId="email"
            errors={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            type="text"
            onChange={(e) => handleChange(e, email)}
          />
          <TextField
            label="Пароль"
            inputId="password"
            errors={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            type="password"
            onChange={(e) => handleChange(e, password)}
          />
          <div className="m-auto text-center mt-10">
            <span className="text-white text-center hover:text-gray-500 ease-out duration-300">
              <Link to="/login">У меня уже есть аккаунт</Link>
            </span>
            <div type="submit">
              <Button customStyle="mt-5" isDisable={!isValid} type="submit">
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterLayout;
