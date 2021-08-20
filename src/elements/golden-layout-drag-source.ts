import { ContextController } from '@holochain-open-dev/context';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { GoldenLayout } from 'golden-layout';

import { BaseElement } from '../utils/base-element';
import { GOLDEN_LAYOUT_CONTEXT } from '../utils/context';

export class GoldenLayoutDragSource extends BaseElement {
  @property({ attribute: 'component-type' })
  componentType!: string;

  async firstUpdated() {
    const children = await this.getSlottedChildren();
    new ContextController(
      this,
      value => {
        if (value) {
          (value as GoldenLayout).newDragSource(
            children[0],
            this.componentType
          );
        }
      },
      GOLDEN_LAYOUT_CONTEXT as unknown as never
    );
  }

  render() {
    return html`<slot id="slot"></slot>`;
  }
}
