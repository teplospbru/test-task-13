import Input from './Input';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import renderer from 'react-test-renderer';

beforeEach(() => {
    render(
        <Provider store={ store }>
            <Input />
        </Provider>
    )
})

describe('testing the component "Input"', () => {
    it('renders "Input"', () => {
        const input = screen.getByPlaceholderText('What needs to be done?');

        expect(input).toBeInTheDocument();
    });
    it('shows text in input field on change input value', () => {
        const input = screen.getByPlaceholderText('What needs to be done?');

        fireEvent.change(input, { target: { value: 'er' } });
        expect(screen.getByDisplayValue('er')).toBeInTheDocument();
    });
    ['', 'e', 'er'].forEach(item => {
        it(`shows alert on change input value to "${item}" and press button (must be 3 character at least to save todo)`, () => {
            const input = screen.getByPlaceholderText('What needs to be done?');
            const btn = screen.getByTestId('btn')
    
            fireEvent.change(input, { target: { value: item } });
            fireEvent.click(btn);

            expect(screen.getByTestId('warning')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Enter 3 characters at least!')).toBeInTheDocument();
        });
    });
    ['', 'e', 'er'].forEach(item => {
        it(`shows alert on change input value to "${item}" and press "Enter" (must be 3 character at least to save todo)`, () => {
            const input = screen.getByPlaceholderText('What needs to be done?');
    
            fireEvent.change(input, { target: { value: item } });
            fireEvent.focus(input);
            fireEvent.keyPress(input, { key: 'Enter', charCode: 13 });

            expect(screen.getByTestId('warning')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Enter 3 characters at least!')).toBeInTheDocument();
        });
    });
    it('removes alert while alert is showed and input value changed from "er" to "ers"', () => {
        const input = screen.getByPlaceholderText('What needs to be done?');

        fireEvent.change(input, { target: { value: 'er' } });
        fireEvent.click(screen.getByTestId('btn'));

        expect(screen.getByTestId('warning')).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'ers' } });

        expect(screen.getByTestId('btn')).toBeInTheDocument();
    });
    it('matches to snapshot', () => {
        const container = renderer.create(<Provider store={ store }><Input /></Provider>).toJSON();

        expect(container).toMatchSnapshot()
    })
})