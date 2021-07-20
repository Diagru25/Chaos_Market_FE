import FocusInput from '@base/FocusInput';
import Input from '@base/Input';
import Button from '@base/Button';
import IconButton from '@base/IconButton';
import Link from '@base/Link';

import { IoCloudDownloadOutline, IoSearch } from 'react-icons/io5'
import { useState } from 'react';

import routerLinks from '@src/constant/routes.constants';

const HomePage = () => {

    console.log('abc')

    const [loading, setLoading] = useState(false);


    const handleOnChange = (e) => {
        console.log(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') console.log('enter');
    };

    const handleClick = () => {
        setLoading(!loading);
    }

    const test = () => 'ayz'

    return (
        <div style={{ padding: '50px' }} className={['abc', test()].join('')}>
            <FocusInput
                placeholder="username"
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
            />
            <br/>
            <br/>
            <Input type='password' icon={<IoSearch/>} position='before'/>
            <br />
            <br/>
            <Button 
                type="success" 
                variant="outline"
                onClick={handleClick}
            >
                loading: {loading.toString()}
            </Button>
            <br />
            <br />
            <IconButton
                type='danger'
                icon={<IoCloudDownloadOutline />}
                position='after'
                loading={loading}
                onClick={() => console.log('click')}
            >
                Download
            </IconButton>
            <Link to={routerLinks.CATEGORIES}>this link</Link>
        </div>
    );
};

export default HomePage;
