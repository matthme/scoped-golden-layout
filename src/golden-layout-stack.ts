import { ComponentItemConfig, StackItemConfig } from 'golden-layout';
import { CollectionElement } from './collection-element';
import { GetContent } from './get-content';

export class GoldenLayoutStack extends CollectionElement implements GetContent {
  async getContent(): Promise<StackItemConfig> {
    return {
      type: 'stack',
      content: (await this.getCollectionContent()) as ComponentItemConfig[],
    };
  }
}
