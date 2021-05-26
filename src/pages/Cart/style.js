import styled from 'styled-components';
import bagImage from '../../assets/bag.svg';

export const EmptyCart = styled.div`
    height: 65vh;
    width: 80vw;
    margin: 0 auto;
    background-image: url(${bagImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    p {
        font-size: 3rem;
        text-align: center;
        margin-top: 60px;
        color: #c13be2d1;
    }
`;