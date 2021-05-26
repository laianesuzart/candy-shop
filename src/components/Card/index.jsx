import { Button, Fab, Tooltip } from "@material-ui/core";
import { Container, Wrapper } from "./style";
import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";
import {
  addOneItemThunk,
  removeOneItemThunk,
} from "../../store/modules/product/thunks";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";

function Card({ product, isRemovable = false }) {
  const { image, name, price, id } = product;
  const dispatch = useDispatch();
  const cart  = JSON.parse(localStorage.getItem("cart")) || [];;
  const findProduct = cart.find((actual) => actual.id === product.id);
  const [quantity, setQuantity] = useState(findProduct?.quantity);

  function handleAdd() {
    dispatch(addOneItemThunk(id));
    setQuantity(quantity + 1);
  }

  function handleRemove() {
    dispatch(removeOneItemThunk(id));
    setQuantity(quantity - 1);
  }

  return (
    <Container>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        {price.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </p>
      {isRemovable ? (
        <>
          <Wrapper>
            <span>Quantidade: </span>
            <span style={{ marginLeft: "auto" }}>
              <Tooltip color="primary" title="Remover">
                <Fab onClick={handleRemove} size="small">
                  <RemoveIcon />
                </Fab>
              </Tooltip>{" "}
              <span>{quantity} </span>
              <Tooltip color="secondary" title="Adicionar">
                <Fab onClick={handleAdd} size="small">
                  <AddIcon />
                </Fab>
              </Tooltip>
            </span>
          </Wrapper>
          <Button
            onClick={() => dispatch(removeFromCartThunk(id))}
            variant="contained"
            color="primary"
          >
            Remover todos
          </Button>
        </>
      ) : (
        <Button
          onClick={() => dispatch(addToCartThunk(product))}
          variant="contained"
          color="secondary"
        >
          Colocar na bolsa
        </Button>
      )}
    </Container>
  );
}

export default Card;
