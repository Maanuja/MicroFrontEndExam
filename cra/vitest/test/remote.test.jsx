import React from 'react';
import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import Message from '../../remote/src/message';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

test('renders Remote Msg', () => {
    const rendered = render(<Message msg={"hey you"}/>);
    const h1 = rendered.container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1.textContent).toContain('hey you');
});