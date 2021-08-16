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
    return {
      title: this.title,
      type: 'component',
      componentType: this.componentType,
      componentState: {},
    };
  }

  render() {
    return html``;
  }
}
