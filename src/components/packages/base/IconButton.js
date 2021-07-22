import styled, { keyframes } from 'styled-components';
import { AiOutlineLoading } from 'react-icons/ai';

const IconButton = ({
    children,
    onClick,
    icon,
    type,
    color,
    loading,
    position,
}) => {
    const renderIcon = (
        <Icon>
            {loading ? (
                <Rotate>
                    <AiOutlineLoading />
                </Rotate>
            ) : (
                icon
            )}
        </Icon>
    );

    return (
        <Button
            type={type}
            color={color}
            loading={loading}
            onClick={loading ? () => {} : onClick}
        >
            {position === 'before' && renderIcon}
            <Text>{children}</Text>
            {position === 'after' && renderIcon}
        </Button>
    );
};

IconButton.defaultProps = {
    type: 'primary',
    position: 'before',
    loading: false,
    onclick: () => {},
};

const renderColor = (textInput, color) => {
    if (color) return color;

    switch (textInput) {
        case 'primary':
            return '#1875ed';
        case 'danger':
            return '#ff4d4f';
        case 'success':
            return '#198754';
        case 'warning':
            return '#ffc107';
        default:
            return '#1875ed';
    }
};

const Button = styled.button`
    display: inline-flex;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 4px;

    margin: 0;
    padding: 0;
    overflow: hidden;

    color: #fff;
    cursor: ${(props) => (props.loading ? 'default' : 'pointer')};
    background: ${(props) => {
        return renderColor(props.type, props.color);
    }};

    &:hover {
        opacity: 0.9;
    }
`;

const Text = styled.span`
    display: inline-flex;
    align-items: center;
    padding: 10px 15px;
    height: 100%;
`;

const Icon = styled.span`
    display: inline-flex;
    align-items: center;
    padding: 10px 15px;
    height: 100%;
    font-size: 1em;
    background: rgba(0, 0, 0, 0.08);
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    font-size: 1em;
    animation: ${rotate} 1s linear infinite;
`;

export default IconButton;
