import { GoldenLayout as GoldenLayoutClass, LayoutConfig, ResolvedLayoutConfig } from 'golden-layout';
import { ContextProvider } from '@lit-labs/context';
import { BaseElement } from '../utils/base-element';
export declare class GoldenLayout extends BaseElement {
    layoutConfig: LayoutConfig | undefined;
    _goldenLayoutContext: ContextProvider<{
        __context__: GoldenLayoutClass;
    }>;
    get goldenLayout(): GoldenLayoutClass;
    connectedCallback(): void;
    saveLayout(): ResolvedLayoutConfig;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult[];
}
