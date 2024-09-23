import { html, render } from 'lit';
import { $, expect } from '@wdio/globals';

import './lit-button.component';

describe('BuiLitButtonComponent', () => {
  it('should be defined', async () => {
    render(html` <bui-button></bui-button>`, document.body);

    const button = await $('bui-button').$('button');
    await expect(button).toHaveText("I'm a Lit-Button!");
  });
});
