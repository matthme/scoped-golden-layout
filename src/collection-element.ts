import { html } from 'lit';
import { BaseElement } from './base-element';
import { GetContent } from './get-content';

export class CollectionElement extends BaseElement {
  async getCollectionContent() {
    const children = await this.getSlottedChildren();

    const promises = children
      .filter(node => (node as unknown as GetContent).getContent)
      .map(node => (node as unknown as GetContent).getContent());
    const content = await Promise.all(promises);

    return content;
  }

  render() {
    return html`<slot id="slot" style="display: none"></slot>`;
  }
}
