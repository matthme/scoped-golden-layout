import { ContextConsumer } from '@lit-labs/context';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { BaseElement } from '../utils/base-element';
import { goldenLayoutContext } from '../utils/context';

@customElement('golden-layout-drag-source')
export class GoldenLayoutDragSource extends BaseElement {
  @property({ attribute: 'component-type' })
  componentType!: string;

  async firstUpdated() {
    const children = await this.getSlottedChildren();
    new ContextConsumer(this, goldenLayoutContext, value => {
      if (value) {
        value.newDragSource(children[0], this.componentType);
      }
    });
  }

  render() {
    return html`<slot id="slot"></slot>`;
  }
}
