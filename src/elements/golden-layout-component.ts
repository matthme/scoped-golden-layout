import { ComponentItemConfig } from 'golden-layout';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from '../utils/base-element';
import { GetContent } from '../utils/get-content';

export class GoldenLayoutComponent extends BaseElement implements GetContent {
  @property({ attribute: 'component-type' })
  componentType!: string;

  @property()
  title!: string;

  async getContent(): Promise<ComponentItemConfig> {
    if (this.componentType) {
      return {
        title: this.title,
        type: 'component',
        componentType: this.componentType,
        componentState: {},
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
    };
  }

  render() {
    return html`<slot style="display: none;"></slot>`;
  }
}
