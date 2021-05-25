import {useSelector} from 'react-redux'
import Header from '../../components/Header';
import Title from '../../components/Title';
import CardContainer from '../../components/CardContainer';
import Card from '../../components/Card';

function Home() {
    const {products} = useSelector(store => store)
    return(
        <div>
            <Header isHome/>
            <Title>Produtos</Title>
            <CardContainer>
                {products.map(product => <li key={product.id}><Card product={product}/></li>)}
            </CardContainer>
        </div>
    )
}

export default Home;