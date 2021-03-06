/* eslint-disable no-console */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Item from '../item';
import { GetItems } from '../../Redux/Actions/TodoActions';
import ItemForm from '../itemform';
import Navbar from '../../component/navbar';
import styles from './items.module.css';

const Todos = () => {
  const history = useHistory();
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
    const { error: deleteError } = DeleteItemsReducer;
    const { error: postError } = PostItemsReducer;

    if (loading) {
      return 'Loading data .............';
    }
    if (ItemsLen > 0) {
      return items.map((el) => <Item key={el.id} item={el} />);
    }
    if (deleteError) {
      return `${deleteError}`;
    }
    if (postError) {
      return `${postError}`;
    }

    return error;
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <button className={styles.btn} type="button" onClick={() => history.goBack()}>GoBack</button>
      <ItemForm />
      {renderData()}
    </main>
  );
};

export default Todos;
