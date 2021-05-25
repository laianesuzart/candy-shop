import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    padding: 10px;
    
    img {
        width: 280px;
        height: 280px;
        object-fit: contain;
        background-color: #FFF;
    }

    h3 {
        font-size: 1rem;
    }

    button {
        align-self: center;
        margin-top: 8px;
    }

`;