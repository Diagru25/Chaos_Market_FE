import styled from "styled-components";

const Input = ({ placeholder, onChange, onKeyDown, onClick, icon, type, position }) => {
    
    const renderIcon = icon
        ?
        <ButtonIcon onClick={onClick} position={position}>
            {icon}
        </ButtonIcon>
        :
        null;
    
    return (
        <FormWrapper>
            {position==='before' && renderIcon}
            <FormInput
                type={type}
                placeholder={placeholder ? placeholder : ''}
                onChange={onChange}
                onKeyDown={onKeyDown}

                position={position}
            >
            </FormInput>
            {position==='after' && renderIcon}
        </FormWrapper>

    )
}

Input.defaultProps = {
    type: 'text',
    position: 'after',
    onChange: () => {},
    onSearch: () => {}
}

const FormWrapper = styled.div`
    width: 100%;
    display: inline-flex;

`
const FormInput = styled.input`
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #eee;
    border-radius: ${(props) => props.position === 'after' ? '4px 0 0 4px' : '0 4px 4px 0'};
    outline: none;

    flex-grow: 1;

    &:focus {
        border-color: #00a3ff;
    }
`

const ButtonIcon = styled.button`
    display: inline-flex;
    align-items: center;
    padding: 0px 15px;
    cursor: pointer;
    border: 1px solid #00a3ff;
    border-radius: ${(props) => props.position === 'before' ? '4px 0 0 4px' : '0 4px 4px 0'};
    outline: none;
    background: #00a3ff;
    color: #fff;
    /* font-size: 1.2rem; */
`

export default Input;