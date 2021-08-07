import productActions from '@src/redux/client/product/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import RatingStarDisplay from '@src/components/packages/base/RatingStarDisplay';

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
            <GeneralWrapper>
                <ImageContainer>
                    <ImageProduct
                        src={
                            currentProduct.image
                                ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${currentProduct.image}`
                                : ''
                        }
                        alt="Product Image"
                    />
                    <ImageList>
                        <ImageBlock>
                            <ImageItems
                                src={
                                    currentProduct.image
                                        ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${currentProduct.image}`
                                        : ''
                                }
                                alt="Product Image"
                            />
                        </ImageBlock>

                        <ImageBlock>
                            <ImageItems
                                src={
                                    currentProduct.image
                                        ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${currentProduct.image}`
                                        : ''
                                }
                                alt="Product Image"
                            />
                        </ImageBlock>
                        <ImageBlock>
                            <ImageItems
                                src={
                                    currentProduct.image
                                        ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${currentProduct.image}`
                                        : ''
                                }
                                alt="Product Image"
                            />
                        </ImageBlock>
                        <ImageBlock>
                            <ImageItems
                                src={
                                    currentProduct.image
                                        ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${currentProduct.image}`
                                        : ''
                                }
                                alt="Product Image"
                            />
                        </ImageBlock>
                        <ImageBlock>
                            <ImageItems
                                src={
                                    currentProduct.image
                                        ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${currentProduct.image}`
                                        : ''
                                }
                                alt="Product Image"
                            />
                        </ImageBlock>
                    </ImageList>
                </ImageContainer>
                <InfoContainer>
                    <Title>
                        {currentProduct.name} - {currentProduct.status}
                    </Title>
                    <SubInfo>
                        <RatingBox>
                            <div>{currentProduct.rating}</div>
                            <RatingStarDisplay
                                score={currentProduct.rating}
                                fontSize="16px"
                            />
                        </RatingBox>
                        <SalesBox>
                            <div>{currentProduct.sold}</div>
                            <div>Sales</div>
                        </SalesBox>
                    </SubInfo>
                    <PriceBox>
                        <RealPrice
                            discount={
                                currentProduct.discount
                                    ? currentProduct.discount
                                    : undefined
                            }
                        >
                            ${currentProduct.price}
                        </RealPrice>
                        <DiscountPrice>
                            <Price>${currentProduct.price}</Price>
                            <DiscountTag>47% discount</DiscountTag>
                        </DiscountPrice>
                    </PriceBox>
                    <PromotionBox>
                        <Label>Promotion</Label>
                        <PromotionTag>Buy 10 & discount 5%</PromotionTag>
                    </PromotionBox>
                </InfoContainer>
            </GeneralWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background: #f5f5f5;
    padding: 1% 0;
    width: 100%;
`;

const GeneralWrapper = styled.div`
    display: flex;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    background: #fff;
    width: 1200px;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    max-width: 450px;
    gap: 5px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 35px 0px 20px;
    gap: 15px;
    width: 60%;
    max-width: 720px;
`;

const ImageProduct = styled.img`
    width: 100%;
    max-height: 450px;
`;

const ImageList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`;

const ImageBlock = styled.div`
    width: 100%;
    max-width: 82px;
`;

const ImageItems = styled.img`
    width: 100%;
    max-height: 82px;
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

const SubInfo = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    span {
        font-family: 'Helvetica Neue', sans-serif;
        line-height: 25px;
    }
`;

const RatingBox = styled.div`
    padding: 0px 10px 0px 0px;
    display: flex;
    align-items: flex-end;

    div:first-child {
        padding-right: 5px;
        font-size: 16px;
    }
`;

const SalesBox = styled.div`
    padding: 0px 10px;
    display: flex;
    align-items: flex-end;

    border-left: 1px solid #767676;

    div:first-child {
        font-size: 16px;
    }
    div:last-child {
        padding: 0px 5px;
        color: #767676;
    }
`;

const PriceBox = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 20px;
    background-color: #fafafa;
`;

const RealPrice = styled.div`
    font-size: 16px;
    text-decoration: line-through;
    margin-right: 10px;
    color: #929292;
`;

const DiscountPrice = styled.div`
    display: flex;
    align-items: center;
`;

const Price = styled.div`
    font-size: 30px;
    color: #ee4d2d;
`;

const DiscountTag = styled.div`
    font-size: 12px;
    background: #ee4d2d;
    margin-left: 15px;
    color: #fff;
    padding: 3px;
    border-radius: 2px;
`;

const PromotionBox = styled.div`
    display: flex;
    align-items: center;
    color: #757575;
    gap: 20px;
`;

const PromotionTag = styled.div`
    border: 1px solid #ee4d2d;
    border-radius: 3px;
    padding: 5px;
    color: #ee4d2d;
`;

const Label = styled.div``;

export default ProductDetail;
