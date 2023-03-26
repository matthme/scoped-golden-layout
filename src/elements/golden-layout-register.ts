import { render, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { ContextConsumer } from '@lit-labs/context';
import { GoldenLayout, JsonValue } from 'golden-layout';

import { goldenLayoutContext } from '../utils/context';
import { BaseElement } from '../utils/base-element';

@customElement('golden-layout-register')
export class GoldenLayoutRegister extends BaseElement {
  @property({ attribute: 'component-type' })
  componentType!: string;

  @property()
  template: ((state: JsonValue | undefined) => TemplateResult) | undefined;

  async registerSlotTemplate(goldenLayout: GoldenLayout) {
    const children = await this.getSlottedChildren();

    const template = children[0] as HTMLTemplateElement;
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

  firstUpdated() {
    new ContextConsumer(
      this,
      goldenLayoutContext,
      goldenLayout => {
        if (goldenLayout) {
          if (this.template !== undefined) {
            const templateFn = this.template;
            goldenLayout.registerComponentFactoryFunction(
              this.componentType,
              (container, state) => {
                render(templateFn(state), container.element, {});
              }
            );
          } else {
            this.registerSlotTemplate(goldenLayout);
          }
        }
      },
      true
    );
  }

  render() {
    return html` <slot id="slot"></slot>`;
  }
}
