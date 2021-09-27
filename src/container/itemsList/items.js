import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Item from '../../component/item';
import { GetItems } from '../../Redux/Actions/TodoActions';
import ItemForm from '../itemform';

const Todos = () => {
  const res = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { DeleteItemsReducer, UpdateItemsReducer, PostItemsReducer } = state;

  useEffect(() => {
    dispatch(GetItems(res.id));
  }, [DeleteItemsReducer, UpdateItemsReducer, PostItemsReducer]);

  const renderData = () => {
    const { GetItemsReducer } = state;
    const { loading, items, error } = GetItemsReducer;
    const ItemsLen = items.length;
    if (loading) {
      return 'Loading data .............';
    }
    if (ItemsLen > 0) {
      return items.map((el) => <Item key={el.id} item={el} />);
    }

    return error;
  };

  return (
    <main>
      <ItemForm />
      {renderData()}
    </main>
  );
};

export default Todos;
