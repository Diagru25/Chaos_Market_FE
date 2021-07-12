import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const SearchInput = ({ value, onChange, onSearch }) => {
    return (
        <div>
            <InputGroup>
                <InputGroupAddon addonType='prepend'>
                </InputGroupAddon>
                <Input
                    value={value}
                    onChange={onChange}
                    onKeyDown={e => e.key === 'Enter' ? onSearch() : {}}
                    placeholder='search'
                    style={{borderRadius: '3px'}}
                />
            </InputGroup>
        </div>
    )
}

SearchInput.defaultProps = {
    onChange: () => { },
    onSearch: () => { }
}

export default SearchInput;