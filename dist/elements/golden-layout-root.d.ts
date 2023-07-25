import { BaseElement } from '../utils/base-element';
import '@fontsource/aileron';
export declare class GoldenLayoutRoot extends BaseElement {
    initLayout(el: Element | undefined): void;
    getRoot(): Promise<import("golden-layout").RowOrColumnItemConfig | import("golden-layout").StackItemConfig | import("golden-layout").ComponentItemConfig | undefined>;
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): any[];
}
