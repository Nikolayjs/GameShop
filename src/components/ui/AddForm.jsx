import axios from '../../service/axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from './Button';
import TextField from './TextField';

const AddForm = ({ closeForm, isEdit, id }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [content_images, setContentImage] = React.useState('');
  const [release_date, setReleaseDate] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [price, setPrice] = React.useState('');
  const isEditing = Boolean(id);

  const onSubmit = async () => {
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
      //   await axios.post(`/games`, fields);
    } catch (error) {
      console.warn(error);
      alert('Ошибка');
    }
  };

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
          <form>
            <TextField
              placeholder="Название"
              value={title}
              inputId="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              placeholder="Описание"
              value={description}
              inputId="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              placeholder="Изображение"
              value={image}
              inputId="image"
              onChange={(e) => setImage(e.target.value)}
            />
            <TextField
              placeholder="Скриншоты"
              value={content_images}
              inputId="content_images"
              onChange={(e) => setContentImage(e.target.value)}
            />
            <TextField
              placeholder="Даты выхода"
              value={release_date}
              inputId="release_date"
              onChange={(e) => setReleaseDate(e.target.value)}
            />
            <TextField
              placeholder="Категория"
              value={category}
              inputId="category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <TextField
              placeholder="Цена"
              value={price}
              inputId="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="flex gap-3 max-w-sm">
              <Button onClick={onSubmit}>Сохранить</Button>
              <Button onClick={() => closeForm(!closeForm)}>Отменить</Button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1>Добавить игру</h1>
          <form>
            <TextField
              placeholder="Название"
              value={title}
              inputId="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              placeholder="Описание"
              value={description}
              inputId="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              placeholder="Изображение"
              value={image}
              inputId="image"
              onChange={(e) => setImage(e.target.value)}
            />
            <TextField
              placeholder="Скриншоты"
              value={content_images}
              inputId="content_images"
              onChange={(e) => setContentImage(e.target.value)}
            />
            <TextField
              placeholder="Даты выхода"
              value={release_date}
              inputId="release_date"
              onChange={(e) => setReleaseDate(e.target.value)}
            />
            <TextField
              placeholder="Категория"
              value={category}
              inputId="category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <TextField
              placeholder="Цена"
              value={price}
              inputId="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="flex gap-3 max-w-sm">
              <Button onClick={onSubmit}>Сохранить</Button>
              <Button onClick={() => closeForm(!closeForm)}>Отменить</Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default AddForm;
