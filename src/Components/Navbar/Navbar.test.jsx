import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

describe("Condicionais da navbar", () => {
    test("Exibição inicial de teste da navbar sem logar", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>);

        const btnLogin = screen.getByText("Login");

        expect(btnLogin).toBeInTheDocument();
    })
})