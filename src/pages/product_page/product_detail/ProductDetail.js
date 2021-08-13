import productActions from '@src/redux/client/product/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Detail from './components/Detail';

import GeneralInformation from './components/GeneralInformation';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const { currentProduct } = useSelector((state) => state.productReducer);

    const { productId } = useParams();

    useEffect(() => {
        if (productId)
            dispatch(productActions.actions.getProductById(productId));
    }, [dispatch, productId]);

    return (
        <Wrapper>
            <GeneralInformation product={currentProduct}/>
            <Detail properties={currentProduct.properties || []} description={currentProduct.description || ''}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 20px;
    background: #f5f5f5;
    padding: 1% 0;
    width: 100%;
`;



export default ProductDetail;
