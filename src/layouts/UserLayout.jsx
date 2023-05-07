import axios from '../service/axios';
import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { formConstructor } from '../utils/formConstructor';
import Form from '../components/Form';
import styles from './Layouts.module.scss';

const UserLayout = ({ data }) => {
  // const { id } = useParams();
  // const { fullName, balance, email, createdAt, updatedAt, _id, purchasedGames, avatarUrl } = data;
  const [isEditable, setIsEditable] = React.useState(false);
  const createdDate = new Date(data.createdAt).toLocaleDateString();
  const [fullName, setUserName] = React.useState('');
  const [email, setUserEmail] = React.useState('');
  const [avatarUrl, setUserAvatar] = React.useState('');
  const isEditing = Boolean(data._id);
  const formFields = formConstructor(
    [
      [fullName, fullName, 'fullName', setUserName, 'Имя'],
      [email, email, 'email', setUserEmail, 'email'],
      [avatarUrl, avatarUrl, 'avatarUrl', setUserAvatar, 'Аватар'],
    ],
    [onSubmit, () => setIsEditable(false)]
  );

  React.useEffect(() => {
    axios.get(`/auth/me`).then(() => {
      setUserName(data.fullName);
      setUserEmail(data.email);
      setUserAvatar(data.avatarUrl);
    });
  }, []);

  async function onSubmit() {
    try {
      const fields = {
        fullName,
        email,
        avatarUrl,
      };
      isEditing
        ? await axios.patch(`/user/${data._id}`, fields)
        : await axios.post('/user', fields);
      setIsEditable(!isEditable);
    } catch (error) {
      console.warn(error);
      alert('Ошибка');
    }
  }

  if (!isEditable) {
    return (
      <div className="mx-auto w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%]">
        <h1 className="text-center m-5">Профиль</h1>
        <Card image={data.avatarUrl}>
          <p className="text-xs text-gray-400/50">Профиль создан {createdDate} </p>
          <div className="flex flex-col gap-3 mt-5 p-2">
            <h3>Имя: {data.fullName}</h3>
            <h3>Почта: {data.email}</h3>
            <h3>Баланс: {data.balance}₽</h3>
            <div className="max-w-sm">
              <Button onClick={() => setIsEditable(true)}>Редактировать профиль</Button>
            </div>
          </div>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="mx-auto w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%]">
        <h1 className="text-center m-5">Профиль</h1>
        <Card image={data.avatarUrl}>
          <div className="flex flex-col gap-3 mt-5 p-2">
            <Form fields={formFields} />
          </div>
        </Card>
      </div>
    );
  }
};

export default UserLayout;
