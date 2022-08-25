import Menu from './Menu';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import renderer from 'react-test-renderer';

const todos = [
    { id: 1, body: 'Next, we need to import the reducer function from the counter slice and add it to our store', isCompleted: false },
    { id: 2, body: 'Creating a slice requires a string name to identify the slice', isCompleted: true },
    { id: 3, body: 'Provide the Redux Store to React', isCompleted: false },
];

const isFilteredBy = 'All';

beforeEach(() => {
    render(
        <Provider store={ store }>
            <Menu todos={ todos } isFilteredBy={ isFilteredBy } />
        </Provider>
    )
})

describe('testing the component "Menu"', () => {
    it('renders "Menu"', () => {
        const menu = screen.getByRole('navigation');

        expect(menu).toBeInTheDocument();
    });
    ['2 items left', 'All', 'Active', 'Completed', 'Clear completed'].forEach(item => {
        it(`renders menu item "${item}"`, () => {
            const text = screen.getByText(item);

            expect(text).toBeInTheDocument();
        })
    });
    it(`renders border around menu item "All"`, () => {
        const text = screen.getByText('All');

        expect(text).toHaveClass('active');
    });
    it('matches to snapshot', () => {
        const container = renderer.create(<Provider store={ store }><Menu todos={ todos } isFilteredBy={ isFilteredBy } /></Provider>).toJSON();

        expect(container).toMatchSnapshot()
    });
})