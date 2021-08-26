import { numberWithCommas } from '@src/components/packages/core/helpers/number';
import globalActions from '@src/redux/global/actions';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IoRemove, IoAdd, IoTrashOutline } from 'react-icons/io5';
import CartNull from './components/CartNull';
import useToast from '@src/components/packages/core/hooks/useToast';
import Button from '@src/components/packages/base/Button';


const CartPage = () => {

    const { addToast } = useToast();
    const dispatch = useDispatch();
    const { items, isGetSyncCartPending, prePaymentProductList } = useSelector(state => state.globalReducer.carts);

    useEffect(() => {
        dispatch(globalActions.actions.getSyncCart());
    }, [dispatch]);

    const handleChangeQuantity = (cartItemId, quantity) => {
        if (quantity <= 0) {
            addToast({
                type: 'error',
                title: 'quantity can not less than 0'
            });
            return;
        }

        if (Number(quantity))
            dispatch(globalActions.actions.updateQuantityCartItem(cartItemId, Number(quantity)));
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    }

    const handleBlur = (e, cartItemId) => {
        handleChangeQuantity(cartItemId, e.target.value);
    }

    const handleOnChange = (e, cartItemId) => {
        if (Number(e.target.value))
            dispatch(globalActions.actions.updateQuantityCartItemReducer(cartItemId, Number(e.target.value)));
    }

    const handleDelete = (cartItemId) => {
        dispatch(globalActions.actions.deleteCartItem(cartItemId))
    }

    const handleCheckClick = (e, item) => {
        const checked = e.target.checked;
        if (checked)
            dispatch(globalActions.actions.addCartItemToPrePayment(item));
        else
            dispatch(globalActions.actions.removeCartItemToPrePayment(item._id));
    }

    const calAmount = (array) => {
        let amount = 0;

        array.forEach(item => amount += (item.product.price - item.product.price * item.product.discount / 100)*item.quantity);

        return numberWithCommas(amount);
    }

    const calTotalProduct = (array) => {
        let total = 0;

        array.forEach(item => total += item.quantity);

        return numberWithCommas(total);
    }

    const renderCartItems = (item) => {
        const product = item.product;
        return (
            <tr key={item._id}>
                <td><input type='checkbox' onClick={(e) => handleCheckClick(e, item)} /></td>
                <td>
                    <ProductInfoBox>
                        <Image src={
                            product.image
                                ? `${process.env.REACT_APP_BASE_URL}/v1/resources/images/${product.image}`
                                : ''
                        }
                            alt="Product Image"
                        />
                        <NameProduct>
                            {product.name.toUpperCase()}
                            <Description>
                                {product.name.toLowerCase()}
                            </Description>
                        </NameProduct>
                    </ProductInfoBox>
                </td>
                <td>
                    <PriceBox>
                        {
                            product.discount
                                ?
                                <Price>
                                    $
                                    {numberWithCommas(product.price)}
                                </Price>
                                :
                                null
                        }
                        <RealPrice>
                            $
                            {numberWithCommas(product.price - product.price * product.discount / 100)}
                        </RealPrice>
                    </PriceBox>

                </td>
                <td>
                    <QuantityContent>
                        <IconButton onClick={() => handleChangeQuantity(item._id, item.quantity - 1)}>
                            <IoRemove />
                        </IconButton>
                        <InputNumber
                            value={item.quantity}
                            onChange={(e) => handleOnChange(e, item._id)}
                            onKeyDown={handleKeyDown}
                            onBlur={(e) => handleBlur(e, item._id)}
                        />
                        <IconButton onClick={() => handleChangeQuantity(item._id, item.quantity + 1)}>
                            <IoAdd />
                        </IconButton>
                    </QuantityContent>
                </td>
                <td>
                    $
                    {numberWithCommas((product.price - product.price * product.discount / 100) * item.quantity)}
                </td>
                <td>
                    <DeleteButton onClick={() => handleDelete(item._id)} />
                </td>
            </tr>
        )
    }

    return (
        <Wrapper>
            <TopCartWrapper>
                <LogoBox>
                    <Logo src={require('../../assets/images/logo.svg').default} />
                    <Name>CHAOS MARKET | CART</Name>
                </LogoBox>
            </TopCartWrapper>
            <Container>
                {
                    isGetSyncCartPending
                        ?
                        <div>loading</div>
                        :
                        (!items || items.length < 1)
                            ?
                            <CartNull />
                            :
                            <TableWrapper>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td><input type='checkbox' /></td>
                                            <td>Product</td>
                                            <td>Price</td>
                                            <td>Quantity</td>
                                            <td>Amount</td>
                                            <td>Actions</td>
                                        </tr>
                                        {items.map((item) => renderCartItems(item))}
                                    </tbody>
                                </Table>
                                <PrePaymentBox>
                                    <TotalProduct>
                                        You choose (
                                        {calTotalProduct(prePaymentProductList)}
                                        ) product
                                    </TotalProduct>
                                    <PaymentBox>
                                        <Amount>
                                            $
                                            {
                                                calAmount(prePaymentProductList)
                                            }
                                        </Amount>
                                        <PaymentButton>
                                            PAYMENT NOW
                                        </PaymentButton>
                                    </PaymentBox>
                                </PrePaymentBox>
                            </TableWrapper>

                }
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;
const TopCartWrapper = styled.div`
    background: #fff;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #00000017;

    padding: 0px 100px;
`;
const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const LogoBox = styled.div`
    display: inline-flex;
    align-items: center;
`;
const Logo = styled.img`
    height: 40px;
    width: 40px;
    min-width: 40px;
    cursor: pointer;
`;
const Name = styled.span`
    font-size: 20px;
    font-weight: 600;
    padding: 0px 10px;
`;

const Table = styled.table`
    border-spacing: 0;
    tbody {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    tr {
        background: #fff;
        display: flex;
        gap: 20px;

        td:nth-child(1) {
        }
        td:nth-child(2) {
            width: 40%;
        }
        td:nth-child(3) {
            width: 10%;
        }
        td:nth-child(4) {
            width: 10%;
        }
        td:nth-child(5) {
            width: 10%;
        }
        td:nth-child(6) {
            width: 10%;
        }
    }

    td {
        padding: 20px 10px;
        align-items: center;
        display: flex;
    }
`;

const ProductInfoBox = styled.div`
    display: flex;
    gap: 10px;
`;

const Image = styled.img`
    height: 80px;
    width: 80px;
    min-width: 80px;
    cursor: pointer;
`;

const NameProduct = styled.div`
    font-size: 16px;
`;

const Description = styled.div`
    color: #888888;
    font-size: 12px;
    padding-top: 5px;
`;

const PriceBox = styled.div`
    display: inline-flex;
    gap: 10px;
`;

const Price = styled.div`
    color: #888888;
    text-decoration: line-through;
`;

const RealPrice = styled.div`
    
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
const DeleteButton = styled(IoTrashOutline)`
    padding: 10px;
    color: red;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
`;

const PrePaymentBox = styled.div`
    background: #fff;
    padding: 15px 50px;
    display: flex;
    justify-content: space-between;
`;
const TotalProduct = styled.div`
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    line-height: 1.5;
    
`;
const PaymentBox = styled.div`
    display: flex;
    gap: 15px;
`;
const Amount = styled.div`
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    color: #ee4d2d;
`;
const PaymentButton = styled(Button)`
    background: #ee4d2d;
    border: 1px solid #ee4d2d;
    padding: 15px 25px;
`;



export default CartPage;