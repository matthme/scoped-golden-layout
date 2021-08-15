import { RowOrColumnItemConfig } from 'golden-layout';
import { CollectionElement } from './collection-element';
import { GetContent } from './get-content';

export class GoldenLayoutRow extends CollectionElement implements GetContent {
  async getContent(): Promise<RowOrColumnItemConfig> {
    return {
      type: 'row',
      content: await this.getCollectionContent(),
    };
  }
}
