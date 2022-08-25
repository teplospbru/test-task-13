import './Input.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../redux/todoSlice';

const Input = () => {
    const [ value, setValue ] = useState('');
    const [ isFocused, setFocused ] = useState(false);
    const [ isWarning, setWarning ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isWarning) {
            setTimeout(() => {
                setWarning(false);
            }, 2000);
        }
    }, [isWarning])

    const inputHandler = e => {
        setValue(e.target.value);
        if(e.target.value.length >= 3) {
            setWarning(false);
        }
    }

    const focusHandler = e => {
        setFocused(true);
    }

    const blurHandler = e => {
        setFocused(false);
    }

    const pressEnterHandler = e => {
        if(e.key === 'Enter' && isFocused && value.length < 3) {
            setWarning(true);
        }
        if(e.key === 'Enter' && isFocused && value.length >= 3) {
            setWarning(false);
            dispatch(createTodo(value));
            setValue('');
        }
    }

    const clickHandler = () => {
        if(value.length < 3) {
            setWarning(true);
        }
        if(value.length >= 3) {
            setWarning(false);
            dispatch(createTodo(value));
            setValue('');
        }
    }

    return (
        <div className='line-1'>
            {
                isWarning 
                    ? (
                        <div data-testid='warning'>
                            <svg>
                                <use xlinkHref="#warning"></use>
                            </svg>
                        </div> )
                    : (
                        <div style={{ cursor: 'pointer' }} onClick={ clickHandler } data-testid='btn'>
                            <svg>
                                <use xlinkHref="#chevron-1"></use>
                            </svg>
                        </div> )
            }
            <input 
                placeholder={ isWarning ? 'Enter 3 characters at least!' : 'What needs to be done?' } 
                value={ value }
                onChange={ inputHandler } 
                onKeyPress = { pressEnterHandler } 
                onFocus={ focusHandler }
                onBlur={ blurHandler }
            ></input>
        </div>
    )
};

export default Input;