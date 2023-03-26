import { ComponentItemConfig, JsonValue } from 'golden-layout';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { GetContent } from '../utils/get-content';
import { ItemElement } from '../utils/item-element';

@customElement('golden-layout-component')
export class GoldenLayoutComponent extends ItemElement implements GetContent {
  @property({ attribute: 'component-type' })
  componentType!: string;

  @property()
  title!: string;

  @property()
  state: JsonValue | undefined;

  @property({ type: Boolean })
  unclosable: boolean = false;

  async getContent(): Promise<ComponentItemConfig> {
    if (this.componentType) {
      return {
        title: this.title,
        type: 'component',
        componentType: this.componentType,
        componentState: this.state ? this.state : {},
        isClosable: !this.unclosable,
        ...this.getCommonConfig(),
      };
    }
    const children = await this.getSlottedChildren();
    return {
      title: this.title,
      type: 'component',
      componentType: 'native-html-component',
      componentState: {
        html: children[0].outerHTML,
      },
      isClosable: !this.unclosable,
      ...this.getCommonConfig(),
    };
  }

  render() {
    return html`<slot style="display: none;"></slot>`;
  }
}
