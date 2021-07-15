import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input/Input';

import globalActions from '../../redux/global/actions';

const HomePage = () => {
    const dispatch = useDispatch();

    const categories = useSelector(state => state.globalReducer.categories);

    console.log(categories.items);

    const handleOnChange = (e) => {
        console.log(e.target.value);
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter')
            console.log('enter');
    }

    return (
        <div style={{padding: '50px'}}>
            <Input placeholder='Name' onChange={handleOnChange} onKeyDown={handleKeyDown}/>

            <button onClick={() => dispatch(globalActions.actions.getListCategories())}>Call api demo</button>
        </div>
    );
};

export default HomePage;