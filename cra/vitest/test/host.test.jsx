import React from 'react';
import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import Message from '../../host/src/message';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

test('renders Host Msg', () => {
    const rendered = render(<Message msg={"hey you from the host"}/>);
    const h1 = rendered.container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1.textContent).toContain('hey you from the host');
});