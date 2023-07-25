import { render, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { ContextConsumer } from '@lit-labs/context';
import { ComponentContainer, GoldenLayout, JsonValue } from 'golden-layout';

import { goldenLayoutContext } from '../utils/context';
import { BaseElement } from '../utils/base-element';

@customElement('golden-layout-register')
export class GoldenLayoutRegister extends BaseElement {
  @property({ attribute: 'component-type' })
  componentType!: string;

  @property()
  template:
    | ((
        state: JsonValue | undefined,
        componentContainer: ComponentContainer
      ) => TemplateResult)
    | undefined;

  @property()
  titleRenderer: ((state: JsonValue | undefined) => TemplateResult) | undefined;

  async registerSlotTemplate(goldenLayout: GoldenLayout) {
    const children = await this.getSlottedChildren();

    const template = children[0] as HTMLTemplateElement;
    goldenLayout.registerComponent(this.componentType, container => {
      const clone = template.content.firstElementChild?.cloneNode(true) as Node;
      container.element!.appendChild(clone);
      if (this.titleRenderer) {
        const r = this.titleRenderer;
        container.setTitleRenderer((container, element) =>
          render(r(container.state), element)
        );
      }
    });
  }

  firstUpdated() {
    new ContextConsumer(
      this,
      goldenLayoutContext,
      goldenLayout => {
        if (goldenLayout) {
          if (this.template !== undefined) {
            const templateFn = this.template;
            goldenLayout.registerComponent(
              this.componentType,
              (container, state) => {
                render(templateFn(state, container), container.element!, {});

                if (this.titleRenderer) {
                  const r = this.titleRenderer;
                  container.setTitleRenderer((container, element) =>
                    render(r(container.state), element)
                  );
                }
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
