import styled from 'styled-components';

const Button = ({ children, type, variant, color, ...rest }) => {
    return (
        <FormButton type={type} variant={variant} color={color} {...rest}>
            {children}
        </FormButton>
    );
};

Button.defaultProps = {
    variant: 'fill',
    onClick: () => { },
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
            return '#00a3ff';
    }
};

const FormButton = styled.button`
  margin: 0;
  padding: 10px 15px;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => {
        if (props.variant === 'outline') {
            return renderColor(props.type, props.color);
        }

        return '#fff';
    }};
  border: 1px solid
    ${(props) => {
        return renderColor(props.type, props.color);
    }};
  background-color: ${(props) => {
    if (props.variant === 'outline') return 'transparent';

        return renderColor(props.type, props.color);
    }};

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
