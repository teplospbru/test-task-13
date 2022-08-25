import Todos from './Todos';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import renderer from 'react-test-renderer';

const TodoArr = [
    { id: 1, body: 'Next, we need to import the reducer function from the counter slice and add it to our store', isCompleted: false },
    { id: 2, body: 'Creating a slice requires a string name to identify the slice', isCompleted: true },
    { id: 3, body: 'Provide the Redux Store to React', isCompleted: false },
];

beforeEach(() => {
    render(
        <Provider store={ store }>
            <Todos todos={ TodoArr } />
        </Provider>
    )
})

describe('testing the component "Todos"', () => {
    it('renders "Todos"', () => {
        const todos = screen.getByTestId('todos');

        expect(todos).toBeInTheDocument();
    });
    it('renders 3 todo items', () => {
        const todos = screen.getAllByTestId('todo');

        expect(todos.length).toBe(3);
    });
    it('renders 1 completed and 2 uncompleted todo items', () => {
        const todos = screen.getAllByTestId('span');

        expect(todos[0]).not.toHaveStyle('text-decoration: line-through');
        expect(todos[1]).toHaveStyle('text-decoration: line-through');
        expect(todos[2]).not.toHaveStyle('text-decoration: line-through');
    });
    it('matches to snapshot', () => {
        const container = renderer.create(<Provider store={ store }><Todos todos={ TodoArr }/></Provider>).toJSON();

        expect(container).toMatchSnapshot()
    });
});