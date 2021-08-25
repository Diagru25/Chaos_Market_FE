import React, { useState } from 'react';
import RatingStarDisplay from '@src/components/packages/base/RatingStarDisplay';
import Button from '@src/components/packages/base/Button';
import { FaTruck, FaShippingFast } from 'react-icons/fa';
import {
    IoRemove,
    IoAdd,
    IoCart,
    IoShieldCheckmarkSharp,
    IoArrowUndoCircle
} from 'react-icons/io5';
import styled from 'styled-components';
import { numberWithCommas } from '@src/components/packages/core/helpers/number';
import { useDispatch } from 'react-redux';
import globalActions from '@src/redux/global/actions';
import useToast from '@src/components/packages/core/hooks/useToast';

const GeneralInformation = ({ product }) => {

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const {addToast} = useToast();

    const handleChangeQuantity = (n) => {
        if(!Number(n)) {
            addToast({
                type: 'error',
                title: 'Quantity must be a number'
            });
            return;
        }
        
        if(n < 1) {
            addToast({
                type: 'error',
                title: 'Quantity must be more than 1'
            });
            return;
        }

        setQuantity(n);
            
    }
    const handleAddToCart = () => {
        dispatch(globalActions.actions.addToCart(product._id, quantity));
    }
    return (
        <GeneralWrapper>
            <ImageContainer>
                <ImageProduct
                    src={
                        product.image
                            ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${product.image}`
                            : ''
                    }
                    alt="Product Image"
                />
                <ImageList>
                    <ImageBlock>
                        <ImageItems
                            src={
                                product.image
                                    ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${product.image}`
                                    : ''
                            }
                            alt="Product Image"
                        />
                    </ImageBlock>

                    <ImageBlock>
                        <ImageItems
                            src={
                                product.image
                                    ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${product.image}`
                                    : ''
                            }
                            alt="Product Image"
                        />
                    </ImageBlock>
                    <ImageBlock>
                        <ImageItems
                            src={
                                product.image
                                    ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${product.image}`
                                    : ''
                            }
                            alt="Product Image"
                        />
                    </ImageBlock>
                    <ImageBlock>
                        <ImageItems
                            src={
                                product.image
                                    ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${product.image}`
                                    : ''
                            }
                            alt="Product Image"
                        />
                    </ImageBlock>
                    <ImageBlock>
                        <ImageItems
                            src={
                                product.image
                                    ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${product.image}`
                                    : ''
                            }
                            alt="Product Image"
                        />
                    </ImageBlock>
                </ImageList>
            </ImageContainer>
            <InfoContainer>
                <InfoWrapper>
                    <Title>
                        {product.name} - {product.status}
                    </Title>
                    <SubInfo>
                        <RatingBox>
                            <div>{product.rating}</div>
                            <RatingStarDisplay
                                score={product.rating}
                                fontSize="16px"
                            />
                        </RatingBox>
                        <SalesBox>
                            <div>{product.sold}</div>
                            <div>Sales</div>
                        </SalesBox>
                    </SubInfo>
                    <PriceBox>
                        <RealPrice
                            discount={
                                product.discount
                                    ? product.discount
                                    : undefined
                            }
                        >
                            ${numberWithCommas(product.price)}
                        </RealPrice>
                        <DiscountPrice>
                            <Price>${numberWithCommas(product.price - product.price * product.discount / 100)}</Price>
                            <DiscountTag>{product.discount}% discount</DiscountTag>
                        </DiscountPrice>
                    </PriceBox>
                    <PromotionBox>
                        <Label>Promotion</Label>
                        <PromotionTag>Buy 10 & discount 5%</PromotionTag>
                    </PromotionBox>
                    <DeliveryBox>
                        <Label>Delivery</Label>
                        <DeliveryContent>
                            <FaTruck />
                            <AddressBox>
                                <Label>Delivery to</Label>
                                Your address
                            </AddressBox>
                        </DeliveryContent>
                    </DeliveryBox>
                    <QuantityBox>
                        <Label>Quantity</Label>
                        <QuantityContent>
                            <IconButton>
                                <IoRemove />
                            </IconButton>
                            <InputNumber
                                value={quantity}
                                onChange={(e) => handleChangeQuantity(e.target.value)}
                            />
                            <IconButton>
                                <IoAdd />
                            </IconButton>
                        </QuantityContent>
                    </QuantityBox>
                    <BuyBox>
                        <ButtonAddToCard
                            onClick={handleAddToCart}
                        >
                            <IoCart />
                            Add to cart
                        </ButtonAddToCard>
                        <ButtonBuyNow
                            onClick={handleAddToCart}
                        >
                        Buy Now</ButtonBuyNow>
                    </BuyBox>
                </InfoWrapper>
                <AdsBox>
                    <AdsItems>
                        <IoArrowUndoCircle />
                        7 days free returns
                    </AdsItems>
                    <AdsItems>
                        <IoShieldCheckmarkSharp />
                        100% genuine product
                    </AdsItems>
                    <AdsItems>
                        <FaShippingFast />
                        Free shipping
                    </AdsItems>
                </AdsBox>
            </InfoContainer>
        </GeneralWrapper>
    )
}

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
    justify-content: space-between;
    padding: 20px 35px 0px 20px;
    width: 60%;
    max-width: 720px;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
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

const DeliveryBox = styled.div`
    display: flex;
    gap: 20px;
`;

const DeliveryContent = styled.div`
    display: flex;
    gap: 5px;
`;

const AddressBox = styled.div`
    display: flex;
    gap: 10px;
`;

const Label = styled.div`
    min-width: 80px;
    color: #757575;
`;

const QuantityBox = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 20px;
`;

const QuantityContent = styled.div`
    display: flex;
`;

const IconButton = styled.button`
    outline: none;
    background: #fff;
    color: #999999;
    border: 1px solid #e8e8e8;

    display: flex;

    padding: 5px 1px;

    &:hover {
        cursor: pointer;
        color: black;
    };
`;

const InputNumber = styled.input`
    outline: none;
    border: 1px solid #e8e8e8;
    color:  black;
    text-align: center;

    width: 50px;
`;
const BuyBox = styled.div`
    display: flex;
    gap: 15px;
`;
const ButtonAddToCard = styled(Button)`
    border: 1px solid #d0011b;
    border-radius: 3px;
    background: #fbebed;
    color: #d0011b;

    padding: 15px;
    width: 180px;
`;
const ButtonBuyNow = styled(Button)`
    border: 1px solid #d0011b;
    border-radius: 3px;
    background: #d0011b;
    color: #fff;

    width: 180px;
`;

const AdsBox = styled.div`
    display: flex;
    gap: 20px;

    padding: 25px;
    margin-top: 20px;
    border-top: 1px solid #e8e8e8;
    justify-content: space-between;
`;

const AdsItems = styled.div`
    display: flex;
    color: black;
    font-size: 16px;
    max-width: 200px;
    align-items: center;

    svg {
        color: #d0011b;
    }
`;

export default GeneralInformation;