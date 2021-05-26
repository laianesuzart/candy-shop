import { Button} from "@material-ui/core";
import {Container} from './style';
import {useDispatch} from 'react-redux';
import {addToCartThunk, removeFromCartThunk} from '../../store/modules/cart/thunks';

function Card({ product, isRemovable = false }) {
  const { image, name, price, quantity, id } = product;
  const dispatch = useDispatch();

  return (
    <Container>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</p>
      {isRemovable ? (
        <Button onClick={() => dispatch(removeFromCartThunk(id))} variant="contained" color="primary">
          Remover todos
        </Button>
      ) : (
        <Button onClick={() => dispatch(addToCartThunk(product))} variant="contained" color="secondary">
          Colocar na bolsa
        </Button>
      )}
    </Container>
  );
}

export default Card;
