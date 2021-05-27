import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Title from "../../components/Title";
import CardContainer from "../../components/CardContainer";
import Card from "../../components/Card";

function Home({ setTotal }) {
  const { products } = useSelector((store) => store);
  return (
    <div>
      <Header isHome />
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Produtos</Title>
        <CardContainer>
          {products.map((product) => (
            <li key={product.id}>
              <Card product={product} setTotal={setTotal} />
            </li>
          ))}
        </CardContainer>
      </motion.div>
    </div>
  );
}

export default Home;
