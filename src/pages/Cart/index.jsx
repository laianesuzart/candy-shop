import { useSelector } from "react-redux";

import { motion } from "framer-motion";
import { Grid } from "@material-ui/core";
import { CheckOut, EmptyCart } from "./style";
import Header from "../../components/Header";
import Title from "../../components/Title";
import CardContainer from "../../components/CardContainer";
import Card from "../../components/Card";

function Cart({total, setTotal}) {
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
          <Grid container>
            <Grid item xs={12} sm={10}>
              <CardContainer>
                {cart.map((product) => (
                  <li key={product.id}>
                    <Card product={product} setTotal={setTotal} isRemovable/>
                  </li>
                ))}
              </CardContainer>
            </Grid>
            <Grid item xs={12} sm={2}>
              <CheckOut>
                <p>Total</p>
                <p>
                  {
                    total.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              </CheckOut>
            </Grid>
          </Grid>
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
