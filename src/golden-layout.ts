import { css, html } from 'lit';

import { GoldenLayout as GoldenLayoutClass, LayoutConfig } from 'golden-layout';
// @ts-ignore
import baseStyles from 'golden-layout/dist/css/goldenlayout-base.css';
// @ts-ignore
import theme from 'golden-layout/dist/css/themes/goldenlayout-light-theme.css';
import { GetContent } from './get-content';
import { BaseElement } from './base-element';

export class GoldenLayout extends BaseElement {
  _goldenLayout!: GoldenLayoutClass;

  async getRoot() {
    const children = await this.getSlottedChildren();
    for (const child of children) {
      if ((child as unknown as GetContent).getContent) {
        return (child as unknown as GetContent).getContent();
      }
    }

    throw new Error('No child found within the slot');
  }

  async firstUpdated() {
    this._goldenLayout = new GoldenLayoutClass(
      this.shadowRoot?.getElementById('golden-layout') || undefined
    );

    this._goldenLayout.registerComponentFactoryFunction(
      'html',
      (container, state) => {
        container.element.innerHTML = (state as any).html as string;
      }
    );
    const root = await this.getRoot();

    const layoutConfig: LayoutConfig = {
      root,
    };

    this._goldenLayout.loadLayout(layoutConfig);
  }

  render() {
    return html`
      <div id="golden-layout" style="flex: 1;"></div>
      <slot id="slot" style="display: none"></slot>
    `;
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex: 1;
        }
        .disabled {
          pointer-events: none;
          opacity: 0.6;
        }
      `,
      baseStyles,
      theme,
    ];
  }
}
