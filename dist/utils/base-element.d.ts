import { LitElement } from 'lit';
export declare class BaseElement extends LitElement {
    _slottedChildren: Array<HTMLElement> | undefined;
    firstUpdated(): void;
    getSlottedChildren(): Promise<Array<HTMLElement>>;
}
