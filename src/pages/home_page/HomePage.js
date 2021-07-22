import FocusInput from '@base/FocusInput';
import Input from '@base/Input';
import Button from '@base/Button';
import IconButton from '@base/IconButton';
import SearchInput from '@base/SearchInput';
import Link from '@base/Link';

import { IoCloudDownloadOutline, IoSearch } from 'react-icons/io5'
import { useState } from 'react';

import { clientPaths } from '@src/routes/routes.constant';
import Banner from './components/Banner';

const HomePage = () => {
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

    return (
        <>
            <Banner />
            <div style={{ padding: '50px' }}>
                <FocusInput
                    placeholder="username"
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}
                />
                <br />
                <br />
                <Input type='password' icon={<IoSearch />} position='before' />
                <br />
                <br />
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
                <Link to={clientPaths.CATEGORIES}>category</Link>
                <br />
                <Link to={clientPaths.PRODUCT_DETAIL + '/123'}>product detail</Link>
                <br />
                <SearchInput onChange={e => console.log(e.target.value)}></SearchInput>
            </div>
        </>
    );
};

export default HomePage;
