import styled from "styled-components";

const Button = ({ children, onClick, type, variant, color }) => {

    return (
        <FormButton 
        type={type} 
        variant={variant} 
        color={color}
        onClick={onClick}
        >
            {children}
        </FormButton>
    );
};

Button.defaultProps = {
    type: 'primary',
    variant: 'fill',
    onClick: () => {}
}

const renderColor = (textInput, color) => {
    if (color)
        return color;

    switch (textInput) {
        case 'primary':
            return '#1875ed';
        case 'danger':
            return '#ff4d4f';
        case 'success':
            return '#198754';
        case 'warning':
            return '#ffc107'
        default: return '#1875ed'
    }
}

const FormButton = styled.button`
    margin: 0;
    padding: 5px 15px;
    outline: none;
    border-radius: 4px;
    color: ${props => {
        if (props.variant === 'outline') {
            return renderColor(props.type, props.color);
        }

        return '#fff'
    }};
    border: 1px solid ${(props) => {
        return renderColor(props.type, props.color);
    }};
    background-color: ${(props) => {
        if (props.variant === 'outline')
            return '#fff'

        return renderColor(props.type, props.color);
    }};

    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

export default Button;



