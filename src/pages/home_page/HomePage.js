import FocusInput from '@base/FocusInput';
import Input from '@base/Input';
import Button from '@base/Button';
import IconButton from '@base/IconButton';
import SearchInput from '@base/SearchInput';
import Link from '@base/Link';

import { IoCloudDownloadOutline, IoSearch } from 'react-icons/io5';
import { useState } from 'react';

import { clientPaths } from '@src/routes/routes.constant';
import Banner from './components/Banner';
import Section from '@src/components/packages/base/Section';

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
    };

    return (
        <>
            <Banner />
            <Section
                title="Trending"
                subTitle="Check the hottest website designs of the week. These rising
                stars are worth your attention."
            >
                <FocusInput
                    placeholder="username"
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}
                />

                <Input type="password" icon={<IoSearch />} position="before" />

                <Button type="success" variant="outline" onClick={handleClick}>
                    loading: {loading.toString()}
                </Button>

                <IconButton
                    type="danger"
                    icon={<IoCloudDownloadOutline />}
                    position="after"
                    loading={loading}
                    onClick={() => console.log('click')}
                >
                    Download
                </IconButton>

                <Link to={clientPaths.CATEGORIES}>category</Link>

                <Link to={clientPaths.PRODUCT_DETAIL + '/123'}>
                    product detail
                </Link>

                <SearchInput
                    onChange={(e) => console.log(e.target.value)}
                ></SearchInput>
            </Section>
        </>
    );
};

export default HomePage;
