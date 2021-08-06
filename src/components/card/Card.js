import styled from "styled-components";
import RatingStarDisplay from "../packages/base/RatingStarDisplay";
import Button from '@base/Button';
import Link from "../packages/base/Link";
import Skeleton from "../packages/base/Skeleton";

import { clientPaths } from '@src/routes/routes.constant';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "@src/redux/client/cart/actions";


const Card = ({ product }) => {

    const dispatch = useDispatch();

    const {isLoggedIn} = useSelector(state => state.authReducer);

    const history = useHistory();

    const handleAddToCart = () => {
       if(isLoggedIn) {
           dispatch(cartActions.actions.addToCart([]));
       }
       else {
           history.push('/auth/login');
       }
    }

    if (!product)
        return (
            <CardContainer style={{ width: '300px', height: '250px', paddingTop: '15px'}}>
                <Skeleton w='90%' h='30%'/>
                <BoxContent>
                    <Skeleton h='14px' />
                    <RatingBox>
                        <Skeleton w='40%' />
                    </RatingBox>

                    <InfoBox>
                        <Skeleton w='30%'/>
                        <Skeleton w='30%'/>
                    </InfoBox>

                    <ActionsBox style={{paddingTop: '15px'}}>
                        <Skeleton w='40%' h='2rem'/>
                        <Skeleton w='40%' h='2rem'/>
                    </ActionsBox>
                </BoxContent>
            </CardContainer>
        )
    else
        return (
            <CardContainer>
                <Link to={`${clientPaths.PRODUCT_DETAIL}/${product._id}`}>
                    <Image
                        src={`${process.env.REACT_APP_BASE_URL}/v1/resources/images/${product.image}`}
                        alt='Product Image'
                    />
                </Link>

                <BoxContent>
                    <Link to={`${clientPaths.PRODUCT_DETAIL}/${product._id}`}>
                        <Title>
                            {product.name} - {product.status}
                        </Title>
                    </Link>

                    <RatingBox>
                        <RatingStarDisplay score={product.rating} />
                    </RatingBox>

                    <InfoBox>
                        <SellerBox>
                            <TextAmount>{product.sold}</TextAmount>
                            <Text>Sales</Text>
                        </SellerBox>
                        <PriceBox>
                            ${product.price}
                        </PriceBox>
                    </InfoBox>

                    <ActionsBox>
                        <Link to={`${clientPaths.PRODUCT_DETAIL}/${product._id}`}>
                            <Button color='#7a929e'>Detail</Button>
                        </Link>
                        <Button onClick={handleAddToCart}>Add to card</Button>
                    </ActionsBox>
                </BoxContent>
            </CardContainer>
        )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: #fff;
    
    border-radius: 6px;
    box-shadow: 0 2px 4px #0003;
`;

const BoxContent = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 0px 20px 20px 20px;
`;

const Image = styled.img`
    width: 100%;
    max-width: 300px;
    min-width: 300px;
    text-align: center;
`;

const Title = styled.span`
    padding-top: 5px;
    font-weight: 600;
`;

const RatingBox = styled.div`

    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 15px 0px;
`;

const InfoBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const SellerBox = styled.span`
    margin-bottom: 15px;
`;

const TextAmount = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: #243238;
    padding-right: 5px;
`;

const Text = styled.span`
    color: #78909C;
`;

const PriceBox = styled.span`
    font-size: 18px;
    font-weight: 600;
`

const ActionsBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    justify-content: space-between;
`;

export default Card;