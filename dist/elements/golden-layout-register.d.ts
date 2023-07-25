import { TemplateResult } from 'lit';
import { ComponentContainer, GoldenLayout, JsonValue } from 'golden-layout';
import { BaseElement } from '../utils/base-element';
export declare class GoldenLayoutRegister extends BaseElement {
    componentType: string;
    template: ((state: JsonValue | undefined, componentContainer: ComponentContainer) => TemplateResult) | undefined;
    titleRenderer: ((state: JsonValue | undefined) => TemplateResult) | undefined;
    registerSlotTemplate(goldenLayout: GoldenLayout): Promise<void>;
    firstUpdated(): void;
    render(): TemplateResult<1>;
}
