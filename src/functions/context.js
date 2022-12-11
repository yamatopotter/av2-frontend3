import { createContext } from 'react';

if(!localStorage.getItem('color')){
    let color = 'light';
    localStorage.setItem('color', color);
}

const color = localStorage.getItem('color');

export const ThemeColor = createContext(color);