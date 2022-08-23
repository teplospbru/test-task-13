import './Todos.scss';
import { useDispatch } from 'react-redux';
import { setCompleted } from '../../redux/todoSlice';
import { useEffect, useState, useRef } from 'react';

const styles = {
    textDecoration: 'line-through',
    fontStyle: 'italic',
    color: '#d1d1d1'
}

const Todos = ({ todos }) => {
    const dispatch = useDispatch();
    const div = useRef();
    const [height, setHeight] = useState('');

    useEffect(() => {
        setHeight(div.current.getBoundingClientRect().height + 'px');
    }, [div]);

    const checkboxHandler = (id) => {
        dispatch(setCompleted(id));
    }
    
    return (
        <div className='todos' ref={ div } style={{ height }}>
            {
                todos.map(({ id, body, isCompleted }) => (
                    <label className="label" htmlFor={ id } key={ id + '_1' }>
                        <input 
                            type="checkbox" 
                            name="policy" id={ id } 
                            checked={ isCompleted } 
                            onChange={ () => checkboxHandler(id) }
                            
                        ></input>
                        <span style={ isCompleted ? styles : null }>{ body }</span>
                        <div className="checkbox__unchecked">
                            <svg>
                                <use xlinkHref="#unchecked"></use>
                            </svg>
                        </div>
                        <div className="checkbox__checked">
                            <svg>
                                <use xlinkHref="#checked"></use>
                            </svg>
                        </div>
                    </label>
                ))
            }
        </div>
    )
};

export default Todos;