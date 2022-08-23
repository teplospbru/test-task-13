import { useDispatch } from 'react-redux';
import { clearCompleted } from '../../redux/todoSlice';
import './Menu.scss';

const Menu = ({ isFilteredBy, setFilteredBy, todos }) => {
    const dispatch = useDispatch();

    const uncompleted = todos.filter(todo => todo.isCompleted === false);

    const clearCompletedHandler = () => {
        dispatch(clearCompleted());
    }

    return (
        <nav className='menu'>
            <span>{ uncompleted.length + ' items left' }</span>
            <div>
                <span className={ isFilteredBy === 'All' ? 'active' : null } onClick={ () => setFilteredBy('All') }>All</span>
                <span className={ isFilteredBy === 'Active' ? 'active' : null } onClick={ () => setFilteredBy('Active') }>Active</span>
                <span className={ isFilteredBy === 'Completed' ? 'active' : null } onClick={ () => setFilteredBy('Completed') }>Completed</span>
            </div>
            <span onClick={ clearCompletedHandler }>Clear completed</span>
        </nav>
    )
};

export default Menu;