/* eslint-disable no-console */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetItems } from '../../Redux/Actions/TodoActions';

const Todos = () => {
  const res = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(GetItems(res.id));
  }, []);

  console.log(res.id);

  const renderData = () => {
    const { GetItemsReducer } = state;
    const { loading, items, error } = GetItemsReducer;
    const ItemsLen = items.length;
    if (loading) {
      return 'Loading data .............';
    }
    if (ItemsLen > 0) {
      return items.map((el) => console.log(el));
    }

    return error;
  };

  return (
    renderData()
  );
};

export default Todos;