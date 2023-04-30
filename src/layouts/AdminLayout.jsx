import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddForm from '../components/ui/AddForm';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { fetchGames, fetchRemoveGame } from '../store/slices/games';

const AdminLayout = () => {
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.games);
  const [addGame, setAddGame] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [gameId, setGameId] = React.useState('');

  React.useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const onClickRemove = async (id) => {
    dispatch(fetchRemoveGame(id));
    await dispatch(fetchGames());
  };

  const editHandler = (id) => {
    console.log(isEdit);

    setAddGame(true);
    setGameId(id);
  };

  if (games.items.length === 0) {
    return <h1 className="mt-[200px] text-3xl text-center">Loading</h1>;
  }
  return (
    <div className="mt-32 mx-auto flex flex-col max-w-xl">
      {addGame ? (
        <AddForm closeForm={setAddGame} isEdit={isEdit} id={gameId} />
      ) : (
        <>
          <Button customStyle="max-w-xs w-[150px]" onClick={() => setAddGame(true)}>
            Добавить
          </Button>
          {games.items.map((game) => (
            <div key={game._id}>
              <Card tinyImage={game.image}>
                <h3 className="text-xl font-medium text-gray-200">{game.title}</h3>
                <p>{game.description.slice(0, 100)}...</p>
                <div className="flex gap-3 mt-4">
                  <Button onClick={() => setIsEdit(true)}>
                    <Link to={`/games/${game._id}/edit`} onClick={() => editHandler(game._id)}>
                      Редактировать
                    </Link>
                  </Button>

                  <Button onClick={() => onClickRemove(game._id)}>Удалить</Button>
                </div>
              </Card>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default AdminLayout;
