import axios from '../service/axios';
import React from 'react';
import Form from '../components/Form';
import { formConstructor } from '../utils/formConstructor';

const AddForm = ({ closeForm, isEdit, id }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [content_images, setContentImage] = React.useState('');
  const [release_date, setReleaseDate] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [price, setPrice] = React.useState('');
  const isEditing = Boolean(id);

  const formFields = formConstructor(
    [
      ['Название', title, 'title', setTitle],
      ['Описание', description, 'description', setDescription],
      ['Изображение', image, 'image', setImage],
      ['Скриншоты', content_images, 'content_images', setContentImage],
      ['Даты выхода', release_date, 'release_date', setReleaseDate],
      ['Категория', category, 'category', setCategory],
      ['Цена', price, 'price', setPrice],
    ],
    [onSubmit, () => closeForm(!closeForm)]
  );

  async function onSubmit() {
    try {
      const fields = {
        title,
        description,
        image,
        content_images: content_images.split(','),
        release_date,
        category: category.split(','),
        price,
      };
      isEditing ? await axios.patch(`/games/${id}`, fields) : await axios.post(`/games`, fields);
    } catch (error) {
      console.warn(error);
      alert('Ошибка');
    }
  }

  React.useEffect(() => {
    if (id) {
      axios.get(`/games/${id}`).then(({ data }) => {
        setTitle(data.title);
        setDescription(data.description);
        setImage(data.image);
        setContentImage(data.content_images.toString());
        setReleaseDate(data.release_date);
        setCategory(data.category.toString());
        setPrice(data.price);
      });
    }
  }, [id]);
  return (
    <div className="flex flex-col gap-3 mx-auto w-full">
      {isEdit ? (
        <>
          <h1>Редактировать игру</h1>
          <Form fields={formFields} />
        </>
      ) : (
        <>
          <h1>Добавить игру</h1>
          <Form fields={formFields} />
        </>
      )}
    </div>
  );
};

export default AddForm;
