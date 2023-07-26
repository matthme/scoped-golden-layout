import { ref } from 'lit/directives/ref.js';
import { customElement } from 'lit/decorators.js';
import { css, html } from 'lit';
// @ts-ignore
import baseStyles from 'golden-layout/dist/css/goldenlayout-base.css';
// @ts-ignore
import theme from 'golden-layout/dist/css/themes/goldenlayout-light-theme.css';

import { BaseElement } from '../utils/base-element';
import { GetContent } from '../utils/get-content';
import { INIT_LAYOUT_EVENT, ROOT_LOADED_EVENT } from '../utils/events';

import '@fontsource/aileron';

@customElement('golden-layout-root')
export class GoldenLayoutRoot extends BaseElement {
  initLayout(el: Element | undefined) {
    this.dispatchEvent(
      new CustomEvent(INIT_LAYOUT_EVENT, {
        detail: {
          element: el,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  async getRoot() {
    const children = await this.getSlottedChildren();
    for (const child of children) {
      if ((child as unknown as GetContent).getContent) {
        return (child as unknown as GetContent).getContent();
      }
    }

    return undefined;
  }

  async firstUpdated() {
    const root = await this.getRoot();

    this.dispatchEvent(
      new CustomEvent(ROOT_LOADED_EVENT, {
        bubbles: true,
        composed: true,
        detail: {
          root,
          rootElement: this,
        },
      })
    );
  }

  render() {
    return html`<div
        ${ref(this.initLayout)}
        style="flex: 1; overflow: clip;"
      ></div>
      <slot></slot> `;
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex: 1;
          overflow: hidden;
          font-family: "Aileron", "Open Sans", "Helvetica Neue", sans-serif;
        }

        .lm_content {
          display: flex;
        }

        .lm_title {
          display: flex !important;
          margin: 0 5px;
        }


        .lm_tabs {
            height: 50px;
            padding-left: 8px;
        }

        .lm_tab {
          height: 38px !important;
          border-radius: 8px 8px 0 0;
          top: 8px;
          margin: 0 0 0 3px !important;
          border: none !important;
          box-shadow: 0 0 1px #939393 !important;
          display: flex !important;
          align-items: center !important;
          font-family: 'Aileron' !important;
          font-size: 16px !important;
          color: black !important;
          max-width: 110px;
          position: relative !important;
          background-color: white !important;
        }

        .lm_tab::before {
            content: "";
            position: absolute !important;
            display: block !important;
            background-color: transparent !important;
            left: -15px;
            bottom: 0;
            height: 40px !important;
            width: 15px !important;
            border-radius: 0 0 10px 0;
            box-shadow: 0 10px 0 0 white;
        }

        .lm_tab:hover::before {
            box-shadow: 0 10px 0 0 rgb(149 157 206);
        }

        .lm_tab:hover::after {
            box-shadow: 0 10px 0 0 rgb(149 157 206);
        }

        .lm_tab.lm_active::before {
            box-shadow: 0 10px 0 0 rgb(149 157 206);
        }

        /* .lm_tab.lm_active::after {
            content: "";
            position: absolute !important;
            display: block !important;
            background-color: transparent !important;
            right: -15px;
            bottom: 0;
            height: 40px !important;
            width: 15px !important;
            border-radius: 0 0 0 10px;
            box-shadow: 0 10px 0 0 rgb(149 157 206);
        } */

        .lm_tab:hover {
            /* box-shadow: 0 0 1px #3d3d3d !important; */
            background: rgb(149 157 206) !important;
        }

        .lm_active {
            box-shadow: 0 0 5px #3d3d3d !important;
            background: rgb(149 157 206) !important;
            color: black !important;
        }

        .lm_header {
            height: 50px !important;
            background: #dbdef9;
            overflow-x: scroll !important;
        }

        .lm_close_tab {
            margin-top: 4px !important;
            height: 25px !important;
            width: 25px !important;
        }
        .lm_close_tab:hover {
            background: gray;
            border-radius: 3px;
        }
      `,
      baseStyles,
      theme,
    ];
  }
}
