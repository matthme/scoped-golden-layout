import { ComponentItemConfig } from 'golden-layout';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { BaseElement } from './base-element';
import { GetContent } from './get-content';

export class GoldenLayoutComponent extends BaseElement implements GetContent {
  @property()
  type!: string;

  @property()
  title!: string;

  async getContent(): Promise<ComponentItemConfig> {
    return {
      title: this.title,
      type: 'component',
      componentType: this.type,
      componentState: {},
    };
  }

  render() {
    return html``;
  }
}
