import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { EmptyCart } from "./style";
import Header from "../../components/Header";
import Title from "../../components/Title";
import CardContainer from "../../components/CardContainer";
import Card from "../../components/Card";

function Cart() {
  const { cart } = useSelector((store) => store);
  return (
    <div>
      <Header />
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
    </div>
  );
}

export default Cart;
