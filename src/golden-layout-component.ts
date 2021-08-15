import { ComponentItemConfig } from 'golden-layout';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from './base-element';
import { GetContent } from './get-content';

export class GoldenLayoutComponent extends BaseElement implements GetContent {
  @property()
  title!: string;

  async getContent(): Promise<ComponentItemConfig> {
    const children = await this.getSlottedChildren();
    const content = children[0].innerHTML;
    return {
      title: this.title,
      type: 'component',
      componentType: 'html',
      componentState: {
        html: content,
      },
    };
  }

  render() {
    return html`<slot id="slot" style="display: none"></slot>`;
  }
}
