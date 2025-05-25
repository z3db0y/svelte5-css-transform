import './style.css';

import { mount } from 'svelte';
import App from './App.svelte';

window.onload = () => mount(App, { target: document.body });
console.log((window as any).idontexist ?? 'window.idontexist doesn\'t exist');