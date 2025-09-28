import React from 'react';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);

export function render(component) {
    root.render(component);
}
