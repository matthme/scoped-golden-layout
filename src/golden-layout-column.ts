import { RowOrColumnItemConfig } from 'golden-layout';
import { CollectionElement } from './collection-element';
import { GetContent } from './get-content';

export class GoldenLayoutColumn
  extends CollectionElement
  implements GetContent
{
  async getContent(): Promise<RowOrColumnItemConfig> {
    return {
      type: 'column',
      content: await this.getCollectionContent(),
    };
  }
}
