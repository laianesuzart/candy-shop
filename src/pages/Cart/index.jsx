import { useSelector } from "react-redux";
import { EmptyCart } from "./style";
import Header from "../../components/Header";
import Title from "../../components/Title";
import CardContainer from "../../components/CardContainer";
import Card from "../../components/Card";

function Cart() {
  const { cart } = useSelector((store) => store);
  return (
    <div>
      <Header/>
      <Title>Minha Bolsa</Title>
      {cart.length > 0 ? (
        <CardContainer>
          {cart.map((product) => (
            <li key={product.id}>
              <Card product={product} isRemovable />
            </li>
          ))}
        </CardContainer>
      ) : (
        <EmptyCart>
          <p>Sua bolsa está vazia.</p>
        </EmptyCart>
      )}
    </div>
  );
}

export default Cart;
