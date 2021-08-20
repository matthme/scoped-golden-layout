import { css, html } from 'lit';

import { GoldenLayout as GoldenLayoutClass } from 'golden-layout';

import { ContextProvider } from '@holochain-open-dev/context';

import { BaseElement } from '../utils/base-element';
import { GOLDEN_LAYOUT_CONTEXT } from '../utils/context';
import { INIT_LAYOUT_EVENT, ROOT_LOADED_EVENT } from '../utils/events';

export class GoldenLayout extends BaseElement {
  _goldenLayout = new ContextProvider(
    this,
    GOLDEN_LAYOUT_CONTEXT as unknown as never
  );

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(INIT_LAYOUT_EVENT, e => {
      e.preventDefault();
      e.stopPropagation();
      this._goldenLayout.setValue(
        new GoldenLayoutClass(
          (e as CustomEvent).detail.element as HTMLElement
        ) as unknown as never
      );
      (
        this._goldenLayout.value as GoldenLayoutClass
      ).registerComponentFactoryFunction(
        'native-html-component',
        (container, state) => {
          container.element.innerHTML = (state as any).html;
        }
      );
    });
    this.addEventListener(ROOT_LOADED_EVENT, e => {
      e.preventDefault();
      e.stopPropagation();
      (this._goldenLayout.value as GoldenLayoutClass).loadLayout({
        root: (e as any).detail.root,
        header: {
          popout: false,
        },
      });
    });
  }

  render() {
    return html` <slot></slot> `;
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex: 1;
        }
      `,
    ];
  }
}
