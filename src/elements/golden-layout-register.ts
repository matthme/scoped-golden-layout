import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { ContextController } from '@holochain-open-dev/context';
import { GoldenLayout } from 'golden-layout';

import { GOLDEN_LAYOUT_CONTEXT } from '../utils/context';
import { BaseElement } from '../utils/base-element';

export class GoldenLayoutRegister extends BaseElement {
  @property({ attribute: 'component-type' })
  componentType!: string;

  register(goldenLayout: GoldenLayout, template: HTMLTemplateElement) {
    goldenLayout.registerComponentFactoryFunction(
      this.componentType,
      container => {
        const clone = template.content.firstElementChild?.cloneNode(
          true
        ) as Node;
        container.element.appendChild(clone);
      }
    );
  }

  async firstUpdated() {
    const children = await this.getSlottedChildren();

    const template = children[0] as HTMLTemplateElement;

    new ContextController(
      this,
      value => {
        if (value) {
          this.register(value, template);
        }
      },
      GOLDEN_LAYOUT_CONTEXT as unknown as never
    );
  }

  render() {
    return html` <slot id="slot"></slot>`;
  }
}
