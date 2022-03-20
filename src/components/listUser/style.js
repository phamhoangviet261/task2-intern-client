import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 900px;
    /* padding: 30px 50px; */
    margin: 50px;
`;

export const TableHeader = styled.div`
    display: flex;
`;

export const TableRow = styled.div`
    display: flex;
    /* width: max-content; */
    
`;


export const TableBlock = styled.div`
    width: 300px;
    /* min-width: 300px; */
    padding: 10px 30px;
    border: 1px solid black;
`;

export const TableBlockData = styled.input`
    width: 300px;
    /* min-width: 300px; */
    padding: 10px 30px;
    border: 1px solid black;
    /* cursor: pointer; */
    &:focus{
        color: #fff;
        background-color: #123456;
        transition: all 0.2s ease;
    }
    &:hover{
        color: #fff;
        background-color: #123456;
        transition: all 0.2s ease;
    }
`;

export const Button = styled.div`
    padding: 20px;
    margin: 50px;
    width: fit-content;
    height: 25px;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    &:hover{
        color: #fff;
        background-color: #123456;
    }
    transition: all 0.2s ease;
`;
