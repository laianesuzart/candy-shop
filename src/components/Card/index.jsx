import { Button, Paper } from "@material-ui/core";
import {useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../../store/modules/cart/actions';

function Card({ product, isRemovable = false }) {
  const { image, name, price, quantity, id } = product;
  const dispatch = useDispatch();

  return (
    <Paper>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      {isRemovable ? (
        <Button onClick={() => dispatch(removeFromCart(id))} variant="contained" color="primary">
          Remover todos
        </Button>
      ) : (
        <Button onClick={() => dispatch(addToCart(product))} variant="contained" color="secondary">
          Colocar na bolsa
        </Button>
      )}
    </Paper>
  );
}

export default Card;
