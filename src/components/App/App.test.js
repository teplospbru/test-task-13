import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

beforeEach(() => {
    render(
        <Provider store={ store }>
            <App />
        </Provider>
    )
})

describe('testing the component "App"', () => {
    it('renders "App"', () => {
        const h1 = screen.getByRole('heading');

        expect(h1).toHaveTextContent('todos');
    });
    it('adds todo item on change input value and press "Enter"', () => {
        const input = screen.getByPlaceholderText('What needs to be done?');

        expect(screen.getAllByTestId('todo').length).toBe(3);

        fireEvent.change(input, { target: { value: '1 more item' } });
        fireEvent.focus(input);
        fireEvent.keyPress(input, { key: 'Enter', charCode: 13 });

        expect(screen.getAllByTestId('todo').length).toBe(4);
        expect(screen.getByText('1 more item')).toBeInTheDocument();
    });
    it('toggles todos list to "Active"', () => {
        const text = screen.getByText('Active');

        expect(screen.getAllByTestId('todo').length).toBe(4);

        fireEvent.click(text);

        expect(screen.getAllByTestId('todo').length).toBe(3);
    });
    it('toggles todos list to "Comleted"', () => {
        const text = screen.getByText('Completed');

        expect(screen.getAllByTestId('todo').length).toBe(4);

        fireEvent.click(text);

        expect(screen.getAllByTestId('todo').length).toBe(1);
    });
    it('removes completed todos by click on "Clear comleted"', () => {
      const btn = screen.getByText('All');
      const clear = screen.getByText('Clear completed');

      expect(screen.getAllByTestId('todo').length).toBe(4);

      fireEvent.click(clear);

      expect(screen.getAllByTestId('todo').length).toBe(3);
    });
});