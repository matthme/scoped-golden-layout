import { RowOrColumnItemConfig } from 'golden-layout';
import { customElement } from 'lit/decorators.js';
import { CollectionElement } from '../utils/collection-element';
import { GetContent } from '../utils/get-content';

@customElement('golden-layout-row')
export class GoldenLayoutRow extends CollectionElement implements GetContent {
  async getContent(): Promise<RowOrColumnItemConfig> {
    return {
      type: 'row',
      content: await this.getCollectionContent(),
      ...this.getCommonConfig(),
    };
  }
}
