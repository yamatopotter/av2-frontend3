import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';

test("Renderização da página de NotFound", ()=>{
   render(<NotFound />);
   
   const image = screen.getByRole("img");
   const message = screen.getByText("Ops! a rota não foi encontrada");

   expect(image).toBeInTheDocument();
   expect(message).toBeInTheDocument();
});