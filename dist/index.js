import { LitElement, html, css, render } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { createContext, ContextProvider, ContextConsumer } from '@lit-labs/context';
import { ref } from 'lit/directives/ref.js';
import '@fontsource/aileron';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

/** @public */
class ExternalError extends Error {
    /** @internal */
    constructor(type, message) {
        super(message);
        this.type = type;
    }
}
/** @public */
class ConfigurationError extends ExternalError {
    /** @internal */
    constructor(message, node) {
        super('Configuration', message);
        this.node = node;
    }
}
/** @public */
class PopoutBlockedError extends ExternalError {
    /** @internal */
    constructor(message) {
        super('PopoutBlocked', message);
    }
}
/** @public */
class BindError extends ExternalError {
    /** @internal */
    constructor(message) {
        super('Bind', message);
    }
}

/** @internal */
class InternalError extends Error {
    constructor(type, code, message) {
        super(`${type}: ${code}${message === undefined ? '' : ': ' + message}`);
    }
}
/** @internal */
class AssertError extends InternalError {
    constructor(code, message) {
        super('Assert', code, message);
    }
}
/** @internal */
class UnreachableCaseError extends InternalError {
    constructor(code, variableValue, message) {
        super('UnreachableCase', code, `${variableValue}${message === undefined ? '' : ': ' + message}`);
    }
}
/** @internal */
class UnexpectedNullError extends InternalError {
    constructor(code, message) {
        super('UnexpectedNull', code, message);
    }
}
/** @internal */
class UnexpectedUndefinedError extends InternalError {
    constructor(code, message) {
        super('UnexpectedUndefined', code, message);
    }
}

/** @public */
var I18nStrings;
(function (I18nStrings) {
    /** @internal */
    let initialised = false;
    /** @internal */
    const infosObject = {
        PopoutCannotBeCreatedWithGroundItemConfig: {
            id: 0 /* I18nStringId.PopoutCannotBeCreatedWithGroundItemConfig */,
            default: 'Popout cannot be created with ground ItemConfig'
        },
        PleaseRegisterAConstructorFunction: {
            id: 1 /* I18nStringId.PleaseRegisterAConstructorFunction */,
            default: 'Please register a constructor function'
        },
        ComponentTypeNotRegisteredAndBindComponentEventHandlerNotAssigned: {
            id: 2 /* I18nStringId.ComponentTypeNotRegisteredAndBindComponentEventHandlerNotAssigned */,
            default: 'Component type not registered and BindComponentEvent handler not assigned',
        },
        ComponentIsAlreadyRegistered: {
            id: 3 /* I18nStringId.ComponentIsAlreadyRegistered */,
            default: 'Component is already registered',
        },
        ComponentIsNotVirtuable: {
            id: 4 /* I18nStringId.ComponentIsNotVirtuable */,
            default: 'Component is not virtuable. Requires rootHtmlElement field/getter',
        },
        VirtualComponentDoesNotHaveRootHtmlElement: {
            id: 5 /* I18nStringId.VirtualComponentDoesNotHaveRootHtmlElement */,
            default: 'Virtual component does not have getter "rootHtmlElement"',
        },
        ItemConfigIsNotTypeComponent: {
            id: 6 /* I18nStringId.ItemConfigIsNotTypeComponent */,
            default: 'ItemConfig is not of type component',
        },
        InvalidNumberPartInSizeString: {
            id: 7 /* I18nStringId.InvalidNumberPartInSizeString */,
            default: 'Invalid number part in size string',
        },
        UnknownUnitInSizeString: {
            id: 8 /* I18nStringId.UnknownUnitInSizeString */,
            default: 'Unknown unit in size string',
        },
        UnsupportedUnitInSizeString: {
            id: 9 /* I18nStringId.UnsupportedUnitInSizeString */,
            default: 'Unsupported unit in size string',
        },
    };
    I18nStrings.idCount = Object.keys(infosObject).length;
    /** @internal */
    const infos = Object.values(infosObject);
    function checkInitialise() {
        if (!initialised) {
            for (let i = 0; i < I18nStrings.idCount; i++) {
                const info = infos[i];
                if (info.id !== i) {
                    throw new AssertError('INSI00110', `${i}: ${info.id}`);
                }
                else {
                    i18nStrings[i] = info.default;
                }
            }
        }
        initialised = true;
    }
    I18nStrings.checkInitialise = checkInitialise;
})(I18nStrings || (I18nStrings = {}));
/** @public */
const i18nStrings = new Array(I18nStrings.idCount);

/** @public */
var StyleConstants;
(function (StyleConstants) {
    StyleConstants.defaultComponentBaseZIndex = 'auto';
    StyleConstants.defaultComponentDragZIndex = '32';
    StyleConstants.defaultComponentStackMaximisedZIndex = '41';
})(StyleConstants || (StyleConstants = {}));

/** @internal */
var WidthOrHeightPropertyName;
(function (WidthOrHeightPropertyName) {
    WidthOrHeightPropertyName.width = 'width';
    WidthOrHeightPropertyName.height = 'height';
})(WidthOrHeightPropertyName || (WidthOrHeightPropertyName = {}));
/** @public */
var Side;
(function (Side) {
    Side.top = 'top';
    Side.left = 'left';
    Side.right = 'right';
    Side.bottom = 'bottom';
})(Side || (Side = {}));
/** @public */
var LogicalZIndex;
(function (LogicalZIndex) {
    LogicalZIndex.base = 'base';
    LogicalZIndex.drag = 'drag';
    LogicalZIndex.stackMaximised = 'stackMaximised';
})(LogicalZIndex || (LogicalZIndex = {}));
/** @public */
const LogicalZIndexToDefaultMap = {
    base: StyleConstants.defaultComponentBaseZIndex,
    drag: StyleConstants.defaultComponentDragZIndex,
    stackMaximised: StyleConstants.defaultComponentStackMaximisedZIndex,
};
/** @public */
var JsonValue;
(function (JsonValue) {
    function isJson(value) {
        return isJsonObject(value);
    }
    JsonValue.isJson = isJson;
    // eslint-disable-next-line @typescript-eslint/ban-types
    function isJsonObject(value) {
        return !Array.isArray(value) && value !== null && typeof value === 'object';
    }
    JsonValue.isJsonObject = isJsonObject;
})(JsonValue || (JsonValue = {}));
/** @public */
var ItemType;
(function (ItemType) {
    ItemType.ground = 'ground';
    ItemType.row = 'row';
    ItemType.column = 'column';
    ItemType.stack = 'stack';
    ItemType.component = 'component';
})(ItemType || (ItemType = {}));
/** @public */
var ResponsiveMode;
(function (ResponsiveMode) {
    ResponsiveMode.none = 'none';
    ResponsiveMode.always = 'always';
    ResponsiveMode.onload = 'onload';
})(ResponsiveMode || (ResponsiveMode = {}));
/** @public */
var SizeUnitEnum;
(function (SizeUnitEnum) {
    SizeUnitEnum["Pixel"] = "px";
    SizeUnitEnum["Percent"] = "%";
    SizeUnitEnum["Fractional"] = "fr";
    SizeUnitEnum["Em"] = "em";
})(SizeUnitEnum || (SizeUnitEnum = {}));
/** @public */
(function (SizeUnitEnum) {
    function tryParse(value) {
        switch (value) {
            case SizeUnitEnum.Pixel: return SizeUnitEnum.Pixel;
            case SizeUnitEnum.Percent: return SizeUnitEnum.Percent;
            case SizeUnitEnum.Fractional: return SizeUnitEnum.Fractional;
            case SizeUnitEnum.Em: return SizeUnitEnum.Em;
            default: return undefined;
        }
    }
    SizeUnitEnum.tryParse = tryParse;
    function format(value) {
        switch (value) {
            case SizeUnitEnum.Pixel: return SizeUnitEnum.Pixel;
            case SizeUnitEnum.Percent: return SizeUnitEnum.Percent;
            case SizeUnitEnum.Fractional: return SizeUnitEnum.Fractional;
            case SizeUnitEnum.Em: return SizeUnitEnum.Em;
            default:
                throw new UnreachableCaseError('SUEF44998', value);
        }
    }
    SizeUnitEnum.format = format;
})(SizeUnitEnum || (SizeUnitEnum = {}));

/** @internal */
function numberToPixels(value) {
    return value.toString(10) + 'px';
}
/** @internal */
function pixelsToNumber(value) {
    const numberStr = value.replace("px", "");
    return parseFloat(numberStr);
}
/** @internal */
function splitStringAtFirstNonNumericChar(value) {
    value = value.trimStart();
    const length = value.length;
    if (length === 0) {
        return { numericPart: '', firstNonNumericCharPart: '' };
    }
    else {
        let firstNonDigitPartIndex = length;
        let gotDecimalPoint = false;
        for (let i = 0; i < length; i++) {
            const char = value[i];
            if (!isDigit(char)) {
                if (char !== '.') {
                    firstNonDigitPartIndex = i;
                    break;
                }
                else {
                    if (gotDecimalPoint) {
                        firstNonDigitPartIndex = i;
                        break;
                    }
                    else {
                        gotDecimalPoint = true;
                    }
                }
            }
        }
        const digitsPart = value.substring(0, firstNonDigitPartIndex);
        const firstNonDigitPart = value.substring(firstNonDigitPartIndex).trim();
        return { numericPart: digitsPart, firstNonNumericCharPart: firstNonDigitPart };
    }
}
/** @internal */
function isDigit(char) {
    return char >= '0' && char <= '9';
}
/** @internal */
function getElementWidth(element) {
    return element.offsetWidth;
}
/** @internal */
function setElementWidth(element, width) {
    const widthAsPixels = numberToPixels(width);
    element.style.width = widthAsPixels;
}
/** @internal */
function getElementHeight(element) {
    return element.offsetHeight;
}
/** @internal */
function setElementHeight(element, height) {
    const heightAsPixels = numberToPixels(height);
    element.style.height = heightAsPixels;
}
/** @internal */
function getElementWidthAndHeight(element) {
    return {
        width: element.offsetWidth,
        height: element.offsetHeight,
    };
}
/** @internal */
function setElementDisplayVisibility(element, visible) {
    if (visible) {
        element.style.display = '';
    }
    else {
        element.style.display = 'none';
    }
}
/** @internal */
function enableIFramePointerEvents(enable) {
    document.querySelectorAll('iframe.lm_content').forEach((element) => element.style.setProperty('pointer-events', enable ? '' : 'none'));
}
/**
 * Replacement for JQuery $.extend(true, target, obj)
 * @internal
*/
function deepExtend(target, obj) {
    if (obj !== undefined) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                const existingTarget = target[key];
                target[key] = deepExtendValue(existingTarget, value);
            }
        }
    }
    return target;
}
/** @internal */
function deepExtendValue(existingTarget, value) {
    if (typeof value !== 'object') {
        return value;
    }
    else {
        if (Array.isArray(value)) {
            const length = value.length;
            const targetArray = new Array(length);
            for (let i = 0; i < length; i++) {
                const element = value[i];
                targetArray[i] = deepExtendValue({}, element);
            }
            return targetArray;
        }
        else {
            if (value === null) {
                return null;
            }
            else {
                const valueObj = value;
                if (existingTarget === undefined) {
                    return deepExtend({}, valueObj); // overwrite
                }
                else {
                    if (typeof existingTarget !== "object") {
                        return deepExtend({}, valueObj); // overwrite
                    }
                    else {
                        if (Array.isArray(existingTarget)) {
                            return deepExtend({}, valueObj); // overwrite
                        }
                        else {
                            if (existingTarget === null) {
                                return deepExtend({}, valueObj); // overwrite
                            }
                            else {
                                const existingTargetObj = existingTarget;
                                return deepExtend(existingTargetObj, valueObj); // merge
                            }
                        }
                    }
                }
            }
        }
    }
}
/** @internal */
function removeFromArray(item, array) {
    const index = array.indexOf(item);
    if (index === -1) {
        throw new Error('Can\'t remove item from array. Item is not in the array');
    }
    array.splice(index, 1);
}
/** @internal */
function getUniqueId() {
    return (Math.random() * 1000000000000000)
        .toString(36)
        .replace('.', '');
}
/** @internal */
function getErrorMessage(e) {
    if (e instanceof Error) {
        return e.message;
    }
    else {
        if (typeof e === 'string') {
            return e;
        }
        else {
            return 'Unknown Error';
        }
    }
}

/**
 * Minifies and unminifies configs by replacing frequent keys
 * and values with one letter substitutes. Config options must
 * retain array position/index, add new options at the end.
 * @internal
*/
var ConfigMinifier;
(function (ConfigMinifier) {
    const keys = [
        'settings',
        'hasHeaders',
        'constrainDragToContainer',
        'selectionEnabled',
        'dimensions',
        'borderWidth',
        'minItemHeight',
        'minItemWidth',
        'headerHeight',
        'dragProxyWidth',
        'dragProxyHeight',
        'labels',
        'close',
        'maximise',
        'minimise',
        'popout',
        'content',
        'componentType',
        'componentState',
        'id',
        'width',
        'type',
        'height',
        'isClosable',
        'title',
        'popoutWholeStack',
        'openPopouts',
        'parentId',
        'activeItemIndex',
        'reorderEnabled',
        'borderGrabWidth',
        //Maximum 36 entries, do not cross this line!
    ];
    const values = [
        true,
        false,
        'row',
        'column',
        'stack',
        'component',
        'close',
        'maximise',
        'minimise',
        'open in new window'
    ];
    function checkInitialise() {
        if (keys.length > 36) {
            throw new Error('Too many keys in config minifier map');
        }
    }
    ConfigMinifier.checkInitialise = checkInitialise;
    function translateObject(from, minify) {
        const to = {};
        for (const key in from) {
            if (from.hasOwnProperty(key)) { // In case something has extended Object prototypes
                let translatedKey;
                if (minify) {
                    translatedKey = minifyKey(key);
                }
                else {
                    translatedKey = unminifyKey(key);
                }
                const fromValue = from[key];
                to[translatedKey] = translateValue(fromValue, minify);
            }
        }
        return to;
    }
    ConfigMinifier.translateObject = translateObject;
    function translateArray(from, minify) {
        const length = from.length;
        const to = new Array(length);
        for (let i = 0; i < length; i++) {
            // In original code, array indices were numbers and not translated
            const fromValue = from[i];
            to[i] = translateValue(fromValue, minify);
        }
        return to;
    }
    function translateValue(from, minify) {
        if (typeof from === 'object') {
            if (from === null) {
                return null;
            }
            else {
                if (Array.isArray(from)) {
                    return translateArray(from, minify);
                }
                else {
                    return translateObject(from, minify);
                }
            }
        }
        else {
            if (minify) {
                return minifyValue(from);
            }
            else {
                return unminifyValue(from);
            }
        }
    }
    function minifyKey(value) {
        /**
         * If a value actually is a single character, prefix it
         * with ___ to avoid mistaking it for a minification code
         */
        if (typeof value === 'string' && value.length === 1) {
            return '___' + value;
        }
        const index = indexOfKey(value);
        /**
         * value not found in the dictionary, return it unmodified
         */
        if (index === -1) {
            return value;
            /**
             * value found in dictionary, return its base36 counterpart
             */
        }
        else {
            return index.toString(36);
        }
    }
    function unminifyKey(key) {
        /**
         * value is a single character. Assume that it's a translation
         * and return the original value from the dictionary
         */
        if (key.length === 1) {
            return keys[parseInt(key, 36)];
        }
        /**
         * value originally was a single character and was prefixed with ___
         * to avoid mistaking it for a translation. Remove the prefix
         * and return the original character
         */
        if (key.substr(0, 3) === '___') {
            return key[3];
        }
        /**
         * value was not minified
         */
        return key;
    }
    function minifyValue(value) {
        /**
         * If a value actually is a single character, prefix it
         * with ___ to avoid mistaking it for a minification code
         */
        if (typeof value === 'string' && value.length === 1) {
            return '___' + value;
        }
        const index = indexOfValue(value);
        /**
         * value not found in the dictionary, return it unmodified
         */
        if (index === -1) {
            return value;
            /**
             * value found in dictionary, return its base36 counterpart
             */
        }
        else {
            return index.toString(36);
        }
    }
    function unminifyValue(value) {
        /**
         * value is a single character. Assume that it's a translation
         * and return the original value from the dictionary
         */
        if (typeof value === 'string' && value.length === 1) {
            return values[parseInt(value, 36)];
        }
        /**
         * value originally was a single character and was prefixed with ___
         * to avoid mistaking it for a translation. Remove the prefix
         * and return the original character
         */
        if (typeof value === 'string' && value.substr(0, 3) === '___') {
            return value[3];
        }
        /**
         * value was not minified
         */
        return value;
    }
    function indexOfKey(key) {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] === key) {
                return i;
            }
        }
        return -1;
    }
    function indexOfValue(value) {
        for (let i = 0; i < values.length; i++) {
            if (values[i] === value) {
                return i;
            }
        }
        return -1;
    }
})(ConfigMinifier || (ConfigMinifier = {}));

/** @public */
var ResolvedItemConfig;
(function (ResolvedItemConfig) {
    ResolvedItemConfig.defaults = {
        type: ItemType.ground,
        content: [],
        size: 1,
        sizeUnit: SizeUnitEnum.Fractional,
        minSize: undefined,
        minSizeUnit: SizeUnitEnum.Pixel,
        id: '',
        isClosable: true,
    };
    /** Creates a copy of the original ResolvedItemConfig using an alternative content if specified */
    function createCopy(original, content) {
        switch (original.type) {
            case ItemType.ground:
            case ItemType.row:
            case ItemType.column:
                return ResolvedRowOrColumnItemConfig.createCopy(original, content);
            case ItemType.stack:
                return ResolvedStackItemConfig.createCopy(original, content);
            case ItemType.component:
                return ResolvedComponentItemConfig.createCopy(original);
            default:
                throw new UnreachableCaseError('CICC91354', original.type, 'Invalid Config Item type specified');
        }
    }
    ResolvedItemConfig.createCopy = createCopy;
    function createDefault(type) {
        switch (type) {
            case ItemType.ground:
                throw new AssertError('CICCDR91562'); // Get default root from LayoutConfig
            case ItemType.row:
            case ItemType.column:
                return ResolvedRowOrColumnItemConfig.createDefault(type);
            case ItemType.stack:
                return ResolvedStackItemConfig.createDefault();
            case ItemType.component:
                return ResolvedComponentItemConfig.createDefault();
            default:
                throw new UnreachableCaseError('CICCDD91563', type, 'Invalid Config Item type specified');
        }
    }
    ResolvedItemConfig.createDefault = createDefault;
    function isComponentItem(itemConfig) {
        return itemConfig.type === ItemType.component;
    }
    ResolvedItemConfig.isComponentItem = isComponentItem;
    function isStackItem(itemConfig) {
        return itemConfig.type === ItemType.stack;
    }
    ResolvedItemConfig.isStackItem = isStackItem;
    /** @internal */
    function isGroundItem(itemConfig) {
        return itemConfig.type === ItemType.ground;
    }
    ResolvedItemConfig.isGroundItem = isGroundItem;
})(ResolvedItemConfig || (ResolvedItemConfig = {}));
/** @public */
var ResolvedHeaderedItemConfig;
(function (ResolvedHeaderedItemConfig) {
    ResolvedHeaderedItemConfig.defaultMaximised = false;
    (function (Header) {
        function createCopy(original, show) {
            if (original === undefined) {
                return undefined;
            }
            else {
                return {
                    show: show !== null && show !== void 0 ? show : original.show,
                    popout: original.popout,
                    close: original.close,
                    maximise: original.maximise,
                    minimise: original.minimise,
                    tabDropdown: original.tabDropdown,
                };
            }
        }
        Header.createCopy = createCopy;
    })(ResolvedHeaderedItemConfig.Header || (ResolvedHeaderedItemConfig.Header = {}));
})(ResolvedHeaderedItemConfig || (ResolvedHeaderedItemConfig = {}));
/** @public */
var ResolvedStackItemConfig;
(function (ResolvedStackItemConfig) {
    ResolvedStackItemConfig.defaultActiveItemIndex = 0;
    function createCopy(original, content) {
        const result = {
            type: original.type,
            content: content !== undefined ? copyContent(content) : copyContent(original.content),
            size: original.size,
            sizeUnit: original.sizeUnit,
            minSize: original.minSize,
            minSizeUnit: original.minSizeUnit,
            id: original.id,
            maximised: original.maximised,
            isClosable: original.isClosable,
            activeItemIndex: original.activeItemIndex,
            header: ResolvedHeaderedItemConfig.Header.createCopy(original.header),
        };
        return result;
    }
    ResolvedStackItemConfig.createCopy = createCopy;
    function copyContent(original) {
        const count = original.length;
        const result = new Array(count);
        for (let i = 0; i < count; i++) {
            result[i] = ResolvedItemConfig.createCopy(original[i]);
        }
        return result;
    }
    ResolvedStackItemConfig.copyContent = copyContent;
    function createDefault() {
        const result = {
            type: ItemType.stack,
            content: [],
            size: ResolvedItemConfig.defaults.size,
            sizeUnit: ResolvedItemConfig.defaults.sizeUnit,
            minSize: ResolvedItemConfig.defaults.minSize,
            minSizeUnit: ResolvedItemConfig.defaults.minSizeUnit,
            id: ResolvedItemConfig.defaults.id,
            maximised: ResolvedHeaderedItemConfig.defaultMaximised,
            isClosable: ResolvedItemConfig.defaults.isClosable,
            activeItemIndex: ResolvedStackItemConfig.defaultActiveItemIndex,
            header: undefined,
        };
        return result;
    }
    ResolvedStackItemConfig.createDefault = createDefault;
})(ResolvedStackItemConfig || (ResolvedStackItemConfig = {}));
/** @public */
var ResolvedComponentItemConfig;
(function (ResolvedComponentItemConfig) {
    ResolvedComponentItemConfig.defaultReorderEnabled = true;
    function resolveComponentTypeName(itemConfig) {
        const componentType = itemConfig.componentType;
        if (typeof componentType === 'string') {
            return componentType;
        }
        else {
            return undefined;
        }
    }
    ResolvedComponentItemConfig.resolveComponentTypeName = resolveComponentTypeName;
    function createCopy(original) {
        const result = {
            type: original.type,
            content: [],
            size: original.size,
            sizeUnit: original.sizeUnit,
            minSize: original.minSize,
            minSizeUnit: original.minSizeUnit,
            id: original.id,
            maximised: original.maximised,
            isClosable: original.isClosable,
            reorderEnabled: original.reorderEnabled,
            title: original.title,
            header: ResolvedHeaderedItemConfig.Header.createCopy(original.header),
            componentType: original.componentType,
            componentState: deepExtendValue(undefined, original.componentState),
        };
        return result;
    }
    ResolvedComponentItemConfig.createCopy = createCopy;
    function createDefault(componentType = '', componentState, title = '') {
        const result = {
            type: ItemType.component,
            content: [],
            size: ResolvedItemConfig.defaults.size,
            sizeUnit: ResolvedItemConfig.defaults.sizeUnit,
            minSize: ResolvedItemConfig.defaults.minSize,
            minSizeUnit: ResolvedItemConfig.defaults.minSizeUnit,
            id: ResolvedItemConfig.defaults.id,
            maximised: ResolvedHeaderedItemConfig.defaultMaximised,
            isClosable: ResolvedItemConfig.defaults.isClosable,
            reorderEnabled: ResolvedComponentItemConfig.defaultReorderEnabled,
            title,
            header: undefined,
            componentType,
            componentState,
        };
        return result;
    }
    ResolvedComponentItemConfig.createDefault = createDefault;
    function copyComponentType(componentType) {
        return deepExtendValue({}, componentType);
    }
    ResolvedComponentItemConfig.copyComponentType = copyComponentType;
})(ResolvedComponentItemConfig || (ResolvedComponentItemConfig = {}));
/** @public */
var ResolvedRowOrColumnItemConfig;
(function (ResolvedRowOrColumnItemConfig) {
    function isChildItemConfig(itemConfig) {
        switch (itemConfig.type) {
            case ItemType.row:
            case ItemType.column:
            case ItemType.stack:
            case ItemType.component:
                return true;
            case ItemType.ground:
                return false;
            default:
                throw new UnreachableCaseError('CROCOSPCICIC13687', itemConfig.type);
        }
    }
    ResolvedRowOrColumnItemConfig.isChildItemConfig = isChildItemConfig;
    function createCopy(original, content) {
        const result = {
            type: original.type,
            content: content !== undefined ? copyContent(content) : copyContent(original.content),
            size: original.size,
            sizeUnit: original.sizeUnit,
            minSize: original.minSize,
            minSizeUnit: original.minSizeUnit,
            id: original.id,
            isClosable: original.isClosable,
        };
        return result;
    }
    ResolvedRowOrColumnItemConfig.createCopy = createCopy;
    function copyContent(original) {
        const count = original.length;
        const result = new Array(count);
        for (let i = 0; i < count; i++) {
            result[i] = ResolvedItemConfig.createCopy(original[i]);
        }
        return result;
    }
    ResolvedRowOrColumnItemConfig.copyContent = copyContent;
    function createDefault(type) {
        const result = {
            type,
            content: [],
            size: ResolvedItemConfig.defaults.size,
            sizeUnit: ResolvedItemConfig.defaults.sizeUnit,
            minSize: ResolvedItemConfig.defaults.minSize,
            minSizeUnit: ResolvedItemConfig.defaults.minSizeUnit,
            id: ResolvedItemConfig.defaults.id,
            isClosable: ResolvedItemConfig.defaults.isClosable,
        };
        return result;
    }
    ResolvedRowOrColumnItemConfig.createDefault = createDefault;
})(ResolvedRowOrColumnItemConfig || (ResolvedRowOrColumnItemConfig = {}));
/** @public */
var ResolvedRootItemConfig;
(function (ResolvedRootItemConfig) {
    function createCopy(config) {
        return ResolvedItemConfig.createCopy(config);
    }
    ResolvedRootItemConfig.createCopy = createCopy;
    function isRootItemConfig(itemConfig) {
        switch (itemConfig.type) {
            case ItemType.row:
            case ItemType.column:
            case ItemType.stack:
            case ItemType.component:
                return true;
            case ItemType.ground:
                return false;
            default:
                throw new UnreachableCaseError('CROCOSPCICIC13687', itemConfig.type);
        }
    }
    ResolvedRootItemConfig.isRootItemConfig = isRootItemConfig;
})(ResolvedRootItemConfig || (ResolvedRootItemConfig = {}));
/** @internal */
var ResolvedGroundItemConfig;
(function (ResolvedGroundItemConfig) {
    function create(rootItemConfig) {
        const content = rootItemConfig === undefined ? [] : [rootItemConfig];
        return {
            type: ItemType.ground,
            content,
            size: 100,
            sizeUnit: SizeUnitEnum.Percent,
            minSize: 0,
            minSizeUnit: SizeUnitEnum.Pixel,
            id: '',
            isClosable: false,
            title: '',
            reorderEnabled: false,
        };
    }
    ResolvedGroundItemConfig.create = create;
})(ResolvedGroundItemConfig || (ResolvedGroundItemConfig = {}));
/** @public */
var ResolvedLayoutConfig;
(function (ResolvedLayoutConfig) {
    (function (Settings) {
        Settings.defaults = {
            useDragAndDrop: true,
            copyForDragImage: undefined,
            showOldPositionWhenDragging: true,
            dragDataMimetype: 'text/gl-drag-data',
            checkGlWindowKey: true,
            constrainDragToContainer: true,
            reorderEnabled: true,
            popoutWholeStack: false,
            blockedPopoutsThrowError: true,
            closePopoutsOnUnload: true,
            responsiveMode: ResponsiveMode.none,
            tabOverlapAllowance: 0,
            reorderOnTabMenuClick: true,
            tabControlOffset: 10,
            popInOnClose: false,
        };
        function createCopy(original) {
            return {
                useDragAndDrop: original.useDragAndDrop,
                copyForDragImage: original.copyForDragImage,
                showOldPositionWhenDragging: original.showOldPositionWhenDragging,
                dragDataMimetype: original.dragDataMimetype,
                checkGlWindowKey: original.checkGlWindowKey,
                constrainDragToContainer: original.constrainDragToContainer,
                reorderEnabled: original.reorderEnabled,
                popoutWholeStack: original.popoutWholeStack,
                blockedPopoutsThrowError: original.blockedPopoutsThrowError,
                closePopoutsOnUnload: original.closePopoutsOnUnload,
                responsiveMode: original.responsiveMode,
                tabOverlapAllowance: original.tabOverlapAllowance,
                reorderOnTabMenuClick: original.reorderOnTabMenuClick,
                tabControlOffset: original.tabControlOffset,
                popInOnClose: original.popInOnClose,
            };
        }
        Settings.createCopy = createCopy;
    })(ResolvedLayoutConfig.Settings || (ResolvedLayoutConfig.Settings = {}));
    (function (Dimensions) {
        function createCopy(original) {
            return {
                borderWidth: original.borderWidth,
                borderGrabWidth: original.borderGrabWidth,
                contentInset: original.contentInset,
                defaultMinItemHeight: original.defaultMinItemHeight,
                defaultMinItemHeightUnit: original.defaultMinItemHeightUnit,
                defaultMinItemWidth: original.defaultMinItemWidth,
                defaultMinItemWidthUnit: original.defaultMinItemWidthUnit,
                headerHeight: original.headerHeight,
                dragProxyWidth: original.dragProxyWidth,
                dragProxyHeight: original.dragProxyHeight,
            };
        }
        Dimensions.createCopy = createCopy;
        Dimensions.defaults = {
            borderWidth: 5,
            borderGrabWidth: 5,
            contentInset: 0,
            defaultMinItemHeight: 0,
            defaultMinItemHeightUnit: SizeUnitEnum.Pixel,
            defaultMinItemWidth: 10,
            defaultMinItemWidthUnit: SizeUnitEnum.Pixel,
            headerHeight: 20,
            dragProxyWidth: 300,
            dragProxyHeight: 200
        };
    })(ResolvedLayoutConfig.Dimensions || (ResolvedLayoutConfig.Dimensions = {}));
    (function (Header) {
        function createCopy(original) {
            return {
                show: original.show,
                popout: original.popout,
                dock: original.dock,
                close: original.close,
                maximise: original.maximise,
                minimise: original.minimise,
                tabDropdown: original.tabDropdown,
            };
        }
        Header.createCopy = createCopy;
        Header.defaults = {
            show: Side.top,
            popout: 'open in new window',
            dock: 'dock',
            maximise: 'maximise',
            minimise: 'minimise',
            close: 'close',
            tabDropdown: 'additional tabs'
        };
    })(ResolvedLayoutConfig.Header || (ResolvedLayoutConfig.Header = {}));
    function isPopout(config) {
        return 'parentId' in config;
    }
    ResolvedLayoutConfig.isPopout = isPopout;
    function createDefault() {
        const result = {
            root: undefined,
            openPopouts: [],
            dimensions: ResolvedLayoutConfig.Dimensions.defaults,
            settings: ResolvedLayoutConfig.Settings.defaults,
            header: ResolvedLayoutConfig.Header.defaults,
            resolved: true,
        };
        return result;
    }
    ResolvedLayoutConfig.createDefault = createDefault;
    function createCopy(config) {
        if (isPopout(config)) {
            return ResolvedPopoutLayoutConfig.createCopy(config);
        }
        else {
            const result = {
                root: config.root === undefined ? undefined : ResolvedRootItemConfig.createCopy(config.root),
                openPopouts: ResolvedLayoutConfig.copyOpenPopouts(config.openPopouts),
                settings: ResolvedLayoutConfig.Settings.createCopy(config.settings),
                dimensions: ResolvedLayoutConfig.Dimensions.createCopy(config.dimensions),
                header: ResolvedLayoutConfig.Header.createCopy(config.header),
                resolved: config.resolved,
            };
            return result;
        }
    }
    ResolvedLayoutConfig.createCopy = createCopy;
    function copyOpenPopouts(original) {
        const count = original.length;
        const result = new Array(count);
        for (let i = 0; i < count; i++) {
            result[i] = ResolvedPopoutLayoutConfig.createCopy(original[i]);
        }
        return result;
    }
    ResolvedLayoutConfig.copyOpenPopouts = copyOpenPopouts;
    /**
     * Takes a GoldenLayout configuration object and
     * replaces its keys and values recursively with
     * one letter counterparts
     */
    function minifyConfig(layoutConfig) {
        return ConfigMinifier.translateObject(layoutConfig, true);
    }
    ResolvedLayoutConfig.minifyConfig = minifyConfig;
    /**
     * Takes a configuration Object that was previously minified
     * using minifyConfig and returns its original version
     */
    function unminifyConfig(minifiedConfig) {
        return ConfigMinifier.translateObject(minifiedConfig, false);
    }
    ResolvedLayoutConfig.unminifyConfig = unminifyConfig;
})(ResolvedLayoutConfig || (ResolvedLayoutConfig = {}));
/** @public */
var ResolvedPopoutLayoutConfig;
(function (ResolvedPopoutLayoutConfig) {
    (function (Window) {
        function createCopy(original) {
            return {
                width: original.width,
                height: original.height,
                left: original.left,
                top: original.top,
            };
        }
        Window.createCopy = createCopy;
        Window.defaults = {
            width: null,
            height: null,
            left: null,
            top: null,
        };
    })(ResolvedPopoutLayoutConfig.Window || (ResolvedPopoutLayoutConfig.Window = {}));
    function createCopy(original) {
        const result = {
            root: original.root === undefined ? undefined : ResolvedRootItemConfig.createCopy(original.root),
            openPopouts: ResolvedLayoutConfig.copyOpenPopouts(original.openPopouts),
            settings: ResolvedLayoutConfig.Settings.createCopy(original.settings),
            dimensions: ResolvedLayoutConfig.Dimensions.createCopy(original.dimensions),
            header: ResolvedLayoutConfig.Header.createCopy(original.header),
            parentId: original.parentId,
            indexInParent: original.indexInParent,
            window: ResolvedPopoutLayoutConfig.Window.createCopy(original.window),
            resolved: original.resolved,
        };
        return result;
    }
    ResolvedPopoutLayoutConfig.createCopy = createCopy;
})(ResolvedPopoutLayoutConfig || (ResolvedPopoutLayoutConfig = {}));

/** @public */
var ItemConfig;
(function (ItemConfig) {
    /** @internal */
    function resolve(itemConfig, rowAndColumnChildLegacySizeDefault) {
        switch (itemConfig.type) {
            case ItemType.ground:
                throw new ConfigurationError('ItemConfig cannot specify type ground', JSON.stringify(itemConfig));
            case ItemType.row:
            case ItemType.column:
                return RowOrColumnItemConfig.resolve(itemConfig, rowAndColumnChildLegacySizeDefault);
            case ItemType.stack:
                return StackItemConfig.resolve(itemConfig, rowAndColumnChildLegacySizeDefault);
            case ItemType.component:
                return ComponentItemConfig.resolve(itemConfig, rowAndColumnChildLegacySizeDefault);
            default:
                throw new UnreachableCaseError('UCUICR55499', itemConfig.type);
        }
    }
    ItemConfig.resolve = resolve;
    /** @internal */
    function resolveContent(content) {
        if (content === undefined) {
            return [];
        }
        else {
            const count = content.length;
            const result = new Array(count);
            for (let i = 0; i < count; i++) {
                result[i] = ItemConfig.resolve(content[i], false);
            }
            return result;
        }
    }
    ItemConfig.resolveContent = resolveContent;
    /** @internal */
    function resolveId(id) {
        if (id === undefined) {
            return ResolvedItemConfig.defaults.id;
        }
        else {
            if (Array.isArray(id)) {
                if (id.length === 0) {
                    return ResolvedItemConfig.defaults.id;
                }
                else {
                    return id[0];
                }
            }
            else {
                return id;
            }
        }
    }
    ItemConfig.resolveId = resolveId;
    /** @internal */
    function resolveSize(size, width, height, rowAndColumnChildLegacySizeDefault) {
        // Remove support for rowAndColumnChildLegacySizeDefault in a major version release
        if (size !== undefined) {
            return parseSize(size, [SizeUnitEnum.Percent, SizeUnitEnum.Fractional]);
        }
        else {
            if (width !== undefined || height !== undefined) {
                if (width !== undefined) {
                    return { size: width, sizeUnit: SizeUnitEnum.Percent };
                }
                else {
                    if (height !== undefined) {
                        return { size: height, sizeUnit: SizeUnitEnum.Percent };
                    }
                    else {
                        throw new UnexpectedUndefinedError('CRS33390');
                    }
                }
            }
            else {
                if (rowAndColumnChildLegacySizeDefault) {
                    return { size: 50, sizeUnit: SizeUnitEnum.Percent };
                }
                else {
                    return { size: ResolvedItemConfig.defaults.size, sizeUnit: ResolvedItemConfig.defaults.sizeUnit };
                }
            }
        }
    }
    ItemConfig.resolveSize = resolveSize;
    /** @internal */
    function resolveMinSize(minSize, minWidth, minHeight) {
        if (minSize !== undefined) {
            return parseSize(minSize, [SizeUnitEnum.Pixel]);
        }
        else {
            const minWidthDefined = minWidth !== undefined;
            const minHeightDefined = minHeight !== undefined;
            if (minWidthDefined || minHeightDefined) {
                if (minWidthDefined) {
                    return { size: minWidth, sizeUnit: SizeUnitEnum.Pixel };
                }
                else {
                    return { size: minHeight, sizeUnit: SizeUnitEnum.Pixel };
                }
            }
            else {
                return { size: ResolvedItemConfig.defaults.minSize, sizeUnit: ResolvedItemConfig.defaults.minSizeUnit };
            }
        }
    }
    ItemConfig.resolveMinSize = resolveMinSize;
    /** @internal */
    function calculateSizeWidthHeightSpecificationType(config) {
        if (config.size !== undefined) {
            return 1 /* SizeWidthHeightSpecificationType.Size */;
        }
        else {
            if (config.width !== undefined || config.height !== undefined) {
                return 2 /* SizeWidthHeightSpecificationType.WidthOrHeight */;
            }
            else {
                return 0 /* SizeWidthHeightSpecificationType.None */;
            }
        }
    }
    ItemConfig.calculateSizeWidthHeightSpecificationType = calculateSizeWidthHeightSpecificationType;
    function isGround(config) {
        return config.type === ItemType.ground;
    }
    ItemConfig.isGround = isGround;
    function isRow(config) {
        return config.type === ItemType.row;
    }
    ItemConfig.isRow = isRow;
    function isColumn(config) {
        return config.type === ItemType.column;
    }
    ItemConfig.isColumn = isColumn;
    function isStack(config) {
        return config.type === ItemType.stack;
    }
    ItemConfig.isStack = isStack;
    function isComponent(config) {
        return config.type === ItemType.component;
    }
    ItemConfig.isComponent = isComponent;
})(ItemConfig || (ItemConfig = {}));
/** @public */
var HeaderedItemConfig;
(function (HeaderedItemConfig) {
    const legacyMaximisedId = '__glMaximised';
    (function (Header) {
        function resolve(header, hasHeaders) {
            var _a;
            if (header === undefined && hasHeaders === undefined) {
                return undefined;
            }
            else {
                const result = {
                    show: (_a = header === null || header === void 0 ? void 0 : header.show) !== null && _a !== void 0 ? _a : (hasHeaders === undefined ? undefined : hasHeaders ? ResolvedLayoutConfig.Header.defaults.show : false),
                    popout: header === null || header === void 0 ? void 0 : header.popout,
                    maximise: header === null || header === void 0 ? void 0 : header.maximise,
                    close: header === null || header === void 0 ? void 0 : header.close,
                    minimise: header === null || header === void 0 ? void 0 : header.minimise,
                    tabDropdown: header === null || header === void 0 ? void 0 : header.tabDropdown,
                };
                return result;
            }
        }
        Header.resolve = resolve;
    })(HeaderedItemConfig.Header || (HeaderedItemConfig.Header = {}));
    /** @internal */
    function resolveIdAndMaximised(config) {
        let id;
        // To support legacy configs with Id saved as an array of string, assign config.id to a type which includes string array
        let legacyId = config.id;
        let legacyMaximised = false;
        if (legacyId === undefined) {
            id = ResolvedItemConfig.defaults.id;
        }
        else {
            if (Array.isArray(legacyId)) {
                const idx = legacyId.findIndex((id) => id === legacyMaximisedId);
                if (idx > 0) {
                    legacyMaximised = true;
                    legacyId = legacyId.splice(idx, 1);
                }
                if (legacyId.length > 0) {
                    id = legacyId[0];
                }
                else {
                    id = ResolvedItemConfig.defaults.id;
                }
            }
            else {
                id = legacyId;
            }
        }
        let maximised;
        if (config.maximised !== undefined) {
            maximised = config.maximised;
        }
        else {
            maximised = legacyMaximised;
        }
        return { id, maximised };
    }
    HeaderedItemConfig.resolveIdAndMaximised = resolveIdAndMaximised;
})(HeaderedItemConfig || (HeaderedItemConfig = {}));
/** @public */
var StackItemConfig;
(function (StackItemConfig) {
    /** @internal */
    function resolve(itemConfig, rowAndColumnChildLegacySizeDefault) {
        var _a, _b;
        const { id, maximised } = HeaderedItemConfig.resolveIdAndMaximised(itemConfig);
        const { size, sizeUnit } = ItemConfig.resolveSize(itemConfig.size, itemConfig.width, itemConfig.height, rowAndColumnChildLegacySizeDefault);
        const { size: minSize, sizeUnit: minSizeUnit } = ItemConfig.resolveMinSize(itemConfig.minSize, itemConfig.minWidth, itemConfig.minHeight);
        const result = {
            type: ItemType.stack,
            content: resolveContent(itemConfig.content),
            size,
            sizeUnit,
            minSize,
            minSizeUnit,
            id,
            maximised,
            isClosable: (_a = itemConfig.isClosable) !== null && _a !== void 0 ? _a : ResolvedItemConfig.defaults.isClosable,
            activeItemIndex: (_b = itemConfig.activeItemIndex) !== null && _b !== void 0 ? _b : ResolvedStackItemConfig.defaultActiveItemIndex,
            header: HeaderedItemConfig.Header.resolve(itemConfig.header, itemConfig.hasHeaders),
        };
        return result;
    }
    StackItemConfig.resolve = resolve;
    /** @internal */
    function fromResolved(resolvedConfig) {
        const result = {
            type: ItemType.stack,
            content: fromResolvedContent(resolvedConfig.content),
            size: formatSize(resolvedConfig.size, resolvedConfig.sizeUnit),
            minSize: formatUndefinableSize(resolvedConfig.minSize, resolvedConfig.minSizeUnit),
            id: resolvedConfig.id,
            maximised: resolvedConfig.maximised,
            isClosable: resolvedConfig.isClosable,
            activeItemIndex: resolvedConfig.activeItemIndex,
            header: ResolvedHeaderedItemConfig.Header.createCopy(resolvedConfig.header),
        };
        return result;
    }
    StackItemConfig.fromResolved = fromResolved;
    /** @internal */
    function resolveContent(content) {
        if (content === undefined) {
            return [];
        }
        else {
            const count = content.length;
            const result = new Array(count);
            for (let i = 0; i < count; i++) {
                const childItemConfig = content[i];
                const itemConfig = ItemConfig.resolve(childItemConfig, false);
                if (!ResolvedItemConfig.isComponentItem(itemConfig)) {
                    throw new AssertError('UCUSICRC91114', JSON.stringify(itemConfig));
                }
                else {
                    result[i] = itemConfig;
                }
            }
            return result;
        }
    }
    /** @internal */
    function fromResolvedContent(resolvedContent) {
        const count = resolvedContent.length;
        const result = new Array(count);
        for (let i = 0; i < count; i++) {
            const resolvedContentConfig = resolvedContent[i];
            result[i] = ComponentItemConfig.fromResolved(resolvedContentConfig);
        }
        return result;
    }
})(StackItemConfig || (StackItemConfig = {}));
/** @public */
var ComponentItemConfig;
(function (ComponentItemConfig) {
    /** @internal */
    function resolve(itemConfig, rowAndColumnChildLegacySizeDefault) {
        var _a, _b, _c;
        let componentType = itemConfig.componentType;
        if (componentType === undefined) {
            componentType = itemConfig.componentName;
        }
        if (componentType === undefined) {
            throw new Error('ComponentItemConfig.componentType is undefined');
        }
        else {
            const { id, maximised } = HeaderedItemConfig.resolveIdAndMaximised(itemConfig);
            let title;
            if (itemConfig.title === undefined || itemConfig.title === '') {
                title = ComponentItemConfig.componentTypeToTitle(componentType);
            }
            else {
                title = itemConfig.title;
            }
            const { size, sizeUnit } = ItemConfig.resolveSize(itemConfig.size, itemConfig.width, itemConfig.height, rowAndColumnChildLegacySizeDefault);
            const { size: minSize, sizeUnit: minSizeUnit } = ItemConfig.resolveMinSize(itemConfig.minSize, itemConfig.minWidth, itemConfig.minHeight);
            const result = {
                type: itemConfig.type,
                content: [],
                size,
                sizeUnit,
                minSize,
                minSizeUnit,
                id,
                maximised,
                isClosable: (_a = itemConfig.isClosable) !== null && _a !== void 0 ? _a : ResolvedItemConfig.defaults.isClosable,
                reorderEnabled: (_b = itemConfig.reorderEnabled) !== null && _b !== void 0 ? _b : ResolvedComponentItemConfig.defaultReorderEnabled,
                title,
                header: HeaderedItemConfig.Header.resolve(itemConfig.header, itemConfig.hasHeaders),
                componentType,
                componentState: (_c = itemConfig.componentState) !== null && _c !== void 0 ? _c : {},
            };
            return result;
        }
    }
    ComponentItemConfig.resolve = resolve;
    /** @internal */
    function fromResolved(resolvedConfig) {
        const result = {
            type: ItemType.component,
            size: formatSize(resolvedConfig.size, resolvedConfig.sizeUnit),
            minSize: formatUndefinableSize(resolvedConfig.minSize, resolvedConfig.minSizeUnit),
            id: resolvedConfig.id,
            maximised: resolvedConfig.maximised,
            isClosable: resolvedConfig.isClosable,
            reorderEnabled: resolvedConfig.reorderEnabled,
            title: resolvedConfig.title,
            header: ResolvedHeaderedItemConfig.Header.createCopy(resolvedConfig.header),
            componentType: resolvedConfig.componentType,
            componentState: deepExtendValue(undefined, resolvedConfig.componentState),
        };
        return result;
    }
    ComponentItemConfig.fromResolved = fromResolved;
    function componentTypeToTitle(componentType) {
        const componentTypeType = typeof componentType;
        switch (componentTypeType) {
            case 'string': return componentType;
            case 'number': return componentType.toString();
            case 'boolean': return componentType.toString();
            default: return '';
        }
    }
    ComponentItemConfig.componentTypeToTitle = componentTypeToTitle;
})(ComponentItemConfig || (ComponentItemConfig = {}));
/** @public */
var RowOrColumnItemConfig;
(function (RowOrColumnItemConfig) {
    function isChildItemConfig(itemConfig) {
        switch (itemConfig.type) {
            case ItemType.row:
            case ItemType.column:
            case ItemType.stack:
            case ItemType.component:
                return true;
            case ItemType.ground:
                return false;
            default:
                throw new UnreachableCaseError('UROCOSPCICIC13687', itemConfig.type);
        }
    }
    RowOrColumnItemConfig.isChildItemConfig = isChildItemConfig;
    /** @internal */
    function resolve(itemConfig, rowAndColumnChildLegacySizeDefault) {
        var _a;
        const { size, sizeUnit } = ItemConfig.resolveSize(itemConfig.size, itemConfig.width, itemConfig.height, rowAndColumnChildLegacySizeDefault);
        const { size: minSize, sizeUnit: minSizeUnit } = ItemConfig.resolveMinSize(itemConfig.minSize, itemConfig.minWidth, itemConfig.minHeight);
        const result = {
            type: itemConfig.type,
            content: RowOrColumnItemConfig.resolveContent(itemConfig.content),
            size,
            sizeUnit,
            minSize,
            minSizeUnit,
            id: ItemConfig.resolveId(itemConfig.id),
            isClosable: (_a = itemConfig.isClosable) !== null && _a !== void 0 ? _a : ResolvedItemConfig.defaults.isClosable,
        };
        return result;
    }
    RowOrColumnItemConfig.resolve = resolve;
    /** @internal */
    function fromResolved(resolvedConfig) {
        const result = {
            type: resolvedConfig.type,
            content: fromResolvedContent(resolvedConfig.content),
            size: formatSize(resolvedConfig.size, resolvedConfig.sizeUnit),
            minSize: formatUndefinableSize(resolvedConfig.minSize, resolvedConfig.minSizeUnit),
            id: resolvedConfig.id,
            isClosable: resolvedConfig.isClosable,
        };
        return result;
    }
    RowOrColumnItemConfig.fromResolved = fromResolved;
    /** @internal */
    function resolveContent(content) {
        if (content === undefined) {
            return [];
        }
        else {
            const count = content.length;
            const childItemConfigs = new Array(count);
            let widthOrHeightSpecifiedAtLeastOnce = false;
            let sizeSpecifiedAtLeastOnce = false;
            for (let i = 0; i < count; i++) {
                const childItemConfig = content[i];
                if (!RowOrColumnItemConfig.isChildItemConfig(childItemConfig)) {
                    throw new ConfigurationError('ItemConfig is not Row, Column or Stack', childItemConfig);
                }
                else {
                    if (!sizeSpecifiedAtLeastOnce) {
                        const sizeWidthHeightSpecificationType = ItemConfig.calculateSizeWidthHeightSpecificationType(childItemConfig);
                        switch (sizeWidthHeightSpecificationType) {
                            case 0 /* ItemConfig.SizeWidthHeightSpecificationType.None */:
                                break;
                            case 2 /* ItemConfig.SizeWidthHeightSpecificationType.WidthOrHeight */:
                                widthOrHeightSpecifiedAtLeastOnce = true;
                                break;
                            case 1 /* ItemConfig.SizeWidthHeightSpecificationType.Size */:
                                sizeSpecifiedAtLeastOnce = true;
                                break;
                            default:
                                throw new UnreachableCaseError('ROCICRC87556', sizeWidthHeightSpecificationType);
                        }
                    }
                    childItemConfigs[i] = childItemConfig;
                }
            }
            let legacySizeDefault;
            if (sizeSpecifiedAtLeastOnce) {
                legacySizeDefault = false;
            }
            else {
                if (widthOrHeightSpecifiedAtLeastOnce) {
                    legacySizeDefault = true;
                }
                else {
                    legacySizeDefault = false;
                }
            }
            const result = new Array(count);
            for (let i = 0; i < count; i++) {
                const childItemConfig = childItemConfigs[i];
                const resolvedChildItemConfig = ItemConfig.resolve(childItemConfig, legacySizeDefault);
                if (!ResolvedRowOrColumnItemConfig.isChildItemConfig(resolvedChildItemConfig)) {
                    throw new AssertError('UROCOSPIC99512', JSON.stringify(resolvedChildItemConfig));
                }
                else {
                    result[i] = resolvedChildItemConfig;
                }
            }
            return result;
        }
    }
    RowOrColumnItemConfig.resolveContent = resolveContent;
    /** @internal */
    function fromResolvedContent(resolvedContent) {
        const count = resolvedContent.length;
        const result = new Array(count);
        for (let i = 0; i < count; i++) {
            const resolvedContentConfig = resolvedContent[i];
            const type = resolvedContentConfig.type;
            let contentConfig;
            switch (type) {
                case ItemType.row:
                case ItemType.column:
                    contentConfig = RowOrColumnItemConfig.fromResolved(resolvedContentConfig);
                    break;
                case ItemType.stack:
                    contentConfig = StackItemConfig.fromResolved(resolvedContentConfig);
                    break;
                case ItemType.component:
                    contentConfig = ComponentItemConfig.fromResolved(resolvedContentConfig);
                    break;
                default:
                    throw new UnreachableCaseError('ROCICFRC44797', type);
            }
            result[i] = contentConfig;
        }
        return result;
    }
})(RowOrColumnItemConfig || (RowOrColumnItemConfig = {}));
/** @public */
var RootItemConfig;
(function (RootItemConfig) {
    function isRootItemConfig(itemConfig) {
        switch (itemConfig.type) {
            case ItemType.row:
            case ItemType.column:
            case ItemType.stack:
            case ItemType.component:
                return true;
            case ItemType.ground:
                return false;
            default:
                throw new UnreachableCaseError('URICIR23687', itemConfig.type);
        }
    }
    RootItemConfig.isRootItemConfig = isRootItemConfig;
    /** @internal */
    function resolve(itemConfig) {
        if (itemConfig === undefined) {
            return undefined;
        }
        else {
            const result = ItemConfig.resolve(itemConfig, false);
            if (!ResolvedRootItemConfig.isRootItemConfig(result)) {
                throw new ConfigurationError('ItemConfig is not Row, Column or Stack', JSON.stringify(itemConfig));
            }
            else {
                return result;
            }
        }
    }
    RootItemConfig.resolve = resolve;
    /** @internal */
    function fromResolvedOrUndefined(resolvedItemConfig) {
        if (resolvedItemConfig === undefined) {
            return undefined;
        }
        else {
            const type = resolvedItemConfig.type;
            switch (type) {
                case ItemType.row:
                case ItemType.column:
                    return RowOrColumnItemConfig.fromResolved(resolvedItemConfig);
                case ItemType.stack:
                    return StackItemConfig.fromResolved(resolvedItemConfig);
                case ItemType.component:
                    return ComponentItemConfig.fromResolved(resolvedItemConfig);
                default:
                    throw new UnreachableCaseError('RICFROU89921', type);
            }
        }
    }
    RootItemConfig.fromResolvedOrUndefined = fromResolvedOrUndefined;
})(RootItemConfig || (RootItemConfig = {}));
/** Use to specify LayoutConfig with defaults or deserialise a LayoutConfig.
 * Deserialisation will handle backwards compatibility.
 * Note that LayoutConfig should be used for serialisation (not LayoutConfig)
 * @public
 */
var LayoutConfig;
(function (LayoutConfig) {
    (function (Settings) {
        function resolve(settings) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            const result = {
                useDragAndDrop: (_a = settings === null || settings === void 0 ? void 0 : settings.useDragAndDrop) !== null && _a !== void 0 ? _a : false,
                copyForDragImage: settings === null || settings === void 0 ? void 0 : settings.copyForDragImage,
                showOldPositionWhenDragging: (_b = settings === null || settings === void 0 ? void 0 : settings.showOldPositionWhenDragging) !== null && _b !== void 0 ? _b : ResolvedLayoutConfig.Settings.defaults.showOldPositionWhenDragging,
                dragDataMimetype: (_c = settings === null || settings === void 0 ? void 0 : settings.dragDataMimetype) !== null && _c !== void 0 ? _c : ResolvedLayoutConfig.Settings.defaults.dragDataMimetype,
                checkGlWindowKey: (_d = settings === null || settings === void 0 ? void 0 : settings.checkGlWindowKey) !== null && _d !== void 0 ? _d : true,
                constrainDragToContainer: (_e = settings === null || settings === void 0 ? void 0 : settings.constrainDragToContainer) !== null && _e !== void 0 ? _e : ResolvedLayoutConfig.Settings.defaults.constrainDragToContainer,
                reorderEnabled: (_f = settings === null || settings === void 0 ? void 0 : settings.reorderEnabled) !== null && _f !== void 0 ? _f : ResolvedLayoutConfig.Settings.defaults.reorderEnabled,
                popoutWholeStack: (_g = settings === null || settings === void 0 ? void 0 : settings.popoutWholeStack) !== null && _g !== void 0 ? _g : ResolvedLayoutConfig.Settings.defaults.popoutWholeStack,
                blockedPopoutsThrowError: (_h = settings === null || settings === void 0 ? void 0 : settings.blockedPopoutsThrowError) !== null && _h !== void 0 ? _h : ResolvedLayoutConfig.Settings.defaults.blockedPopoutsThrowError,
                closePopoutsOnUnload: (_j = settings === null || settings === void 0 ? void 0 : settings.closePopoutsOnUnload) !== null && _j !== void 0 ? _j : ResolvedLayoutConfig.Settings.defaults.closePopoutsOnUnload,
                responsiveMode: (_k = settings === null || settings === void 0 ? void 0 : settings.responsiveMode) !== null && _k !== void 0 ? _k : ResolvedLayoutConfig.Settings.defaults.responsiveMode,
                tabOverlapAllowance: (_l = settings === null || settings === void 0 ? void 0 : settings.tabOverlapAllowance) !== null && _l !== void 0 ? _l : ResolvedLayoutConfig.Settings.defaults.tabOverlapAllowance,
                reorderOnTabMenuClick: (_m = settings === null || settings === void 0 ? void 0 : settings.reorderOnTabMenuClick) !== null && _m !== void 0 ? _m : ResolvedLayoutConfig.Settings.defaults.reorderOnTabMenuClick,
                tabControlOffset: (_o = settings === null || settings === void 0 ? void 0 : settings.tabControlOffset) !== null && _o !== void 0 ? _o : ResolvedLayoutConfig.Settings.defaults.tabControlOffset,
                popInOnClose: (_p = settings === null || settings === void 0 ? void 0 : settings.popInOnClose) !== null && _p !== void 0 ? _p : ResolvedLayoutConfig.Settings.defaults.popInOnClose,
            };
            return result;
        }
        Settings.resolve = resolve;
    })(LayoutConfig.Settings || (LayoutConfig.Settings = {}));
    (function (Dimensions) {
        /** @internal */
        function resolve(dimensions) {
            var _a, _b, _c, _d, _e, _f;
            const { size: defaultMinItemHeight, sizeUnit: defaultMinItemHeightUnit } = Dimensions.resolveDefaultMinItemHeight(dimensions);
            const { size: defaultMinItemWidth, sizeUnit: defaultMinItemWidthUnit } = Dimensions.resolveDefaultMinItemWidth(dimensions);
            const result = {
                borderWidth: (_a = dimensions === null || dimensions === void 0 ? void 0 : dimensions.borderWidth) !== null && _a !== void 0 ? _a : ResolvedLayoutConfig.Dimensions.defaults.borderWidth,
                borderGrabWidth: (_b = dimensions === null || dimensions === void 0 ? void 0 : dimensions.borderGrabWidth) !== null && _b !== void 0 ? _b : ResolvedLayoutConfig.Dimensions.defaults.borderGrabWidth,
                contentInset: (_c = dimensions === null || dimensions === void 0 ? void 0 : dimensions.contentInset) !== null && _c !== void 0 ? _c : ResolvedLayoutConfig.Dimensions.defaults.contentInset,
                defaultMinItemHeight,
                defaultMinItemHeightUnit,
                defaultMinItemWidth,
                defaultMinItemWidthUnit,
                headerHeight: (_d = dimensions === null || dimensions === void 0 ? void 0 : dimensions.headerHeight) !== null && _d !== void 0 ? _d : ResolvedLayoutConfig.Dimensions.defaults.headerHeight,
                dragProxyWidth: (_e = dimensions === null || dimensions === void 0 ? void 0 : dimensions.dragProxyWidth) !== null && _e !== void 0 ? _e : ResolvedLayoutConfig.Dimensions.defaults.dragProxyWidth,
                dragProxyHeight: (_f = dimensions === null || dimensions === void 0 ? void 0 : dimensions.dragProxyHeight) !== null && _f !== void 0 ? _f : ResolvedLayoutConfig.Dimensions.defaults.dragProxyHeight,
            };
            return result;
        }
        Dimensions.resolve = resolve;
        /** @internal */
        function fromResolved(resolvedDimensions) {
            const result = {
                borderWidth: resolvedDimensions.borderWidth,
                borderGrabWidth: resolvedDimensions.borderGrabWidth,
                defaultMinItemHeight: formatSize(resolvedDimensions.defaultMinItemHeight, resolvedDimensions.defaultMinItemHeightUnit),
                defaultMinItemWidth: formatSize(resolvedDimensions.defaultMinItemWidth, resolvedDimensions.defaultMinItemWidthUnit),
                headerHeight: resolvedDimensions.headerHeight,
                dragProxyWidth: resolvedDimensions.dragProxyWidth,
                dragProxyHeight: resolvedDimensions.dragProxyHeight,
            };
            return result;
        }
        Dimensions.fromResolved = fromResolved;
        /** @internal */
        function resolveDefaultMinItemHeight(dimensions) {
            const height = dimensions === null || dimensions === void 0 ? void 0 : dimensions.defaultMinItemHeight;
            if (height === undefined) {
                return { size: ResolvedLayoutConfig.Dimensions.defaults.defaultMinItemHeight, sizeUnit: ResolvedLayoutConfig.Dimensions.defaults.defaultMinItemHeightUnit };
            }
            else {
                return parseSize(height, [SizeUnitEnum.Pixel]);
            }
        }
        Dimensions.resolveDefaultMinItemHeight = resolveDefaultMinItemHeight;
        /** @internal */
        function resolveDefaultMinItemWidth(dimensions) {
            const width = dimensions === null || dimensions === void 0 ? void 0 : dimensions.defaultMinItemWidth;
            if (width === undefined) {
                return { size: ResolvedLayoutConfig.Dimensions.defaults.defaultMinItemWidth, sizeUnit: ResolvedLayoutConfig.Dimensions.defaults.defaultMinItemWidthUnit };
            }
            else {
                return parseSize(width, [SizeUnitEnum.Pixel]);
            }
        }
        Dimensions.resolveDefaultMinItemWidth = resolveDefaultMinItemWidth;
    })(LayoutConfig.Dimensions || (LayoutConfig.Dimensions = {}));
    (function (Header) {
        /** @internal */
        function resolve(header, settings, labels) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            let show;
            if ((header === null || header === void 0 ? void 0 : header.show) !== undefined) {
                show = header.show;
            }
            else {
                if (settings !== undefined && settings.hasHeaders !== undefined) {
                    show = settings.hasHeaders ? ResolvedLayoutConfig.Header.defaults.show : false;
                }
                else {
                    show = ResolvedLayoutConfig.Header.defaults.show;
                }
            }
            const result = {
                show,
                popout: (_b = (_a = header === null || header === void 0 ? void 0 : header.popout) !== null && _a !== void 0 ? _a : labels === null || labels === void 0 ? void 0 : labels.popout) !== null && _b !== void 0 ? _b : ((settings === null || settings === void 0 ? void 0 : settings.showPopoutIcon) === false ? false : ResolvedLayoutConfig.Header.defaults.popout),
                dock: (_d = (_c = header === null || header === void 0 ? void 0 : header.popin) !== null && _c !== void 0 ? _c : labels === null || labels === void 0 ? void 0 : labels.popin) !== null && _d !== void 0 ? _d : ResolvedLayoutConfig.Header.defaults.dock,
                maximise: (_f = (_e = header === null || header === void 0 ? void 0 : header.maximise) !== null && _e !== void 0 ? _e : labels === null || labels === void 0 ? void 0 : labels.maximise) !== null && _f !== void 0 ? _f : ((settings === null || settings === void 0 ? void 0 : settings.showMaximiseIcon) === false ? false : ResolvedLayoutConfig.Header.defaults.maximise),
                close: (_h = (_g = header === null || header === void 0 ? void 0 : header.close) !== null && _g !== void 0 ? _g : labels === null || labels === void 0 ? void 0 : labels.close) !== null && _h !== void 0 ? _h : ((settings === null || settings === void 0 ? void 0 : settings.showCloseIcon) === false ? false : ResolvedLayoutConfig.Header.defaults.close),
                minimise: (_k = (_j = header === null || header === void 0 ? void 0 : header.minimise) !== null && _j !== void 0 ? _j : labels === null || labels === void 0 ? void 0 : labels.minimise) !== null && _k !== void 0 ? _k : ResolvedLayoutConfig.Header.defaults.minimise,
                tabDropdown: (_m = (_l = header === null || header === void 0 ? void 0 : header.tabDropdown) !== null && _l !== void 0 ? _l : labels === null || labels === void 0 ? void 0 : labels.tabDropdown) !== null && _m !== void 0 ? _m : ResolvedLayoutConfig.Header.defaults.tabDropdown,
            };
            return result;
        }
        Header.resolve = resolve;
    })(LayoutConfig.Header || (LayoutConfig.Header = {}));
    function isPopout(config) {
        return 'parentId' in config || 'indexInParent' in config || 'window' in config;
    }
    LayoutConfig.isPopout = isPopout;
    /** @internal */
    function resolve(layoutConfig) {
        if (isPopout(layoutConfig)) {
            return PopoutLayoutConfig.resolve(layoutConfig);
        }
        else {
            let root;
            if (layoutConfig.root !== undefined) {
                root = layoutConfig.root;
            }
            else {
                if (layoutConfig.content !== undefined && layoutConfig.content.length > 0) {
                    root = layoutConfig.content[0];
                }
                else {
                    root = undefined;
                }
            }
            const config = {
                resolved: true,
                root: RootItemConfig.resolve(root),
                openPopouts: LayoutConfig.resolveOpenPopouts(layoutConfig.openPopouts),
                dimensions: LayoutConfig.Dimensions.resolve(layoutConfig.dimensions),
                settings: LayoutConfig.Settings.resolve(layoutConfig.settings),
                header: LayoutConfig.Header.resolve(layoutConfig.header, layoutConfig.settings, layoutConfig.labels),
            };
            return config;
        }
    }
    LayoutConfig.resolve = resolve;
    function fromResolved(config) {
        const result = {
            root: RootItemConfig.fromResolvedOrUndefined(config.root),
            openPopouts: PopoutLayoutConfig.fromResolvedArray(config.openPopouts),
            settings: ResolvedLayoutConfig.Settings.createCopy(config.settings),
            dimensions: LayoutConfig.Dimensions.fromResolved(config.dimensions),
            header: ResolvedLayoutConfig.Header.createCopy(config.header),
        };
        return result;
    }
    LayoutConfig.fromResolved = fromResolved;
    function isResolved(configOrResolvedConfig) {
        const config = configOrResolvedConfig;
        return config.resolved !== undefined && (config.resolved === true);
    }
    LayoutConfig.isResolved = isResolved;
    /** @internal */
    function resolveOpenPopouts(popoutConfigs) {
        if (popoutConfigs === undefined) {
            return [];
        }
        else {
            const count = popoutConfigs.length;
            const result = new Array(count);
            for (let i = 0; i < count; i++) {
                result[i] = PopoutLayoutConfig.resolve(popoutConfigs[i]);
            }
            return result;
        }
    }
    LayoutConfig.resolveOpenPopouts = resolveOpenPopouts;
})(LayoutConfig || (LayoutConfig = {}));
/** @public */
var PopoutLayoutConfig;
(function (PopoutLayoutConfig) {
    (function (Window) {
        /** @internal */
        function resolve(window, dimensions) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            let result;
            const defaults = ResolvedPopoutLayoutConfig.Window.defaults;
            if (window !== undefined) {
                result = {
                    width: (_a = window.width) !== null && _a !== void 0 ? _a : defaults.width,
                    height: (_b = window.height) !== null && _b !== void 0 ? _b : defaults.height,
                    left: (_c = window.left) !== null && _c !== void 0 ? _c : defaults.left,
                    top: (_d = window.top) !== null && _d !== void 0 ? _d : defaults.top,
                };
            }
            else {
                result = {
                    width: (_e = dimensions === null || dimensions === void 0 ? void 0 : dimensions.width) !== null && _e !== void 0 ? _e : defaults.width,
                    height: (_f = dimensions === null || dimensions === void 0 ? void 0 : dimensions.height) !== null && _f !== void 0 ? _f : defaults.height,
                    left: (_g = dimensions === null || dimensions === void 0 ? void 0 : dimensions.left) !== null && _g !== void 0 ? _g : defaults.left,
                    top: (_h = dimensions === null || dimensions === void 0 ? void 0 : dimensions.top) !== null && _h !== void 0 ? _h : defaults.top,
                };
            }
            return result;
        }
        Window.resolve = resolve;
        /** @internal */
        function fromResolved(resolvedWindow) {
            const result = {
                width: resolvedWindow.width === null ? undefined : resolvedWindow.width,
                height: resolvedWindow.height === null ? undefined : resolvedWindow.height,
                left: resolvedWindow.left === null ? undefined : resolvedWindow.left,
                top: resolvedWindow.top === null ? undefined : resolvedWindow.top,
            };
            return result;
        }
        Window.fromResolved = fromResolved;
    })(PopoutLayoutConfig.Window || (PopoutLayoutConfig.Window = {}));
    /** @internal */
    function resolve(popoutConfig) {
        var _a, _b;
        let root;
        if (popoutConfig.root !== undefined) {
            root = popoutConfig.root;
        }
        else {
            if (popoutConfig.content !== undefined && popoutConfig.content.length > 0) {
                root = popoutConfig.content[0];
            }
            else {
                root = undefined;
            }
        }
        const config = {
            root: RootItemConfig.resolve(root),
            openPopouts: LayoutConfig.resolveOpenPopouts(popoutConfig.openPopouts),
            dimensions: LayoutConfig.Dimensions.resolve(popoutConfig.dimensions),
            settings: LayoutConfig.Settings.resolve(popoutConfig.settings),
            header: LayoutConfig.Header.resolve(popoutConfig.header, popoutConfig.settings, popoutConfig.labels),
            parentId: (_a = popoutConfig.parentId) !== null && _a !== void 0 ? _a : null,
            indexInParent: (_b = popoutConfig.indexInParent) !== null && _b !== void 0 ? _b : null,
            window: PopoutLayoutConfig.Window.resolve(popoutConfig.window, popoutConfig.dimensions),
            resolved: true,
        };
        return config;
    }
    PopoutLayoutConfig.resolve = resolve;
    /** @internal */
    function fromResolved(resolvedConfig) {
        const result = {
            root: RootItemConfig.fromResolvedOrUndefined(resolvedConfig.root),
            openPopouts: fromResolvedArray(resolvedConfig.openPopouts),
            dimensions: LayoutConfig.Dimensions.fromResolved(resolvedConfig.dimensions),
            settings: ResolvedLayoutConfig.Settings.createCopy(resolvedConfig.settings),
            header: ResolvedLayoutConfig.Header.createCopy(resolvedConfig.header),
            parentId: resolvedConfig.parentId,
            indexInParent: resolvedConfig.indexInParent,
            window: PopoutLayoutConfig.Window.fromResolved(resolvedConfig.window),
        };
        return result;
    }
    PopoutLayoutConfig.fromResolved = fromResolved;
    /** @internal */
    function fromResolvedArray(resolvedArray) {
        const resolvedOpenPopoutCount = resolvedArray.length;
        const result = new Array(resolvedOpenPopoutCount);
        for (let i = 0; i < resolvedOpenPopoutCount; i++) {
            const resolvedOpenPopout = resolvedArray[i];
            result[i] = PopoutLayoutConfig.fromResolved(resolvedOpenPopout);
        }
        return result;
    }
    PopoutLayoutConfig.fromResolvedArray = fromResolvedArray;
})(PopoutLayoutConfig || (PopoutLayoutConfig = {}));
/** @internal */
function parseSize(sizeString, allowableSizeUnits) {
    const { numericPart: digitsPart, firstNonNumericCharPart: firstNonDigitPart } = splitStringAtFirstNonNumericChar(sizeString);
    const size = Number.parseInt(digitsPart, 10);
    if (isNaN(size)) {
        throw new ConfigurationError(`${i18nStrings[7 /* I18nStringId.InvalidNumberPartInSizeString */]}: ${sizeString}`);
    }
    else {
        const sizeUnit = SizeUnitEnum.tryParse(firstNonDigitPart);
        if (sizeUnit === undefined) {
            throw new ConfigurationError(`${i18nStrings[8 /* I18nStringId.UnknownUnitInSizeString */]}: ${sizeString}`);
        }
        else {
            if (!allowableSizeUnits.includes(sizeUnit)) {
                throw new ConfigurationError(`${i18nStrings[9 /* I18nStringId.UnsupportedUnitInSizeString */]}: ${sizeString}`);
            }
            else {
                return { size, sizeUnit };
            }
        }
    }
}
/** @internal */
function formatSize(size, sizeUnit) {
    return size.toString(10) + SizeUnitEnum.format(sizeUnit);
}
/** @internal */
function formatUndefinableSize(size, sizeUnit) {
    if (size === undefined) {
        return undefined;
    }
    else {
        return size.toString(10) + SizeUnitEnum.format(sizeUnit);
    }
}

/**
 * A generic and very fast EventEmitter implementation. On top of emitting the actual event it emits an
 * {@link (EventEmitter:namespace).ALL_EVENT} event for every event triggered. This allows to hook into it and proxy events forwards
 * @public
 */
class EventEmitter {
    constructor() {
        /** @internal */
        this._allEventSubscriptions = [];
        /** @internal */
        this._subscriptionsMap = new Map();
        /**
         * Alias for off
         */
        this.unbind = this.removeEventListener;
        /**
         * Alias for emit
         */
        this.trigger = this.emit;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tryBubbleEvent(name, args) {
        // overridden by ContentItem
    }
    /**
     * Emit an event and notify listeners
     *
     * @param eventName - The name of the event
     * @param args - Additional arguments that will be passed to the listener
     */
    emit(eventName, ...args) {
        let subcriptions = this._subscriptionsMap.get(eventName);
        if (subcriptions !== undefined) {
            subcriptions = subcriptions.slice();
            for (let i = 0; i < subcriptions.length; i++) {
                const subscription = subcriptions[i];
                subscription(...args);
            }
        }
        this.emitAllEvent(eventName, args);
        this.tryBubbleEvent(eventName, args);
    }
    /** @internal */
    emitUnknown(eventName, ...args) {
        let subs = this._subscriptionsMap.get(eventName);
        if (subs !== undefined) {
            subs = subs.slice();
            for (let i = 0; i < subs.length; i++) {
                subs[i](...args);
            }
        }
        this.emitAllEvent(eventName, args);
        this.tryBubbleEvent(eventName, args);
    }
    /* @internal **/
    emitBaseBubblingEvent(eventName) {
        const event = new EventEmitter.BubblingEvent(eventName, this);
        this.emitUnknown(eventName, event);
    }
    /** @internal */
    emitUnknownBubblingEvent(eventName) {
        const event = new EventEmitter.BubblingEvent(eventName, this);
        this.emitUnknown(eventName, event);
    }
    /**
     * Removes a listener for an event.
     * @param eventName - The name of the event
     * @param callback - The previously registered callback method (optional)
     */
    removeEventListener(eventName, callback) {
        const unknownCallback = callback;
        this.removeUnknownEventListener(eventName, unknownCallback);
    }
    off(eventName, callback) {
        this.removeEventListener(eventName, callback);
    }
    /**
     * Listen for events
     *
     * @param eventName - The name of the event to listen to
     * @param callback - The callback to execute when the event occurs
     */
    addEventListener(eventName, callback) {
        const unknownCallback = callback;
        this.addUnknownEventListener(eventName, unknownCallback);
    }
    on(eventName, callback) {
        this.addEventListener(eventName, callback);
    }
    /** @internal */
    addUnknownEventListener(eventName, callback) {
        if (eventName === EventEmitter.ALL_EVENT) {
            this._allEventSubscriptions.push(callback);
        }
        else {
            let subscriptions = this._subscriptionsMap.get(eventName);
            if (subscriptions !== undefined) {
                subscriptions.push(callback);
            }
            else {
                subscriptions = [callback];
                this._subscriptionsMap.set(eventName, subscriptions);
            }
        }
    }
    /** @internal */
    removeUnknownEventListener(eventName, callback) {
        if (eventName === EventEmitter.ALL_EVENT) {
            this.removeSubscription(eventName, this._allEventSubscriptions, callback);
        }
        else {
            const subscriptions = this._subscriptionsMap.get(eventName);
            if (subscriptions === undefined) {
                throw new Error('No subscribtions to unsubscribe for event ' + eventName);
            }
            else {
                this.removeSubscription(eventName, subscriptions, callback);
            }
        }
    }
    /** @internal */
    removeSubscription(eventName, subscriptions, callback) {
        const idx = subscriptions.indexOf(callback);
        if (idx < 0) {
            throw new Error('Nothing to unbind for ' + eventName);
        }
        else {
            subscriptions.splice(idx, 1);
        }
    }
    /** @internal */
    emitAllEvent(eventName, args) {
        const allEventSubscriptionsCount = this._allEventSubscriptions.length;
        if (allEventSubscriptionsCount > 0) {
            const unknownArgs = args.slice();
            unknownArgs.unshift(eventName);
            const allEventSubcriptions = this._allEventSubscriptions.slice();
            for (let i = 0; i < allEventSubscriptionsCount; i++) {
                allEventSubcriptions[i](...unknownArgs);
            }
        }
    }
}
/** @public */
(function (EventEmitter) {
    /**
     * The name of the event that's triggered for every event
     */
    EventEmitter.ALL_EVENT = '__all';
    EventEmitter.headerClickEventName = 'stackHeaderClick';
    EventEmitter.headerTouchStartEventName = 'stackHeaderTouchStart';
    class BubblingEvent {
        get name() { return this._name; }
        get target() { return this._target; }
        /** @deprecated Use {@link (EventEmitter:namespace).(BubblingEvent:class).target} instead */
        get origin() { return this._target; }
        get isPropagationStopped() { return this._isPropagationStopped; }
        /** @internal */
        constructor(
        /** @internal */
        _name, 
        /** @internal */
        _target) {
            this._name = _name;
            this._target = _target;
            /** @internal */
            this._isPropagationStopped = false;
        }
        stopPropagation() {
            this._isPropagationStopped = true;
        }
    }
    EventEmitter.BubblingEvent = BubblingEvent;
    class ClickBubblingEvent extends BubblingEvent {
        get mouseEvent() { return this._mouseEvent; }
        /** @internal */
        constructor(name, target, 
        /** @internal */
        _mouseEvent) {
            super(name, target);
            this._mouseEvent = _mouseEvent;
        }
    }
    EventEmitter.ClickBubblingEvent = ClickBubblingEvent;
    class TouchStartBubblingEvent extends BubblingEvent {
        get touchEvent() { return this._touchEvent; }
        /** @internal */
        constructor(name, target, 
        /** @internal */
        _touchEvent) {
            super(name, target);
            this._touchEvent = _touchEvent;
        }
    }
    EventEmitter.TouchStartBubblingEvent = TouchStartBubblingEvent;
})(EventEmitter || (EventEmitter = {}));

/** @public */
class ComponentContainer extends EventEmitter {
    get width() { return this._width; }
    get height() { return this._height; }
    get parent() { return this._parent; }
    /** @internal @deprecated use {@link (ComponentContainer:class).componentType} */
    get componentName() { return this._componentType; }
    get componentType() { return this._componentType; }
    get handle() { return this._handle; }
    get virtual() { return this._element === undefined; }
    get tab() { return this._tab; }
    get title() { return this._parent.title; }
    get layoutManager() { return this._layoutManager; }
    get isHidden() { return !this._visible; }
    get visible() { return this._visible; }
    get state() { return this._state; }
    /** Return the initial component state */
    get initialState() { return this._initialState; }
    /** The inner DOM element where the container's content is intended to live in */
    get element() { return this._element; }
    /** @internal */
    constructor(
    /** @internal */
    _config, 
    /** @internal */
    _parent, 
    /** @internal */
    _layoutManager, 
    /** @internal */
    _updateItemConfigEvent, 
    /** @internal */
    _showEvent, 
    /** @internal */
    _hideEvent, 
    /** @internal */
    _focusEvent, 
    /** @internal */
    _blurEvent) {
        super();
        this._config = _config;
        this._parent = _parent;
        this._layoutManager = _layoutManager;
        this._updateItemConfigEvent = _updateItemConfigEvent;
        this._showEvent = _showEvent;
        this._hideEvent = _hideEvent;
        this._focusEvent = _focusEvent;
        this._blurEvent = _blurEvent;
        /** @internal */
        this._stackMaximised = false;
        this._element = _layoutManager.createComponentElement(_config, this);
        if (this._element) {
            this._element.classList.add("lm_component" /* DomConstants.ClassName.Component */);
            const content = this._element.querySelector(".lm_content");
            this.contentElement = content instanceof HTMLElement ? content
                : this._element;
        }
        this._width = 0;
        this._height = 0;
        this._visible = true;
        this._isShownWithZeroDimensions = true;
        this._componentType = _config.componentType;
        this._isClosable = _config.isClosable;
        this._initialState = _config.componentState;
        this._state = this._initialState;
        this._handle = this.layoutManager.bindComponent(this, _config);
        //FIXME:this.updateElementPositionPropertyFromBoundComponent();
    }
    /** @internal */
    destroy() {
        this.releaseComponent();
        this.stateRequestEvent = undefined;
        this.emit('destroy');
    }
    /** @deprecated use {@link (ComponentContainer:class).element } */
    getElement() {
        return this._element;
    }
    /**
     * Hides the container's component item (and hence, the container) if not already hidden.
     * Emits hide event prior to hiding the container.
     */
    hide() {
        this._hideEvent();
    }
    /**
     * Shows the container's component item (and hence, the container) if not visible.
     * Emits show event prior to hiding the container.
     */
    show() {
        this._showEvent();
    }
    /**
     * Focus this component in Layout.
     */
    focus(suppressEvent = false) {
        this._focusEvent(suppressEvent);
    }
    /**
     * Remove focus from this component in Layout.
     */
    blur(suppressEvent = false) {
        this._blurEvent(suppressEvent);
    }
    /**
     * Set the size from within the container. Traverses up
     * the item tree until it finds a row or column element
     * and resizes its items accordingly.
     *
     * If this container isn't a descendant of a row or column
     * it returns false
     * @param width - The new width in pixel
     * @param height - The new height in pixel
     *
     * @returns resizeSuccesful
     *
     * @internal
     */
    setSize(width, height) {
        let ancestorItem = this._parent;
        if (ancestorItem.isColumn || ancestorItem.isRow || ancestorItem.parent === null) {
            throw new AssertError('ICSSPRC', 'ComponentContainer cannot have RowColumn Parent');
        }
        else {
            let ancestorChildItem;
            do {
                ancestorChildItem = ancestorItem;
                ancestorItem = ancestorItem.parent;
            } while (ancestorItem !== null && !ancestorItem.isColumn && !ancestorItem.isRow);
            if (ancestorItem === null) {
                // no Row or Column found
                return false;
            }
            else {
                // ancestorItem is Row or Column
                const direction = ancestorItem.isColumn ? 'height' : 'width';
                const currentSize = this[direction];
                if (currentSize === null) {
                    throw new UnexpectedNullError('ICSSCS11194');
                }
                else {
                    const newSize = direction === 'height' ? height : width;
                    const totalPixel = currentSize * (1 / (ancestorChildItem.size / 100));
                    const percentage = (newSize / totalPixel) * 100;
                    const delta = (ancestorChildItem.size - percentage) / (ancestorItem.contentItems.length - 1);
                    for (let i = 0; i < ancestorItem.contentItems.length; i++) {
                        const ancestorItemContentItem = ancestorItem.contentItems[i];
                        if (ancestorItemContentItem === ancestorChildItem) {
                            ancestorItemContentItem.size = percentage;
                        }
                        else {
                            ancestorItemContentItem.size += delta;
                        }
                    }
                    ancestorItem.updateSize();
                    return true;
                }
            }
        }
    }
    /**
     * Closes the container if it is closable. Can be called by
     * both the component within at as well as the contentItem containing
     * it. Emits a close event before the container itself is closed.
     */
    close() {
        if (this._isClosable) {
            this.emit('close');
            this._parent.close();
        }
    }
    /** Replaces component without affecting layout */
    replaceComponent(itemConfig) {
        var _a, _b, _c, _d;
        this.releaseComponent();
        if (!ItemConfig.isComponent(itemConfig)) {
            throw new Error('ReplaceComponent not passed a component ItemConfig');
        }
        else {
            const config = ComponentItemConfig.resolve(itemConfig, false);
            this._initialState = config.componentState;
            this._state = this._initialState;
            this._componentType = config.componentType;
            this._updateItemConfigEvent(config);
            this._handle = this.layoutManager.bindComponent(this, config);
            this.updateElementPositionPropertyFromBoundComponent();
            if (this.virtualVisibilityChangeRequiredEvent !== undefined) {
                this.virtualVisibilityChangeRequiredEvent(this, this._visible);
            }
            if (this.virtualRectingRequiredEvent !== undefined) {
                (_b = (_a = this._layoutManager).beforeVirtualRectingEvent) === null || _b === void 0 ? void 0 : _b.call(_a, 1);
                try {
                    this.virtualRectingRequiredEvent(this, this._width, this._height);
                }
                finally {
                    (_d = (_c = this._layoutManager).afterVirtualRectingEvent) === null || _d === void 0 ? void 0 : _d.call(_c);
                }
            }
            this.setBaseLogicalZIndex();
            this.emit('stateChanged');
        }
    }
    /**
     * Returns the initial component state or the latest passed in setState()
     * @returns state
     * @deprecated Use {@link (ComponentContainer:class).initialState}
     */
    getState() {
        return this._state;
    }
    /**
     * Merges the provided state into the current one
     * @deprecated Use {@link (ComponentContainer:class).stateRequestEvent}
     */
    extendState(state) {
        const extendedState = deepExtend(this._state, state);
        this.setState(extendedState);
    }
    /**
     * Sets the component state
     * @deprecated Use {@link (ComponentContainer:class).stateRequestEvent}
     */
    setState(state) {
        this._state = state;
        this._parent.emitBaseBubblingEvent('stateChanged');
    }
    /**
     * Set's the components title
     */
    setTitle(title) {
        this._parent.setTitle(title);
    }
    setTitleRenderer(renderer) {
        this._parent.setTitleRenderer(renderer);
    }
    /** @internal */
    setTab(tab) {
        this._tab = tab;
        this.emit('tab', tab);
    }
    /** @internal */
    setVisibility(value) {
        if (this.virtualVisibilityChangeRequiredEvent !== undefined) {
            this.virtualVisibilityChangeRequiredEvent(this, value);
        }
        if (this._element)
            setElementDisplayVisibility(this._element, value);
        if (value) {
            if (!this._visible) {
                this._visible = true;
                if (this._height === 0 && this._width === 0) {
                    this._isShownWithZeroDimensions = true;
                }
                else {
                    this._isShownWithZeroDimensions = false;
                    this.parent.updateNodeSize();
                    this.emitShow();
                }
            }
            else {
                if (this._isShownWithZeroDimensions && (this._height !== 0 || this._width !== 0)) {
                    this._isShownWithZeroDimensions = false;
                    this.parent.updateNodeSize();
                    this.emitShow();
                }
            }
        }
        else {
            if (this._visible) {
                this._visible = false;
                this._isShownWithZeroDimensions = false;
                this.emitHide();
            }
        }
    }
    setBaseLogicalZIndex() {
        this.setLogicalZIndex(LogicalZIndex.base);
    }
    setLogicalZIndex(logicalZIndex) {
        if (logicalZIndex !== this._logicalZIndex) {
            this._logicalZIndex = logicalZIndex;
            this.notifyVirtualZIndexChangeRequired();
        }
    }
    /**
     * Set the container's size, but considered temporary (for dragging)
     * so don't emit any events.
     * @internal
     */
    enterDragMode(width, height) {
        this._width = width;
        this._height = height;
        if (this._element) {
            setElementWidth(this._element, width);
            setElementHeight(this._element, height);
        }
        this.setLogicalZIndex(LogicalZIndex.drag);
        this.drag();
    }
    /** @internal */
    exitDragMode() {
        this.setBaseLogicalZIndex();
    }
    /** @internal */
    enterStackMaximised() {
        this._stackMaximised = true;
        this.setLogicalZIndex(LogicalZIndex.stackMaximised);
    }
    /** @internal */
    exitStackMaximised() {
        this.setBaseLogicalZIndex();
        this._stackMaximised = false;
    }
    /** @internal */
    drag() {
        var _a, _b, _c, _d;
        if (this.virtualRectingRequiredEvent !== undefined) {
            (_b = (_a = this._layoutManager).beforeVirtualRectingEvent) === null || _b === void 0 ? void 0 : _b.call(_a, 1);
            try {
                this.virtualRectingRequiredEvent(this, this._width, this._height);
            }
            finally {
                (_d = (_c = this._layoutManager).afterVirtualRectingEvent) === null || _d === void 0 ? void 0 : _d.call(_c);
            }
        }
    }
    /** @internal */
    notifyVirtualRectingRequired() {
        if (this.virtualRectingRequiredEvent !== undefined
            || this.notifyResize) {
            if (this.virtualRectingRequiredEvent)
                this.virtualRectingRequiredEvent(this, this._width, this._height);
            const element = this.parent.element;
            //let left = 0, top = 0, width = 0, height = 0;
            if (this.notifyResize && element) {
                const bounds = element.getBoundingClientRect();
                this.notifyResize(this, bounds.left, bounds.top, bounds.width, bounds.height);
            }
            this.emit('resize');
            this.checkShownFromZeroDimensions();
        }
    }
    /** @internal */
    notifyVirtualZIndexChangeRequired() {
        if (this.virtualZIndexChangeRequiredEvent !== undefined) {
            const logicalZIndex = this._logicalZIndex;
            const defaultZIndex = LogicalZIndexToDefaultMap[logicalZIndex];
            this.virtualZIndexChangeRequiredEvent(this, logicalZIndex, defaultZIndex);
        }
    }
    /** @internal */
    updateElementPositionPropertyFromBoundComponent() {
        if (this._element) {
            if (this.virtual) {
                this._element.style.position = 'static';
            }
            else {
                this._element.style.position = ''; // set it back to attribute value
            }
        }
    }
    /** @internal */
    checkShownFromZeroDimensions() {
        if (this._isShownWithZeroDimensions && (this._height !== 0 || this._width !== 0)) {
            this._isShownWithZeroDimensions = false;
            this.emitShow();
        }
    }
    /** @internal */
    emitShow() {
        this.emit('shown');
        this.emit('show');
    }
    /** @internal */
    emitHide() {
        this.emit('hide');
    }
    /** @internal */
    releaseComponent() {
        if (this._stackMaximised) {
            this.exitStackMaximised();
        }
        this.emit('beforeComponentRelease', this._handle);
        this.layoutManager.unbindComponent(this, this._handle);
    }
}

/**
 * Pops a content item out into a new browser window.
 * This is achieved by
 *
 *    - Creating a new configuration with the content item as root element
 *    - Serializing and minifying the configuration
 *    - Opening the current window's URL with the configuration as a GET parameter
 *    - GoldenLayout when opened in the new window will look for the GET parameter
 *      and use it instead of the provided configuration
 * @public
 */
class BrowserPopout extends EventEmitter {
    /**
     * @param _config - GoldenLayout item config
     * @param _initialWindowSize - A map with width, height, top and left
     * @internal
     */
    constructor(
    /** @internal */
    _config, 
    /** @internal */
    _initialWindowSize, 
    /** @internal */
    _layoutManager) {
        super();
        this._config = _config;
        this._initialWindowSize = _initialWindowSize;
        this._layoutManager = _layoutManager;
        this._isInitialised = false;
        this._popoutWindow = null;
        this.createWindow();
    }
    toConfig() {
        var _a, _b;
        if (this._isInitialised === false) {
            throw new Error('Can\'t create config, layout not yet initialised');
        }
        const glInstance = this.getGlInstance();
        const glInstanceConfig = glInstance.saveLayout();
        let left;
        let top;
        if (this._popoutWindow === null) {
            left = null;
            top = null;
        }
        else {
            left = (_a = this._popoutWindow.screenX) !== null && _a !== void 0 ? _a : this._popoutWindow.screenLeft;
            top = (_b = this._popoutWindow.screenY) !== null && _b !== void 0 ? _b : this._popoutWindow.screenTop;
        }
        const window = {
            width: this.getGlInstance().width,
            height: this.getGlInstance().height,
            left,
            top,
        };
        const config = {
            root: glInstanceConfig.root,
            openPopouts: glInstanceConfig.openPopouts,
            settings: glInstanceConfig.settings,
            dimensions: glInstanceConfig.dimensions,
            header: glInstanceConfig.header,
            window,
            parentId: this._config.parentId,
            indexInParent: this._config.indexInParent,
            resolved: true,
        };
        return config;
    }
    getGlInstance() {
        if (this._popoutWindow === null) {
            throw new UnexpectedNullError('BPGGI24693');
        }
        return this._popoutWindow.__glInstance;
    }
    /**
     * Retrieves the native BrowserWindow backing this popout.
     * Might throw an UnexpectedNullError exception when the window is not initialized yet.
     * @public
     */
    getWindow() {
        if (this._popoutWindow === null) {
            throw new UnexpectedNullError('BPGW087215');
        }
        return this._popoutWindow;
    }
    close() {
        if (this.getGlInstance()) {
            this.getGlInstance().closeWindow();
        }
        else {
            try {
                this.getWindow().close();
            }
            catch (e) {
                //
            }
        }
    }
    /**
     * Returns the popped out item to its original position. If the original
     * parent isn't available anymore it falls back to the layout's topmost element
     */
    popIn() {
        let parentItem;
        let index = this._config.indexInParent;
        if (!this._config.parentId) {
            return;
        }
        /*
        * The deepExtend call seems a bit pointless, but it's crucial to
        * copy the config returned by this.getGlInstance().toConfig()
        * onto a new object. Internet Explorer keeps the references
        * to objects on the child window, resulting in the following error
        * once the child window is closed:
        *
        * The callee (server [not server application]) is not available and disappeared
        */
        const glInstanceLayoutConfig = this.getGlInstance().saveLayout();
        const copiedGlInstanceLayoutConfig = deepExtend({}, glInstanceLayoutConfig);
        const copiedRoot = copiedGlInstanceLayoutConfig.root;
        if (copiedRoot === undefined) {
            throw new UnexpectedUndefinedError('BPPIR19998');
        }
        const groundItem = this._layoutManager.groundItem;
        if (groundItem === undefined) {
            throw new UnexpectedUndefinedError('BPPIG34972');
        }
        parentItem = groundItem.getItemsByPopInParentId(this._config.parentId)[0];
        /*
        * Fallback if parentItem is not available. Either add it to the topmost
        * item or make it the topmost item if the layout is empty
        */
        if (!parentItem) {
            if (groundItem.contentItems.length > 0) {
                parentItem = groundItem.contentItems[0];
            }
            else {
                parentItem = groundItem;
            }
            index = 0;
        }
        const newContentItem = this._layoutManager.createAndInitContentItem(copiedRoot, parentItem);
        parentItem.addChild(newContentItem, index);
        if (this._layoutManager.layoutConfig.settings.popInOnClose) {
            this._onClose();
        }
        else {
            this.close();
        }
    }
    /**
     * Creates the URL and window parameter
     * and opens a new window
     * @internal
     */
    createWindow() {
        const url = this.createUrl();
        /**
         * Bogus title to prevent re-usage of existing window with the
         * same title. The actual title will be set by the new window's
         * GoldenLayout instance if it detects that it is in subWindowMode
         */
        const target = Math.floor(Math.random() * 1000000).toString(36);
        /**
         * The options as used in the window.open string
         */
        const features = this.serializeWindowFeatures({
            width: this._initialWindowSize.width,
            height: this._initialWindowSize.height,
            innerWidth: this._initialWindowSize.width,
            innerHeight: this._initialWindowSize.height,
            menubar: 'no',
            toolbar: 'no',
            location: 'no',
            personalbar: 'no',
            resizable: 'yes',
            scrollbars: 'no',
            status: 'no'
        });
        this._popoutWindow = globalThis.open(url, target, features);
        if (!this._popoutWindow) {
            if (this._layoutManager.layoutConfig.settings.blockedPopoutsThrowError === true) {
                const error = new PopoutBlockedError('Popout blocked');
                throw error;
            }
            else {
                return;
            }
        }
        this._popoutWindow.addEventListener('load', () => this.positionWindow(), { passive: true });
        this._popoutWindow.addEventListener('beforeunload', () => {
            if (this._layoutManager.layoutConfig.settings.popInOnClose) {
                this.popIn();
            }
            else {
                this._onClose();
            }
        }, { passive: true });
        /**
         * Polling the childwindow to find out if GoldenLayout has been initialised
         * doesn't seem optimal, but the alternatives - adding a callback to the parent
         * window or raising an event on the window object - both would introduce knowledge
         * about the parent to the child window which we'd rather avoid
         */
        this._checkReadyInterval = setInterval(() => this.checkReady(), 10);
    }
    /** @internal */
    checkReady() {
        if (this._popoutWindow === null) {
            throw new UnexpectedNullError('BPCR01844');
        }
        else {
            if (this._popoutWindow.__glInstance && this._popoutWindow.__glInstance.isInitialised) {
                this.onInitialised();
                if (this._checkReadyInterval !== undefined) {
                    clearInterval(this._checkReadyInterval);
                    this._checkReadyInterval = undefined;
                }
            }
        }
    }
    /**
     * Serialises a map of key:values to a window options string
     *
     * @param windowOptions -
     *
     * @returns serialised window options
     * @internal
     */
    serializeWindowFeatures(windowOptions) {
        const windowOptionsString = [];
        for (const key in windowOptions) {
            windowOptionsString.push(key + '=' + windowOptions[key].toString());
        }
        return windowOptionsString.join(',');
    }
    /**
     * Creates the URL for the new window, including the
     * config GET parameter
     *
     * @returns URL
     * @internal
     */
    createUrl() {
        const storageKey = 'gl-window-config-' + getUniqueId();
        const config = ResolvedLayoutConfig.minifyConfig(this._config);
        try {
            localStorage.setItem(storageKey, JSON.stringify(config));
        }
        catch (e) {
            throw new Error('Error while writing to localStorage ' + getErrorMessage(e));
        }
        const url = new URL(location.href);
        url.searchParams.set('gl-window', storageKey);
        return url.toString();
    }
    /**
     * Move the newly created window roughly to
     * where the component used to be.
     * @internal
     */
    positionWindow() {
        if (this._popoutWindow === null) {
            throw new Error('BrowserPopout.positionWindow: null popoutWindow');
        }
        else {
            this._popoutWindow.moveTo(this._initialWindowSize.left, this._initialWindowSize.top);
            this._popoutWindow.focus();
        }
    }
    /**
     * Callback when the new window is opened and the GoldenLayout instance
     * within it is initialised
     * @internal
     */
    onInitialised() {
        this._isInitialised = true;
        this.getGlInstance().on('popIn', () => this.popIn());
        this.emit('initialised');
    }
    /**
     * Invoked 50ms after the window unload event
     * @internal
     */
    _onClose() {
        setTimeout(() => this.emit('closed'), 50);
    }
}

/**
 * This is the baseclass that all content items inherit from.
 * Most methods provide a subset of what the sub-classes do.
 *
 * It also provides a number of functions for tree traversal
 * @public
 */
class ContentItem extends EventEmitter {
    get type() { return this._type; }
    get id() { return this._id; }
    set id(value) { this._id = value; }
    /** @internal */
    get popInParentIds() { return this._popInParentIds; }
    get parent() { return this._parent; }
    get contentItems() { return this._contentItems; }
    get isClosable() { return this._isClosable; }
    get element() { return this._element; }
    get isInitialised() { return this._isInitialised; }
    static isStack(item) {
        return item.isStack;
    }
    static isComponentItem(item) {
        return item.isComponent;
    }
    static isComponentParentableItem(item) {
        return item.isStack || item.isGround;
    }
    /** @internal */
    constructor(layoutManager, config, 
    /** @internal */
    _parent, 
    /** @internal */
    _element) {
        super();
        this.layoutManager = layoutManager;
        this._parent = _parent;
        this._element = _element;
        /** @internal */
        this._popInParentIds = [];
        this.ignoring = false;
        this.ignoringChild = false;
        this._type = config.type;
        this._id = config.id;
        this._isInitialised = false;
        this.isGround = false;
        this.isRow = false;
        this.isColumn = false;
        this.isStack = false;
        this.isComponent = false;
        this.size = config.size;
        this.sizeUnit = config.sizeUnit;
        this.minSize = config.minSize;
        this.minSizeUnit = config.minSizeUnit;
        this._isClosable = config.isClosable;
        this._pendingEventPropagations = {};
        this._throttledEvents = ['stateChanged'];
        this._contentItems = this.createContentItems(config.content);
    }
    /**
     * Updaters the size of the component and its children, called recursively
     * Called whenever the dimensions of this item or one of its parents change
     * @internal
     */
    updateSize() {
        this.layoutManager.beginVirtualSizedContainerAdding();
        try {
            this.updateNodeSize();
            this.updateContentItemsSize();
        }
        finally {
            this.layoutManager.endVirtualSizedContainerAdding();
        }
    }
    /**
     * Removes a child node (and its children) from the tree
     * @param contentItem - The child item to remove
     * @param keepChild - Whether to destroy the removed item
     */
    removeChild(contentItem, keepChild = false) {
        /*
         * Get the position of the item that's to be removed within all content items this node contains
         */
        const index = this._contentItems.indexOf(contentItem);
        /*
         * Make sure the content item to be removed is actually a child of this item
         */
        if (index === -1) {
            throw new Error('Can\'t remove child item. Unknown content item');
        }
        /**
     * Call destroy on the content item.
     * All children are destroyed as well
     */
        if (!keepChild) {
            this._contentItems[index].destroy();
        }
        /**
         * Remove the content item from this nodes array of children
         */
        this.layoutManager.deferIfDragging((cancel) => {
            this.ignoringChild = false;
            contentItem.ignoring = false;
            if (!cancel) {
                this._contentItems.splice(index, 1);
            }
        });
        /**
         * If this node still contains other content items, adjust their size
         */
        if (this._contentItems.length > (this.layoutManager.currentlyDragging() ? 1 : 0)) {
            this.updateSize();
        }
        else {
            /**
             * If this was the last content item, remove this node as well
             */
            if (!this.isGround && this._isClosable === true) {
                if (this._parent === null) {
                    throw new UnexpectedNullError('CIUC00874');
                }
                else {
                    this._parent.removeChild(this, keepChild);
                }
            }
        }
    }
    /**
     * Sets up the tree structure for the newly added child
     * The responsibility for the actual DOM manipulations lies
     * with the concrete item
     *
     * @param contentItem -
     * @param index - If omitted item will be appended
     * @param suspendResize - Used by descendent implementations
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addChild(contentItem, index, suspendResize) {
        index !== null && index !== void 0 ? index : (index = this._contentItems.length);
        this._contentItems.splice(index, 0, contentItem);
        contentItem.setParent(this);
        if (this._isInitialised === true && contentItem._isInitialised === false) {
            contentItem.init();
        }
        return index;
    }
    /**
     * Replaces oldChild with newChild
     * @param oldChild -
     * @param newChild -
     * @internal
     */
    replaceChild(oldChild, newChild, destroyOldChild = false) {
        // Do not try to replace ComponentItem - will not work
        const index = this._contentItems.indexOf(oldChild);
        const parentNode = oldChild._element.parentNode;
        if (index === -1) {
            throw new AssertError('CIRCI23232', 'Can\'t replace child. oldChild is not child of this');
        }
        if (parentNode === null) {
            throw new UnexpectedNullError('CIRCP23232');
        }
        else {
            parentNode.replaceChild(newChild._element, oldChild._element);
            /*
            * Optionally destroy the old content item
            */
            if (destroyOldChild === true) {
                oldChild._parent = null;
                oldChild.destroy(); // will now also destroy all children of oldChild
            }
            //            }
            /*
            * Wire the new contentItem into the tree
            */
            this._contentItems[index] = newChild;
            newChild.setParent(this);
            // newChild inherits the sizes from the old child:
            newChild.size = oldChild.size;
            newChild.sizeUnit = oldChild.sizeUnit;
            newChild.minSize = oldChild.minSize;
            newChild.minSizeUnit = oldChild.minSizeUnit;
            //TODO This doesn't update the config... refactor to leave item nodes untouched after creation
            if (newChild._parent === null) {
                throw new UnexpectedNullError('CIRCNC45699');
            }
            else {
                if (newChild._parent._isInitialised === true && newChild._isInitialised === false) {
                    newChild.init();
                }
                this.updateSize();
            }
        }
    }
    /**
     * Convenience method.
     * Shorthand for this.parent.removeChild( this )
     */
    remove() {
        if (this._parent === null) {
            throw new UnexpectedNullError('CIR11110');
        }
        else {
            this._parent.removeChild(this);
        }
    }
    /**
     * Removes the component from the layout and creates a new
     * browser window with the component and its children inside
     */
    popout() {
        const parentId = getUniqueId();
        const browserPopout = this.layoutManager.createPopoutFromContentItem(this, undefined, parentId, undefined);
        this.emitBaseBubblingEvent('stateChanged');
        return browserPopout;
    }
    /** @internal */
    calculateConfigContent() {
        const contentItems = this._contentItems;
        const count = contentItems.length;
        const result = new Array(count);
        for (let i = 0; i < count; i++) {
            const item = contentItems[i];
            result[i] = item.toConfig();
        }
        return result;
    }
    /** @internal */
    highlightDropZone(x, y, area) {
        const dropTargetIndicator = this.layoutManager.dropTargetIndicator;
        if (dropTargetIndicator === null) {
            throw new UnexpectedNullError('ACIHDZ5593');
        }
        else {
            dropTargetIndicator.highlightArea(area, 1);
        }
    }
    /** @internal */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onDrop(contentItem, area) {
        this.addChild(contentItem);
    }
    /** @internal */
    show() {
        // Not sure why showAllActiveContentItems() was called. GoldenLayout seems to work fine without it.  Left commented code
        // in source in case a reason for it becomes apparent.
        // this.layoutManager.showAllActiveContentItems();
        setElementDisplayVisibility(this._element, true);
        this.layoutManager.updateSizeFromContainer();
        for (let i = 0; i < this._contentItems.length; i++) {
            this._contentItems[i].show();
        }
    }
    /**
     * Destroys this item ands its children
     * @internal
     */
    destroy() {
        for (let i = 0; i < this._contentItems.length; i++) {
            this._contentItems[i].destroy();
        }
        const element = this._element;
        element.style.display = 'none';
        this.layoutManager.deferIfDragging((cancel) => {
            if (cancel) {
                element.style.display = '';
            }
            else {
                this._contentItems = [];
                this.emitBaseBubblingEvent('beforeItemDestroyed');
                this._element.remove();
                this.emitBaseBubblingEvent('itemDestroyed');
            }
        });
    }
    /**
     * Returns the area the component currently occupies
     * @internal
     */
    getElementArea(element) {
        element = element !== null && element !== void 0 ? element : this._element;
        const rect = element.getBoundingClientRect();
        const top = rect.top + document.body.scrollTop;
        const left = rect.left + document.body.scrollLeft;
        const width = rect.width;
        const height = rect.height;
        return {
            x1: left,
            y1: top,
            x2: left + width,
            y2: top + height,
            surface: width * height,
            contentItem: this
        };
    }
    /**
     * The tree of content items is created in two steps: First all content items are instantiated,
     * then init is called recursively from top to bottem. This is the basic init function,
     * it can be used, extended or overwritten by the content items
     *
     * Its behaviour depends on the content item
     * @internal
     */
    init() {
        this._isInitialised = true;
        this.emitBaseBubblingEvent('itemCreated');
        this.emitUnknownBubblingEvent(this.type + 'Created');
    }
    /** @internal */
    setParent(parent) {
        this._parent = parent;
    }
    /** @internal */
    addPopInParentId(id) {
        if (!this.popInParentIds.includes(id)) {
            this.popInParentIds.push(id);
        }
    }
    /** @internal */
    initContentItems() {
        for (let i = 0; i < this._contentItems.length; i++) {
            this._contentItems[i].init();
        }
    }
    /** @internal */
    hide() {
        setElementDisplayVisibility(this._element, false);
        this.layoutManager.updateSizeFromContainer();
    }
    /** @internal */
    updateContentItemsSize() {
        for (let i = 0; i < this._contentItems.length; i++) {
            if (!this._contentItems[i].ignoring)
                this._contentItems[i].updateSize();
        }
    }
    /**
     * creates all content items for this node at initialisation time
     * PLEASE NOTE, please see addChild for adding contentItems at runtime
     * @internal
     */
    createContentItems(content) {
        const count = content.length;
        const result = new Array(count);
        for (let i = 0; i < content.length; i++) {
            result[i] = this.layoutManager.createContentItem(content[i], this);
        }
        return result;
    }
    /**
     * Called for every event on the item tree. Decides whether the event is a bubbling
     * event and propagates it to its parent
     *
     * @param name - The name of the event
     * @param event -
     * @internal
     */
    propagateEvent(name, args) {
        if (args.length === 1) {
            const event = args[0];
            if (event instanceof EventEmitter.BubblingEvent &&
                event.isPropagationStopped === false &&
                this._isInitialised === true) {
                /**
                 * In some cases (e.g. if an element is created from a DragSource) it
                 * doesn't have a parent and is not a child of GroundItem. If that's the case
                 * propagate the bubbling event from the top level of the substree directly
                 * to the layoutManager
                 */
                if (this.isGround === false && this._parent) {
                    this._parent.emitUnknown(name, event);
                }
                else {
                    this.scheduleEventPropagationToLayoutManager(name, event);
                }
            }
        }
    }
    tryBubbleEvent(name, args) {
        if (args.length === 1) {
            const event = args[0];
            if (event instanceof EventEmitter.BubblingEvent &&
                event.isPropagationStopped === false &&
                this._isInitialised === true) {
                /**
                 * In some cases (e.g. if an element is created from a DragSource) it
                 * doesn't have a parent and is not a child of GroundItem. If that's the case
                 * propagate the bubbling event from the top level of the substree directly
                 * to the layoutManager
                 */
                if (this.isGround === false && this._parent) {
                    this._parent.emitUnknown(name, event);
                }
                else {
                    this.scheduleEventPropagationToLayoutManager(name, event);
                }
            }
        }
    }
    /**
     * All raw events bubble up to the Ground element. Some events that
     * are propagated to - and emitted by - the layoutManager however are
     * only string-based, batched and sanitized to make them more usable
     *
     * @param name - The name of the event
     * @internal
     */
    scheduleEventPropagationToLayoutManager(name, event) {
        if (this._throttledEvents.indexOf(name) === -1) {
            this.layoutManager.emitUnknown(name, event);
        }
        else {
            if (this._pendingEventPropagations[name] !== true) {
                this._pendingEventPropagations[name] = true;
                globalThis.requestAnimationFrame(() => this.propagateEventToLayoutManager(name, event));
            }
        }
    }
    /**
     * Callback for events scheduled by _scheduleEventPropagationToLayoutManager
     *
     * @param name - The name of the event
     * @internal
     */
    propagateEventToLayoutManager(name, event) {
        this._pendingEventPropagations[name] = false;
        this.layoutManager.emitUnknown(name, event);
    }
}
/** @public */
(function (ContentItem) {
    /** @internal */
    function createElement(kindClass) {
        const element = document.createElement('div');
        element.classList.add("lm_item" /* DomConstants.ClassName.Item */);
        if (kindClass) {
            element.classList.add(kindClass);
        }
        return element;
    }
    ContentItem.createElement = createElement;
})(ContentItem || (ContentItem = {}));

/** @internal */
class HeaderButton {
    get element() { return this._element; }
    constructor(_header, label, cssClass, _pushEvent) {
        this._header = _header;
        this._pushEvent = _pushEvent;
        this._clickEventListener = (ev) => this.onClick(ev);
        this._touchStartEventListener = (ev) => this.onTouchStart(ev);
        this._element = document.createElement('div');
        this._element.classList.add(cssClass);
        this._element.title = label;
        this._header.on('destroy', () => this.destroy());
        this._element.addEventListener('click', this._clickEventListener, { passive: true });
        this._element.addEventListener('touchstart', this._touchStartEventListener, { passive: true });
        this._header.controlsContainerElement.appendChild(this._element);
    }
    destroy() {
        var _a;
        this._element.removeEventListener('click', this._clickEventListener);
        this._element.removeEventListener('touchstart', this._touchStartEventListener);
        (_a = this._element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this._element);
    }
    onClick(ev) {
        this._pushEvent(ev);
    }
    onTouchStart(ev) {
        this._pushEvent(ev);
    }
}

/** @internal */
class DragListener extends EventEmitter {
    constructor(_eElement) {
        super();
        this._eElement = _eElement;
        this._pointerTracking = false;
        this._pointerDownEventListener = (ev) => this.onPointerDown(ev);
        this._pointerMoveEventListener = (ev) => this.onPointerMove(ev);
        this._pointerUpEventListener = (ev) => this.onPointerUp(ev);
        this._timeout = undefined;
        this._oDocument = document;
        this._eBody = document.body;
        /**
         * The delay after which to start the drag in milliseconds
         * Do NOT make too short (previous value of 200 was not long enough for my touchpad)
         * Should generally rely on the mouse move to start drag.  Not this delay.
         */
        this._nDelay = 1800;
        /**
         * The distance the mouse needs to be moved to qualify as a drag
         * Previous comment: works better with delay only
         * ???
         * Probably somehow needs tuning for different devices
         */
        this._nDistance = 10;
        this._nX = 0;
        this._nY = 0;
        this._nOriginalX = 0;
        this._nOriginalY = 0;
        this._dragging = false;
        this._eElement.addEventListener('pointerdown', this._pointerDownEventListener, { passive: true });
    }
    destroy() {
        this.checkRemovePointerTrackingEventListeners();
        this._eElement.removeEventListener('pointerdown', this._pointerDownEventListener);
    }
    cancelDrag() {
        this.processDragStop(undefined);
    }
    onPointerDown(oEvent) {
        for (let target = oEvent.target;; target = target.parentNode) {
            if (!(target instanceof HTMLElement))
                return;
            const draggable = target.getAttribute('draggable');
            if (draggable === 'true')
                break;
            if (draggable !== null)
                return;
        }
        this.processPointerDown(this.getPointerCoordinates(oEvent));
    }
    processPointerDown(coordinates) {
        this._nOriginalX = coordinates.x;
        this._nOriginalY = coordinates.y;
        this._oDocument.addEventListener('pointermove', this._pointerMoveEventListener);
        this._oDocument.addEventListener('pointerup', this._pointerUpEventListener, { passive: true });
        this._pointerTracking = true;
        this._timeout = setTimeout(() => {
            try {
                this.startDrag();
            }
            catch (err) {
                console.error(err);
                throw err;
            }
        }, this._nDelay);
    }
    onPointerMove(oEvent) {
        if (this._pointerTracking) {
            this.processDragMove(oEvent);
            oEvent.preventDefault();
        }
    }
    processDragMove(dragEvent) {
        this._nX = dragEvent.pageX - this._nOriginalX;
        this._nY = dragEvent.pageY - this._nOriginalY;
        if (this._dragging === false) {
            if (Math.abs(this._nX) > this._nDistance ||
                Math.abs(this._nY) > this._nDistance) {
                this.startDrag();
            }
        }
        if (this._dragging) {
            this.emit('drag', this._nX, this._nY, dragEvent);
        }
    }
    onPointerUp(oEvent) {
        this.processDragStop(oEvent);
    }
    processDragStop(dragEvent) {
        if (this._timeout !== undefined) {
            clearTimeout(this._timeout);
            this._timeout = undefined;
        }
        this.checkRemovePointerTrackingEventListeners();
        if (this._dragging === true) {
            this._eBody.classList.remove("lm_dragging" /* DomConstants.ClassName.Dragging */);
            this._eElement.classList.remove("lm_dragging" /* DomConstants.ClassName.Dragging */);
            enableIFramePointerEvents(true);
            this._dragging = false;
            this.emit('dragStop', dragEvent);
        }
    }
    checkRemovePointerTrackingEventListeners() {
        if (this._pointerTracking) {
            this._oDocument.removeEventListener('pointermove', this._pointerMoveEventListener);
            this._oDocument.removeEventListener('pointerup', this._pointerUpEventListener);
            this._pointerTracking = false;
        }
    }
    startDrag() {
        if (this._timeout !== undefined) {
            clearTimeout(this._timeout);
            this._timeout = undefined;
        }
        this._dragging = true;
        this._eBody.classList.add("lm_dragging" /* DomConstants.ClassName.Dragging */);
        this._eElement.classList.add("lm_dragging" /* DomConstants.ClassName.Dragging */);
        enableIFramePointerEvents(false);
        this.emit('dragStart', this._nOriginalX, this._nOriginalY);
    }
    getPointerCoordinates(event) {
        const result = {
            x: event.pageX,
            y: event.pageY
        };
        return result;
    }
}

/**
 * Represents an individual tab within a Stack's header
 * @public
 */
class Tab {
    get isActive() { return this._isActive; }
    // get header(): Header { return this._header; }
    get componentItem() { return this._componentItem; }
    /** @deprecated use {@link (Tab:class).componentItem} */
    get contentItem() { return this._componentItem; }
    get element() { return this._element; }
    get titleElement() { return this._titleElement; }
    get closeElement() { return this._closeElement; }
    get reorderEnabled() { return this._dragListener !== undefined; }
    set reorderEnabled(value) {
        if (value !== this.reorderEnabled) {
            if (value) {
                this.enableReorder();
            }
            else {
                this.disableReorder();
            }
        }
    }
    /** @internal */
    constructor(
    /** @internal */
    _layoutManager, 
    /** @internal */
    _componentItem, 
    /** @internal */
    _closeEvent, 
    /** @internal */
    _focusEvent, 
    /** @internal */
    _dragStartEvent) {
        var _a;
        this._layoutManager = _layoutManager;
        this._componentItem = _componentItem;
        this._closeEvent = _closeEvent;
        this._focusEvent = _focusEvent;
        this._dragStartEvent = _dragStartEvent;
        /** @internal */
        this._isActive = false;
        /** @internal */
        this._tabTouchStartListener = (ev) => this.onTabTouchStart(ev);
        /** @internal */
        this._closeClickListener = () => this.onCloseClick();
        /** @internal */
        this._closeTouchStartListener = () => this.onCloseTouchStart();
        // /** @internal */
        // private readonly _closeMouseDownListener = () => this.onCloseMousedown();
        /** @internal */
        this._dragStartListenerOld = (x, y) => this.onDragStartOld(x, y);
        /** @internal */
        this._dragStartListener = (e) => this.onDragStart(e);
        /** @internal */
        this._contentItemDestroyListener = () => this.onContentItemDestroy();
        /** @internal */
        this._tabTitleChangedListener = (title) => this.setTitle(title);
        this.tabClickListener = (ev) => this.onTabClickDown(ev);
        this._element = document.createElement('div');
        this._element.classList.add("lm_tab" /* DomConstants.ClassName.Tab */);
        this._titleElement = document.createElement('span');
        this._titleElement.classList.add("lm_title" /* DomConstants.ClassName.Title */);
        this._closeElement = document.createElement('div');
        this._closeElement.classList.add("lm_close_tab" /* DomConstants.ClassName.CloseTab */);
        this._element.setAttribute('draggable', 'true');
        this._closeElement.setAttribute('draggable', 'false');
        this._element.appendChild(this._titleElement);
        this._element.appendChild(this._closeElement);
        if (_componentItem.isClosable) {
            this._closeElement.style.display = '';
        }
        else {
            this._closeElement.style.display = 'none';
        }
        this.setTitle(_componentItem.title);
        this._componentItem.on('titleChanged', this._tabTitleChangedListener);
        const reorderEnabled = (_a = _componentItem.reorderEnabled) !== null && _a !== void 0 ? _a : this._layoutManager.layoutConfig.settings.reorderEnabled;
        if (reorderEnabled) {
            this.enableReorder();
        }
        this._element.addEventListener('click', this.tabClickListener, { passive: true });
        //this._element.addEventListener('touchstart', this._tabTouchStartListener, { passive: true });
        if (this._componentItem.isClosable) {
            this._closeElement.addEventListener('click', this._closeClickListener, { passive: true });
            this._closeElement.addEventListener('touchstart', this._closeTouchStartListener, { passive: true });
            // this._closeElement.addEventListener('mousedown', this._closeMouseDownListener, { passive: true });
        }
        else {
            this._closeElement.remove();
            this._closeElement = undefined;
        }
        this._componentItem.setTab(this);
        this._layoutManager.emit('tabCreated', this);
    }
    /**
     * Sets the tab's title to the provided string and sets
     * its title attribute to a pure text representation (without
     * html tags) of the same string.
     */
    setTitle(title) {
        this._element.title = title;
        const parent = this.componentItem.parent;
        if (parent instanceof Stack)
            parent.header.updateTabSizes();
    }
    /**
     * Sets this tab's active state. To programmatically
     * switch tabs, use Stack.setActiveComponentItem( item ) instead.
     */
    setActive(isActive) {
        if (isActive === this._isActive) {
            return;
        }
        this._isActive = isActive;
        if (isActive) {
            this._element.classList.add("lm_active" /* DomConstants.ClassName.Active */);
        }
        else {
            this._element.classList.remove("lm_active" /* DomConstants.ClassName.Active */);
        }
    }
    /**
     * Destroys the tab
     * @internal
     */
    destroy() {
        const action = (cancel) => {
            var _a, _b;
            if (cancel) {
                return;
            }
            this._closeEvent = undefined;
            this._focusEvent = undefined;
            this._dragStartEvent = undefined;
            this._element.removeEventListener('click', this.tabClickListener);
            this._element.removeEventListener('touchstart', this._tabTouchStartListener);
            (_a = this._closeElement) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', this._closeClickListener);
            (_b = this._closeElement) === null || _b === void 0 ? void 0 : _b.removeEventListener('touchstart', this._closeTouchStartListener);
            // this._closeElement?.removeEventListener('mousedown', this._closeMouseDownListener);
            this._componentItem.off('titleChanged', this._tabTitleChangedListener);
            if (this.reorderEnabled) {
                this.disableReorder();
            }
        };
        const lm = this._layoutManager;
        if (lm.currentlyDragging()) {
            lm.deferIfDragging(action);
        }
        else {
            action(false);
        }
        lm.deferIfDragging((cancel) => {
            if (!cancel)
                this._element.remove();
        });
    }
    /** @internal */
    setBlurred() {
        this._element.classList.remove("lm_focused" /* DomConstants.ClassName.Focused */);
        this._titleElement.classList.remove("lm_focused" /* DomConstants.ClassName.Focused */);
    }
    /** @internal */
    setFocused() {
        this._element.classList.add("lm_focused" /* DomConstants.ClassName.Focused */);
        this._titleElement.classList.add("lm_focused" /* DomConstants.ClassName.Focused */);
    }
    /**
     * Old callback for the DragListener
     * @param x - The tabs absolute x position
     * @param y - The tabs absolute y position
     * @internal
     */
    onDragStartOld(x, y) {
        if (this._dragListener === undefined) {
            throw new UnexpectedUndefinedError('TODSDLU10093');
        }
        else {
            if (this._dragStartEvent === undefined) {
                throw new UnexpectedUndefinedError('TODS23309');
            }
            else {
                this._dragStartEvent(x, y, this._dragListener, this.componentItem);
            }
        }
    }
    onDragStart(e) {
        // See drag-listener#startDrag
        const tabElement = this._element;
        document.body.classList.add("lm_dragging" /* DomConstants.ClassName.Dragging */);
        tabElement.classList.add("lm_dragging" /* DomConstants.ClassName.Dragging */);
        enableIFramePointerEvents(false);
        // FIXME: set non-maximized
        this._layoutManager.startComponentDrag(e, this.componentItem);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._layoutManager.deferIfDragging((_cancel) => {
            document.body.classList.remove("lm_dragging" /* DomConstants.ClassName.Dragging */);
            tabElement.classList.remove("lm_dragging" /* DomConstants.ClassName.Dragging */);
        });
    }
    /** @internal */
    onContentItemDestroy() {
        if (this._dragListener !== undefined) {
            this._dragListener.destroy();
            this._dragListener = undefined;
        }
    }
    /**
     * Callback when the tab is clicked
     * @internal
     */
    onTabClickDown(event) {
        const target = event.target;
        // return if clicking child of tab unless inside an lm_title
        if (target !== this._element) {
            for (let p = target; !p.classList.contains("lm_title"); p = p.parentNode) {
                if (p == this._element || p == document.body)
                    return;
            }
        }
        // left mouse button
        if (event.button === 0) {
            // event.stopPropagation();
            this.notifyFocus();
            // middle mouse button
        }
        else if (event.button === 1 && this._componentItem.isClosable) {
            // event.stopPropagation();
            this.notifyClose();
        }
    }
    /** @internal */
    onTabTouchStart(event) {
        if (event.target === this._element) {
            this.notifyFocus();
        }
    }
    /**
     * Callback when the tab's close button is clicked
     * @internal
     */
    onCloseClick() {
        this.notifyClose();
    }
    /** @internal */
    onCloseTouchStart() {
        this.notifyClose();
    }
    /**
     * Callback to capture tab close button mousedown
     * to prevent tab from activating.
     * @internal
     */
    // private onCloseMousedown(): void {
    //     // event.stopPropagation();
    // }
    /** @internal */
    notifyClose() {
        if (this._closeEvent === undefined) {
            throw new UnexpectedUndefinedError('TNC15007');
        }
        else {
            this._closeEvent(this._componentItem);
        }
    }
    /** @internal */
    notifyFocus() {
        if (this._focusEvent === undefined) {
            throw new UnexpectedUndefinedError('TNA15007');
        }
        else {
            this._focusEvent(this._componentItem);
        }
    }
    /** @internal */
    enableReorder() {
        var _a;
        if (this._layoutManager.useNativeDragAndDrop()) {
            this._element.addEventListener('dragstart', this._dragStartListener, { passive: true });
        }
        else {
            this._dragListener = new DragListener(this._element);
            (_a = this._dragListener) === null || _a === void 0 ? void 0 : _a.on('dragStart', this._dragStartListenerOld);
        }
        this._componentItem.on('destroy', this._contentItemDestroyListener);
    }
    /** @internal */
    disableReorder() {
        if (this._layoutManager.useNativeDragAndDrop()) {
            this._element.removeEventListener('dragstart', this._dragStartListener);
        }
        else if (this._dragListener === undefined) {
            throw new UnexpectedUndefinedError('TDR87745');
        }
        else {
            this._componentItem.off('destroy', this._contentItemDestroyListener);
            this._dragListener.off('dragStart', this._dragStartListenerOld);
            this._dragListener = undefined;
        }
    }
}
/** @public */
(function (Tab) {
    (function (RenderFlags) {
        RenderFlags[RenderFlags["DropdownActive"] = 1] = "DropdownActive";
        RenderFlags[RenderFlags["InDropdownMenu"] = 2] = "InDropdownMenu";
        RenderFlags[RenderFlags["IsActiveTab"] = 4] = "IsActiveTab";
    })(Tab.RenderFlags || (Tab.RenderFlags = {}));
})(Tab || (Tab = {}));

/** @internal */
class TabsContainer {
    get tabs() { return this._tabs; }
    get tabCount() { return this._tabs.length; }
    get lastVisibleTabIndex() { return this._lastVisibleTabIndex; }
    get element() { return this._element; }
    get dropdownElement() { return this._dropdownElement; }
    get dropdownActive() { return this._dropdownActive; }
    constructor(_layoutManager, _componentRemoveEvent, _componentFocusEvent, _componentDragStartEvent, _dropdownActiveChangedEvent) {
        this._layoutManager = _layoutManager;
        this._componentRemoveEvent = _componentRemoveEvent;
        this._componentFocusEvent = _componentFocusEvent;
        this._componentDragStartEvent = _componentDragStartEvent;
        this._dropdownActiveChangedEvent = _dropdownActiveChangedEvent;
        // There is one tab per ComponentItem in stack.  However they may not be ordered the same
        this._tabs = [];
        this._lastVisibleTabIndex = -1;
        this._dropdownActive = false;
        this._element = document.createElement('section');
        this._element.classList.add("lm_tabs" /* DomConstants.ClassName.Tabs */);
        this._dropdownElement = document.createElement('section');
        this._dropdownElement.classList.add("lm_tabdropdown_list" /* DomConstants.ClassName.TabDropdownList */);
        this._dropdownElement.style.display = 'none';
    }
    destroy() {
        for (let i = 0; i < this._tabs.length; i++) {
            this._tabs[i].destroy();
        }
    }
    /**
     * Creates a new tab and associates it with a contentItem
     * @param index - The position of the tab
     */
    createTab(componentItem, index) {
        //If there's already a tab relating to the
        //content item, don't do anything
        for (let i = 0; i < this._tabs.length; i++) {
            if (this._tabs[i].componentItem === componentItem) {
                return;
            }
        }
        const tab = new Tab(this._layoutManager, componentItem, (item) => this.handleTabCloseEvent(item), (item) => this.handleTabFocusEvent(item), (x, y, dragListener, item) => this.handleTabDragStartEvent(x, y, dragListener, item));
        if (index === undefined) {
            index = this._tabs.length;
        }
        this.markAsSingle(this._tabs.length == 0);
        this._tabs.splice(index, 0, tab);
        if (index < this._element.childNodes.length) {
            this._element.insertBefore(tab.element, this._element.childNodes[index]);
        }
        else {
            this._element.appendChild(tab.element);
        }
    }
    /** @internal */
    markAsSingle(is_single) {
        var _a, _b;
        const stackNode = (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode;
        if (is_single) {
            stackNode.classList.add("lm_single");
        }
        else {
            stackNode.classList.remove("lm_single");
        }
    }
    removeTab(componentItem) {
        // componentItem cannot be ActiveComponentItem
        for (let i = 0; i < this._tabs.length; i++) {
            if (this._tabs[i].componentItem === componentItem) {
                const tab = this._tabs[i];
                tab.destroy();
                this._layoutManager.deferIfDragging((cancel) => {
                    if (!cancel) {
                        this._tabs.splice(i, 1);
                        if (this._tabs.length <= 1)
                            this.markAsSingle(true);
                        if (i <= this._lastVisibleTabIndex)
                            --this._lastVisibleTabIndex;
                    }
                });
                return;
            }
        }
        throw new Error('contentItem is not controlled by this header');
    }
    processActiveComponentChanged(newActiveComponentItem) {
        let activeIndex = -1;
        for (let i = 0; i < this._tabs.length; i++) {
            const isActive = this._tabs[i].componentItem === newActiveComponentItem;
            this._tabs[i].setActive(isActive);
            if (isActive) {
                activeIndex = i;
            }
        }
        if (activeIndex < 0) {
            throw new AssertError('HSACI56632');
        }
        else {
            if (this._layoutManager.layoutConfig.settings.reorderOnTabMenuClick) {
                /**
                 * If the tab selected was in the dropdown, move everything down one to make way for this one to be the first.
                 * This will make sure the most used tabs stay visible.
                 */
                if (this._lastVisibleTabIndex !== -1 && activeIndex > this._lastVisibleTabIndex) {
                    const activeTab = this._tabs[activeIndex];
                    for (let j = activeIndex; j > 0; j--) {
                        this._tabs[j] = this._tabs[j - 1];
                    }
                    this._tabs[0] = activeTab;
                    // updateTabSizes will always be called after this and it will reposition tab elements
                }
            }
        }
    }
    /**
     * Pushes the tabs to the tab dropdown if the available space is not sufficient
     */
    updateTabSizes(header, activeComponentItem) {
        let dropDownActive = false;
        const success = this.tryUpdateTabSizes(dropDownActive, header, activeComponentItem);
        if (!success) {
            dropDownActive = true;
            // this will always succeed
            this.tryUpdateTabSizes(dropDownActive, header, activeComponentItem);
        }
        if (dropDownActive !== this._dropdownActive) {
            this._dropdownActive = dropDownActive;
            this._dropdownActiveChangedEvent();
        }
    }
    tryUpdateTabSizes(dropdownActive, header, activeComponentItem) {
        const headerNode = this.element.parentNode;
        headerNode.classList.remove("lm_tight_mode");
        let availableWidth = header.availableTabsSize();
        this.element.style.width = ''; //numberToPixels(availableWidth);
        if (this._tabs.length > 0) {
            if (activeComponentItem === undefined) {
                throw new Error('non-empty tabs must have active component item');
            }
            let cumulativeTabWidth = 0;
            const tabOverlapAllowance = this._layoutManager.layoutConfig.settings.tabOverlapAllowance || (dropdownActive ? 6 : 0);
            const activeIndex = this._tabs.indexOf(activeComponentItem.tab);
            const activeTab = this._tabs[activeIndex];
            while (dropdownActive && this._dropdownElement.firstChild) {
                this._dropdownElement.removeChild(this._dropdownElement.firstChild);
            }
            const tabMarginRightPixels = getComputedStyle(activeTab.element).marginRight;
            const tabMarginRight = pixelsToNumber(tabMarginRightPixels);
            let tabAvail, activeTabAvail;
            const numTabs = this._tabs.length;
            if (!dropdownActive || numTabs <= 1) {
                tabAvail = availableWidth - tabMarginRight;
                activeTabAvail = tabAvail;
            }
            else {
                // the active tab gets a double share of the available width.
                tabAvail = (availableWidth - numTabs * tabMarginRight)
                    / (numTabs + 1);
                activeTabAvail = 2 * tabAvail;
            }
            let tight_mode = false;
            this._lastVisibleTabIndex = numTabs - 1;
            for (let i = 0; i < numTabs; i++) {
                const tab = this._tabs[i];
                const tabElement = tab.element;
                const isActiveTab = activeIndex === i;
                tabElement.style.marginLeft = '';
                tabElement.style.zIndex = '';
                const component = tab.componentItem;
                const renderer = (container, el, width, flags) => {
                    if (component.titleRenderer) {
                        component.titleRenderer(container, el, width, flags);
                    }
                    else {
                        while (el.lastChild) {
                            el.removeChild(el.lastChild);
                        }
                        el.appendChild(document.createTextNode(component.title));
                    }
                };
                //Put the tab in the tabContainer so its true width can be checked
                if (tabElement.parentElement !== this._element) {
                    this._element.appendChild(tabElement);
                }
                renderer(component.container, tab.titleElement, isActiveTab ? activeTabAvail : tabAvail, (isActiveTab ? Tab.RenderFlags.IsActiveTab : 0) |
                    (dropdownActive ? Tab.RenderFlags.DropdownActive : 0));
                cumulativeTabWidth = tabElement.offsetLeft - this._element.offsetLeft + tabElement.offsetWidth + tabMarginRight;
                if (dropdownActive) {
                    const el = document.createElement('span');
                    el.classList.add("lm_title" /* DomConstants.ClassName.Title */);
                    const w = availableWidth * 0.9;
                    renderer(component.container, el, w, (isActiveTab ? Tab.RenderFlags.IsActiveTab : 0) |
                        Tab.RenderFlags.DropdownActive |
                        Tab.RenderFlags.InDropdownMenu);
                    this._dropdownElement.appendChild(el);
                    el === null || el === void 0 ? void 0 : el.addEventListener('click', tab.tabClickListener, { passive: true });
                }
                if (cumulativeTabWidth > availableWidth && numTabs > 1
                    && !tight_mode) {
                    tight_mode = true;
                    headerNode.classList.add("lm_tight_mode");
                    // If tight-mode makes the controls (header buttons)
                    // take less space, we should have more available space.
                    availableWidth = header.availableTabsSize();
                    this.element.style.width = numberToPixels(availableWidth);
                    cumulativeTabWidth = tabElement.offsetLeft - this._element.offsetLeft + tabElement.offsetWidth + tabMarginRight;
                }
            }
            if (cumulativeTabWidth > availableWidth) {
                if (numTabs <= 1) {
                    return false;
                }
                let overlap = (cumulativeTabWidth - availableWidth)
                    / (numTabs - 1);
                //Check overlap against allowance.
                if (overlap >= tabOverlapAllowance) {
                    if (!dropdownActive) {
                        //We now know the tab menu must be shown, so we have to recalculate everything.
                        return false;
                    }
                    overlap = tabOverlapAllowance;
                }
                for (let j = 0; j < numTabs; j++) {
                    const marginLeft = j === 0 ? ''
                        : '-' + numberToPixels(overlap);
                    this._tabs[j].element.style.zIndex =
                        '' + ((j <= activeIndex ? j - activeIndex
                            : activeIndex - j) + numTabs);
                    this._tabs[j].element.style.marginLeft = marginLeft;
                }
                const activeElement = activeTab.element;
                if (activeElement.offsetLeft + activeElement.clientWidth
                    > availableWidth) {
                    if (!dropdownActive)
                        return false;
                    if (activeIndex > 0) {
                        // If active tab isn't fully visible, shift it and
                        // earlier elements left as needed (and possible)
                        const maxPrior = Math.max((availableWidth - activeElement.clientWidth) / activeIndex, 0);
                        for (let j = 1; j <= activeIndex; j++) {
                            const rightExcess = this._tabs[j].element.offsetLeft - j * maxPrior;
                            if (rightExcess > 0) {
                                this._tabs[j].element.style.marginLeft = '-' + numberToPixels(overlap + rightExcess);
                            }
                        }
                    }
                }
                this._lastVisibleTabIndex = activeIndex;
                for (let j = activeIndex + 1; j < numTabs; j++) {
                    const tabElement = this._tabs[j].element;
                    if (tabElement.offsetLeft + tabElement.offsetWidth
                        > availableWidth + tabOverlapAllowance)
                        break;
                    this._lastVisibleTabIndex = j;
                }
            }
        }
        return true;
    }
    /**
     * Shows drop down for additional tabs when there are too many to display.
     */
    showAdditionalTabsDropdown() {
        this._dropdownElement.style.display = '';
    }
    /**
     * Hides drop down for additional tabs when there are too many to display.
     */
    hideAdditionalTabsDropdown() {
        this._dropdownElement.style.display = 'none';
    }
    handleTabCloseEvent(componentItem) {
        this._componentRemoveEvent(componentItem);
    }
    handleTabFocusEvent(componentItem) {
        this._componentFocusEvent(componentItem);
    }
    handleTabDragStartEvent(x, y, dragListener, componentItem) {
        this._componentDragStartEvent(x, y, dragListener, componentItem);
    }
}

/**
 * This class represents a header above a Stack ContentItem.
 * @public
 */
class Header extends EventEmitter {
    // /** @internal */
    // private _activeComponentItem: ComponentItem | null = null; // only used to identify active tab
    get show() { return this._show; }
    get side() { return this._side; }
    get leftRightSided() { return this._leftRightSided; }
    get layoutManager() { return this._layoutManager; }
    get parent() { return this._parent; }
    get tabs() { return this._tabsContainer.tabs; }
    get lastVisibleTabIndex() { return this._tabsContainer.lastVisibleTabIndex; }
    get element() { return this._element; }
    get tabsContainerElement() { return this._tabsContainer.element; }
    get controlsContainerElement() { return this._controlsContainerElement; }
    /** @internal */
    constructor(
    /** @internal */
    _layoutManager, 
    /** @internal */
    _parent, settings, 
    /** @internal */
    _configClosable, 
    /** @internal */
    _getActiveComponentItemEvent, closeEvent, 
    /** @internal */
    _popoutEvent, 
    /** @internal */
    _maximiseToggleEvent, 
    /** @internal */
    _clickEvent, 
    /** @internal */
    _touchStartEvent, 
    /** @internal */
    _componentRemoveEvent, 
    /** @internal */
    _componentFocusEvent, 
    /** @internal */
    _componentDragStartEvent) {
        super();
        this._layoutManager = _layoutManager;
        this._parent = _parent;
        this._configClosable = _configClosable;
        this._getActiveComponentItemEvent = _getActiveComponentItemEvent;
        this._popoutEvent = _popoutEvent;
        this._maximiseToggleEvent = _maximiseToggleEvent;
        this._clickEvent = _clickEvent;
        this._touchStartEvent = _touchStartEvent;
        this._componentRemoveEvent = _componentRemoveEvent;
        this._componentFocusEvent = _componentFocusEvent;
        this._componentDragStartEvent = _componentDragStartEvent;
        /** @internal */
        this._clickListener = (ev) => this.onClick(ev);
        /** @internal */
        this._touchStartListener = (ev) => this.onTouchStart(ev);
        /** @internal */
        this._rowColumnClosable = true;
        /** @internal */
        this._closeButton = null;
        /** @internal */
        this._popoutButton = null;
        /** @internal */
        this._updateRequested = 0;
        this._tabsContainer = new TabsContainer(this._layoutManager, (item) => this.handleTabInitiatedComponentRemoveEvent(item), (item) => this.handleTabInitiatedComponentFocusEvent(item), (x, y, dragListener, item) => this.handleTabInitiatedDragStartEvent(x, y, dragListener, item), () => this.processTabDropdownActiveChanged());
        this._show = settings.show;
        this._popoutEnabled = settings.popoutEnabled;
        this._popoutLabel = settings.popoutLabel;
        this._maximiseEnabled = settings.maximiseEnabled;
        this._maximiseLabel = settings.maximiseLabel;
        this._minimiseEnabled = settings.minimiseEnabled;
        this._minimiseLabel = settings.minimiseLabel;
        this._closeEnabled = settings.closeEnabled;
        this._closeLabel = settings.closeLabel;
        this._tabDropdownEnabled = settings.tabDropdownEnabled;
        this._tabDropdownLabel = settings.tabDropdownLabel;
        this.setSide(settings.side);
        this._canRemoveComponent = this._configClosable;
        this._element = document.createElement('section');
        this._element.classList.add("lm_header" /* DomConstants.ClassName.Header */);
        this._controlsContainerElement = document.createElement('section');
        this._controlsContainerElement.classList.add("lm_controls" /* DomConstants.ClassName.Controls */);
        this.layoutDefault();
        this._element.addEventListener('click', this._clickListener, { passive: true });
        //this._element.addEventListener('touchstart', this._touchStartListener, { passive: true });
        this._documentMouseUpListener = () => this._tabsContainer.hideAdditionalTabsDropdown();
        globalThis.document.addEventListener('mouseup', this._documentMouseUpListener, { passive: true });
        this._tabControlOffset = this._layoutManager.layoutConfig.settings.tabControlOffset;
        if (this._tabDropdownEnabled) {
            this._tabDropdownButton = new HeaderButton(this, this._tabDropdownLabel, "lm_tabdropdown" /* DomConstants.ClassName.TabDropdown */, () => this._tabsContainer.showAdditionalTabsDropdown());
        }
        if (this._popoutEnabled) {
            this._popoutButton = new HeaderButton(this, this._popoutLabel, "lm_popout" /* DomConstants.ClassName.Popout */, (ev) => this.handleButtonPopoutEvent(ev));
        }
        /**
         * Maximise control - set the component to the full size of the layout
         */
        if (this._maximiseEnabled) {
            this._maximiseButton = new HeaderButton(this, this._maximiseLabel, "lm_maximise" /* DomConstants.ClassName.Maximise */, (ev) => this.handleButtonMaximiseToggleEvent(ev));
        }
        /**
         * Close button
         */
        if (this._configClosable) {
            this._closeButton = new HeaderButton(this, this._closeLabel, "lm_close" /* DomConstants.ClassName.Close */, () => closeEvent());
        }
        this.processTabDropdownActiveChanged();
    }
    layoutDefault() {
        const el = this._element;
        while (el.firstChild)
            el.removeChild(el.firstChild);
        el.appendChild(this._tabsContainer.element);
        el.appendChild(this._controlsContainerElement);
        el.appendChild(this._tabsContainer.dropdownElement);
    }
    /**
     * Destroys the entire header
     * @internal
     */
    destroy() {
        this._element.style.opacity = '0';
        this.layoutManager.deferIfDragging((cancel) => {
            if (cancel) {
                this._element.style.opacity = '';
            }
            else {
                this.emit('destroy');
                this._popoutEvent = undefined;
                this._maximiseToggleEvent = undefined;
                this._clickEvent = undefined;
                this._touchStartEvent = undefined;
                this._componentRemoveEvent = undefined;
                this._componentFocusEvent = undefined;
                this._componentDragStartEvent = undefined;
                this._tabsContainer.destroy();
                globalThis.document.removeEventListener('mouseup', this._documentMouseUpListener);
                this._element.remove();
            }
        });
    }
    /**
     * Creates a new tab and associates it with a contentItem
     * @param index - The position of the tab
     * @internal
     */
    createTab(componentItem, index) {
        this._tabsContainer.createTab(componentItem, index);
    }
    /**
     * Finds a tab based on the contentItem its associated with and removes it.
     * Cannot remove tab if it has the active ComponentItem
     * @internal
     */
    removeTab(componentItem) {
        this._tabsContainer.removeTab(componentItem);
    }
    /** @internal */
    processActiveComponentChanged(newActiveComponentItem) {
        this._tabsContainer.processActiveComponentChanged(newActiveComponentItem);
        this.updateTabSizes();
    }
    /** @internal */
    setSide(value) {
        this._side = value;
        this._leftRightSided = [Side.right, Side.left].includes(this._side);
    }
    /**
     * Programmatically set closability.
     * @param value - Whether to enable/disable closability.
     * @returns Whether the action was successful
     * @internal
     */
    setRowColumnClosable(value) {
        this._rowColumnClosable = value;
        this.updateClosability();
    }
    /**
     * Updates the header's closability. If a stack/header is able
     * to close, but has a non closable component added to it, the stack is no
     * longer closable until all components are closable.
     * @internal
     */
    updateClosability() {
        let isClosable;
        if (!this._configClosable) {
            isClosable = false;
        }
        else {
            if (!this._rowColumnClosable) {
                isClosable = false;
            }
            else {
                isClosable = true;
                const len = this.tabs.length;
                for (let i = 0; i < len; i++) {
                    const tab = this._tabsContainer.tabs[i];
                    const item = tab.componentItem;
                    if (!item.isClosable) {
                        isClosable = false;
                        break;
                    }
                }
            }
        }
        if (this._closeButton !== null) {
            setElementDisplayVisibility(this._closeButton.element, isClosable);
        }
        if (this._popoutButton !== null) {
            setElementDisplayVisibility(this._popoutButton.element, isClosable);
        }
        this._canRemoveComponent = isClosable || this._tabsContainer.tabCount > 1;
    }
    /** @internal */
    applyFocusedValue(value) {
        if (value) {
            this._element.classList.add("lm_focused" /* DomConstants.ClassName.Focused */);
        }
        else {
            this._element.classList.remove("lm_focused" /* DomConstants.ClassName.Focused */);
        }
    }
    /** @internal */
    processMaximised() {
        if (this._maximiseButton === undefined) {
            throw new UnexpectedUndefinedError('HPMAX16997');
        }
        else {
            this._maximiseButton.element.setAttribute('title', this._minimiseLabel);
        }
    }
    /** @internal */
    processMinimised() {
        if (this._maximiseButton === undefined) {
            throw new UnexpectedUndefinedError('HPMIN16997');
        }
        else {
            this._maximiseButton.element.setAttribute('title', this._maximiseLabel);
        }
    }
    /**
     * Pushes the tabs to the tab dropdown if the available space is not sufficient
     * @internal
     */
    updateTabSizes() {
        if (this._updateRequested)
            return;
        this._updateRequested = window.requestAnimationFrame(() => {
            this._updateRequested = 0;
            if (this._tabsContainer.tabCount > 0) {
                /* We need explicit this._element.style.width
                * if the header is in an lm_header container.
                const headerHeight = this._show ? this._layoutManager.layoutConfig.dimensions.headerHeight : 0;
                if (this._leftRightSided) {
                    this._element.style.height = '';
                    this._element.style.width = `${headerHeight}px;
                } else {
                    this._element.style.width = '';
                    this._element.style.height = `${headerHeight}px`;
                }
                */
                this._tabsContainer.updateTabSizes(this, this._getActiveComponentItemEvent());
            }
        });
    }
    availableTabsSize() {
        const el = this._element;
        let avail = this._leftRightSided ? el.offsetHeight : el.offsetWidth;
        for (let ch = el.firstElementChild; ch; ch = ch.nextElementSibling) {
            if (ch !== this.tabsContainerElement && ch instanceof HTMLElement) {
                avail -= this._leftRightSided ? ch.offsetHeight : ch.offsetWidth;
            }
        }
        return avail;
    }
    /** @internal */
    handleTabInitiatedComponentRemoveEvent(componentItem) {
        if (this._canRemoveComponent) {
            if (this._componentRemoveEvent === undefined) {
                throw new UnexpectedUndefinedError('HHTCE22294');
            }
            else {
                this._componentRemoveEvent(componentItem);
            }
        }
    }
    /** @internal */
    handleTabInitiatedComponentFocusEvent(componentItem) {
        if (this._componentFocusEvent === undefined) {
            throw new UnexpectedUndefinedError('HHTAE22294');
        }
        else {
            this._componentFocusEvent(componentItem);
        }
    }
    /** @internal */
    handleTabInitiatedDragStartEvent(x, y, dragListener, componentItem) {
        if (!this._canRemoveComponent) {
            dragListener.cancelDrag();
        }
        else {
            if (this._componentDragStartEvent === undefined) {
                throw new UnexpectedUndefinedError('HHTDSE22294');
            }
            else {
                this._componentDragStartEvent(x, y, dragListener, componentItem);
            }
        }
    }
    /** @internal */
    processTabDropdownActiveChanged() {
        if (this._tabDropdownButton !== undefined) {
            setElementDisplayVisibility(this._tabDropdownButton.element, this._tabsContainer.dropdownActive);
        }
    }
    /** @internal */
    handleButtonPopoutEvent(ev) {
        if (this._layoutManager.popoutClickHandler(this.parent, ev))
            return;
        if (this._layoutManager.layoutConfig.settings.popoutWholeStack) {
            if (this._popoutEvent === undefined) {
                throw new UnexpectedUndefinedError('HHBPOE17834');
            }
            else {
                this._popoutEvent();
            }
        }
        else {
            const activeComponentItem = this._getActiveComponentItemEvent();
            if (activeComponentItem) {
                activeComponentItem.popout();
            }
            // else: if the stack is empty there won't be an active item (and nothing to popout)
        }
    }
    /** @internal */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleButtonMaximiseToggleEvent(ev) {
        if (this._maximiseToggleEvent === undefined) {
            throw new UnexpectedUndefinedError('HHBMTE16834');
        }
        else {
            this._maximiseToggleEvent();
        }
    }
    /**
     * Invoked when the header's background is clicked (not its tabs or controls)
     * @internal
     */
    onClick(event) {
        if (event.target === this._element) {
            this.notifyClick(event);
        }
    }
    /**
     * Invoked when the header's background is touched (not its tabs or controls)
     * @internal
     */
    onTouchStart(event) {
        if (event.target === this._element) {
            this.notifyTouchStart(event);
        }
    }
    /** @internal */
    notifyClick(ev) {
        if (this._clickEvent === undefined) {
            throw new UnexpectedUndefinedError('HNHC46834');
        }
        else {
            this._clickEvent(ev);
        }
    }
    /** @internal */
    notifyTouchStart(ev) {
        if (this._touchStartEvent === undefined) {
            throw new UnexpectedUndefinedError('HNHTS46834');
        }
        else {
            this._touchStartEvent(ev);
        }
    }
}

class ComponentParentableItem extends ContentItem {
    constructor() {
        super(...arguments);
        /** @internal */
        this._focused = false;
    }
    get focused() { return this._focused; }
    /** @internal */
    setFocusedValue(value) {
        this._focused = value;
    }
}

/** @public */
class Stack extends ComponentParentableItem {
    get childElementContainer() { return this._childElementContainer; }
    get header() { return this._header; }
    get headerShow() { return this._header.show; }
    get headerSide() { return this._header.side; }
    get headerLeftRightSided() { return this._header.leftRightSided; }
    /** @internal */
    get contentAreaDimensions() { return this._contentAreaDimensions; }
    /** @internal */
    get initialWantMaximise() { return this._initialWantMaximise; }
    get isMaximised() { return this === this.layoutManager.maximisedStack; }
    get stackParent() {
        if (!this.parent) {
            throw new Error('Stack should always have a parent');
        }
        return this.parent;
    }
    /** @internal */
    constructor(layoutManager, config, parent) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        super(layoutManager, config, parent, ContentItem.createElement("lm_stack" /* DomConstants.ClassName.Stack */));
        /** @internal */
        this._headerSideChanged = false;
        /** @internal */
        this._resizeListener = () => this.updateTabSizes();
        /** @internal */
        this._maximisedListener = () => this.handleMaximised();
        /** @internal */
        this._minimisedListener = () => this.handleMinimised();
        this._headerConfig = config.header;
        const layoutHeaderConfig = layoutManager.layoutConfig.header;
        const configContent = config.content;
        // If stack has only one component, then we can also check this for header settings
        let componentHeaderConfig;
        if (configContent.length !== 1) {
            componentHeaderConfig = undefined;
        }
        else {
            const firstChildItemConfig = configContent[0];
            componentHeaderConfig = firstChildItemConfig.header; // will be undefined if not component (and wont be stack)
        }
        this._initialWantMaximise = config.maximised;
        this._initialActiveItemIndex = (_a = config.activeItemIndex) !== null && _a !== void 0 ? _a : 0; // make sure defined
        // check for defined value for each item in order of Stack (this Item), Component (first child), Manager.
        const show = (_d = (_c = (_b = this._headerConfig) === null || _b === void 0 ? void 0 : _b.show) !== null && _c !== void 0 ? _c : componentHeaderConfig === null || componentHeaderConfig === void 0 ? void 0 : componentHeaderConfig.show) !== null && _d !== void 0 ? _d : layoutHeaderConfig.show;
        const popout = (_g = (_f = (_e = this._headerConfig) === null || _e === void 0 ? void 0 : _e.popout) !== null && _f !== void 0 ? _f : componentHeaderConfig === null || componentHeaderConfig === void 0 ? void 0 : componentHeaderConfig.popout) !== null && _g !== void 0 ? _g : layoutHeaderConfig.popout;
        const maximise = (_k = (_j = (_h = this._headerConfig) === null || _h === void 0 ? void 0 : _h.maximise) !== null && _j !== void 0 ? _j : componentHeaderConfig === null || componentHeaderConfig === void 0 ? void 0 : componentHeaderConfig.maximise) !== null && _k !== void 0 ? _k : layoutHeaderConfig.maximise;
        const close = (_o = (_m = (_l = this._headerConfig) === null || _l === void 0 ? void 0 : _l.close) !== null && _m !== void 0 ? _m : componentHeaderConfig === null || componentHeaderConfig === void 0 ? void 0 : componentHeaderConfig.close) !== null && _o !== void 0 ? _o : layoutHeaderConfig.close;
        const minimise = (_r = (_q = (_p = this._headerConfig) === null || _p === void 0 ? void 0 : _p.minimise) !== null && _q !== void 0 ? _q : componentHeaderConfig === null || componentHeaderConfig === void 0 ? void 0 : componentHeaderConfig.minimise) !== null && _r !== void 0 ? _r : layoutHeaderConfig.minimise;
        const tabDropdown = (_u = (_t = (_s = this._headerConfig) === null || _s === void 0 ? void 0 : _s.tabDropdown) !== null && _t !== void 0 ? _t : componentHeaderConfig === null || componentHeaderConfig === void 0 ? void 0 : componentHeaderConfig.tabDropdown) !== null && _u !== void 0 ? _u : layoutHeaderConfig.tabDropdown;
        this._maximisedEnabled = maximise !== false;
        const headerSettings = {
            show: show !== false,
            side: show === false ? Side.top : show,
            popoutEnabled: popout !== false,
            popoutLabel: popout === false ? '' : popout,
            maximiseEnabled: this._maximisedEnabled,
            maximiseLabel: maximise === false ? '' : maximise,
            closeEnabled: close !== false,
            closeLabel: close === false ? '' : close,
            minimiseEnabled: true,
            minimiseLabel: minimise,
            tabDropdownEnabled: tabDropdown !== false,
            tabDropdownLabel: tabDropdown === false ? '' : tabDropdown,
        };
        this._header = new Header(layoutManager, this, headerSettings, config.isClosable && close !== false, () => this.getActiveComponentItem(), () => this.remove(), () => this.handlePopoutEvent(), () => this.toggleMaximise(), (ev) => this.handleHeaderClickEvent(ev), (ev) => this.handleHeaderTouchStartEvent(ev), (item) => this.handleHeaderComponentRemoveEvent(item), (item) => this.handleHeaderComponentFocusEvent(item), (x, y, dragListener, item) => this.handleHeaderComponentStartDragEvent(x, y, dragListener, item));
        // this._dropZones = {};
        this.isStack = true;
        this._childElementContainer = document.createElement('section');
        this._childElementContainer.classList.add("lm_items" /* DomConstants.ClassName.Items */);
        this.on('resize', this._resizeListener);
        if (this._maximisedEnabled) {
            this.on('maximised', this._maximisedListener);
            this.on('minimised', this._minimisedListener);
        }
        this.element.appendChild(this._header.element);
        this.element.appendChild(this._childElementContainer);
        this.setupHeaderPosition();
        this._header.updateClosability();
    }
    /** @internal */
    init() {
        if (this.isInitialised === true)
            return;
        this.updateNodeSize();
        for (let i = 0; i < this.contentItems.length; i++) {
            this._childElementContainer.appendChild(this.contentItems[i].element);
        }
        super.init();
        const contentItems = this.contentItems;
        const contentItemCount = contentItems.length;
        if (contentItemCount > 0) { // contentItemCount will be 0 on drag drop
            if (this._initialActiveItemIndex < 0 || this._initialActiveItemIndex >= contentItemCount) {
                throw new Error(`ActiveItemIndex out of range: ${this._initialActiveItemIndex} id: ${this.id}`);
            }
            else {
                for (let i = 0; i < contentItemCount; i++) {
                    const contentItem = contentItems[i];
                    if (!(contentItem instanceof ComponentItem)) {
                        throw new Error(`Stack Content Item is not of type ComponentItem: ${i} id: ${this.id}`);
                    }
                    else {
                        this._header.createTab(contentItem, i);
                        contentItem.hide();
                        contentItem.container.setBaseLogicalZIndex();
                    }
                }
                this.setActiveComponentItem(contentItems[this._initialActiveItemIndex], false);
                this.updateTabSizes();
            }
        }
        this._header.updateClosability();
        this.initContentItems();
    }
    /** @deprecated Use {@link (Stack:class).setActiveComponentItem} */
    setActiveContentItem(item) {
        if (!ContentItem.isComponentItem(item)) {
            throw new Error('Stack.setActiveContentItem: item is not a ComponentItem');
        }
        else {
            this.setActiveComponentItem(item, false);
        }
    }
    setActiveComponentItem(componentItem, focus, suppressFocusEvent = false) {
        if (this._activeComponentItem !== componentItem) {
            if (this.contentItems.indexOf(componentItem) === -1) {
                throw new Error('componentItem is not a child of this stack');
            }
            else {
                if (this._activeComponentItem !== undefined) {
                    this._activeComponentItem.hide();
                }
                this._activeComponentItem = componentItem;
                this._header.processActiveComponentChanged(componentItem);
                componentItem.show();
                this.emit('activeContentItemChanged', componentItem);
                this.layoutManager.emit('activeContentItemChanged', componentItem);
                this.emitStateChangedEvent();
            }
        }
        if (this.focused || focus) {
            this.layoutManager.setFocusedComponentItem(componentItem, suppressFocusEvent);
        }
    }
    /** @deprecated Use {@link (Stack:class).getActiveComponentItem} */
    getActiveContentItem() {
        var _a;
        return (_a = this.getActiveComponentItem()) !== null && _a !== void 0 ? _a : null;
    }
    getActiveComponentItem() {
        return this._activeComponentItem;
    }
    /** @internal */
    focusActiveContentItem() {
        var _a;
        (_a = this._activeComponentItem) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /** @internal */
    setFocusedValue(value) {
        if (value) {
            this.element.classList.add("lm_focused" /* DomConstants.ClassName.Focused */);
        }
        else {
            this.element.classList.remove("lm_focused" /* DomConstants.ClassName.Focused */);
        }
        this._header.applyFocusedValue(value);
        super.setFocusedValue(value);
    }
    /** @internal */
    setRowColumnClosable(value) {
        this._header.setRowColumnClosable(value);
    }
    newComponent(componentType, componentState, title, index) {
        const itemConfig = {
            type: 'component',
            componentType,
            componentState,
            title,
        };
        return this.newItem(itemConfig, index);
    }
    addComponent(componentType, componentState, title, index) {
        const itemConfig = {
            type: 'component',
            componentType,
            componentState,
            title,
        };
        return this.addItem(itemConfig, index);
    }
    newItem(itemConfig, index) {
        index = this.addItem(itemConfig, index);
        return this.contentItems[index];
    }
    addItem(itemConfig, index) {
        this.layoutManager.checkMinimiseMaximisedStack();
        const resolvedItemConfig = ItemConfig.resolve(itemConfig, false);
        const contentItem = this.layoutManager.createAndInitContentItem(resolvedItemConfig, this);
        return this.addChild(contentItem, index);
    }
    addChild(contentItem, index, focus = false) {
        if (index !== undefined && index > this.contentItems.length) {
            index -= 1;
            throw new AssertError('SAC99728'); // undisplayChild() removed so this condition should no longer occur
        }
        if (!(contentItem instanceof ComponentItem)) {
            throw new AssertError('SACC88532'); // Stacks can only have Component children
        }
        else {
            index = super.addChild(contentItem, index);
            this._childElementContainer.appendChild(contentItem.element);
            this._header.createTab(contentItem, index);
            this.setActiveComponentItem(contentItem, focus);
            this._header.updateTabSizes();
            this.updateSize();
            contentItem.container.setBaseLogicalZIndex();
            this._header.updateClosability();
            this.emitStateChangedEvent();
            return index;
        }
    }
    removeChild(contentItem, keepChild) {
        const componentItem = contentItem;
        const index = this.contentItems.indexOf(componentItem);
        const stackWillBeDeleted = this.contentItems.length === 1;
        if (this._activeComponentItem === componentItem) {
            if (componentItem.focused) {
                componentItem.blur();
            }
            if (!stackWillBeDeleted) {
                // At this point we're already sure we have at least one content item left *after*
                // removing contentItem, so we can safely assume index 1 is a valid one if
                // the index of contentItem is 0, otherwise we just use the previous content item.
                const newActiveComponentIdx = index === 0 ? 1 : index - 1;
                this.setActiveComponentItem(this.contentItems[newActiveComponentIdx], false);
            }
        }
        this._header.removeTab(componentItem);
        super.removeChild(componentItem, keepChild);
        if (!stackWillBeDeleted) {
            this._header.updateClosability();
        }
        this.emitStateChangedEvent();
    }
    /**
     * Maximises the Item or minimises it if it is already maximised
     */
    toggleMaximise() {
        if (this.isMaximised) {
            this.minimise();
        }
        else {
            this.maximise();
        }
    }
    maximise() {
        if (!this.isMaximised) {
            this.layoutManager.setMaximisedStack(this);
            const contentItems = this.contentItems;
            const contentItemCount = contentItems.length;
            for (let i = 0; i < contentItemCount; i++) {
                const contentItem = contentItems[i];
                if (contentItem instanceof ComponentItem) {
                    contentItem.enterStackMaximised();
                }
                else {
                    throw new AssertError('SMAXI87773');
                }
            }
            this.emitStateChangedEvent();
        }
    }
    minimise() {
        if (this.isMaximised) {
            this.layoutManager.setMaximisedStack(undefined);
            const contentItems = this.contentItems;
            const contentItemCount = contentItems.length;
            for (let i = 0; i < contentItemCount; i++) {
                const contentItem = contentItems[i];
                if (contentItem instanceof ComponentItem) {
                    contentItem.exitStackMaximised();
                }
                else {
                    throw new AssertError('SMINI87773');
                }
            }
            this.emitStateChangedEvent();
        }
    }
    /** @internal */
    destroy() {
        var _a;
        if ((_a = this._activeComponentItem) === null || _a === void 0 ? void 0 : _a.focused) {
            this._activeComponentItem.blur();
        }
        super.destroy();
        this.off('resize', this._resizeListener);
        if (this._maximisedEnabled) {
            this.off('maximised', this._maximisedListener);
            this.off('minimised', this._minimisedListener);
        }
        this._header.destroy();
    }
    toConfig() {
        let activeItemIndex;
        if (this._activeComponentItem) {
            activeItemIndex = this.contentItems.indexOf(this._activeComponentItem);
            if (activeItemIndex < 0) {
                throw new Error('active component item not found in stack');
            }
        }
        if (this.contentItems.length > 0 && activeItemIndex === undefined) {
            throw new Error('expected non-empty stack to have an active component item');
        }
        else {
            const result = {
                type: 'stack',
                content: this.calculateConfigContent(),
                size: this.size,
                sizeUnit: this.sizeUnit,
                minSize: this.minSize,
                minSizeUnit: this.minSizeUnit,
                id: this.id,
                isClosable: this.isClosable,
                maximised: this.isMaximised,
                header: this.createHeaderConfig(),
                activeItemIndex,
            };
            return result;
        }
    }
    /**
     * Ok, this one is going to be the tricky one: The user has dropped a {@link (ContentItem:class)} onto this stack.
     *
     * It was dropped on either the stacks header or the top, right, bottom or left bit of the content area
     * (which one of those is stored in this._dropSegment). Now, if the user has dropped on the header the case
     * is relatively clear: We add the item to the existing stack... job done (might be good to have
     * tab reordering at some point, but lets not sweat it right now)
     *
     * If the item was dropped on the content part things are a bit more complicated. If it was dropped on either the
     * top or bottom region we need to create a new column and place the items accordingly.
     * Unless, of course if the stack is already within a column... in which case we want
     * to add the newly created item to the existing column...
     * either prepend or append it, depending on wether its top or bottom.
     *
     * Same thing for rows and left / right drop segments... so in total there are 9 things that can potentially happen
     * (left, top, right, bottom) * is child of the right parent (row, column) + header drop
     *
     * @internal
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onDrop(contentItem, area) {
        /*
         * The item was dropped on the header area. Just add it as a child of this stack and
         * get the hell out of this logic
         */
        if (this._dropSegment === "header" /* Stack.Segment.Header */) {
            this.resetHeaderDropZone();
            if (this._dropIndex === undefined) {
                throw new UnexpectedUndefinedError('SODDI68990');
            }
            else {
                this.addChild(contentItem, this._dropIndex);
                return;
            }
        }
        /*
         * The stack is empty. Let's just add the element.
         */
        if (this._dropSegment === "body" /* Stack.Segment.Body */) {
            this.addChild(contentItem, 0, true);
            return;
        }
        /*
         * The item was dropped on the top-, left-, bottom- or right- part of the content. Let's
         * aggregate some conditions to make the if statements later on more readable
         */
        const isVertical = this._dropSegment === "top" /* Stack.Segment.Top */ || this._dropSegment === "bottom" /* Stack.Segment.Bottom */;
        const isHorizontal = this._dropSegment === "left" /* Stack.Segment.Left */ || this._dropSegment === "right" /* Stack.Segment.Right */;
        const insertBefore = this._dropSegment === "top" /* Stack.Segment.Top */ || this._dropSegment === "left" /* Stack.Segment.Left */;
        const hasCorrectParent = (isVertical && this.stackParent.isColumn) || (isHorizontal && this.stackParent.isRow);
        /*
         * The content item can be either a component or a stack. If it is a component, wrap it into a stack
         */
        if (contentItem.isComponent) {
            const itemConfig = ResolvedStackItemConfig.createDefault();
            itemConfig.header = this.createHeaderConfig();
            const stack = this.layoutManager.createAndInitContentItem(itemConfig, this);
            stack.addChild(contentItem);
            contentItem = stack;
        }
        /*
         * If the contentItem that's being dropped is not dropped on a Stack (cases which just passed above and
         * which would wrap the contentItem in a Stack) we need to check whether contentItem is a RowOrColumn.
         * If it is, we need to re-wrap it in a Stack like it was when it was dragged by its Tab (it was dragged!).
         */
        if (contentItem.type === ItemType.row || contentItem.type === ItemType.column) {
            const itemConfig = ResolvedStackItemConfig.createDefault();
            itemConfig.header = this.createHeaderConfig();
            const stack = this.layoutManager.createContentItem(itemConfig, this);
            stack.addChild(contentItem);
            contentItem = stack;
        }
        /*
         * If the item is dropped on top or bottom of a column or left and right of a row, it's already
         * layd out in the correct way. Just add it as a child
         */
        if (hasCorrectParent) {
            const index = this.stackParent.contentItems.indexOf(this);
            this.stackParent.addChild(contentItem, insertBefore ? index : index + 1, true);
            this.size *= 0.5;
            contentItem.size = this.size;
            contentItem.sizeUnit = this.sizeUnit;
            this.stackParent.updateSize();
            /*
             * This handles items that are dropped on top or bottom of a row or left / right of a column. We need
             * to create the appropriate contentItem for them to live in
             */
        }
        else {
            const type = isVertical ? ItemType.column : ItemType.row;
            const itemConfig = ResolvedItemConfig.createDefault(type);
            const rowOrColumn = this.layoutManager.createContentItem(itemConfig, this);
            this.stackParent.replaceChild(this, rowOrColumn);
            rowOrColumn.addChild(contentItem, insertBefore ? 0 : undefined, true);
            rowOrColumn.addChild(this, insertBefore ? undefined : 0, true);
            this.size = 50;
            contentItem.size = 50;
            contentItem.sizeUnit = SizeUnitEnum.Percent;
            rowOrColumn.updateSize();
        }
    }
    /**
     * If the user hovers above the header part of the stack, indicate drop positions for tabs.
     * otherwise indicate which segment of the body the dragged item would be dropped on
     *
     * @param x - Absolute Screen X
     * @param y - Absolute Screen Y
     * @internal
     */
    highlightDropZone(x, y) {
        for (const key in this._contentAreaDimensions) {
            const segment = key;
            const area = this._contentAreaDimensions[segment].hoverArea;
            if (area.x1 < x && area.x2 > x && area.y1 < y && area.y2 > y) {
                if (segment === "header" /* Stack.Segment.Header */) {
                    this._dropSegment = "header" /* Stack.Segment.Header */;
                    this.highlightHeaderDropZone(this._header.leftRightSided ? y : x);
                }
                else {
                    this.resetHeaderDropZone();
                    this.highlightBodyDropZone(segment);
                }
                return;
            }
        }
    }
    /** @internal */
    getArea() {
        if (this.element.style.display === 'none') {
            return null;
        }
        const headerArea = super.getElementArea(this._header.element);
        const contentArea = super.getElementArea(this._childElementContainer);
        if (headerArea === null || contentArea === null) {
            throw new UnexpectedNullError('SGAHC13086');
        }
        const contentWidth = contentArea.x2 - contentArea.x1;
        const contentHeight = contentArea.y2 - contentArea.y1;
        this._contentAreaDimensions = {
            header: {
                hoverArea: {
                    x1: headerArea.x1,
                    y1: headerArea.y1,
                    x2: headerArea.x2,
                    y2: headerArea.y2
                },
                highlightArea: {
                    x1: headerArea.x1,
                    y1: headerArea.y1,
                    x2: headerArea.x2,
                    y2: headerArea.y2
                }
            }
        };
        /**
         * Highlight the entire body if the stack is empty
         */
        if (this.contentItems.length === 0) {
            this._contentAreaDimensions.body = {
                hoverArea: {
                    x1: contentArea.x1,
                    y1: contentArea.y1,
                    x2: contentArea.x2,
                    y2: contentArea.y2
                },
                highlightArea: {
                    x1: contentArea.x1,
                    y1: contentArea.y1,
                    x2: contentArea.x2,
                    y2: contentArea.y2
                }
            };
            return super.getElementArea(this.element);
        }
        else {
            this._contentAreaDimensions.left = {
                hoverArea: {
                    x1: contentArea.x1,
                    y1: contentArea.y1,
                    x2: contentArea.x1 + contentWidth * 0.25,
                    y2: contentArea.y2
                },
                highlightArea: {
                    x1: contentArea.x1,
                    y1: contentArea.y1,
                    x2: contentArea.x1 + contentWidth * 0.5,
                    y2: contentArea.y2
                }
            };
            this._contentAreaDimensions.top = {
                hoverArea: {
                    x1: contentArea.x1 + contentWidth * 0.25,
                    y1: contentArea.y1,
                    x2: contentArea.x1 + contentWidth * 0.75,
                    y2: contentArea.y1 + contentHeight * 0.5
                },
                highlightArea: {
                    x1: contentArea.x1,
                    y1: contentArea.y1,
                    x2: contentArea.x2,
                    y2: contentArea.y1 + contentHeight * 0.5
                }
            };
            this._contentAreaDimensions.right = {
                hoverArea: {
                    x1: contentArea.x1 + contentWidth * 0.75,
                    y1: contentArea.y1,
                    x2: contentArea.x2,
                    y2: contentArea.y2
                },
                highlightArea: {
                    x1: contentArea.x1 + contentWidth * 0.5,
                    y1: contentArea.y1,
                    x2: contentArea.x2,
                    y2: contentArea.y2
                }
            };
            this._contentAreaDimensions.bottom = {
                hoverArea: {
                    x1: contentArea.x1 + contentWidth * 0.25,
                    y1: contentArea.y1 + contentHeight * 0.5,
                    x2: contentArea.x1 + contentWidth * 0.75,
                    y2: contentArea.y2
                },
                highlightArea: {
                    x1: contentArea.x1,
                    y1: contentArea.y1 + contentHeight * 0.5,
                    x2: contentArea.x2,
                    y2: contentArea.y2
                }
            };
            return super.getElementArea(this.element);
        }
    }
    /**
     * Programmatically operate with header position.
     *
     * @param position -
     *
     * @returns previous header position
     * @internal
     */
    positionHeader(position) {
        if (this._header.side !== position) {
            this._header.setSide(position);
            this._headerSideChanged = true;
            this.setupHeaderPosition();
        }
    }
    /** @internal */
    updateNodeSize() {
        if (this.element.style.display !== 'none') {
            this.emit('resize');
            this.emitStateChangedEvent();
        }
    }
    /** @internal */
    highlightHeaderDropZone(x) {
        var _a;
        const tabDropPlaceholder = this.layoutManager.tabDropPlaceholder;
        tabDropPlaceholder.remove();
        const tabsContainerElement = this._header.tabsContainerElement;
        const tabsContainerElementChildNodes = tabsContainerElement.childNodes;
        // Only walk over the visible tabs
        const visibleTabsLength = tabsContainerElementChildNodes.length;
        /*
        // Create shallow copy of childNodes list, excluding DropPlaceHolder, as we will be modifying the childNodes list
        const visibleTabElements = new Array<HTMLElement>(visibleTabsLength);
        let tabIndex = 0;
        let tabCount = 0;
        while (tabCount < visibleTabsLength) {
            const visibleTabElement = tabsContainerElementChildNodes[tabIndex++] as HTMLElement;
            if (visibleTabElement !== this.layoutManager.tabDropPlaceholder) {
                visibleTabElements[tabCount++] = visibleTabElement;
            }
            }
        */
        const dropTargetIndicator = this.layoutManager.dropTargetIndicator;
        if (dropTargetIndicator === null) {
            throw new UnexpectedNullError('SHHDZDTI97110');
        }
        let area;
        // Empty stack
        if (visibleTabsLength === 0) {
            const headerRect = this._header.element.getBoundingClientRect();
            const headerTop = headerRect.top + document.body.scrollTop;
            const headerLeft = headerRect.left + document.body.scrollLeft;
            area = {
                x1: headerLeft,
                x2: headerLeft + 100,
                y1: headerTop + headerRect.height - 20,
                y2: headerTop + headerRect.height,
            };
            this._dropIndex = 0;
        }
        else {
            let tabIndex = 0;
            // This indicates whether our cursor is exactly over a tab
            let isAboveTab = false;
            let tabTop;
            let tabLeft;
            let tabWidth;
            let tabElement;
            let afterDrag = 0;
            do {
                tabElement = tabsContainerElementChildNodes[tabIndex];
                //tabElement = visibleTabElements[tabIndex] as HTMLElement;
                const tabRect = tabElement.getBoundingClientRect();
                const tabRectTop = tabRect.top + document.body.scrollTop;
                const tabRectLeft = tabRect.left + document.body.scrollLeft;
                if (this._header.leftRightSided) {
                    tabLeft = tabRectTop;
                    tabTop = tabRectLeft;
                    tabWidth = tabRect.height;
                }
                else {
                    tabLeft = tabRectLeft;
                    tabTop = tabRectTop;
                    tabWidth = tabRect.width;
                }
                if (tabElement.classList.contains("lm_dragging" /* DomConstants.ClassName.Dragging */)) {
                    afterDrag++;
                }
                if (x >= tabLeft && x < tabLeft + tabWidth) {
                    isAboveTab = true;
                }
                else {
                    tabIndex++;
                }
            } while (tabIndex < visibleTabsLength && !isAboveTab);
            // If we're not above any tabs, or to the right of any tab, we are out of the area, so give up
            if (isAboveTab === false && x < tabLeft) {
                return;
            }
            const preferNext = x >= (tabLeft + tabWidth / 2);
            this._dropIndex = tabIndex + (tabIndex < visibleTabsLength && preferNext ? 1 : 0) - afterDrag;
            (_a = tabElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(tabDropPlaceholder, preferNext ? tabElement.nextSibling : tabElement);
            const tabDropPlaceholderRect = this.layoutManager.tabDropPlaceholder.getBoundingClientRect();
            const tabDropPlaceholderRectTop = tabDropPlaceholderRect.top + document.body.scrollTop;
            const tabDropPlaceholderRectLeft = tabDropPlaceholderRect.left + document.body.scrollLeft;
            const tabDropPlaceholderRectWidth = tabDropPlaceholderRect.width;
            if (this._header.leftRightSided) {
                const placeHolderTop = tabDropPlaceholderRectTop;
                area = {
                    x1: tabTop,
                    x2: tabTop + tabElement.clientHeight,
                    y1: placeHolderTop,
                    y2: placeHolderTop + tabDropPlaceholderRectWidth,
                };
            }
            else {
                const placeHolderLeft = tabDropPlaceholderRectLeft;
                area = {
                    x1: placeHolderLeft,
                    x2: placeHolderLeft + tabDropPlaceholderRectWidth,
                    y1: tabTop,
                    y2: tabTop + tabElement.clientHeight,
                };
            }
        }
        dropTargetIndicator.highlightArea(area, 0);
        return;
    }
    /** @internal */
    resetHeaderDropZone() {
        this.layoutManager.tabDropPlaceholder.remove();
    }
    /** @internal */
    setupHeaderPosition() {
        setElementDisplayVisibility(this._header.element, this._header.show);
        this.element.classList.remove("lm_left" /* DomConstants.ClassName.Left */, "lm_right" /* DomConstants.ClassName.Right */, "lm_bottom" /* DomConstants.ClassName.Bottom */);
        if (this._header.leftRightSided) {
            this.element.classList.add('lm_' + this._header.side);
        }
        //if ([Side.right, Side.bottom].includes(this._header.side)) {
        //    // move the header behind the content.
        //    this.element.appendChild(this._header.element);
        //}
        this.updateSize();
    }
    /** @internal */
    highlightBodyDropZone(segment) {
        if (this._contentAreaDimensions === undefined) {
            throw new UnexpectedUndefinedError('SHBDZC82265');
        }
        else {
            const highlightArea = this._contentAreaDimensions[segment].highlightArea;
            const dropTargetIndicator = this.layoutManager.dropTargetIndicator;
            if (dropTargetIndicator === null) {
                throw new UnexpectedNullError('SHBDZD96110');
            }
            else {
                dropTargetIndicator.highlightArea(highlightArea, 1);
                this._dropSegment = segment;
            }
        }
    }
    updateTabSizes() {
        if (this._header)
            this._header.updateTabSizes();
    }
    /** @internal */
    handleMaximised() {
        this._header.processMaximised();
    }
    /** @internal */
    handleMinimised() {
        this._header.processMinimised();
    }
    /** @internal */
    handlePopoutEvent() {
        this.popout();
    }
    /** @internal */
    handleHeaderClickEvent(ev) {
        // Forces updates if click is when top-level window has lost focus.
        if (this._activeComponentItem)
            this.setActiveComponentItem(this._activeComponentItem, true);
        const eventName = EventEmitter.headerClickEventName;
        const bubblingEvent = new EventEmitter.ClickBubblingEvent(eventName, this, ev);
        this.emit(eventName, bubblingEvent);
    }
    /** @internal */
    handleHeaderTouchStartEvent(ev) {
        const eventName = EventEmitter.headerTouchStartEventName;
        const bubblingEvent = new EventEmitter.TouchStartBubblingEvent(eventName, this, ev);
        this.emit(eventName, bubblingEvent);
    }
    /** @internal */
    handleHeaderComponentRemoveEvent(item) {
        this.removeChild(item, false);
    }
    /** @internal */
    handleHeaderComponentFocusEvent(item) {
        this.setActiveComponentItem(item, true);
    }
    /** @internal */
    handleHeaderComponentStartDragEvent(x, y, dragListener, componentItem) {
        if (this.isMaximised === true) {
            this.toggleMaximise();
        }
        this.layoutManager.startComponentDragOld(x, y, dragListener, componentItem, this);
    }
    /** @internal */
    createHeaderConfig() {
        if (!this._headerSideChanged) {
            return ResolvedHeaderedItemConfig.Header.createCopy(this._headerConfig);
        }
        else {
            const show = this._header.show ? this._header.side : false;
            let result = ResolvedHeaderedItemConfig.Header.createCopy(this._headerConfig, show);
            if (result === undefined) {
                result = {
                    show,
                    popout: undefined,
                    maximise: undefined,
                    close: undefined,
                    minimise: undefined,
                    tabDropdown: undefined,
                };
            }
            return result;
        }
    }
    /** @internal */
    emitStateChangedEvent() {
        this.emitBaseBubblingEvent('stateChanged');
    }
}

/** @public */
class ComponentItem extends ContentItem {
    /** @internal @deprecated use {@link (ComponentItem:class).componentType} */
    get componentName() { return this._container.componentType; }
    get componentType() { return this._container.componentType; }
    get reorderEnabled() { return this._reorderEnabled; }
    /** @internal */
    get initialWantMaximise() { return this._initialWantMaximise; }
    get container() { return this._container; }
    get parentItem() { return this._parentItem; }
    get headerConfig() { return this._headerConfig; }
    get title() { return this._title; }
    get titleRenderer() { return this._titleRenderer; }
    get tab() { return this._tab; }
    get focused() { return this._focused; }
    /** @internal */
    constructor(layoutManager, config, 
    /** @internal */
    _parentItem) {
        super(layoutManager, config, _parentItem, ContentItem.createElement());
        this._parentItem = _parentItem;
        /** @internal */
        this._focused = false;
        this.isComponent = true;
        this._reorderEnabled = config.reorderEnabled;
        this.applyUpdatableConfig(config);
        this._initialWantMaximise = config.maximised;
        this._container = new ComponentContainer(config, this, layoutManager, (itemConfig) => this.handleUpdateItemConfigEvent(itemConfig), () => this.show(), () => this.hide(), (suppressEvent) => this.focus(suppressEvent), (suppressEvent) => this.blur(suppressEvent));
    }
    /** @internal */
    destroy() {
        const element = this.element;
        if (element)
            element.style.opacity = '0.1';
        const wasDragging = this.layoutManager.currentlyDragging();
        this.layoutManager.deferIfDragging((cancel) => {
            if (element)
                element.style.opacity = '';
            if (!cancel && !wasDragging) {
                this._container.destroy();
                super.destroy();
            }
        });
    }
    applyUpdatableConfig(config) {
        this.setTitle(config.title);
        this._headerConfig = config.header;
    }
    toConfig() {
        const stateRequestEvent = this._container.stateRequestEvent;
        const state = stateRequestEvent === undefined ? this._container.state : stateRequestEvent();
        const result = {
            type: ItemType.component,
            content: [],
            size: this.size,
            sizeUnit: this.sizeUnit,
            minSize: this.minSize,
            minSizeUnit: this.minSizeUnit,
            id: this.id,
            maximised: false,
            isClosable: this.isClosable,
            reorderEnabled: this._reorderEnabled,
            title: this._title,
            header: ResolvedHeaderedItemConfig.Header.createCopy(this._headerConfig),
            componentType: ResolvedComponentItemConfig.copyComponentType(this.componentType),
            componentState: state,
        };
        return result;
    }
    close() {
        if (this.parent === null) {
            throw new UnexpectedNullError('CIC68883');
        }
        else {
            this.parent.removeChild(this, false);
        }
    }
    // Used by Drag Proxy
    /** @internal */
    enterDragMode(width, height) {
        const style = this.element.style;
        style.height = `${height}px`;
        style.width = `${width}px`;
        this._container.enterDragMode(width, height);
    }
    /** @internal */
    exitDragMode() {
        const style = this.element.style;
        style.height = '';
        style.width = '';
        this._container.exitDragMode();
    }
    /** @internal */
    enterStackMaximised() {
        this._container.enterStackMaximised();
    }
    /** @internal */
    exitStackMaximised() {
        this._container.exitStackMaximised();
    }
    // Used by Drag Proxy
    /** @internal */
    drag() {
        this._container.drag();
    }
    /** @internal */
    init() {
        this.updateNodeSize();
        super.init();
        this._container.emit('open');
        this.initContentItems();
    }
    /**
     * Set this component's title
     *
     * @public
     * @param title -
     */
    setTitle(title) {
        this._title = title;
        this.emit('titleChanged', title);
        this.emit('stateChanged');
    }
    setTitleRenderer(renderer) {
        this._titleRenderer = renderer;
        this.emit('titleChanged', this._title);
        this.emit('stateChanged');
    }
    setTab(tab) {
        this._tab = tab;
        this.emit('tab', tab);
        this._container.setTab(tab);
    }
    /** @internal */
    hide() {
        this._container.setVisibility(false);
    }
    /** @internal */
    show() {
        this._container.setVisibility(true);
    }
    /**
     * Focuses the item if it is not already focused
     */
    focus(suppressEvent = false) {
        this.parentItem.setActiveComponentItem(this, true, suppressEvent);
    }
    /** @internal */
    setFocused(suppressEvent) {
        this._focused = true;
        this.tab.setFocused();
        if (!suppressEvent) {
            this.emitBaseBubblingEvent('focus');
        }
    }
    /**
     * Blurs (defocuses) the item if it is focused
     */
    blur(suppressEvent = false) {
        if (this._focused) {
            this.layoutManager.setFocusedComponentItem(undefined, suppressEvent);
        }
    }
    /** @internal */
    setBlurred(suppressEvent) {
        this._focused = false;
        this.tab.setBlurred();
        if (!suppressEvent) {
            this.emitBaseBubblingEvent('blur');
        }
    }
    /** @internal */
    setParent(parent) {
        this._parentItem = parent;
        super.setParent(parent);
    }
    /** @internal */
    handleUpdateItemConfigEvent(itemConfig) {
        this.applyUpdatableConfig(itemConfig);
    }
    /** @internal */
    updateNodeSize() {
        // OLD:  this._container.setSizeToNodeSize(width, height, force)
        const contentInset = this.layoutManager.layoutConfig.dimensions.contentInset;
        this.element.style.margin = contentInset ? `${contentInset}px` : '';
        const contentElement = this.container.contentElement;
        const componentElement = this.container.element;
        if (contentElement instanceof HTMLElement
            // && contentElement.style.display !== 'none'
            && this.parentItem instanceof Stack) {
            // Do not update size of hidden components to prevent unwanted reflows
            const stackElement = this.parentItem.element;
            let stackBounds;
            const itemElement = this.element;
            const itemBounds = itemElement.getBoundingClientRect();
            const layoutBounds = this.layoutManager.container.getBoundingClientRect();
            if (componentElement instanceof HTMLElement
                && contentElement !== componentElement) {
                stackBounds = stackElement.getBoundingClientRect();
                componentElement.style.top = numberToPixels(stackBounds.top - layoutBounds.top);
                componentElement.style.left = numberToPixels(stackBounds.left - layoutBounds.left);
                componentElement.style.width = numberToPixels(stackBounds.width);
                componentElement.style.height = numberToPixels(stackBounds.height);
            }
            else {
                stackBounds = layoutBounds;
            }
            contentElement.style.position = "absolute";
            contentElement.style.top = numberToPixels(itemBounds.top - stackBounds.top);
            contentElement.style.left = numberToPixels(itemBounds.left - stackBounds.left);
            contentElement.style.width = numberToPixels(itemBounds.width);
            contentElement.style.height = numberToPixels(itemBounds.height);
        }
        else
            console.log('updateNodeSize ignored');
        this.layoutManager.addVirtualSizedContainer(this.container);
    }
}

/** @internal */
class Splitter {
    get element() { return this._element; }
    get dragHandleElement() { return this._dragHandleElement; }
    get backgroundElement() { return this._backgroundElement; }
    get dragHandleOffset() { return this._dragHandleOffset; }
    constructor(_isVertical, _size, grabSize) {
        this._isVertical = _isVertical;
        this._size = _size;
        this._grabSize = grabSize < this._size ? this._size : grabSize;
        this._element = document.createElement('div');
        this._element.classList.add("lm_splitter" /* DomConstants.ClassName.Splitter */);
        this._backgroundElement = document.createElement('div');
        const dragHandleElement = document.createElement('div');
        this._dragHandleElement = dragHandleElement;
        dragHandleElement.classList.add("lm_drag_handle" /* DomConstants.ClassName.DragHandle */);
        this._backgroundElement.classList.add("lm_bg" /* DomConstants.ClassName.Bg */);
        this._element.setAttribute('draggable', 'true');
        const handleExcessSize = this._grabSize - this._size;
        const handleExcessPos = handleExcessSize / 2;
        this._dragHandleOffset = handleExcessPos;
        const padding = numberToPixels(handleExcessPos);
        if (this._isVertical) {
            dragHandleElement.style.top = `${-handleExcessPos}px`;
            dragHandleElement.style.paddingTop = padding;
            dragHandleElement.style.paddingBottom = padding;
            dragHandleElement.style.height = numberToPixels(this._size);
            this._backgroundElement.style.top = `${-handleExcessPos}px`;
            this._backgroundElement.style.height = `${this._grabSize}px`;
            this._element.classList.add("lm_vertical" /* DomConstants.ClassName.Vertical */);
            this._element.style.height = numberToPixels(this._size);
        }
        else {
            dragHandleElement.style.left = `${-handleExcessPos}px`;
            dragHandleElement.style.paddingLeft = padding;
            dragHandleElement.style.paddingRight = padding;
            dragHandleElement.style.width = numberToPixels(this._size);
            this._backgroundElement.style.left = `${-handleExcessPos}px`;
            this._backgroundElement.style.width = `${this._grabSize}px`;
            this._element.classList.add("lm_horizontal" /* DomConstants.ClassName.Horizontal */);
            this._element.style.width = numberToPixels(this._size);
        }
        this._element.appendChild(this._backgroundElement);
        this._element.appendChild(dragHandleElement);
        this._dragListener = new DragListener(this._element);
    }
    destroy() {
        this._element.remove();
    }
    on(eventName, callback) {
        this._dragListener.on(eventName, callback);
    }
}

/** @public */
class RowOrColumn extends ContentItem {
    /** @internal */
    constructor(isColumn, layoutManager, config, 
    /** @internal */
    _rowOrColumnParent) {
        super(layoutManager, config, _rowOrColumnParent, ContentItem.createElement(isColumn ? "lm_column" /* DomConstants.ClassName.Column */ : "lm_row" /* DomConstants.ClassName.Row */));
        this._rowOrColumnParent = _rowOrColumnParent;
        /** @internal */
        this._splitter = [];
        this.isRow = !isColumn;
        this.isColumn = isColumn;
        this._childElementContainer = this.element;
        this._splitterSize = layoutManager.layoutConfig.dimensions.borderWidth;
        this._splitterGrabSize = layoutManager.layoutConfig.dimensions.borderGrabWidth;
        this._isColumn = isColumn;
        this._dimension = isColumn ? 'height' : 'width';
        this._splitterPosition = null;
        this._splitterMinPosition = null;
        this._splitterMaxPosition = null;
        switch (config.type) {
            case ItemType.row:
            case ItemType.column:
                this._configType = config.type;
                break;
            default:
                throw new AssertError('ROCCCT00925');
        }
    }
    newComponent(componentType, componentState, title, index) {
        const itemConfig = {
            type: 'component',
            componentType,
            componentState,
            title,
        };
        return this.newItem(itemConfig, index);
    }
    addComponent(componentType, componentState, title, index) {
        const itemConfig = {
            type: 'component',
            componentType,
            componentState,
            title,
        };
        return this.addItem(itemConfig, index);
    }
    newItem(itemConfig, index) {
        index = this.addItem(itemConfig, index);
        const createdItem = this.contentItems[index];
        if (ContentItem.isStack(createdItem) && (ItemConfig.isComponent(itemConfig))) {
            // createdItem is a Stack which was created to hold wanted component.  Return component
            return createdItem.contentItems[0];
        }
        else {
            return createdItem;
        }
    }
    addItem(itemConfig, index) {
        this.layoutManager.checkMinimiseMaximisedStack();
        const resolvedItemConfig = ItemConfig.resolve(itemConfig, false);
        const contentItem = this.layoutManager.createAndInitContentItem(resolvedItemConfig, this);
        return this.addChild(contentItem, index, false);
    }
    /**
     * Add a new contentItem to the Row or Column
     *
     * @param contentItem -
     * @param index - The position of the new item within the Row or Column.
     *                If no index is provided the item will be added to the end
     * @param suspendResize - If true the items won't be resized. This will leave the item in
     *                        an inconsistent state and is only intended to be used if multiple
     *                        children need to be added in one go and resize is called afterwards
     *
     * @returns
     */
    addChild(contentItem, index, suspendResize) {
        // contentItem = this.layoutManager._$normalizeContentItem(contentItem, this);
        if (index === undefined) {
            index = this.contentItems.length;
        }
        if (this.contentItems.length > 0) {
            const splitterElement = this.createSplitter(Math.max(0, index - 1)).element;
            if (index > 0) {
                this.contentItems[index - 1].element.insertAdjacentElement('afterend', splitterElement);
                splitterElement.insertAdjacentElement('afterend', contentItem.element);
            }
            else {
                this.contentItems[0].element.insertAdjacentElement('beforebegin', splitterElement);
                splitterElement.insertAdjacentElement('beforebegin', contentItem.element);
            }
        }
        else {
            this._childElementContainer.appendChild(contentItem.element);
        }
        super.addChild(contentItem, index);
        const newItemSize = (1 / this.contentItems.length) * 100;
        if (suspendResize === true) {
            this.emitBaseBubblingEvent('stateChanged');
            return index;
        }
        for (let i = 0; i < this.contentItems.length; i++) {
            const indexedContentItem = this.contentItems[i];
            if (indexedContentItem === contentItem) {
                contentItem.size = newItemSize;
            }
            else {
                const itemSize = indexedContentItem.size *= (100 - newItemSize) / 100;
                indexedContentItem.size = itemSize;
            }
        }
        this.updateSize();
        this.emitBaseBubblingEvent('stateChanged');
        return index;
    }
    /**
     * Removes a child of this element
     *
     * @param contentItem -
     * @param keepChild - If true the child will be removed, but not destroyed
     *
     */
    removeChild(contentItem, keepChild) {
        const index = this.contentItems.indexOf(contentItem);
        const splitterIndex = Math.max(index - 1, 0);
        if (index === -1) {
            throw new Error('Can\'t remove child. ContentItem is not child of this Row or Column');
        }
        /**
         * Remove the splitter before the item or after if the item happens
         * to be the first in the row/column
         */
        const splitter = this._splitter[splitterIndex];
        if (splitter) {
            splitter.element.style.display = 'none';
            this.layoutManager.deferIfDragging((cancel) => {
                if (cancel) {
                    splitter.element.style.display = '';
                }
                else {
                    splitter.destroy();
                    this._splitter.splice(splitterIndex, 1);
                }
            });
        }
        super.removeChild(contentItem, keepChild);
        this.layoutManager.deferIfDragging((cancel) => {
            if (!cancel
                && this.contentItems.length === 1 && this.isClosable === true) {
                const childItem = this.contentItems[0];
                this.contentItems.length = 0;
                this._rowOrColumnParent.replaceChild(this, childItem, true);
                return;
            }
            this.updateSize();
            this.emitBaseBubblingEvent('stateChanged');
        });
        if (this.layoutManager.currentlyDragging()) {
            this.updateSize();
            //this.emitBaseBubblingEvent('stateChanged');
        }
    }
    /**
     * Replaces a child of this Row or Column with another contentItem
     */
    replaceChild(oldChild, newChild) {
        const size = oldChild.size;
        super.replaceChild(oldChild, newChild);
        newChild.size = size;
        this.updateSize();
        this.emitBaseBubblingEvent('stateChanged');
    }
    /**
     * Invoked recursively by the layout manager. ContentItem.init appends
     * the contentItem's DOM elements to the container, RowOrColumn init adds splitters
     * in between them
     * @internal
     */
    init() {
        if (this.isInitialised === true)
            return;
        this.updateNodeSize();
        for (let i = 0; i < this.contentItems.length; i++) {
            this._childElementContainer.appendChild(this.contentItems[i].element);
        }
        super.init();
        for (let i = 0; i < this.contentItems.length - 1; i++) {
            this.contentItems[i].element.insertAdjacentElement('afterend', this.createSplitter(i).element);
        }
        this.initContentItems();
    }
    toConfig() {
        const result = {
            type: this.type,
            content: this.calculateConfigContent(),
            size: this.size,
            sizeUnit: this.sizeUnit,
            minSize: this.minSize,
            minSizeUnit: this.minSizeUnit,
            id: this.id,
            isClosable: this.isClosable,
        };
        return result;
    }
    /** @internal */
    setParent(parent) {
        this._rowOrColumnParent = parent;
        super.setParent(parent);
    }
    /** @internal */
    updateNodeSize() {
        if (this.contentItems.length > 0) {
            this.calculateRelativeSizes();
            this.setAbsoluteSizes();
        }
        this.emitBaseBubblingEvent('stateChanged');
        this.emit('resize');
    }
    /**
     * Turns the relative sizes calculated by calculateRelativeSizes into
     * absolute pixel values and applies them to the children's DOM elements
     *
     * Assigns additional pixels to counteract Math.floor
     * @internal
     */
    setAbsoluteSizes() {
        const absoluteSizes = this.calculateAbsoluteSizes();
        for (let i = 0; i < this.contentItems.length; i++) {
            const item = this.contentItems[i];
            if (item.ignoring)
                continue;
            if (absoluteSizes.additionalPixel - i > 0) {
                absoluteSizes.itemSizes[i]++;
            }
            if (this._isColumn) {
                setElementWidth(item.element, absoluteSizes.crossAxisSize);
                setElementHeight(item.element, absoluteSizes.itemSizes[i]);
            }
            else {
                setElementWidth(item.element, absoluteSizes.itemSizes[i]);
                setElementHeight(item.element, absoluteSizes.crossAxisSize);
            }
        }
    }
    /**
     * Calculates the absolute sizes of all of the children of this Item.
     * @returns Set with absolute sizes and additional pixels.
     * @internal
     */
    calculateAbsoluteSizes() {
        const totalSplitterSize = (this.contentItems.length - (this.ignoringChild ? 2 : 1))
            * this._splitterSize;
        const { width: elementWidth, height: elementHeight } = getElementWidthAndHeight(this.element);
        let totalSize;
        let crossAxisSize;
        if (this._isColumn) {
            totalSize = elementHeight - totalSplitterSize;
            crossAxisSize = elementWidth;
        }
        else {
            totalSize = elementWidth - totalSplitterSize;
            crossAxisSize = elementHeight;
        }
        let totalAssigned = 0;
        const itemSizes = [];
        for (const contentItem of this.contentItems) {
            let itemSize;
            if (contentItem.ignoring) {
                itemSize = 0;
            }
            else if (contentItem.sizeUnit === SizeUnitEnum.Percent) {
                itemSize = Math.floor(totalSize * (contentItem.size / 100));
            }
            else {
                throw new AssertError('ROCCAS6692');
            }
            totalAssigned += itemSize;
            itemSizes.push(itemSize);
        }
        const additionalPixel = Math.floor(totalSize - totalAssigned);
        return {
            itemSizes,
            additionalPixel,
            totalSize,
            crossAxisSize,
        };
    }
    /**
     * Calculates the relative sizes of all children of this Item. The logic
     * is as follows:
     *
     * - Add up the total size of all items that have a configured size
     *
     * - If the total == 100 (check for floating point errors)
     *        Excellent, job done
     *
     * - If the total is \> 100,
     *        set the size of items without set dimensions to 1/3 and add this to the total
     *        set the size off all items so that the total is hundred relative to their original size
     *
     * - If the total is \< 100
     *        If there are items without set dimensions, distribute the remainder to 100 evenly between them
     *        If there are no items without set dimensions, increase all items sizes relative to
     *        their original size so that they add up to 100
     *
     * @internal
     */
    calculateRelativeSizes() {
        let total = 0;
        const itemsWithFractionalSize = [];
        let totalFractionalSize = 0;
        for (let i = 0; i < this.contentItems.length; i++) {
            if (this.contentItems[i].ignoring)
                continue;
            const contentItem = this.contentItems[i];
            const sizeUnit = contentItem.sizeUnit;
            switch (sizeUnit) {
                case SizeUnitEnum.Percent: {
                    total += contentItem.size;
                    break;
                }
                case SizeUnitEnum.Fractional: {
                    itemsWithFractionalSize.push(contentItem);
                    totalFractionalSize += contentItem.size;
                    break;
                }
                default:
                    throw new AssertError('ROCCRS49110', JSON.stringify(contentItem));
            }
        }
        /**
         * Everything adds up to hundred, all good :-)
         */
        if (Math.round(total) === 100) {
            this.respectMinItemSize();
            return;
        }
        else {
            /**
             * Allocate the remaining size to the items with a fractional size
             */
            if (Math.round(total) < 100 && itemsWithFractionalSize.length > 0) {
                const fractionalAllocatedSize = 100 - total;
                for (let i = 0; i < itemsWithFractionalSize.length; i++) {
                    const contentItem = itemsWithFractionalSize[i];
                    contentItem.size = fractionalAllocatedSize * (contentItem.size / totalFractionalSize);
                    contentItem.sizeUnit = SizeUnitEnum.Percent;
                }
                this.respectMinItemSize();
                return;
            }
            else {
                /**
                 * If the total is > 100, but there are also items with a fractional size, assign another 50%
                 * to the fractional items
                 *
                 * This will be reset in the next step
                 */
                if (Math.round(total) > 100 && itemsWithFractionalSize.length > 0) {
                    for (let i = 0; i < itemsWithFractionalSize.length; i++) {
                        const contentItem = itemsWithFractionalSize[i];
                        contentItem.size = 50 * (contentItem.size / totalFractionalSize);
                        contentItem.sizeUnit = SizeUnitEnum.Percent;
                    }
                    total += 50;
                }
                /**
                 * Set every items size relative to 100 relative to its size to total
                 */
                for (let i = 0; i < this.contentItems.length; i++) {
                    const contentItem = this.contentItems[i];
                    contentItem.size = (contentItem.size / total) * 100;
                }
                this.respectMinItemSize();
            }
        }
    }
    /**
     * Adjusts the column widths to respect the dimensions minItemWidth if set.
     * @internal
     */
    respectMinItemSize() {
        const minItemSize = this.calculateContentItemMinSize(this);
        if (minItemSize <= 0 || this.contentItems.length <= 1) {
            return;
        }
        else {
            let totalOverMin = 0;
            let totalUnderMin = 0;
            const entriesOverMin = [];
            const allEntries = [];
            const absoluteSizes = this.calculateAbsoluteSizes();
            /**
             * Figure out how much we are under the min item size total and how much room we have to use.
             */
            for (let i = 0; i < absoluteSizes.itemSizes.length; i++) {
                const itemSize = absoluteSizes.itemSizes[i];
                let entry;
                if (itemSize < minItemSize) {
                    totalUnderMin += minItemSize - itemSize;
                    entry = {
                        size: minItemSize
                    };
                }
                else {
                    totalOverMin += itemSize - minItemSize;
                    entry = {
                        size: itemSize
                    };
                    entriesOverMin.push(entry);
                }
                allEntries.push(entry);
            }
            /**
             * If there is nothing under min, or there is not enough over to make up the difference, do nothing.
             */
            if (totalUnderMin === 0 || totalUnderMin > totalOverMin) {
                return;
            }
            else {
                /**
                 * Evenly reduce all columns that are over the min item width to make up the difference.
                 */
                const reducePercent = totalUnderMin / totalOverMin;
                let remainingSize = totalUnderMin;
                for (let i = 0; i < entriesOverMin.length; i++) {
                    const entry = entriesOverMin[i];
                    const reducedSize = Math.round((entry.size - minItemSize) * reducePercent);
                    remainingSize -= reducedSize;
                    entry.size -= reducedSize;
                }
                /**
                 * Take anything remaining from the last item.
                 */
                if (remainingSize !== 0) {
                    allEntries[allEntries.length - 1].size -= remainingSize;
                }
                /**
                 * Set every items size relative to 100 relative to its size to total
                 */
                for (let i = 0; i < this.contentItems.length; i++) {
                    const contentItem = this.contentItems[i];
                    contentItem.size = (allEntries[i].size / absoluteSizes.totalSize) * 100;
                }
            }
        }
    }
    /**
     * Instantiates a new Splitter, binds events to it and adds
     * it to the array of splitters at the position specified as the index argument
     *
     * What it doesn't do though is append the splitter to the DOM
     *
     * @param index - The position of the splitter
     *
     * @returns
     * @internal
     */
    createSplitter(index) {
        const splitter = new Splitter(this._isColumn, this._splitterSize, this._splitterGrabSize);
        splitter.on('drag', (offsetX, offsetY) => this.onSplitterDrag(splitter, offsetX, offsetY));
        splitter.on('dragStop', () => this.onSplitterDragStop(splitter));
        splitter.on('dragStart', () => this.onSplitterDragStart(splitter));
        this._splitter.splice(index, 0, splitter);
        return splitter;
    }
    /**
     * Locates the instance of Splitter in the array of
     * registered splitters and returns a map containing the contentItem
     * before and after the splitters, both of which are affected if the
     * splitter is moved
     *
     * @returns A map of contentItems that the splitter affects
     * @internal
     */
    getSplitItems(splitter) {
        const index = this._splitter.indexOf(splitter);
        return {
            before: this.contentItems[index],
            after: this.contentItems[index + 1]
        };
    }
    calculateContentItemMinSize(contentItem) {
        const minSize = contentItem.minSize;
        if (minSize !== undefined) {
            if (contentItem.minSizeUnit === SizeUnitEnum.Pixel) {
                return minSize;
            }
            else {
                throw new AssertError('ROCGMD98831', JSON.stringify(contentItem));
            }
        }
        else {
            const dimensions = this.layoutManager.layoutConfig.dimensions;
            return this._isColumn ? dimensions.defaultMinItemHeight : dimensions.defaultMinItemWidth;
        }
    }
    /**
     * Gets the minimum dimensions for the given item configuration array
     * @internal
     */
    calculateContentItemsTotalMinSize(contentItems) {
        let totalMinSize = 0;
        for (const contentItem of contentItems) {
            totalMinSize += this.calculateContentItemMinSize(contentItem);
        }
        return totalMinSize;
    }
    /**
     * Invoked when a splitter's dragListener fires dragStart. Calculates the splitters
     * movement area once (so that it doesn't need calculating on every mousemove event)
     * @internal
     */
    onSplitterDragStart(splitter) {
        const items = this.getSplitItems(splitter);
        const beforeWidth = pixelsToNumber(items.before.element.style[this._dimension]);
        const afterSize = pixelsToNumber(items.after.element.style[this._dimension]);
        const beforeMinSize = this.calculateContentItemsTotalMinSize(items.before.contentItems);
        const afterMinSize = this.calculateContentItemsTotalMinSize(items.after.contentItems);
        this._splitterPosition = 0;
        this._splitterMinPosition = -1 * (beforeWidth - beforeMinSize);
        this._splitterMaxPosition = afterSize - afterMinSize;
    }
    /**
     * Invoked when a splitter's DragListener fires drag. Updates the splitter's DOM position,
     * but not the sizes of the elements the splitter controls in order to minimize resize events
     *
     * @param splitter -
     * @param offsetX - Relative pixel values to the splitter's original position. Can be negative
     * @param offsetY - Relative pixel values to the splitter's original position. Can be negative
     * @internal
     */
    onSplitterDrag(splitter, offsetX, offsetY) {
        let offset = this._isColumn ? offsetY : offsetX;
        if (this._splitterMinPosition === null || this._splitterMaxPosition === null) {
            throw new UnexpectedNullError('ROCOSD59226');
        }
        offset = Math.max(offset, this._splitterMinPosition);
        offset = Math.min(offset, this._splitterMaxPosition);
        this._splitterPosition = offset;
        const offsetPixels = numberToPixels(offset - splitter.dragHandleOffset);
        if (this._isColumn) {
            splitter.dragHandleElement.style.top = offsetPixels;
        }
        else {
            splitter.dragHandleElement.style.left = offsetPixels;
        }
    }
    /**
     * Invoked when a splitter's DragListener fires dragStop. Resets the splitters DOM position,
     * and applies the new sizes to the elements before and after the splitter and their children
     * on the next animation frame
     * @internal
     */
    onSplitterDragStop(splitter) {
        if (this._splitterPosition === null) {
            throw new UnexpectedNullError('ROCOSDS66932');
        }
        else {
            const items = this.getSplitItems(splitter);
            const sizeBefore = pixelsToNumber(items.before.element.style[this._dimension]);
            const sizeAfter = pixelsToNumber(items.after.element.style[this._dimension]);
            const splitterPositionInRange = (this._splitterPosition + sizeBefore) / (sizeBefore + sizeAfter);
            const totalRelativeSize = items.before.size + items.after.size;
            items.before.size = splitterPositionInRange * totalRelativeSize;
            items.after.size = (1 - splitterPositionInRange) * totalRelativeSize;
            const offset = splitter.dragHandleOffset;
            if (this._isColumn)
                splitter.dragHandleElement.style.top = `${-offset}px`;
            else
                splitter.dragHandleElement.style.left = `${-offset}px`;
            globalThis.requestAnimationFrame(() => this.updateSize());
        }
    }
}
/** @public */
(function (RowOrColumn) {
    /** @internal */
    function getElementDimensionSize(element, dimension) {
        if (dimension === 'width') {
            return getElementWidth(element);
        }
        else {
            return getElementHeight(element);
        }
    }
    RowOrColumn.getElementDimensionSize = getElementDimensionSize;
    /** @internal */
    function setElementDimensionSize(element, dimension, value) {
        if (dimension === 'width') {
            return setElementWidth(element, value);
        }
        else {
            return setElementHeight(element, value);
        }
    }
    RowOrColumn.setElementDimensionSize = setElementDimensionSize;
})(RowOrColumn || (RowOrColumn = {}));

/**
 * GroundItem is the ContentItem whose one child is the root ContentItem (Root is planted in Ground).
 * (Previously it was called root however this was incorrect as its child is the root item)
 * There is only one instance of GroundItem and it is automatically created by the Layout Manager
 * @internal
 */
class GroundItem extends ComponentParentableItem {
    constructor(layoutManager, rootItemConfig, containerElement, containerPosition) {
        super(layoutManager, ResolvedGroundItemConfig.create(rootItemConfig), null, _createRootElement(containerElement, containerPosition));
        this.element.classList.add("lm_goldenlayout" /* DomConstants.ClassName.GoldenLayout */);
        this.isGround = true;
        this._childElementContainer = this.element;
        this._containerElement = containerElement;
    }
    init() {
        if (this.isInitialised === true)
            return;
        this.updateNodeSize();
        for (let i = 0; i < this.contentItems.length; i++) {
            this._childElementContainer.appendChild(this.contentItems[i].element);
        }
        super.init();
        this.initContentItems();
    }
    /**
     * Loads a new Layout
     * Internal only.  To load a new layout with API, use {@link (LayoutManager:class).loadLayout}
     */
    loadRoot(rootItemConfig) {
        // Remove existing root if it exists
        this.clearRoot();
        if (rootItemConfig !== undefined) {
            const rootContentItem = this.layoutManager.createAndInitContentItem(rootItemConfig, this);
            this.addChild(rootContentItem, 0);
        }
    }
    clearRoot() {
        // Remove existing root if it exists
        const contentItems = this.contentItems;
        switch (contentItems.length) {
            case 0: {
                return;
            }
            case 1: {
                const existingRootContentItem = contentItems[0];
                existingRootContentItem.remove();
                return;
            }
            default: {
                throw new AssertError('GILR07721');
            }
        }
    }
    /**
     * Adds a ContentItem child to root ContentItem.
     * Internal only.  To load a add with API, use {@link (LayoutManager:class).addItem}
     * @returns -1 if added as root otherwise index in root ContentItem's content
     */
    addItem(itemConfig, index) {
        this.layoutManager.checkMinimiseMaximisedStack();
        const resolvedItemConfig = ItemConfig.resolve(itemConfig, false);
        let parent;
        if (this.contentItems.length > 0) {
            parent = this.contentItems[0];
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            parent = this;
        }
        if (parent.isComponent) {
            throw new Error('Cannot add item as child to ComponentItem');
        }
        else {
            const contentItem = this.layoutManager.createAndInitContentItem(resolvedItemConfig, parent);
            index = parent.addChild(contentItem, index);
            return (parent === this) ? -1 : index;
        }
    }
    loadComponentAsRoot(itemConfig) {
        // Remove existing root if it exists
        this.clearRoot();
        const resolvedItemConfig = ItemConfig.resolve(itemConfig, false);
        if (resolvedItemConfig.maximised) {
            throw new Error('Root Component cannot be maximised');
        }
        else {
            const rootContentItem = new ComponentItem(this.layoutManager, resolvedItemConfig, this);
            rootContentItem.init();
            this.addChild(rootContentItem, 0);
        }
    }
    /**
     * Adds a Root ContentItem.
     * Internal only.  To replace Root ContentItem with API, use {@link (LayoutManager:class).loadLayout}
     */
    addChild(contentItem, index) {
        if (this.contentItems.length > 0) {
            throw new Error('Ground node can only have a single child');
        }
        else {
            // contentItem = this.layoutManager._$normalizeContentItem(contentItem, this);
            this._childElementContainer.appendChild(contentItem.element);
            index = super.addChild(contentItem, index);
            this.updateSize();
            this.emitBaseBubblingEvent('stateChanged');
            return index;
        }
    }
    /** @internal */
    calculateConfigContent() {
        const contentItems = this.contentItems;
        const count = contentItems.length;
        const result = new Array(count);
        for (let i = 0; i < count; i++) {
            const item = contentItems[i];
            const itemConfig = item.toConfig();
            if (ResolvedRootItemConfig.isRootItemConfig(itemConfig)) {
                result[i] = itemConfig;
            }
            else {
                throw new AssertError('RCCC66832');
            }
        }
        return result;
    }
    /** @internal */
    setSize(width, height) {
        if (width === undefined || height === undefined) {
            this.updateSize(); // For backwards compatibility with v1.x API
        }
        else {
            setElementWidth(this.element, width);
            setElementHeight(this.element, height);
            // GroundItem can be empty
            if (this.contentItems.length > 0) {
                setElementWidth(this.contentItems[0].element, width);
                setElementHeight(this.contentItems[0].element, height);
            }
            //this.updateContentItemsSize();
            this.updateSize();
        }
    }
    createSideAreas() {
        const areaSize = 50;
        const oppositeSides = GroundItem.Area.oppositeSides;
        const result = new Array(Object.keys(oppositeSides).length);
        let idx = 0;
        for (const key in oppositeSides) {
            const side = key;
            const area = this.getElementArea();
            if (area === null) {
                throw new UnexpectedNullError('RCSA77553');
            }
            else {
                area.side = side;
                if (oppositeSides[side][1] === '2')
                    area[side] = area[oppositeSides[side]] - areaSize;
                else
                    area[side] = area[oppositeSides[side]] + areaSize;
                area.surface = (area.x2 - area.x1) * (area.y2 - area.y1);
                result[idx++] = area;
            }
        }
        return result;
    }
    highlightDropZone(x, y, area) {
        this.layoutManager.tabDropPlaceholder.remove();
        super.highlightDropZone(x, y, area);
    }
    onDrop(contentItem, area) {
        if (contentItem.isComponent) {
            const itemConfig = ResolvedStackItemConfig.createDefault();
            // since ResolvedItemConfig.contentItems not set up, we need to add header from Component
            const component = contentItem;
            itemConfig.header = ResolvedHeaderedItemConfig.Header.createCopy(component.headerConfig);
            const stack = this.layoutManager.createAndInitContentItem(itemConfig, this);
            stack.addChild(contentItem);
            contentItem = stack;
        }
        if (this.contentItems.length === 0) {
            this.addChild(contentItem);
        }
        else {
            /*
             * If the contentItem that's being dropped is not dropped on a Stack (cases which just passed above and
             * which would wrap the contentItem in a Stack) we need to check whether contentItem is a RowOrColumn.
             * If it is, we need to re-wrap it in a Stack like it was when it was dragged by its Tab (it was dragged!).
             */
            if (contentItem.type === ItemType.row || contentItem.type === ItemType.column) {
                const itemConfig = ResolvedStackItemConfig.createDefault();
                const stack = this.layoutManager.createContentItem(itemConfig, this);
                stack.addChild(contentItem);
                contentItem = stack;
            }
            const type = area.side[0] == 'x' ? ItemType.row : ItemType.column;
            const insertBefore = area.side[1] == '2';
            const column = this.contentItems[0];
            if (!(column instanceof RowOrColumn) || column.type !== type) {
                const itemConfig = ResolvedItemConfig.createDefault(type);
                const rowOrColumn = this.layoutManager.createContentItem(itemConfig, this);
                this.replaceChild(column, rowOrColumn);
                rowOrColumn.addChild(contentItem, insertBefore ? 0 : undefined, true);
                rowOrColumn.addChild(column, insertBefore ? undefined : 0, true);
                column.size = 50;
                contentItem.size = 50;
                contentItem.sizeUnit = SizeUnitEnum.Percent;
                rowOrColumn.updateSize();
            }
            else {
                const sibling = column.contentItems[insertBefore ? 0 : column.contentItems.length - 1];
                column.addChild(contentItem, insertBefore ? 0 : undefined, true);
                sibling.size *= 0.5;
                contentItem.size = sibling.size;
                contentItem.sizeUnit = SizeUnitEnum.Percent;
                column.updateSize();
            }
        }
    }
    // No ContentItem can dock with groundItem.  However Stack can have a GroundItem parent and Stack requires that
    // its parent implement dock() function.  Accordingly this function is implemented but throws an exception as it should
    // never be called
    dock() {
        throw new AssertError('GID87731');
    }
    // No ContentItem can dock with groundItem.  However Stack can have a GroundItem parent and Stack requires that
    // its parent implement validateDocking() function.  Accordingly this function is implemented but throws an exception as it should
    // never be called
    validateDocking() {
        throw new AssertError('GIVD87732');
    }
    getAllContentItems() {
        const result = [this];
        this.deepGetAllContentItems(this.contentItems, result);
        return result;
    }
    getConfigMaximisedItems() {
        const result = [];
        this.deepFilterContentItems(this.contentItems, result, (item) => {
            if (ContentItem.isStack(item) && item.initialWantMaximise) {
                return true;
            }
            else {
                if (ContentItem.isComponentItem(item) && item.initialWantMaximise) {
                    return true;
                }
                else {
                    return false;
                }
            }
        });
        return result;
    }
    getItemsByPopInParentId(popInParentId) {
        const result = [];
        this.deepFilterContentItems(this.contentItems, result, (item) => item.popInParentIds.includes(popInParentId));
        return result;
    }
    toConfig() {
        throw new Error('Cannot generate GroundItem config');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setActiveComponentItem(item, focus, suppressFocusEvent) {
        // only applicable if ComponentItem is root and then it always has focus
    }
    updateNodeSize() {
        const { width, height } = this.layoutManager.containerWidthAndHeight();
        setElementWidth(this.element, width);
        setElementHeight(this.element, height);
        /*
         * GroundItem can be empty
         */
        if (this.contentItems.length > 0) {
            setElementWidth(this.contentItems[0].element, width);
            setElementHeight(this.contentItems[0].element, height);
        }
    }
    deepGetAllContentItems(content, result) {
        for (let i = 0; i < content.length; i++) {
            const contentItem = content[i];
            const children = contentItem.contentItems;
            if (!contentItem.ignoring) {
                if (!contentItem.ignoringChild
                    || (contentItem.type !== ItemType.row && contentItem.type !== ItemType.column)
                    || children.length > 2)
                    result.push(contentItem);
                this.deepGetAllContentItems(children, result);
            }
        }
    }
    deepFilterContentItems(content, result, checkAcceptFtn) {
        for (let i = 0; i < content.length; i++) {
            const contentItem = content[i];
            if (checkAcceptFtn(contentItem)) {
                result.push(contentItem);
            }
            this.deepFilterContentItems(contentItem.contentItems, result, checkAcceptFtn);
        }
    }
}
function _createRootElement(containerElement, containerPosition) {
    const element = ContentItem.createElement("lm_root" /* DomConstants.ClassName.Root */);
    containerElement.insertBefore(element, containerPosition);
    return element;
}
/** @internal */
(function (GroundItem) {
    (function (Area) {
        Area.oppositeSides = {
            y2: 'y1',
            x2: 'x1',
            y1: 'y2',
            x1: 'x2',
        };
    })(GroundItem.Area || (GroundItem.Area = {}));
})(GroundItem || (GroundItem = {}));

/**
 * This class creates a temporary container
 * for the component whilst it is being dragged
 * and handles drag events
 * @internal
 */
class DragProxy extends EventEmitter {
    get element() { return this._element; }
    /**
     * @param x - The initial x position
     * @param y - The initial y position
     * @internal
     */
    constructor(x, y, _dragListener, _layoutManager, _componentItem, _originalParent) {
        super();
        this._dragListener = _dragListener;
        this._layoutManager = _layoutManager;
        this._componentItem = _componentItem;
        this._originalParent = _originalParent;
        this._area = null;
        this._lastValidArea = null;
        this._dragListener.on('drag', (offsetX, offsetY, event) => this.onDrag(offsetX, offsetY, event));
        this._dragListener.on('dragStop', () => this.onDrop());
        this.createDragProxyElements(x, y);
        if (this._componentItem.parent === null) {
            // Note that _contentItem will have dummy GroundItem as parent if initiated by a external drag source
            throw new UnexpectedNullError('DPC10097');
        }
        this._componentItemFocused = this._componentItem.focused;
        if (this._componentItemFocused) {
            this._componentItem.blur();
        }
        this._componentItem.parent.removeChild(this._componentItem, true);
        this.setDimensions();
        document.body.appendChild(this._element);
        this.determineMinMaxXY();
        this._layoutManager.calculateItemAreas();
        this.setDropPosition(x, y);
    }
    /** Create Stack-like structure to contain the dragged component */
    createDragProxyElements(initialX, initialY) {
        this._element = document.createElement('div');
        this._element.classList.add("lm_dragProxy" /* DomConstants.ClassName.DragProxy */);
        const headerElement = document.createElement('div');
        headerElement.classList.add("lm_header" /* DomConstants.ClassName.Header */);
        const tabsElement = document.createElement('div');
        tabsElement.classList.add("lm_tabs" /* DomConstants.ClassName.Tabs */);
        const tabElement = document.createElement('div');
        tabElement.classList.add("lm_tab" /* DomConstants.ClassName.Tab */);
        const titleElement = document.createElement('span');
        titleElement.classList.add("lm_title" /* DomConstants.ClassName.Title */);
        tabElement.appendChild(titleElement);
        tabsElement.appendChild(tabElement);
        headerElement.appendChild(tabsElement);
        this._proxyContainerElement = document.createElement('div');
        this._proxyContainerElement.classList.add("lm_content" /* DomConstants.ClassName.Content */);
        this._element.appendChild(headerElement);
        this._element.appendChild(this._proxyContainerElement);
        if (this._originalParent instanceof Stack && this._originalParent.headerShow) {
            this._sided = this._originalParent.headerLeftRightSided;
            this._element.classList.add('lm_' + this._originalParent.headerSide);
            if ([Side.right, Side.bottom].indexOf(this._originalParent.headerSide) >= 0) {
                this._proxyContainerElement.insertAdjacentElement('afterend', headerElement);
            }
        }
        this._element.style.left = numberToPixels(initialX);
        this._element.style.top = numberToPixels(initialY);
        tabElement.setAttribute('title', this._componentItem.title);
        titleElement.insertAdjacentText('afterbegin', this._componentItem.title);
        this._proxyContainerElement.appendChild(this._componentItem.element);
    }
    determineMinMaxXY() {
        const groundItem = this._layoutManager.groundItem;
        if (groundItem === undefined) {
            throw new UnexpectedUndefinedError('DPDMMXY73109');
        }
        else {
            const groundElement = groundItem.element;
            const rect = groundElement.getBoundingClientRect();
            this._minX = rect.left + document.body.scrollLeft;
            this._minY = rect.top + document.body.scrollTop;
            this._maxX = this._minX + rect.width;
            this._maxY = this._minY + rect.height;
        }
    }
    /**
     * Callback on every mouseMove event during a drag. Determines if the drag is
     * still within the valid drag area and calls the layoutManager to highlight the
     * current drop area
     *
     * @param offsetX - The difference from the original x position in px
     * @param offsetY - The difference from the original y position in px
     * @param event -
     * @internal
     */
    onDrag(offsetX, offsetY, event) {
        const x = event.pageX;
        const y = event.pageY;
        this.setDropPosition(x, y);
        this._componentItem.drag();
    }
    /**
     * Sets the target position, highlighting the appropriate area
     *
     * @param x - The x position in px
     * @param y - The y position in px
     *
     * @internal
     */
    setDropPosition(x, y) {
        if (this._layoutManager.layoutConfig.settings.constrainDragToContainer) {
            if (x <= this._minX) {
                x = Math.ceil(this._minX);
            }
            else if (x >= this._maxX) {
                x = Math.floor(this._maxX);
            }
            if (y <= this._minY) {
                y = Math.ceil(this._minY);
            }
            else if (y >= this._maxY) {
                y = Math.floor(this._maxY);
            }
        }
        this._element.style.left = numberToPixels(x);
        this._element.style.top = numberToPixels(y);
        // FIXME set component.contentElement postion to that of this._proxyContainerElement
        this._area = this._layoutManager.getArea(x, y);
        if (this._area !== null) {
            this._lastValidArea = this._area;
            this._area.contentItem.highlightDropZone(x, y, this._area);
        }
    }
    /**
     * Callback when the drag has finished. Determines the drop area
     * and adds the child to it
     * @internal
     */
    onDrop() {
        const dropTargetIndicator = this._layoutManager.dropTargetIndicator;
        if (dropTargetIndicator === null) {
            throw new UnexpectedNullError('DPOD30011');
        }
        else {
            dropTargetIndicator.hide();
        }
        this._componentItem.exitDragMode();
        /*
         * Valid drop area found
         */
        let droppedComponentItem;
        if (this._area !== null) {
            droppedComponentItem = this._componentItem;
            this._area.contentItem.onDrop(droppedComponentItem, this._area);
            /**
             * No valid drop area available at present, but one has been found before.
             * Use it
             */
        }
        else if (this._lastValidArea !== null) {
            droppedComponentItem = this._componentItem;
            const newParentContentItem = this._lastValidArea.contentItem;
            newParentContentItem.onDrop(droppedComponentItem, this._lastValidArea);
            /**
             * No valid drop area found during the duration of the drag. Return
             * content item to its original position if a original parent is provided.
             * (Which is not the case if the drag had been initiated by createDragSource)
             */
        }
        else if (this._originalParent) {
            droppedComponentItem = this._componentItem;
            this._originalParent.addChild(droppedComponentItem);
            /**
             * The drag didn't ultimately end up with adding the content item to
             * any container. In order to ensure clean up happens, destroy the
             * content item.
             */
        }
        else {
            this._componentItem.destroy(); // contentItem children are now destroyed as well
        }
        this._element.remove();
        this._layoutManager.emit('itemDropped', this._componentItem);
        if (this._componentItemFocused && droppedComponentItem !== undefined) {
            droppedComponentItem.focus();
        }
    }
    /**
     * Updates the Drag Proxy's dimensions
     * @internal
     */
    setDimensions() {
        const dimensions = this._layoutManager.layoutConfig.dimensions;
        if (dimensions === undefined) {
            throw new Error('DragProxy.setDimensions: dimensions undefined');
        }
        let width = dimensions.dragProxyWidth;
        let height = dimensions.dragProxyHeight;
        if (width === undefined || height === undefined) {
            throw new Error('DragProxy.setDimensions: width and/or height undefined');
        }
        const headerHeight = this._layoutManager.layoutConfig.header.show === false ? 0 : dimensions.headerHeight;
        this._element.style.width = numberToPixels(width);
        this._element.style.height = numberToPixels(height);
        width -= (this._sided ? headerHeight : 0);
        height -= (!this._sided ? headerHeight : 0);
        this._proxyContainerElement.style.width = numberToPixels(width);
        this._proxyContainerElement.style.height = numberToPixels(height);
        this._componentItem.enterDragMode(width, height);
        this._componentItem.show();
    }
}

/**
 * Allows for any DOM item to create a component on drag
 * start to be dragged into the Layout
 * @public
 */
class DragSource {
    /** @internal */
    constructor(
    /** @internal */
    _layoutManager, 
    /** @internal */
    _element, 
    /** @internal */
    _componentTypeOrFtn, 
    /** @internal @deprecated remove in version 3 */
    _componentState, 
    /** @internal @deprecated remove in version 3 */
    _title) {
        this._layoutManager = _layoutManager;
        this._element = _element;
        this._componentTypeOrFtn = _componentTypeOrFtn;
        this._componentState = _componentState;
        this._title = _title;
        this._dragListener = null;
        this._dummyGroundContainer = document.createElement('div');
        const dummyRootItemConfig = ResolvedRowOrColumnItemConfig.createDefault('row');
        this._dummyGroundContentItem = new GroundItem(this._layoutManager, dummyRootItemConfig, this._dummyGroundContainer, null);
        this.createDragListener();
    }
    /**
     * Disposes of the drag listeners so the drag source is not usable any more.
     * @internal
     */
    destroy() {
        this.removeDragListener();
    }
    /**
     * Called initially and after every drag
     * @internal
     */
    createDragListener() {
        this.removeDragListener();
        this._dragListener = new DragListener(this._element);
        this._dragListener.on('dragStart', (x, y) => this.onDragStart(x, y));
        this._dragListener.on('dragStop', () => this.onDragStop());
    }
    /**
     * Callback for the DragListener's dragStart event
     *
     * @param x - The x position of the mouse on dragStart
     * @param y - The x position of the mouse on dragStart
     * @internal
     */
    onDragStart(x, y) {
        var _a;
        const type = 'component';
        let dragSourceItemConfig;
        if (typeof this._componentTypeOrFtn === "function") {
            const ftnDragSourceItemConfig = this._componentTypeOrFtn();
            // If the componentType property exists, then it is already a ComponentItemConfig so nothing to do
            if (DragSource.isDragSourceComponentItemConfig(ftnDragSourceItemConfig)) {
                dragSourceItemConfig = {
                    type,
                    componentState: ftnDragSourceItemConfig.state,
                    componentType: ftnDragSourceItemConfig.type,
                    title: (_a = ftnDragSourceItemConfig.title) !== null && _a !== void 0 ? _a : this._title,
                };
            }
            else {
                dragSourceItemConfig = ftnDragSourceItemConfig;
            }
        }
        else {
            dragSourceItemConfig = {
                type,
                componentState: this._componentState,
                componentType: this._componentTypeOrFtn,
                title: this._title,
            };
        }
        // Create a dummy ContentItem only for drag purposes
        // All ContentItems (except for GroundItem) need a parent.  When dragging, the parent is not used.
        // Instead of allowing null parents (as Javascript version did), use a temporary dummy GroundItem parent and add ContentItem to that
        // If this does not work, need to create alternative GroundItem class
        const resolvedItemConfig = ComponentItemConfig.resolve(dragSourceItemConfig, false);
        const componentItem = new ComponentItem(this._layoutManager, resolvedItemConfig, this._dummyGroundContentItem);
        this._dummyGroundContentItem.contentItems.push(componentItem);
        if (this._dragListener === null) {
            throw new UnexpectedNullError('DSODSD66746');
        }
        else {
            new DragProxy(x, y, this._dragListener, this._layoutManager, componentItem, this._dummyGroundContentItem);
        }
    }
    /** @internal */
    onDragStop() {
        // if (this._dummyGroundContentItem === undefined) {
        //     throw new UnexpectedUndefinedError('DSODSDRU08116');
        // } else {
        //     this._dummyGroundContentItem._$destroy
        //     this._dummyGroundContentItem = undefined;
        // }
        this.createDragListener();
    }
    /**
     * Called after every drag and when the drag source is being disposed of.
     * @internal
     */
    removeDragListener() {
        if (this._dragListener !== null) {
            this._dragListener.destroy();
            this._dragListener = null;
        }
    }
}
/** @public */
(function (DragSource) {
    /** @deprecated remove in version 3 */
    function isDragSourceComponentItemConfig(config) {
        return !("componentType" in config);
    }
    DragSource.isDragSourceComponentItemConfig = isDragSourceComponentItemConfig;
})(DragSource || (DragSource = {}));

/** @internal */
class DropTargetIndicator {
    constructor(parent = document.body, before = null) {
        // Maybe use container instead of Document Body?
        this._element = document.createElement('div');
        this._element.classList.add("lm_dropTargetIndicator" /* DomConstants.ClassName.DropTargetIndicator */);
        const innerElement = document.createElement('div');
        innerElement.classList.add("lm_inner" /* DomConstants.ClassName.Inner */);
        this._element.appendChild(innerElement);
        parent.insertBefore(this._element, before);
    }
    destroy() {
        this._element.remove();
    }
    highlightArea(area, margin) {
        this._element.style.left = numberToPixels(area.x1 + margin);
        this._element.style.top = numberToPixels(area.y1 + margin);
        this._element.style.width = numberToPixels(area.x2 - area.x1 - margin);
        this._element.style.height = numberToPixels(area.y2 - area.y1 - margin);
        this._element.style.display = 'block';
    }
    hide() {
        setElementDisplayVisibility(this._element, false);
    }
}

/**
 * An EventEmitter singleton that propagates events
 * across multiple windows. This is a little bit trickier since
 * windows are allowed to open childWindows in their own right.
 *
 * This means that we deal with a tree of windows. Therefore, we do the event propagation in two phases:
 *
 * - Propagate events from this layout to the parent layout
 *   - Repeat until the event arrived at the root layout
 * - Propagate events to this layout and to all children
 *   - Repeat until all layouts got the event
 *
 * **WARNING**: Only userBroadcast events are propagated between windows.
 * This means the you have to take care of propagating state changes between windows yourself.
 *
 * @public
 */
class EventHub extends EventEmitter {
    /**
     * Creates a new EventHub instance
     * @param _layoutManager - the layout manager to synchronize between the windows
     * @internal
     */
    constructor(
    /** @internal */
    _layoutManager) {
        super();
        this._layoutManager = _layoutManager;
        /** @internal */
        this._childEventListener = (childEvent) => this.onEventFromChild(childEvent);
        globalThis.addEventListener(EventHub.ChildEventName, this._childEventListener, { passive: true });
    }
    /**
     * Emit an event and notify listeners
     *
     * @param eventName - The name of the event
     * @param args - Additional arguments that will be passed to the listener
     * @public
     */
    emit(eventName, ...args) {
        if (eventName === 'userBroadcast') {
            // Explicitly redirect the user broadcast to our overridden method.
            this.emitUserBroadcast(...args);
        }
        else {
            super.emit(eventName, ...args);
        }
    }
    /**
     * Broadcasts a message to all other currently opened windows.
     * @public
     */
    emitUserBroadcast(...args) {
        // Step 1: Bubble up the event
        this.handleUserBroadcastEvent('userBroadcast', args);
    }
    /**
     * Destroys the EventHub
     * @internal
     */
    destroy() {
        globalThis.removeEventListener(EventHub.ChildEventName, this._childEventListener);
    }
    /**
     * Internal processor to process local events.
     * @internal
     */
    handleUserBroadcastEvent(eventName, args) {
        if (this._layoutManager.isSubWindow) {
            // We are a sub window and received an event from one of our children.
            // So propagate it to the Root.
            this.propagateToParent(eventName, args);
        }
        else {
            // We are the root window, propagate it to the subtree below us.
            this.propagateToThisAndSubtree(eventName, args);
        }
    }
    /**
     * Callback for child events raised on the window
     * @internal
     */
    onEventFromChild(event) {
        const detail = event.detail;
        this.handleUserBroadcastEvent(detail.eventName, detail.args);
    }
    /**
     * Propagates the event to the parent by emitting
     * it on the parent's DOM window
     * @internal
     */
    propagateToParent(eventName, args) {
        const detail = {
            layoutManager: this._layoutManager,
            eventName,
            args: args,
        };
        const eventInit = {
            bubbles: true,
            cancelable: true,
            detail,
        };
        const event = new CustomEvent(EventHub.ChildEventName, eventInit);
        const opener = globalThis.opener;
        if (opener === null) {
            throw new UnexpectedNullError('EHPTP15778');
        }
        opener.dispatchEvent(event);
    }
    /**
     * Propagate events to the whole subtree under this event hub.
     * @internal
     */
    propagateToThisAndSubtree(eventName, args) {
        this.emitUnknown(eventName, ...args);
        for (let i = 0; i < this._layoutManager.openPopouts.length; i++) {
            const childGl = this._layoutManager.openPopouts[i].getGlInstance();
            if (childGl) {
                childGl.eventHub.propagateToThisAndSubtree(eventName, args);
            }
        }
    }
}
/** @public */
(function (EventHub) {
    /** @internal */
    EventHub.ChildEventName = 'gl_child_event';
})(EventHub || (EventHub = {}));

var DragState;
(function (DragState) {
    DragState[DragState["NotDragging"] = 0] = "NotDragging";
    DragState[DragState["DroppedInThisWindow"] = 1] = "DroppedInThisWindow";
    DragState[DragState["DroppedElsewhere"] = 2] = "DroppedElsewhere";
    DragState[DragState["CurrentlyDragging"] = 3] = "CurrentlyDragging";
})(DragState || (DragState = {}));
/**
 * The main class that will be exposed as GoldenLayout.
 */
/** @public */
class LayoutManager extends EventEmitter {
    enterOrLeaveSomeWindow(entering) {
        this.inSomeWindow = entering;
        if (!entering) {
            this._lastDragLeaveTime = Date.now();
        }
    }
    get container() {
        return this._containerElement;
    }
    get isInitialised() {
        return this._isInitialised;
    }
    /** @internal */
    get groundItem() {
        return this._groundItem;
    }
    /** @internal @deprecated use {@link (LayoutManager:class).groundItem} instead */
    get root() {
        return this._groundItem;
    }
    get openPopouts() {
        return this._openPopouts;
    }
    /** @internal */
    get dropTargetIndicator() {
        return this._dropTargetIndicator;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    /**
     * Retrieves the {@link (EventHub:class)} instance associated with this layout manager.
     * This can be used to propagate events between the windows
     * @public
     */
    get eventHub() {
        return this._eventHub;
    }
    get rootItem() {
        if (this._groundItem === undefined) {
            throw new Error("Cannot access rootItem before init");
        }
        else {
            const groundContentItems = this._groundItem.contentItems;
            if (groundContentItems.length === 0) {
                return undefined;
            }
            else {
                return this._groundItem.contentItems[0];
            }
        }
    }
    get focusedComponentItem() {
        return this._focusedComponentItem;
    }
    /** @internal */
    get tabDropPlaceholder() {
        return this._tabDropPlaceholder;
    }
    get maximisedStack() {
        return this._maximisedStack;
    }
    /** @deprecated indicates deprecated constructor use */
    get deprecatedConstructor() {
        return (!this.isSubWindow &&
            this._constructorOrSubWindowLayoutConfig !== undefined);
    }
    /**
     * @param container - A Dom HTML element. Defaults to body
     * @internal
     */
    constructor(parameters) {
        super();
        /** Whether the layout will be automatically be resized to container whenever the container's size is changed
         * Default is true if <body> is the container otherwise false
         * Default will be changed to true for any container in the future
         */
        this.resizeWithContainerAutomatically = false;
        /** The debounce interval (in milliseconds) used whenever a layout is automatically resized.  0 means next tick */
        this.resizeDebounceInterval = 100;
        /** Extend the current debounce delay time period if it is triggered during the delay.
         * If this is true, the layout will only resize when its container has stopped being resized.
         * If it is false, the layout will resize at intervals while its container is being resized.
         */
        this.resizeDebounceExtendedWhenPossible = true;
        /** @internal */
        this._isInitialised = false;
        /** @internal */
        this._groundItem = undefined;
        /** @internal */
        this._openPopouts = [];
        /** @internal */
        this._dropTargetIndicator = null;
        /** @internal */
        this._itemAreas = null;
        this._dragState = DragState.NotDragging;
        this._lastDragLeaveTime = 0;
        /** @internal */
        this._dragEnterCount = 0;
        /** @internal */
        this._maximisePlaceholder = LayoutManager.createMaximisePlaceElement(document);
        /** @internal */
        this._tabDropPlaceholder = LayoutManager.createTabDropPlaceholderElement(document);
        /** @internal */
        this._dragSources = [];
        /** @internal */
        this._updatingColumnsResponsive = false;
        /** @internal */
        this._firstLoad = true;
        /** @internal */
        this._eventHub = new EventHub(this);
        /** @internal */
        this._width = null;
        /** @internal */
        this._height = null;
        /** @internal */
        this._virtualSizedContainers = [];
        /** @internal */
        this._virtualSizedContainerAddingBeginCount = 0;
        /** @internal */
        this._resizeObserver = new ResizeObserver(() => this.handleContainerResize());
        /** @internal @deprecated to be removed in version 3 */
        this._windowBeforeUnloadListener = () => this.onBeforeUnload();
        /** @internal @deprecated to be removed in version 3 */
        this._windowBeforeUnloadListening = false;
        /** @internal */
        this._maximisedStackBeforeDestroyedListener = (ev) => this.cleanupBeforeMaximisedStackDestroyed(ev);
        this._area = null;
        this._lastValidArea = null;
        this._actionsOnDragEnd = [];
        this.popoutClickHandler = () => false;
        this._removeItem = undefined;
        // May be set by client code.
        this.inSomeWindow = false;
        this.delayedDragEndFunction = undefined;
        this.createComponentElement = 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (config, component) => {
            var _a, _b;
            let parent = ((_a = this.groundItem) === null || _a === void 0 ? void 0 : _a.element) || document.body;
            const contentElement = document.createElement("div");
            let componentElement = contentElement;
            if ((_b = this.layoutConfig.settings.copyForDragImage) !== null && _b !== void 0 ? _b : this.layoutConfig.settings.useDragAndDrop) {
                componentElement = document.createElement("div");
                parent.appendChild(componentElement);
                parent = componentElement;
            }
            parent.appendChild(contentElement);
            contentElement.classList.add("lm_content" /* DomConstants.ClassName.Content */);
            return componentElement;
        };
        this.isSubWindow = parameters.isSubWindow;
        this._constructorOrSubWindowLayoutConfig =
            parameters.constructorOrSubWindowLayoutConfig;
        I18nStrings.checkInitialise();
        ConfigMinifier.checkInitialise();
        if (parameters.containerElement !== undefined) {
            this._containerElement = parameters.containerElement;
        }
        if (parameters.containerPosition !== undefined) {
            this._containerPosition = parameters.containerPosition;
        }
        this.containerWidthAndHeight = () => getElementWidthAndHeight(this._containerElement);
    }
    /**
     * Destroys the LayoutManager instance itself as well as every ContentItem
     * within it. After this is called nothing should be left of the LayoutManager.
     *
     * This function only needs to be called if an application wishes to destroy the Golden Layout object while
     * a page remains loaded. When a page is unloaded, all resources claimed by Golden Layout will automatically
     * be released.
     */
    destroy() {
        if (this._isInitialised) {
            if (this._windowBeforeUnloadListening) {
                globalThis.removeEventListener("beforeunload", this._windowBeforeUnloadListener);
                this._windowBeforeUnloadListening = false;
            }
            if (this.layoutConfig.settings.closePopoutsOnUnload === true) {
                this.closeAllOpenPopouts();
            }
            this._resizeObserver.disconnect();
            this.checkClearResizeTimeout();
            if (this._groundItem !== undefined) {
                this._groundItem.destroy();
            }
            this._tabDropPlaceholder.remove();
            if (this._dropTargetIndicator !== null) {
                this._dropTargetIndicator.destroy();
            }
            this._eventHub.destroy();
            for (const dragSource of this._dragSources) {
                dragSource.destroy();
            }
            this._dragSources = [];
            this._isInitialised = false;
        }
    }
    /**
     * Takes a GoldenLayout configuration object and
     * replaces its keys and values recursively with
     * one letter codes
     * @deprecated use {@link (ResolvedLayoutConfig:namespace).minifyConfig} instead
     */
    minifyConfig(config) {
        return ResolvedLayoutConfig.minifyConfig(config);
    }
    useNativeDragAndDrop() {
        return this.layoutConfig.settings.useDragAndDrop;
    }
    currentlyDragging() {
        return this._dragState == DragState.CurrentlyDragging;
    }
    dragDataMimetype() {
        return this.layoutConfig.settings.dragDataMimetype;
    }
    validDragEvent(e) {
        var _a;
        // FIXME. Might be a good idea to check that all componentTypes in the
        // dataTransfer value are registered types.
        // That should make it more robust even if dragDataMimetype is the default.
        return ((_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.types.includes(this.dragDataMimetype())) || false;
    }
    /**
     * Takes a configuration Object that was previously minified
     * using minifyConfig and returns its original version
     * @deprecated use {@link (ResolvedLayoutConfig:namespace).unminifyConfig} instead
     */
    unminifyConfig(config) {
        return ResolvedLayoutConfig.unminifyConfig(config);
    }
    _hideTargetIndicator() {
        // FIXME rename? hideTargetIndicator
        const dropTargetIndicator = this.dropTargetIndicator;
        if (dropTargetIndicator === null) {
            throw new UnexpectedNullError("DPOD30011");
        }
        else {
            dropTargetIndicator.hide();
        }
    }
    /**
     * Called from GoldenLayout class. Finishes of init
     * @internal
     */
    init() {
        this.setContainer();
        this.updateSizeFromContainer();
        let subWindowRootConfig;
        if (this.isSubWindow) {
            if (this._constructorOrSubWindowLayoutConfig === undefined) {
                // SubWindow LayoutConfig should have been generated by constructor
                throw new UnexpectedUndefinedError("LMIU07155");
            }
            else {
                const root = this._constructorOrSubWindowLayoutConfig.root;
                if (root === undefined) {
                    // SubWindow LayoutConfig must not be empty
                    throw new AssertError("LMIC07156");
                }
                else {
                    if (ItemConfig.isComponent(root)) {
                        subWindowRootConfig = root;
                    }
                    else {
                        // SubWindow LayoutConfig must have Component as Root
                        throw new AssertError("LMIC07157");
                    }
                }
                const resolvedLayoutConfig = LayoutConfig.resolve(this._constructorOrSubWindowLayoutConfig);
                // remove root from layoutConfig
                this.layoutConfig = Object.assign(Object.assign({}, resolvedLayoutConfig), { root: undefined });
            }
        }
        else {
            if (this._constructorOrSubWindowLayoutConfig === undefined) {
                this.layoutConfig = ResolvedLayoutConfig.createDefault(); // will overwritten be loaded via loadLayout
            }
            else {
                // backwards compatibility
                this.layoutConfig = LayoutConfig.resolve(this._constructorOrSubWindowLayoutConfig);
            }
        }
        const layoutConfig = this.layoutConfig;
        this._groundItem = new GroundItem(this, layoutConfig.root, this._containerElement, this._containerPosition);
        this._groundItem.init();
        const element = this._groundItem.element;
        this._dropTargetIndicator = new DropTargetIndicator(element, element.firstChild);
        this.checkLoadedLayoutMaximiseItem();
        this._resizeObserver.observe(this._containerElement);
        this._isInitialised = true;
        this.adjustColumnsResponsive();
        this.emit("initialised");
        if (subWindowRootConfig !== undefined) {
            // must be SubWindow
            this.loadComponentAsRoot(subWindowRootConfig);
        }
        const elm = this._groundItem.element;
        if (this.useNativeDragAndDrop()) {
            elm.addEventListener("dragover", (e) => this.onDragOver(e));
            elm.addEventListener("dragenter", (e) => this.onDragEnter(e));
            elm.addEventListener("dragleave", (e) => this.onDragLeave(e));
            elm.addEventListener("dragend", (e) => {
                const x = e.screenX, y = e.screenY;
                if (this._dragState === DragState.CurrentlyDragging) {
                    this.delayedDragEndFunction = () => {
                        if (this.delayedDragEndTimer)
                            clearTimeout(this.delayedDragEndTimer);
                        this.delayedDragEndTimer = undefined;
                        this.delayedDragEndFunction = undefined;
                        this.onDragEnd(x, y);
                    };
                    this.delayedDragEndTimer = globalThis.setTimeout(this.delayedDragEndFunction, 100);
                }
                else
                    this.onDragEnd(x, y, e);
            });
            elm.addEventListener("drop", (e) => {
                console.log("drop event");
                this.onDrop(e);
            });
        }
    }
    /**
     * Sets the target position, highlighting the appropriate area
     *
     * @param x - The x position in px
     * @param y - The y position in px
     *
     * @internal
     */
    setDropPosition(x, y) {
        // this._element.style.left = numberToPixels(x);
        // this._element.style.top = numberToPixels(y);
        this._area = this.getArea(x, y);
        if (this._area !== null) {
            this._lastValidArea = this._area;
            this._area.contentItem.highlightDropZone(x, y, this._area);
        }
    }
    onDrag(event) {
        const x = event.pageX;
        const y = event.pageY;
        if (this._itemAreas === null)
            this.calculateItemAreas();
        if (this._itemAreas === null || this._itemAreas.length === 0)
            return;
        this.setDropPosition(x, y);
    }
    /**
     * Loads a new layout
     * @param layoutConfig - New layout to be loaded
     */
    loadLayout(layoutConfig) {
        if (!this.isInitialised) {
            // In case application not correctly using legacy constructor
            throw new Error("GoldenLayout: Need to call init() if LayoutConfig with defined root passed to constructor");
        }
        else {
            if (this._groundItem === undefined) {
                throw new UnexpectedUndefinedError("LMLL11119");
            }
            else {
                this.createSubWindows(); // still needs to be tested
                this.layoutConfig = LayoutConfig.resolve(layoutConfig);
                this._groundItem.loadRoot(this.layoutConfig.root);
                this.checkLoadedLayoutMaximiseItem();
                this.adjustColumnsResponsive();
            }
        }
    }
    /**
     * Creates a layout configuration object based on the the current state
     *
     * @public
     * @returns GoldenLayout configuration
     */
    saveLayout() {
        if (this._isInitialised === false) {
            throw new Error("Can't create config, layout not yet initialised");
        }
        else {
            // if (root !== undefined && !(root instanceof ContentItem)) {
            //     throw new Error('Root must be a ContentItem');
            // }
            /*
             * Content
             */
            if (this._groundItem === undefined) {
                throw new UnexpectedUndefinedError("LMTC18244");
            }
            else {
                const groundContent = this._groundItem.calculateConfigContent();
                let rootItemConfig;
                if (groundContent.length !== 1) {
                    rootItemConfig = undefined;
                }
                else {
                    rootItemConfig = groundContent[0];
                }
                /*
                 * Retrieve config for subwindows
                 */
                this.reconcilePopoutWindows();
                const openPopouts = [];
                for (let i = 0; i < this._openPopouts.length; i++) {
                    openPopouts.push(this._openPopouts[i].toConfig());
                }
                const config = {
                    root: rootItemConfig,
                    openPopouts,
                    settings: ResolvedLayoutConfig.Settings.createCopy(this.layoutConfig.settings),
                    dimensions: ResolvedLayoutConfig.Dimensions.createCopy(this.layoutConfig.dimensions),
                    header: ResolvedLayoutConfig.Header.createCopy(this.layoutConfig.header),
                    resolved: true,
                };
                return config;
            }
        }
    }
    /**
     * Removes any existing layout. Effectively, an empty layout will be loaded.
     */
    clear() {
        if (this._groundItem === undefined) {
            throw new UnexpectedUndefinedError("LMCL11129");
        }
        else {
            this._groundItem.clearRoot();
        }
    }
    /**
     * @deprecated Use {@link (LayoutManager:class).saveLayout}
     */
    toConfig() {
        return this.saveLayout();
    }
    /**
     * Adds a new ComponentItem.  Will use default location selectors to ensure a location is found and
     * component is successfully added
     * @param componentTypeName - Name of component type to be created.
     * @param state - Optional initial state to be assigned to component
     * @returns New ComponentItem created.
     */
    newComponent(componentType, componentState, title) {
        const componentItem = this.newComponentAtLocation(componentType, componentState, title);
        if (componentItem === undefined) {
            throw new AssertError("LMNC65588");
        }
        else {
            return componentItem;
        }
    }
    /**
     * Adds a ComponentItem at the first valid selector location.
     * @param componentTypeName - Name of component type to be created.
     * @param state - Optional initial state to be assigned to component
     * @param locationSelectors - Array of location selectors used to find location in layout where component
     * will be added. First location in array which is valid will be used. If locationSelectors is undefined,
     * {@link (LayoutManager:namespace).defaultLocationSelectors} will be used
     * @returns New ComponentItem created or undefined if no valid location selector was in array.
     */
    newComponentAtLocation(componentType, componentState, title, locationSelectors) {
        if (this._groundItem === undefined) {
            throw new Error("Cannot add component before init");
        }
        else {
            const location = this.addComponentAtLocation(componentType, componentState, title, locationSelectors);
            if (location === undefined) {
                return undefined;
            }
            else {
                const createdItem = location.parentItem.contentItems[location.index];
                if (!ContentItem.isComponentItem(createdItem)) {
                    throw new AssertError("LMNC992877533");
                }
                else {
                    return createdItem;
                }
            }
        }
    }
    /**
     * Adds a new ComponentItem.  Will use default location selectors to ensure a location is found and
     * component is successfully added
     * @param componentType - Type of component to be created.
     * @param state - Optional initial state to be assigned to component
     * @returns Location of new ComponentItem created.
     */
    addComponent(componentType, componentState, title) {
        const location = this.addComponentAtLocation(componentType, componentState, title);
        if (location === undefined) {
            throw new AssertError("LMAC99943");
        }
        else {
            return location;
        }
    }
    /**
     * Adds a ComponentItem at the first valid selector location.
     * @param componentType - Type of component to be created.
     * @param state - Optional initial state to be assigned to component
     * @param locationSelectors - Array of location selectors used to find determine location in layout where component
     * will be added. First location in array which is valid will be used. If undefined,
     * {@link (LayoutManager:namespace).defaultLocationSelectors} will be used.
     * @returns Location of new ComponentItem created or undefined if no valid location selector was in array.
     */
    addComponentAtLocation(componentType, componentState, title, locationSelectors) {
        const itemConfig = {
            type: "component",
            componentType,
            componentState,
            title,
        };
        return this.addItemAtLocation(itemConfig, locationSelectors);
    }
    /**
     * Adds a new ContentItem.  Will use default location selectors to ensure a location is found and
     * component is successfully added
     * @param itemConfig - ResolvedItemConfig of child to be added.
     * @returns New ContentItem created.
     */
    newItem(itemConfig) {
        const contentItem = this.newItemAtLocation(itemConfig);
        if (contentItem === undefined) {
            throw new AssertError("LMNC65588");
        }
        else {
            return contentItem;
        }
    }
    /**
     * Adds a new child ContentItem under the root ContentItem.  If a root does not exist, then create root ContentItem instead
     * @param itemConfig - ResolvedItemConfig of child to be added.
     * @param locationSelectors - Array of location selectors used to find determine location in layout where ContentItem
     * will be added. First location in array which is valid will be used. If undefined,
     * {@link (LayoutManager:namespace).defaultLocationSelectors} will be used.
     * @returns New ContentItem created or undefined if no valid location selector was in array. */
    newItemAtLocation(itemConfig, locationSelectors) {
        if (this._groundItem === undefined) {
            throw new Error("Cannot add component before init");
        }
        else {
            const location = this.addItemAtLocation(itemConfig, locationSelectors);
            if (location === undefined) {
                return undefined;
            }
            else {
                const createdItem = location.parentItem.contentItems[location.index];
                return createdItem;
            }
        }
    }
    /**
     * Adds a new ContentItem.  Will use default location selectors to ensure a location is found and
     * component is successfully added.
     * @param itemConfig - ResolvedItemConfig of child to be added.
     * @returns Location of new ContentItem created. */
    addItem(itemConfig) {
        const location = this.addItemAtLocation(itemConfig);
        if (location === undefined) {
            throw new AssertError("LMAI99943");
        }
        else {
            return location;
        }
    }
    /**
     * Adds a ContentItem at the first valid selector location.
     * @param itemConfig - ResolvedItemConfig of child to be added.
     * @param locationSelectors - Array of location selectors used to find determine location in layout where ContentItem
     * will be added. First location in array which is valid will be used. If undefined,
     * {@link (LayoutManager:namespace).defaultLocationSelectors} will be used.
     * @returns Location of new ContentItem created or undefined if no valid location selector was in array. */
    addItemAtLocation(itemConfig, locationSelectors) {
        if (this._groundItem === undefined) {
            throw new Error("Cannot add component before init");
        }
        else {
            if (locationSelectors === undefined) {
                // defaultLocationSelectors should always find a location
                locationSelectors = LayoutManager.defaultLocationSelectors;
            }
            const location = this.findFirstLocation(locationSelectors);
            if (location === undefined) {
                return undefined;
            }
            else {
                let parentItem = location.parentItem;
                let addIdx;
                switch (parentItem.type) {
                    case ItemType.ground: {
                        const groundItem = parentItem;
                        addIdx = groundItem.addItem(itemConfig, location.index);
                        if (addIdx >= 0) {
                            parentItem = this._groundItem.contentItems[0]; // was added to rootItem
                        }
                        else {
                            addIdx = 0; // was added as rootItem (which is the first and only ContentItem in GroundItem)
                        }
                        break;
                    }
                    case ItemType.row:
                    case ItemType.column: {
                        const rowOrColumn = parentItem;
                        addIdx = rowOrColumn.addItem(itemConfig, location.index);
                        break;
                    }
                    case ItemType.stack: {
                        if (!ItemConfig.isComponent(itemConfig)) {
                            throw Error(i18nStrings[6 /* I18nStringId.ItemConfigIsNotTypeComponent */]);
                        }
                        else {
                            const stack = parentItem;
                            addIdx = stack.addItem(itemConfig, location.index);
                            break;
                        }
                    }
                    case ItemType.component: {
                        throw new AssertError("LMAIALC87444602");
                    }
                    default:
                        throw new UnreachableCaseError("LMAIALU98881733", parentItem.type);
                }
                if (ItemConfig.isComponent(itemConfig)) {
                    // see if stack was inserted
                    const item = parentItem.contentItems[addIdx];
                    if (ContentItem.isStack(item)) {
                        parentItem = item;
                        addIdx = 0;
                    }
                }
                location.parentItem = parentItem;
                location.index = addIdx;
                return location;
            }
        }
    }
    /** Loads the specified component ResolvedItemConfig as root.
     * This can be used to display a Component all by itself.  The layout cannot be changed other than having another new layout loaded.
     * Note that, if this layout is saved and reloaded, it will reload with the Component as a child of a Stack.
     */
    loadComponentAsRoot(itemConfig) {
        if (this._groundItem === undefined) {
            throw new Error("Cannot add item before init");
        }
        else {
            this._groundItem.loadComponentAsRoot(itemConfig);
        }
    }
    /** @deprecated Use {@link (LayoutManager:class).setSize} */
    updateSize(width, height) {
        this.setSize(width, height);
    }
    /**
     * Updates the layout managers size
     *
     * @param width - Width in pixels
     * @param height - Height in pixels
     */
    setSize(width, height) {
        this._width = width;
        this._height = height;
        if (this._isInitialised === true) {
            if (this._groundItem === undefined) {
                throw new UnexpectedUndefinedError("LMUS18881");
            }
            else {
                this._groundItem.setSize(this._width, this._height);
                if (this._maximisedStack) {
                    const { width, height } = this.containerWidthAndHeight();
                    setElementWidth(this._maximisedStack.element, width);
                    setElementHeight(this._maximisedStack.element, height);
                    this._maximisedStack.updateSize();
                }
                this.adjustColumnsResponsive();
            }
        }
    }
    /** @internal */
    updateSizeFromContainer() {
        const { width, height } = this.containerWidthAndHeight();
        this.setSize(width, height);
    }
    /**
     * Update the size of the root ContentItem.  This will update the size of all contentItems in the tree
     */
    updateRootSize() {
        if (this._groundItem === undefined) {
            throw new UnexpectedUndefinedError("LMURS28881");
        }
        else {
            this._groundItem.updateSize();
        }
    }
    /** @public */
    createAndInitContentItem(config, parent) {
        const newItem = this.createContentItem(config, parent);
        newItem.init();
        return newItem;
    }
    /**
     * Recursively creates new item tree structures based on a provided
     * ItemConfiguration object
     *
     * @param config - ResolvedItemConfig
     * @param parent - The item the newly created item should be a child of
     * @internal
     */
    createContentItem(config, parent) {
        if (typeof config.type !== "string") {
            throw new ConfigurationError("Missing parameter 'type'", JSON.stringify(config));
        }
        /**
         * We add an additional stack around every component that's not within a stack anyways.
         */
        if (
        // If this is a component
        ResolvedItemConfig.isComponentItem(config) &&
            // and it's not already within a stack
            !(parent instanceof Stack) &&
            // and we have a parent
            !!parent &&
            // and it's not the topmost item in a new window
            !(this.isSubWindow === true && parent instanceof GroundItem)) {
            const stackConfig = {
                type: ItemType.stack,
                content: [config],
                size: config.size,
                sizeUnit: config.sizeUnit,
                minSize: config.minSize,
                minSizeUnit: config.minSizeUnit,
                id: config.id,
                maximised: config.maximised,
                isClosable: config.isClosable,
                activeItemIndex: 0,
                header: undefined,
            };
            config = stackConfig;
        }
        const contentItem = this.createContentItemFromConfig(config, parent);
        return contentItem;
    }
    findFirstComponentItemById(id) {
        if (this._groundItem === undefined) {
            return undefined;
        }
        else {
            return this.findFirstContentItemTypeByIdRecursive(ItemType.component, id, this._groundItem);
        }
    }
    /**
     * Creates a popout window with the specified content at the specified position
     *
     * @param itemConfigOrContentItem - The content of the popout window's layout manager derived from either
     * a {@link (ContentItem:class)} or {@link (ItemConfig:interface)} or ResolvedItemConfig content (array of {@link (ItemConfig:interface)})
     * @param positionAndSize - The width, height, left and top of Popout window
     * @param parentId -The id of the element this item will be appended to when popIn is called
     * @param indexInParent - The position of this item within its parent element
     */
    createPopout(itemConfigOrContentItem, positionAndSize, parentId, indexInParent) {
        if (itemConfigOrContentItem instanceof ContentItem) {
            return this.createPopoutFromContentItem(itemConfigOrContentItem, positionAndSize, parentId, indexInParent);
        }
        else {
            return this.createPopoutFromItemConfig(itemConfigOrContentItem, positionAndSize, parentId, indexInParent);
        }
    }
    /** @internal */
    createPopoutFromContentItem(item, window, parentId, indexInParent) {
        /**
         * If the item is the only component within a stack or for some
         * other reason the only child of its parent the parent will be destroyed
         * when the child is removed.
         *
         * In order to support this we move up the tree until we find something
         * that will remain after the item is being popped out
         */
        let parent = item.parent;
        let child = item;
        while (parent !== null &&
            parent.contentItems.length === 1 &&
            !parent.isGround) {
            child = parent;
            parent = parent.parent;
        }
        if (parent === null) {
            throw new UnexpectedNullError("LMCPFCI00834");
        }
        else {
            if (indexInParent === undefined) {
                indexInParent = parent.contentItems.indexOf(child);
            }
            if (parentId !== null) {
                parent.addPopInParentId(parentId);
            }
            if (window === undefined) {
                const windowLeft = globalThis.screenX || globalThis.screenLeft;
                const windowTop = globalThis.screenY || globalThis.screenTop;
                const offsetLeft = item.element.offsetLeft;
                const offsetTop = item.element.offsetTop;
                // const { left: offsetLeft, top: offsetTop } = getJQueryLeftAndTop(item.element);
                const { width, height } = getElementWidthAndHeight(item.element);
                window = {
                    left: windowLeft + offsetLeft,
                    top: windowTop + offsetTop,
                    width,
                    height,
                };
            }
            const itemConfig = item.toConfig();
            item.remove();
            if (!ResolvedRootItemConfig.isRootItemConfig(itemConfig)) {
                throw new Error(`${i18nStrings[0 /* I18nStringId.PopoutCannotBeCreatedWithGroundItemConfig */]}`);
            }
            else {
                return this.createPopoutFromItemConfig(itemConfig, window, parentId, indexInParent);
            }
        }
    }
    /** @internal */
    beginVirtualSizedContainerAdding() {
        if (this._virtualSizedContainerAddingBeginCount++ === 0) {
            this._virtualSizedContainers.length = 0;
        }
    }
    /** @internal */
    addVirtualSizedContainer(container) {
        this._virtualSizedContainers.push(container);
    }
    /** @internal */
    endVirtualSizedContainerAdding() {
        var _a, _b;
        if (--this._virtualSizedContainerAddingBeginCount === 0) {
            const count = this._virtualSizedContainers.length;
            if (count > 0) {
                (_a = this.beforeVirtualRectingEvent) === null || _a === void 0 ? void 0 : _a.call(this, count);
                for (let i = 0; i < count; i++) {
                    const container = this._virtualSizedContainers[i];
                    container.notifyVirtualRectingRequired();
                }
                (_b = this.afterVirtualRectingEvent) === null || _b === void 0 ? void 0 : _b.call(this);
                this._virtualSizedContainers.length = 0;
            }
        }
    }
    /** @internal */
    createPopoutFromItemConfig(rootItemConfig, window, parentId, indexInParent) {
        const layoutConfig = this.toConfig();
        const popoutLayoutConfig = {
            root: rootItemConfig,
            openPopouts: [],
            settings: layoutConfig.settings,
            dimensions: layoutConfig.dimensions,
            header: layoutConfig.header,
            window,
            parentId,
            indexInParent,
            resolved: true,
        };
        return this.createPopoutFromPopoutLayoutConfig(popoutLayoutConfig);
    }
    /** @internal */
    createPopoutFromPopoutLayoutConfig(config) {
        var _a, _b, _c, _d;
        const configWindow = config.window;
        const initialWindow = {
            left: (_a = configWindow.left) !== null && _a !== void 0 ? _a : (globalThis.screenX || globalThis.screenLeft + 20),
            top: (_b = configWindow.top) !== null && _b !== void 0 ? _b : (globalThis.screenY || globalThis.screenTop + 20),
            width: (_c = configWindow.width) !== null && _c !== void 0 ? _c : 500,
            height: (_d = configWindow.height) !== null && _d !== void 0 ? _d : 309,
        };
        const browserPopout = new BrowserPopout(config, initialWindow, this);
        browserPopout.on("initialised", () => this.emit("windowOpened", browserPopout));
        browserPopout.on("closed", () => this.reconcilePopoutWindows());
        this._openPopouts.push(browserPopout);
        if (this.layoutConfig.settings.closePopoutsOnUnload &&
            !this._windowBeforeUnloadListening) {
            globalThis.addEventListener("beforeunload", this._windowBeforeUnloadListener, { passive: true });
            this._windowBeforeUnloadListening = true;
        }
        return browserPopout;
    }
    /**
     * Closes all Open Popouts
     * Applications can call this method when a page is unloaded to remove its open popouts
     */
    closeAllOpenPopouts() {
        for (let i = 0; i < this._openPopouts.length; i++) {
            this._openPopouts[i].close();
        }
        this._openPopouts.length = 0;
        if (this._windowBeforeUnloadListening) {
            globalThis.removeEventListener("beforeunload", this._windowBeforeUnloadListener);
            this._windowBeforeUnloadListening = false;
        }
    }
    newDragSource(element, componentTypeOrItemConfigCallback, componentState, title) {
        const dragSource = new DragSource(this, element, componentTypeOrItemConfigCallback, componentState, title);
        this._dragSources.push(dragSource);
        return dragSource;
    }
    /**
     * Removes a DragListener added by createDragSource() so the corresponding
     * DOM element is not a drag source any more.
     */
    removeDragSource(dragSource) {
        removeFromArray(dragSource, this._dragSources);
        dragSource.destroy();
    }
    removeElementEventually(element) {
        if (this.currentlyDragging()) {
            element.style.opacity = "0";
            this._actionsOnDragEnd.push((cancel) => {
                if (cancel)
                    element.style.opacity = "";
                else
                    element.remove();
            });
        }
        else {
            element.remove();
        }
    }
    deferIfDragging(action) {
        if (this.currentlyDragging())
            this._actionsOnDragEnd.push(action);
        else
            action(false);
    }
    doDeferredActions(cancel) {
        for (const action of this._actionsOnDragEnd) {
            action(cancel);
        }
        this._actionsOnDragEnd.length = 0;
    }
    /** @internal */
    startComponentDragOld(x, y, dragListener, componentItem, stack) {
        if (this.createDragProxy) {
            this.createDragProxy(componentItem, x, y);
            // return;
        }
        new DragProxy(x, y, dragListener, this, componentItem, stack);
    }
    /** @internal */
    startComponentDrag(ev, componentItem) {
        var _a;
        this._dragState = DragState.CurrentlyDragging;
        this._draggedComponentItem = componentItem;
        const data = { config: componentItem.toConfig() };
        if (ev instanceof DragEvent && ev.dataTransfer) {
            const jdata = JSON.stringify(data);
            ev.dataTransfer.setData(this.dragDataMimetype(), jdata);
        }
        // Make drag-image
        const tabElement = componentItem.tab.element;
        //tabElement.style.visibility="visible";
        const stack = componentItem.parent;
        const isActiveTab = stack.getActiveComponentItem() === componentItem;
        const headerElement = stack.header.element;
        //headerElement.style.visibility="hidden";
        const tabClone = tabElement.cloneNode(true);
        const tabsContainer = document.createElement("section");
        tabsContainer.classList.add("lm_tabs" /* DomConstants.ClassName.Tabs */);
        tabsContainer.appendChild(tabClone);
        const headerClone = document.createElement("section");
        headerClone.classList.add("lm_header" /* DomConstants.ClassName.Header */);
        headerClone.appendChild(tabsContainer);
        let image;
        const element = componentItem.container.element;
        const contentElement = componentItem.container.contentElement;
        // usually same as effective copyForDragImage - see createComponentElement
        const useFreshDragImage = !element || element === contentElement;
        if (useFreshDragImage) {
            image = document.createElement("section");
            image.classList.add("lm_dragImage" /* DomConstants.ClassName.DragImage */);
            const inner = document.createElement("div");
            inner.classList.add("lm_dragImageInner" /* DomConstants.ClassName.DragImageInner */);
            image.appendChild(headerClone);
            image.appendChild(inner);
            document.body.appendChild(image);
            const stackBounds = stack.element.getBoundingClientRect();
            image.style.top = `${stackBounds.top}px`;
            image.style.left = `${stackBounds.left}px`;
            image.style.width = `${stackBounds.width}px`;
            image.style.height = `${stackBounds.height}px`;
            inner.style.left = "0px";
            inner.style.right = "0px";
            inner.style.height = `${stackBounds.height - tabsContainer.clientHeight}px`;
            inner.style.top = `${tabsContainer.clientHeight}px`;
            inner.style.bottom = "0px";
        }
        else {
            image = element;
            image.insertBefore(headerClone, image.firstChild);
        }
        headerClone.style.background = "transparent";
        headerClone.style.position = "absolute";
        headerClone.style.top = "0px";
        if (!isActiveTab) {
            for (const sibling of stack.contentItems) {
                if (sibling !== componentItem)
                    sibling.element.style.opacity = "0";
            }
        }
        const oldOpacity = image.style.opacity;
        //Ideally we'd like to have the drag image be partially transparent.
        //That is the default on Firefox, so we're OK.
        //The following works on GtkWebKit and presumably Safari
        //THE FOLLOWING SEEMS TO BE NEEDED IF !useFreshDragImage
        //(ON Chrome/Electron/Qt AND WebKit BUT NOT Firefox).
        image.style.opacity = "0.6";
        //However, it semi-breaks Firefox, making it too transparent.
        //It also seems to have no effect on Chrome/Electron.
        //Maybe this needs to be a browser-dependent setting.  FIXME.
        //The offset from the mouse pointer is wrong on GtkWebKit:
        //- It seems to ignore the offset and just center the image over
        //- the mouse cursor. FIXME.
        //Perhaps scale the image if it is really large. FIXME.
        const etarget = ev.target;
        const dX = ev.offsetX + etarget.offsetLeft;
        const dY = ev.offsetY + etarget.offsetTop;
        tabsContainer.style.marginLeft = `${ev.target.offsetLeft}px`;
        (_a = ev.dataTransfer) === null || _a === void 0 ? void 0 : _a.setDragImage(image, dX, dY);
        this.emit("dragstart", ev, componentItem);
        enableIFramePointerEvents(false);
        // We need to visibly remove the componentItem during dragging.
        // However, this needs to happen at a later 'tick' than setDragImage,
        // at least if !useFreshDragImage.
        this._removeItem = () => {
            var _a;
            if (!this._removeItem)
                return;
            this._removeItem = undefined;
            // Set 'ignoring' property so calculateItemAreas works.
            // The latter is called from onDragEnter, which may happen
            // before the requestAnimationFrame action.
            for (let item = componentItem;;) {
                const parent = item.parent;
                if (!parent)
                    break;
                if (item.contentItems.length >= 2) {
                    break;
                }
                if (item === componentItem || item.isStack) {
                    item.ignoring = true;
                    parent.ignoringChild = true;
                }
                if (parent.isGround)
                    break;
                item = parent;
            }
            // Take the lm_item out of the layout (set position to absolute),
            // so remaining elements can be re-positioned.
            // Whle doing so, add a dashed border (at the old position)
            // as a visual feedbakc.
            const ielement = componentItem.element;
            const oparent = stack.element.offsetParent;
            const draggingWholeStack = stack.contentItems.length <= 1;
            // FUTURE: draggingWholeStack should also be set if dragging
            // an enture stack as a unit.
            if (this.layoutConfig.settings.showOldPositionWhenDragging &&
                stack.parent &&
                oparent && //&& stack.parent.isGround
                ielement.style.position === "") {
                const stackBounds = stack.element.getBoundingClientRect();
                const parentBounds = oparent.getBoundingClientRect();
                stack.element.classList.add("lm_drag_old_position");
                stack.element.style.zIndex = "4";
                if (draggingWholeStack) {
                    const sstyle = stack.element.style;
                    sstyle.top = `${stackBounds.top - parentBounds.top}px`;
                    sstyle.left = `${stackBounds.left - parentBounds.left}px`;
                    sstyle.width = `${stackBounds.width - 2}px`;
                    sstyle.height = `${stackBounds.height - 2}px`;
                    sstyle.position = "absolute";
                }
                this._actionsOnDragEnd.push((cancel) => {
                    stack.element.classList.remove("lm_drag_old_position");
                    stack.element.style.zIndex = "";
                    if (draggingWholeStack) {
                        const sstyle = stack.element.style;
                        sstyle.top = "";
                        sstyle.left = "";
                        sstyle.width = "";
                        sstyle.height = "";
                        sstyle.position = "";
                    }
                });
            }
            headerClone.remove();
            if (!isActiveTab) {
                for (const sibling of stack.contentItems) {
                    if (sibling !== componentItem)
                        sibling.element.style.opacity = "";
                }
            }
            tabElement.style.visibility = "";
            headerElement.style.visibility = "";
            if (useFreshDragImage)
                image.remove();
            else
                image.style.opacity = oldOpacity;
            (_a = componentItem.parent) === null || _a === void 0 ? void 0 : _a.removeChild(componentItem, true);
            const container = componentItem.container;
            if (container.visible) {
                container.setVisibility(false);
                this._actionsOnDragEnd.push((cancel) => {
                    container.setVisibility(true);
                });
            }
            console.log("after removeChild");
        };
        window.requestAnimationFrame(this._removeItem);
    }
    /**
     * Programmatically focuses an item. This focuses the specified component item
     * and the item emits a focus event
     *
     * @param item - The component item to be focused
     * @param suppressEvent - Whether to emit focus event
     */
    focusComponent(item, suppressEvent = false) {
        item.focus(suppressEvent);
    }
    /**
     * Programmatically blurs (defocuses) the currently focused component.
     * If a component item is focused, then it is blurred and and the item emits a blur event
     *
     * @param item - The component item to be blurred
     * @param suppressEvent - Whether to emit blur event
     */
    clearComponentFocus(suppressEvent = false) {
        this.setFocusedComponentItem(undefined, suppressEvent);
    }
    /**
     * Programmatically focuses a component item or removes focus (blurs) from an existing focused component item.
     *
     * @param item - If defined, specifies the component item to be given focus.  If undefined, clear component focus.
     * @param suppressEvents - Whether to emit focus and blur events
     * @internal
     */
    setFocusedComponentItem(item, suppressEvents = false) {
        if (item !== this._focusedComponentItem) {
            let newFocusedParentItem;
            if (item === undefined) ;
            else {
                newFocusedParentItem = item.parentItem;
            }
            if (this._focusedComponentItem !== undefined) {
                const oldFocusedItem = this._focusedComponentItem;
                this._focusedComponentItem = undefined;
                oldFocusedItem.setBlurred(suppressEvents);
                const oldFocusedParentItem = oldFocusedItem.parentItem;
                if (newFocusedParentItem === oldFocusedParentItem) {
                    newFocusedParentItem = undefined;
                }
                else {
                    oldFocusedParentItem.setFocusedValue(false);
                }
            }
            if (item !== undefined) {
                this._focusedComponentItem = item;
                item.setFocused(suppressEvents);
                if (newFocusedParentItem !== undefined) {
                    newFocusedParentItem.setFocusedValue(true);
                }
            }
        }
    }
    /** @internal */
    createContentItemFromConfig(config, parent) {
        switch (config.type) {
            case ItemType.ground:
                throw new AssertError("LMCCIFC68871");
            case ItemType.row:
                return new RowOrColumn(false, this, config, parent);
            case ItemType.column:
                return new RowOrColumn(true, this, config, parent);
            case ItemType.stack:
                return new Stack(this, config, parent);
            case ItemType.component:
                return new ComponentItem(this, config, parent);
            default:
                throw new UnreachableCaseError("CCC913564", config.type, "Invalid Config Item type specified");
        }
    }
    /**
     * This should only be called from stack component.
     * Stack will look after docking processing associated with maximise/minimise
     * @internal
     **/
    setMaximisedStack(stack) {
        if (stack === undefined) {
            if (this._maximisedStack !== undefined) {
                this.processMinimiseMaximisedStack();
            }
        }
        else {
            if (stack !== this._maximisedStack) {
                if (this._maximisedStack !== undefined) {
                    this.processMinimiseMaximisedStack();
                }
                this.processMaximiseStack(stack);
            }
        }
    }
    checkMinimiseMaximisedStack() {
        if (this._maximisedStack !== undefined) {
            this._maximisedStack.minimise();
        }
    }
    // showAllActiveContentItems() was called from ContentItem.show().  Not sure what its purpose was so have commented out
    // Everything seems to work ok without this.  Have left commented code just in case there was a reason for it becomes
    // apparent
    // /** @internal */
    // showAllActiveContentItems(): void {
    //     const allStacks = this.getAllStacks();
    //     for (let i = 0; i < allStacks.length; i++) {
    //         const stack = allStacks[i];
    //         const activeContentItem = stack.getActiveComponentItem();
    //         if (activeContentItem !== undefined) {
    //             if (!(activeContentItem instanceof ComponentItem)) {
    //                 throw new AssertError('LMSAACIS22298');
    //             } else {
    //                 activeContentItem.container.show();
    //             }
    //         }
    //     }
    // }
    // hideAllActiveContentItems() was called from ContentItem.hide().  Not sure what its purpose was so have commented out
    // Everything seems to work ok without this.  Have left commented code just in case there was a reason for it becomes
    // apparent
    // /** @internal */
    // hideAllActiveContentItems(): void {
    //     const allStacks = this.getAllStacks();
    //     for (let i = 0; i < allStacks.length; i++) {
    //         const stack = allStacks[i];
    //         const activeContentItem = stack.getActiveComponentItem();
    //         if (activeContentItem !== undefined) {
    //             if (!(activeContentItem instanceof ComponentItem)) {
    //                 throw new AssertError('LMSAACIH22298');
    //             } else {
    //                 activeContentItem.container.hide();
    //             }
    //         }
    //     }
    // }
    /** @internal */
    cleanupBeforeMaximisedStackDestroyed(event) {
        if (this._maximisedStack !== null &&
            this._maximisedStack === event.target) {
            this._maximisedStack.off("beforeItemDestroyed", this._maximisedStackBeforeDestroyedListener);
            this._maximisedStack = undefined;
        }
    }
    /**
     * This method is used to get around sandboxed iframe restrictions.
     * If 'allow-top-navigation' is not specified in the iframe's 'sandbox' attribute
     * (as is the case with codepens) the parent window is forbidden from calling certain
     * methods on the child, such as window.close() or setting document.location.href.
     *
     * This prevented GoldenLayout popouts from popping in in codepens. The fix is to call
     * _$closeWindow on the child window's gl instance which (after a timeout to disconnect
     * the invoking method from the close call) closes itself.
     *
     * @internal
     */
    closeWindow() {
        globalThis.setTimeout(() => globalThis.close(), 1);
    }
    /** @internal */
    getArea(x, y) {
        let matchingArea = null;
        let smallestSurface = Infinity;
        if (this._itemAreas === null)
            this.calculateItemAreas();
        const itemAreas = this._itemAreas;
        for (let i = 0; i < itemAreas.length; i++) {
            const area = itemAreas[i];
            if (x >= area.x1 &&
                x < area.x2 && // x2 is not included in area
                y >= area.y1 &&
                y < area.y2 && // y2 is not included in area
                smallestSurface > area.surface) {
                smallestSurface = area.surface;
                matchingArea = area;
            }
        }
        return matchingArea;
    }
    /** @internal */
    calculateItemAreas() {
        const allContentItems = this.getAllContentItems();
        /**
         * If the last item is dragged out, highlight the entire container size to
         * allow to re-drop it. this.ground.contentiItems.length === 0 at this point
         *
         * Don't include ground into the possible drop areas though otherwise since it
         * will used for every gap in the layout, e.g. splitters
         */
        const groundItem = this._groundItem;
        if (groundItem === undefined) {
            throw new UnexpectedUndefinedError("LMCIAR44365");
        }
        else {
            if (allContentItems.length === 1) {
                // No root ContentItem (just Ground ContentItem)
                const groundArea = groundItem.getElementArea();
                if (groundArea === null) {
                    throw new UnexpectedNullError("LMCIARA44365");
                }
                else {
                    this._itemAreas = [groundArea];
                }
                return;
            }
            else {
                if (allContentItems[1].isStack) {
                    // No rows/columns (except ones we're ignoring).
                    // if root is Stack, then split stack and sides of Layout are same, so skip sides
                    this._itemAreas = [];
                }
                else {
                    // sides of layout
                    this._itemAreas = groundItem.createSideAreas();
                }
                for (let i = 0; i < allContentItems.length; i++) {
                    const stack = allContentItems[i];
                    if (ContentItem.isStack(stack)) {
                        const area = stack.getArea();
                        if (area === null) {
                            continue;
                        }
                        else {
                            this._itemAreas.push(area);
                            const stackContentAreaDimensions = stack.contentAreaDimensions;
                            if (stackContentAreaDimensions === undefined) {
                                throw new UnexpectedUndefinedError("LMCIASC45599");
                            }
                            else {
                                const highlightArea = stackContentAreaDimensions.header.highlightArea;
                                const surface = (highlightArea.x2 - highlightArea.x1) *
                                    (highlightArea.y2 - highlightArea.y1);
                                const header = {
                                    x1: highlightArea.x1,
                                    x2: highlightArea.x2,
                                    y1: highlightArea.y1,
                                    y2: highlightArea.y2,
                                    contentItem: stack,
                                    surface,
                                };
                                this._itemAreas.push(header);
                            }
                        }
                    }
                }
            }
        }
        console.log("l-m calculateItemAreas: " + this._itemAreas.length + " areas");
    }
    /**
     * Called as part of loading a new layout (including initial init()).
     * Checks to see layout has a maximised item. If so, it maximises that item.
     * @internal
     */
    checkLoadedLayoutMaximiseItem() {
        if (this._groundItem === undefined) {
            throw new UnexpectedUndefinedError("LMCLLMI43432");
        }
        else {
            const configMaximisedItems = this._groundItem.getConfigMaximisedItems();
            if (configMaximisedItems.length > 0) {
                let item = configMaximisedItems[0];
                if (ContentItem.isComponentItem(item)) {
                    const stack = item.parent;
                    if (stack === null) {
                        throw new UnexpectedNullError("LMXLLMI69999");
                    }
                    else {
                        item = stack;
                    }
                }
                if (!ContentItem.isStack(item)) {
                    throw new AssertError("LMCLLMI19993");
                }
                else {
                    item.maximise();
                }
            }
        }
    }
    /** @internal */
    processMaximiseStack(stack) {
        this._maximisedStack = stack;
        stack.on("beforeItemDestroyed", this._maximisedStackBeforeDestroyedListener);
        stack.element.classList.add("lm_maximised" /* DomConstants.ClassName.Maximised */);
        stack.element.insertAdjacentElement("afterend", this._maximisePlaceholder);
        if (this._groundItem === undefined) {
            throw new UnexpectedUndefinedError("LMMXI19993");
        }
        else {
            this._groundItem.element.prepend(stack.element);
            const { width, height } = this.containerWidthAndHeight();
            setElementWidth(stack.element, width);
            setElementHeight(stack.element, height);
            stack.updateSize();
            stack.focusActiveContentItem();
            this._maximisedStack.emit("maximised");
            this.emit("stateChanged");
        }
    }
    /** @internal */
    processMinimiseMaximisedStack() {
        if (this._maximisedStack === undefined) {
            throw new AssertError("LMMMS74422");
        }
        else {
            const stack = this._maximisedStack;
            if (stack.parent === null) {
                throw new UnexpectedNullError("LMMI13668");
            }
            else {
                stack.element.classList.remove("lm_maximised" /* DomConstants.ClassName.Maximised */);
                this._maximisePlaceholder.insertAdjacentElement("afterend", stack.element);
                this._maximisePlaceholder.remove();
                stack.parent.updateSize();
                this._maximisedStack = undefined;
                stack.off("beforeItemDestroyed", this._maximisedStackBeforeDestroyedListener);
                stack.emit("minimised");
                this.emit("stateChanged");
            }
        }
    }
    /**
     * Iterates through the array of open popout windows and removes the ones
     * that are effectively closed. This is necessary due to the lack of reliably
     * listening for window.close / unload events in a cross browser compatible fashion.
     * @internal
     */
    reconcilePopoutWindows() {
        const openPopouts = [];
        for (let i = 0; i < this._openPopouts.length; i++) {
            if (this._openPopouts[i].getWindow().closed === false) {
                openPopouts.push(this._openPopouts[i]);
            }
            else {
                this.emit("windowClosed", this._openPopouts[i]);
            }
        }
        if (this._openPopouts.length !== openPopouts.length) {
            this._openPopouts = openPopouts;
            this.emit("stateChanged");
        }
    }
    /**
     * Returns a flattened array of all content items,
     * regardles of level or type
     * @internal
     */
    getAllContentItems() {
        if (this._groundItem === undefined) {
            throw new UnexpectedUndefinedError("LMGACI13130");
        }
        else {
            return this._groundItem.getAllContentItems();
        }
    }
    /**
     * Creates Subwindows (if there are any). Throws an error
     * if popouts are blocked.
     * @internal
     */
    createSubWindows() {
        for (let i = 0; i < this.layoutConfig.openPopouts.length; i++) {
            const popoutConfig = this.layoutConfig.openPopouts[i];
            this.createPopoutFromPopoutLayoutConfig(popoutConfig);
        }
    }
    /**
     * Debounces resize events
     * @internal
     */
    handleContainerResize() {
        if (this.resizeWithContainerAutomatically) {
            this.processResizeWithDebounce();
        }
    }
    /**
     * Debounces resize events
     * @internal
     */
    processResizeWithDebounce() {
        if (this.resizeDebounceExtendedWhenPossible) {
            this.checkClearResizeTimeout();
        }
        if (this._resizeTimeoutId === undefined) {
            this._resizeTimeoutId = setTimeout(() => {
                this._resizeTimeoutId = undefined;
                this.updateSizeFromContainer();
            }, this.resizeDebounceInterval);
        }
    }
    checkClearResizeTimeout() {
        if (this._resizeTimeoutId !== undefined) {
            clearTimeout(this._resizeTimeoutId);
            this._resizeTimeoutId = undefined;
        }
    }
    /**
     * Determines what element the layout will be created in
     * @internal
     */
    setContainer() {
        var _a;
        const bodyElement = document.body;
        const containerElement = (_a = this._containerElement) !== null && _a !== void 0 ? _a : bodyElement;
        if (containerElement === bodyElement &&
            bodyElement.firstElementChild === null) {
            this.resizeWithContainerAutomatically = true;
            const documentElement = document.documentElement;
            documentElement.style.height = "100%";
            documentElement.style.margin = "0";
            documentElement.style.padding = "0";
            documentElement.style.overflow = "clip";
            bodyElement.style.height = "100%";
            bodyElement.style.margin = "0";
            bodyElement.style.padding = "0";
            bodyElement.style.overflow = "clip";
        }
        this._containerElement = containerElement;
    }
    /**
     * Called when the window is closed or the user navigates away
     * from the page
     * @internal
     * @deprecated to be removed in version 3
     */
    onBeforeUnload() {
        this.destroy();
    }
    /**
     * Adjusts the number of columns to be lower to fit the screen and still maintain minItemWidth.
     * @internal
     */
    adjustColumnsResponsive() {
        if (this._groundItem === undefined) {
            throw new UnexpectedUndefinedError("LMACR20883");
        }
        else {
            this._firstLoad = false;
            // If there is no min width set, or not content items, do nothing.
            if (this.useResponsiveLayout() &&
                !this._updatingColumnsResponsive &&
                this._groundItem.contentItems.length > 0 &&
                this._groundItem.contentItems[0].isRow) {
                if (this._groundItem === undefined || this._width === null) {
                    throw new UnexpectedUndefinedError("LMACR77412");
                }
                else {
                    // If there is only one column, do nothing.
                    const columnCount = this._groundItem.contentItems[0].contentItems.length;
                    if (columnCount <= 1) {
                        return;
                    }
                    else {
                        // If they all still fit, do nothing.
                        const minItemWidth = this.layoutConfig.dimensions.defaultMinItemWidth;
                        const totalMinWidth = columnCount * minItemWidth;
                        if (totalMinWidth <= this._width) {
                            return;
                        }
                        else {
                            // Prevent updates while it is already happening.
                            this._updatingColumnsResponsive = true;
                            // Figure out how many columns to stack, and put them all in the first stack container.
                            const finalColumnCount = Math.max(Math.floor(this._width / minItemWidth), 1);
                            const stackColumnCount = columnCount - finalColumnCount;
                            const rootContentItem = this._groundItem.contentItems[0];
                            const allStacks = this.getAllStacks();
                            if (allStacks.length === 0) {
                                throw new AssertError("LMACRS77413");
                            }
                            else {
                                const firstStackContainer = allStacks[0];
                                for (let i = 0; i < stackColumnCount; i++) {
                                    // Stack from right.
                                    const column = rootContentItem.contentItems[rootContentItem.contentItems.length - 1];
                                    this.addChildContentItemsToContainer(firstStackContainer, column);
                                }
                                this._updatingColumnsResponsive = false;
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * Determines if responsive layout should be used.
     *
     * @returns True if responsive layout should be used; otherwise false.
     * @internal
     */
    useResponsiveLayout() {
        const settings = this.layoutConfig.settings;
        const alwaysResponsiveMode = settings.responsiveMode === ResponsiveMode.always;
        const onLoadResponsiveModeAndFirst = settings.responsiveMode === ResponsiveMode.onload && this._firstLoad;
        return alwaysResponsiveMode || onLoadResponsiveModeAndFirst;
    }
    /**
     * Adds all children of a node to another container recursively.
     * @param container - Container to add child content items to.
     * @param node - Node to search for content items.
     * @internal
     */
    addChildContentItemsToContainer(container, node) {
        const contentItems = node.contentItems;
        if (node instanceof Stack) {
            for (let i = 0; i < contentItems.length; i++) {
                const item = contentItems[i];
                node.removeChild(item, true);
                container.addChild(item);
            }
        }
        else {
            for (let i = 0; i < contentItems.length; i++) {
                const item = contentItems[i];
                this.addChildContentItemsToContainer(container, item);
            }
        }
    }
    onDragEnter(e) {
        if (this._removeItem)
            this._removeItem();
        e.stopPropagation();
        if (e instanceof DragEvent) {
            if (e.dataTransfer)
                e.dataTransfer.dropEffect = "move";
            if (!this.validDragEvent(e))
                return;
        }
        if (this._dragEnterCount == 0) {
            this.emit("drag-enter-window", e);
            this.calculateItemAreas();
        }
        this._dragEnterCount++;
        e.preventDefault();
    }
    onDragLeave(e) {
        this._lastDragLeaveTime = Date.now();
        e.stopPropagation();
        if (e instanceof DragEvent) {
            if (!this.validDragEvent(e))
                return;
        }
        this._dragEnterCount--;
        if (this._dragEnterCount <= 0) {
            this.exitDrag();
            this.emit("drag-leave-window", e);
        }
    }
    onDragOver(e) {
        if (e instanceof DragEvent && e.dataTransfer)
            e.dataTransfer.dropEffect = "move";
        const valid = e instanceof DragEvent && this.validDragEvent(e);
        //console.log("dragover "+(e.target as HTMLElement).getAttribute("class")+" valid:"+valid+" entercount:"+this._dragEnterCount+(e instanceof DragEvent ? (" dropEffect:"+e.dataTransfer?.dropEffect):""));
        //      drag-listener.onPointerMove -> emit('drag', ...)
        this.onDrag(e);
        if (valid && this._area)
            e.preventDefault(); // allow drop
    }
    onDragEnd(screenX, screenY, event = null) {
        var _a;
        console.log("onDragEnd st:" + this._dragState + " timer:" + this.delayedDragEndTimer);
        // There are four cases we want to handle. Unfortunately, it is not
        // possible to reliably distinguish them on all browsers we care about.
        // (1) Normal drop in this window (_dragState == DroppedInThisWindow)
        // (2) Normal drop in other window (_dragState == DroppedElsewhere)
        // We can't detect this case unless we get an external notification
        // (the application calls droppedInOtherWindow). The notification may
        // happen after the dragend event, which is one reason we wait a bit.
        // If we don't get the notification in time, we handle it as case (3).
        // (3) Drop to desktop
        // (4) Drag was cancelled (by typing Esc).
        // Try to detact a cancelled drag. There doesn't seem to be a way
        // to detect this reliably except on Firefox (with mozUserCancelled).
        // Note that while the specification says dropEffect is supposed
        // to be "none" if the drag was cancelled, this is unreliable.
        let cancel = false;
        if (event instanceof DragEvent &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            event.dataTransfer.mozUserCancelled)
            cancel = true;
        if (this._dragState == DragState.CurrentlyDragging && !cancel) {
            // Heuristic: If the most recent dragleave was less than 200ms ago,
            // it was probably caused by a 'cancel' (Escape pressed).
            const now = Date.now();
            if (now >= this._lastDragLeaveTime &&
                now - this._lastDragLeaveTime <= 200) {
                cancel = true;
            }
        }
        const component = this._draggedComponentItem;
        console.log("onDragEnd now:" +
            Date.now() +
            " cancel:" +
            cancel +
            " comp:" +
            component +
            " cur-drag:" +
            this._dragState +
            " in-win:" +
            this.inSomeWindow +
            " ecnt:" +
            this._dragEnterCount);
        // if this is the only component, and it is dropped to the desktop,
        // just reuse the window (though move it - if possible).
        const onlyWindow = (component === null || component === void 0 ? void 0 : component.parent) &&
            component.parent.type === "stack" &&
            component.parent.contentItems.length === 1 &&
            component.parent.contentItems[0] === component &&
            ((_a = component.parent.parent) === null || _a === void 0 ? void 0 : _a.type) === "ground";
        let dropItem = undefined;
        if (this._draggedComponentItem &&
            this._dragState == DragState.DroppedInThisWindow) {
            if (onlyWindow)
                cancel = true;
            else {
                dropItem = this._draggedComponentItem;
            }
        }
        const moveWindow = !cancel && !this.inSomeWindow && onlyWindow;
        if (!(cancel || moveWindow) &&
            component &&
            component.container &&
            this._dragState >= DragState.DroppedElsewhere) {
            // dropped in other window or to desktop
            const parent = component.parent;
            // dragExported callback may need size/position of element,
            // which it can't get if display is 'none'.
            if (parent && parent.type === "stack")
                parent.element.style.display = "";
            component.container.emit("dragExported", screenX, screenY, component);
        }
        this.doDeferredActions(cancel || !!moveWindow);
        if (dropItem && this._area)
            this._area.contentItem.onDrop(dropItem, this._area);
        //console.log("dragend ev-handler enter-count:"+this._dragEnterCount);
        // FIXME incorporate drag-listener:processDragStop
        // See processDragStop in drag-listener
        //document.body.classList.remove(DomConstants.ClassName.Dragging);
        // if iframe: clear style.pointer-events
        enableIFramePointerEvents(true);
        if (moveWindow && component && component.container) {
            component.container.emit("dragMoved", screenX, screenY, component);
        }
        this._draggedComponentItem = undefined;
        this._dragState = DragState.NotDragging;
        this.emit("dragend");
    }
    exitDrag() {
        this._dragEnterCount = 0;
        this._hideTargetIndicator();
        //this.dropTargetIndicator.hide();
        //this._componentItem.exitDragMode();
    }
    // A drag was started/ending in another (top-level) window
    // Needs to be called from application.
    draggingInOtherWindow(ending) {
        enableIFramePointerEvents(ending);
    }
    // Dropped to another (top-level) window.
    // Needs to be called from application.
    droppedInOtherWindow() {
        this._dragState = DragState.DroppedElsewhere;
        if (this.delayedDragEndFunction)
            this.delayedDragEndFunction();
    }
    onDrop(e) {
        var _a;
        this.emit("drop", e);
        let data;
        if (e instanceof DragEvent) {
            if (e.dataTransfer)
                e.dataTransfer.dropEffect = "move";
            const dvalue = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData(this.dragDataMimetype());
            data = dvalue && JSON.parse(dvalue);
        }
        else if (this._draggedComponentItem) {
            data = { config: this._draggedComponentItem.toConfig() };
        }
        console.log("onDrop area:" + this._area);
        // JSON.parse(data);
        e.preventDefault();
        this.exitDrag();
        // FIXME check type
        // SEE drag-proxy:onDrop
        //let droppedComponentItem: ComponentItem | undefined;
        if (this._area !== null) {
            if (this._draggedComponentItem) ;
            else {
                console.log("dropped from different window " + JSON.stringify(data.config));
                const item = new ComponentItem(this, data.config, this.groundItem);
                this._area.contentItem.onDrop(item, this._area);
            }
        }
        this._dragState = DragState.DroppedInThisWindow;
        if (this.delayedDragEndFunction)
            this.delayedDragEndFunction();
    }
    /**
     * Finds all the stacks.
     * @returns The found stack containers.
     * @internal
     */
    getAllStacks() {
        if (this._groundItem === undefined) {
            throw new UnexpectedUndefinedError("LMFASC52778");
        }
        else {
            const stacks = [];
            this.findAllStacksRecursive(stacks, this._groundItem);
            return stacks;
        }
    }
    /** @internal */
    findFirstContentItemType(type) {
        if (this._groundItem === undefined) {
            throw new UnexpectedUndefinedError("LMFFCIT82446");
        }
        else {
            return this.findFirstContentItemTypeRecursive(type, this._groundItem);
        }
    }
    /** @internal */
    findFirstContentItemTypeRecursive(type, node) {
        const contentItems = node.contentItems;
        const contentItemCount = contentItems.length;
        if (contentItemCount === 0) {
            return undefined;
        }
        else {
            for (let i = 0; i < contentItemCount; i++) {
                const contentItem = contentItems[i];
                if (contentItem.type === type) {
                    return contentItem;
                }
            }
            for (let i = 0; i < contentItemCount; i++) {
                const contentItem = contentItems[i];
                const foundContentItem = this.findFirstContentItemTypeRecursive(type, contentItem);
                if (foundContentItem !== undefined) {
                    return foundContentItem;
                }
            }
            return undefined;
        }
    }
    /** @internal */
    findFirstContentItemTypeByIdRecursive(type, id, node) {
        const contentItems = node.contentItems;
        const contentItemCount = contentItems.length;
        if (contentItemCount === 0) {
            return undefined;
        }
        else {
            for (let i = 0; i < contentItemCount; i++) {
                const contentItem = contentItems[i];
                if (contentItem.type === type && contentItem.id === id) {
                    return contentItem;
                }
            }
            for (let i = 0; i < contentItemCount; i++) {
                const contentItem = contentItems[i];
                const foundContentItem = this.findFirstContentItemTypeByIdRecursive(type, id, contentItem);
                if (foundContentItem !== undefined) {
                    return foundContentItem;
                }
            }
            return undefined;
        }
    }
    /**
     * Finds all the stack containers.
     *
     * @param stacks - Set of containers to populate.
     * @param node - Current node to process.
     * @internal
     */
    findAllStacksRecursive(stacks, node) {
        const contentItems = node.contentItems;
        for (let i = 0; i < contentItems.length; i++) {
            const item = contentItems[i];
            if (item instanceof Stack) {
                stacks.push(item);
            }
            else {
                if (!item.isComponent) {
                    this.findAllStacksRecursive(stacks, item);
                }
            }
        }
    }
    /** @internal */
    findFirstLocation(selectors) {
        const count = selectors.length;
        for (let i = 0; i < count; i++) {
            const selector = selectors[i];
            const location = this.findLocation(selector);
            if (location !== undefined) {
                return location;
            }
        }
        return undefined;
    }
    /** @internal */
    findLocation(selector) {
        const selectorIndex = selector.index;
        switch (selector.typeId) {
            case 0 /* LayoutManager.LocationSelector.TypeId.FocusedItem */: {
                if (this._focusedComponentItem === undefined) {
                    return undefined;
                }
                else {
                    const parentItem = this._focusedComponentItem.parentItem;
                    const parentContentItems = parentItem.contentItems;
                    const parentContentItemCount = parentContentItems.length;
                    if (selectorIndex === undefined) {
                        return { parentItem, index: parentContentItemCount };
                    }
                    else {
                        const focusedIndex = parentContentItems.indexOf(this._focusedComponentItem);
                        const index = focusedIndex + selectorIndex;
                        if (index < 0 || index > parentContentItemCount) {
                            return undefined;
                        }
                        else {
                            return { parentItem, index };
                        }
                    }
                }
            }
            case 1 /* LayoutManager.LocationSelector.TypeId.FocusedStack */: {
                if (this._focusedComponentItem === undefined) {
                    return undefined;
                }
                else {
                    const parentItem = this._focusedComponentItem.parentItem;
                    return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
                }
            }
            case 2 /* LayoutManager.LocationSelector.TypeId.FirstStack */: {
                const parentItem = this.findFirstContentItemType(ItemType.stack);
                if (parentItem === undefined) {
                    return undefined;
                }
                else {
                    return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
                }
            }
            case 3 /* LayoutManager.LocationSelector.TypeId.FirstRowOrColumn */: {
                let parentItem = this.findFirstContentItemType(ItemType.row);
                if (parentItem !== undefined) {
                    return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
                }
                else {
                    parentItem = this.findFirstContentItemType(ItemType.column);
                    if (parentItem !== undefined) {
                        return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
                    }
                    else {
                        return undefined;
                    }
                }
            }
            case 4 /* LayoutManager.LocationSelector.TypeId.FirstRow */: {
                const parentItem = this.findFirstContentItemType(ItemType.row);
                if (parentItem === undefined) {
                    return undefined;
                }
                else {
                    return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
                }
            }
            case 5 /* LayoutManager.LocationSelector.TypeId.FirstColumn */: {
                const parentItem = this.findFirstContentItemType(ItemType.column);
                if (parentItem === undefined) {
                    return undefined;
                }
                else {
                    return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
                }
            }
            case 6 /* LayoutManager.LocationSelector.TypeId.Empty */: {
                if (this._groundItem === undefined) {
                    throw new UnexpectedUndefinedError("LMFLRIF18244");
                }
                else {
                    if (this.rootItem !== undefined) {
                        return undefined;
                    }
                    else {
                        if (selectorIndex === undefined || selectorIndex === 0)
                            return { parentItem: this._groundItem, index: 0 };
                        else {
                            return undefined;
                        }
                    }
                }
            }
            case 7 /* LayoutManager.LocationSelector.TypeId.Root */: {
                if (this._groundItem === undefined) {
                    throw new UnexpectedUndefinedError("LMFLF18244");
                }
                else {
                    const groundContentItems = this._groundItem.contentItems;
                    if (groundContentItems.length === 0) {
                        if (selectorIndex === undefined || selectorIndex === 0)
                            return { parentItem: this._groundItem, index: 0 };
                        else {
                            return undefined;
                        }
                    }
                    else {
                        const parentItem = groundContentItems[0];
                        return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
                    }
                }
            }
        }
    }
    /** @internal */
    tryCreateLocationFromParentItem(parentItem, selectorIndex) {
        const parentContentItems = parentItem.contentItems;
        const parentContentItemCount = parentContentItems.length;
        if (selectorIndex === undefined) {
            return { parentItem, index: parentContentItemCount };
        }
        else {
            if (selectorIndex < 0 || selectorIndex > parentContentItemCount) {
                return undefined;
            }
            else {
                return { parentItem, index: selectorIndex };
            }
        }
    }
}
/** @public */
(function (LayoutManager) {
    /** @internal */
    function createMaximisePlaceElement(document) {
        const element = document.createElement("div");
        element.classList.add("lm_maximise_place" /* DomConstants.ClassName.MaximisePlace */);
        return element;
    }
    LayoutManager.createMaximisePlaceElement = createMaximisePlaceElement;
    /** @internal */
    function createTabDropPlaceholderElement(document) {
        const element = document.createElement("div");
        element.classList.add("lm_drop_tab_placeholder" /* DomConstants.ClassName.DropTabPlaceholder */);
        return element;
    }
    LayoutManager.createTabDropPlaceholderElement = createTabDropPlaceholderElement;
    /**
     * Default LocationSelectors array used if none is specified.  Will always find a location.
     * @public
     */
    LayoutManager.defaultLocationSelectors = [
        { typeId: 1 /* LocationSelector.TypeId.FocusedStack */, index: undefined },
        { typeId: 2 /* LocationSelector.TypeId.FirstStack */, index: undefined },
        { typeId: 3 /* LocationSelector.TypeId.FirstRowOrColumn */, index: undefined },
        { typeId: 7 /* LocationSelector.TypeId.Root */, index: undefined },
    ];
    /**
     * LocationSelectors to try to get location next to existing focused item
     * @public
     */
    LayoutManager.afterFocusedItemIfPossibleLocationSelectors = [
        { typeId: 0 /* LocationSelector.TypeId.FocusedItem */, index: 1 },
        { typeId: 2 /* LocationSelector.TypeId.FirstStack */, index: undefined },
        { typeId: 3 /* LocationSelector.TypeId.FirstRowOrColumn */, index: undefined },
        { typeId: 7 /* LocationSelector.TypeId.Root */, index: undefined },
    ];
})(LayoutManager || (LayoutManager = {}));

/** @public */
class VirtualLayout extends LayoutManager {
    /** @internal */
    constructor(configOrOptionalContainer, containerOrBindComponentEventHandler, unbindComponentEventHandler, skipInit) {
        super(VirtualLayout.createLayoutManagerConstructorParameters(configOrOptionalContainer, containerOrBindComponentEventHandler, unbindComponentEventHandler));
        /** @internal @deprecated use while constructor is not determinate */
        this._bindComponentEventHanlderPassedInConstructor = false; // remove when constructor is determinate
        /** @internal  @deprecated use while constructor is not determinate */
        this._creationTimeoutPassed = false; // remove when constructor is determinate
        if (containerOrBindComponentEventHandler !== undefined) {
            if (typeof containerOrBindComponentEventHandler === 'function') {
                this.bindComponentEvent = containerOrBindComponentEventHandler;
                this._bindComponentEventHanlderPassedInConstructor = true;
                if (typeof unbindComponentEventHandler === 'function') {
                    this.unbindComponentEvent = unbindComponentEventHandler;
                }
            }
        }
        if (!this._bindComponentEventHanlderPassedInConstructor) {
            // backward compatibility
            if (this.isSubWindow) {
                // document.body.style.visibility = 'hidden';
                // Set up layoutConfig since constructor is not determinate and may exit early. Other functions may need
                // this.layoutConfig. this.layoutConfig is again calculated in the same way when init() completes.
                // Remove this when constructor is determinate.
                if (this._constructorOrSubWindowLayoutConfig === undefined) {
                    throw new UnexpectedUndefinedError('VLC98823');
                }
                else {
                    const resolvedLayoutConfig = LayoutConfig.resolve(this._constructorOrSubWindowLayoutConfig);
                    // remove root from layoutConfig
                    this.layoutConfig = Object.assign(Object.assign({}, resolvedLayoutConfig), { root: undefined });
                }
            }
        }
        if (skipInit !== true) {
            if (!this.deprecatedConstructor) {
                this.init();
            }
        }
    }
    destroy() {
        this.bindComponentEvent = undefined;
        this.unbindComponentEvent = undefined;
        super.destroy();
    }
    /**
     * Creates the actual layout. Must be called after all initial components
     * are registered. Recurses through the configuration and sets up
     * the item tree.
     *
     * If called before the document is ready it adds itself as a listener
     * to the document.ready event
     * @deprecated LayoutConfig should not be loaded in {@link (LayoutManager:class)} constructor, but rather in a
     * {@link (LayoutManager:class).loadLayout} call.  If LayoutConfig is not specified in {@link (LayoutManager:class)} constructor,
     * then init() will be automatically called internally and should not be called externally.
     */
    init() {
        /**
         * If the document isn't ready yet, wait for it.
         */
        if (!this._bindComponentEventHanlderPassedInConstructor && (document.readyState === 'loading' || document.body === null)) {
            document.addEventListener('DOMContentLoaded', () => this.init(), { passive: true });
            return;
        }
        /**
         * If this is a subwindow, wait a few milliseconds for the original
         * page's js calls to be executed, then replace the bodies content
         * with GoldenLayout
         */
        if (!this._bindComponentEventHanlderPassedInConstructor && this.isSubWindow === true && !this._creationTimeoutPassed) {
            setTimeout(() => this.init(), 7);
            this._creationTimeoutPassed = true;
            return;
        }
        if (this.isSubWindow === true) {
            if (!this._bindComponentEventHanlderPassedInConstructor) {
                this.clearHtmlAndAdjustStylesForSubWindow();
            }
            // Expose this instance on the window object to allow the opening window to interact with it
            window.__glInstance = this;
        }
        super.init();
    }
    /**
     * Clears existing HTML and adjusts style to make window suitable to be a popout sub window
     * Curently is automatically called when window is a subWindow and bindComponentEvent is not passed in the constructor
     * If bindComponentEvent is not passed in the constructor, the application must either call this function explicitly or
     * (preferably) make the window suitable as a subwindow.
     * In the future, it is planned that this function is NOT automatically called in any circumstances.  Applications will
     * need to determine whether a window is a Golden Layout popout window and either call this function explicitly or
     * hide HTML not relevant to the popout.
     * See apitest for an example of how HTML is hidden when popout windows are displayed
     */
    clearHtmlAndAdjustStylesForSubWindow() {
        const headElement = document.head;
        const appendNodeLists = new Array(4);
        appendNodeLists[0] = document.querySelectorAll('body link');
        appendNodeLists[1] = document.querySelectorAll('body style');
        appendNodeLists[2] = document.querySelectorAll('template');
        appendNodeLists[3] = document.querySelectorAll('.gl_keep');
        for (let listIdx = 0; listIdx < appendNodeLists.length; listIdx++) {
            const appendNodeList = appendNodeLists[listIdx];
            for (let nodeIdx = 0; nodeIdx < appendNodeList.length; nodeIdx++) {
                const node = appendNodeList[nodeIdx];
                headElement.appendChild(node);
            }
        }
        const bodyElement = document.body;
        bodyElement.innerHTML = '';
        bodyElement.style.visibility = 'visible';
        this.checkAddDefaultPopinButton();
        /*
        * This seems a bit pointless, but actually causes a reflow/re-evaluation getting around
        * slickgrid's "Cannot find stylesheet." bug in chrome
        */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        document.body.offsetHeight;
    }
    /**
     * Will add button if not popinOnClose specified in settings
     * @returns true if added otherwise false
     */
    checkAddDefaultPopinButton() {
        if (this.layoutConfig.settings.popInOnClose) {
            return false;
        }
        else {
            const popInButtonElement = document.createElement('div');
            popInButtonElement.classList.add("lm_popin" /* DomConstants.ClassName.Popin */);
            popInButtonElement.setAttribute('title', this.layoutConfig.header.dock);
            const iconElement = document.createElement('div');
            iconElement.classList.add("lm_icon" /* DomConstants.ClassName.Icon */);
            const bgElement = document.createElement('div');
            bgElement.classList.add("lm_bg" /* DomConstants.ClassName.Bg */);
            popInButtonElement.appendChild(iconElement);
            popInButtonElement.appendChild(bgElement);
            popInButtonElement.addEventListener('click', () => this.emit('popIn'));
            document.body.appendChild(popInButtonElement);
            return true;
        }
    }
    /* * @internal * /
    override bindComponent(container: ComponentContainer, itemConfig: ResolvedComponentItemConfig): ComponentContainer.Handle {
        if (this.bindComponentEvent !== undefined) {
            const bindableComponent = this.bindComponentEvent(container, itemConfig);
            return bindableComponent;

        }
    }
    */
    /** @internal */
    unbindComponent(container, handle) {
        if (this.unbindComponentEvent !== undefined) {
            this.unbindComponentEvent(container);
        }
    }
}
/** @public */
(function (VirtualLayout) {
    /** @internal
     * Veriable to hold the state whether we already checked if we are running in a sub window.
     * Fixes popout and creation of nested golden-layouts.
     */
    let subWindowChecked = false;
    /** @internal */
    function createLayoutManagerConstructorParameters(configOrOptionalContainer, containerOrBindComponentEventHandler, unbindComponentEventHandler) {
        if (typeof configOrOptionalContainer === 'object'
            && !(configOrOptionalContainer instanceof HTMLElement)
            && configOrOptionalContainer.settings
            && configOrOptionalContainer.settings.checkGlWindowKey === false)
            subWindowChecked = true;
        const windowConfigKey = subWindowChecked ? null : new URL(document.location.href).searchParams.get('gl-window');
        subWindowChecked = true;
        const isSubWindow = windowConfigKey !== null;
        let containerElement;
        let containerPosition = null;
        let config;
        if (windowConfigKey !== null) {
            const windowConfigStr = localStorage.getItem(windowConfigKey);
            if (windowConfigStr === null) {
                throw new Error('Null gl-window Config');
            }
            localStorage.removeItem(windowConfigKey);
            const minifiedWindowConfig = JSON.parse(windowConfigStr);
            const resolvedConfig = ResolvedLayoutConfig.unminifyConfig(minifiedWindowConfig);
            config = LayoutConfig.fromResolved(resolvedConfig);
            if (configOrOptionalContainer instanceof HTMLElement) {
                containerElement = configOrOptionalContainer;
            }
        }
        else {
            if (configOrOptionalContainer === undefined) {
                config = undefined;
            }
            else {
                if (configOrOptionalContainer instanceof HTMLElement) {
                    config = undefined;
                    containerElement = configOrOptionalContainer;
                }
                else {
                    // backwards compatibility
                    config = configOrOptionalContainer;
                }
            }
            if (containerElement === undefined) {
                if (containerOrBindComponentEventHandler instanceof HTMLElement) {
                    containerElement = containerOrBindComponentEventHandler;
                    if (unbindComponentEventHandler instanceof Node)
                        containerPosition = unbindComponentEventHandler;
                }
            }
        }
        return {
            constructorOrSubWindowLayoutConfig: config,
            isSubWindow,
            containerElement,
            containerPosition,
        };
    }
    VirtualLayout.createLayoutManagerConstructorParameters = createLayoutManagerConstructorParameters;
})(VirtualLayout || (VirtualLayout = {}));

/** @public */
class GoldenLayout$1 extends VirtualLayout {
    /** @internal */
    constructor(configOrOptionalContainer, containerOrBindComponentEventHandler, unbindComponentEventHandler) {
        super(configOrOptionalContainer, containerOrBindComponentEventHandler, unbindComponentEventHandler, true);
        /** @internal */
        this._componentTypesMap = new Map();
        /** @internal */
        this._registeredComponentMap = new Map();
        /** @internal */
        this._virtuableComponentMap = new Map(); // FIXME remove
        /** @internal */
        this._containerVirtualVisibilityChangeRequiredEventListener = (container, visible) => this.handleContainerVirtualVisibilityChangeRequiredEvent(container, visible);
        /** @internal */
        this._containerVirtualZIndexChangeRequiredEventListener = (container, logicalZIndex, defaultZIndex) => this.handleContainerVirtualZIndexChangeRequiredEvent(container, logicalZIndex, defaultZIndex);
        // we told VirtualLayout to not call init() (skipInit set to true) so that Golden Layout can initialise its properties before init is called
        if (!this.deprecatedConstructor) {
            this.init();
        }
    }
    //  REMOVE   registerComponentFactoryFunction(typeName: string, componentFactoryFunction: GoldenLayout.ComponentFactoryFunction, virtual = false): void {
    /**
     * Register a new component with the layout manager.
     */
    registerComponent(typeName, componentFactoryFunction) {
        if (typeof componentFactoryFunction !== 'function') {
            throw new BindError('Please register a constructor function');
        }
        const existingComponentType = this._componentTypesMap.get(typeName);
        if (existingComponentType !== undefined) {
            throw new BindError(`${i18nStrings[3 /* I18nStringId.ComponentIsAlreadyRegistered */]}: ${typeName}`);
        }
        this._componentTypesMap.set(typeName, componentFactoryFunction);
    }
    registerComponentDefault(componentFactoryFunction) {
        if (typeof componentFactoryFunction !== 'function') {
            throw new BindError('Please register a constructor function');
        }
        if (this._componentTypesDefault !== undefined) {
            throw new BindError(`${i18nStrings[3 /* I18nStringId.ComponentIsAlreadyRegistered */]} - default`);
        }
        this._componentTypesDefault = componentFactoryFunction;
    }
    getRegisteredComponentTypeNames() {
        const typeNamesIterableIterator = this._componentTypesMap.keys();
        return Array.from(typeNamesIterableIterator);
    }
    /**
     * Returns a previously registered component instantiator.  Attempts to utilize registered
     * component type by first, then falls back to the component constructor callback function (if registered).
     * If neither gets an instantiator, then returns `undefined`.
     * Note that `undefined` will return if config.componentType is not a string
     *
     * @param config - The item config
     * @public
     */
    getComponentInstantiator(config) {
        let instantiator;
        const typeName = ResolvedComponentItemConfig.resolveComponentTypeName(config);
        if (typeName !== undefined) {
            instantiator = this._componentTypesMap.get(typeName);
        }
        return instantiator || this._componentTypesDefault;
    }
    /** @internal */
    bindComponent(container, itemConfig) {
        const factoryFunction = this.getComponentInstantiator(itemConfig);
        let result = undefined;
        if (factoryFunction !== undefined) {
            // handle case where component is obtained by name or component constructor callback
            let componentState;
            if (itemConfig.componentState === undefined) {
                componentState = undefined;
            }
            else {
                // make copy
                componentState = deepExtendValue({}, itemConfig.componentState);
            }
            if (factoryFunction !== undefined) {
                result = factoryFunction(container, componentState);
            }
            /*
            if (virtual) {
                if (component === undefined) {
                    throw new UnexpectedUndefinedError('GLBCVCU988774');
                } else {
                    const virtuableComponent = component as GoldenLayout.VirtuableComponent;
                    const componentRootElement = virtuableComponent.rootHtmlElement;
                    if (componentRootElement === undefined) {
                        throw new BindError(`${i18nStrings[I18nStringId.VirtualComponentDoesNotHaveRootHtmlElement]}: ${typeName}`);
                    } else {
                        ensureElementPositionAbsolute(componentRootElement);
                        this.container.appendChild(componentRootElement);
                        this._virtuableComponentMap.set(container, virtuableComponent);
                        container.virtualVisibilityChangeRequiredEvent = this._containerVirtualVisibilityChangeRequiredEventListener;
                        container.virtualZIndexChangeRequiredEvent = this._containerVirtualZIndexChangeRequiredEventListener;
                    }
                }
            }

            this._registeredComponentMap.set(container, component);

            result = {
                virtual: instantiator.virtual,
                component,
                };
            */
        }
        return result;
    }
    /** @internal */
    unbindComponent(container, handle) {
        /*
        const registeredComponent = this._registeredComponentMap.get(container);
        if (registeredComponent === undefined) {
            super.unbindComponent(container, handle); // was not created from registration so use virtual unbind events
        } else {
            const virtuableComponent = this._virtuableComponentMap.get(container);
            if (virtuableComponent !== undefined) {
                const componentRootElement = virtuableComponent.rootHtmlElement;
                if (componentRootElement === undefined) {
                    throw new AssertError('GLUC77743', container.title);
                } else {
                    this.container.removeChild(componentRootElement);
                    this._virtuableComponentMap.delete(container);
                }
            }
        }
        */
    }
    /** @internal */
    handleContainerVirtualVisibilityChangeRequiredEvent(container, visible) {
        const virtuableComponent = this._virtuableComponentMap.get(container);
        if (virtuableComponent === undefined) {
            throw new UnexpectedUndefinedError('GLHCVVCRE55934');
        }
        else {
            const rootElement = virtuableComponent.rootHtmlElement;
            if (rootElement === undefined) {
                throw new BindError(i18nStrings[4 /* I18nStringId.ComponentIsNotVirtuable */] + ' ' + container.title);
            }
            else {
                setElementDisplayVisibility(rootElement, visible);
            }
        }
    }
    /** @internal */
    handleContainerVirtualZIndexChangeRequiredEvent(container, logicalZIndex, defaultZIndex) {
        const virtuableComponent = this._virtuableComponentMap.get(container);
        if (virtuableComponent === undefined) {
            throw new UnexpectedUndefinedError('GLHCVZICRE55935');
        }
        else {
            const rootElement = virtuableComponent.rootHtmlElement;
            if (rootElement === undefined) {
                throw new BindError(i18nStrings[4 /* I18nStringId.ComponentIsNotVirtuable */] + ' ' + container.title);
            }
            else {
                rootElement.style.zIndex = defaultZIndex;
            }
        }
    }
}

class BaseElement extends LitElement {
    constructor() {
        super(...arguments);
        this._slottedChildren = undefined;
    }
    firstUpdated() {
        var _a;
        const slot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
        slot === null || slot === void 0 ? void 0 : slot.addEventListener('slotchange', () => {
            const childNodes = slot === null || slot === void 0 ? void 0 : slot.assignedNodes({ flatten: true });
            this._slottedChildren = Array.prototype.filter.call(childNodes, node => node.nodeType === Node.ELEMENT_NODE);
        });
    }
    getSlottedChildren() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const slot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
            if (this._slottedChildren)
                return this._slottedChildren;
            return new Promise(resolve => {
                slot === null || slot === void 0 ? void 0 : slot.addEventListener('slotchange', () => {
                    const childNodes = slot === null || slot === void 0 ? void 0 : slot.assignedNodes({ flatten: true });
                    resolve(Array.prototype.filter.call(childNodes, node => node.nodeType === Node.ELEMENT_NODE));
                });
            });
        });
    }
}

const goldenLayoutContext = createContext('golden-layout/root');

const INIT_LAYOUT_EVENT = 'init-layout';
const ROOT_LOADED_EVENT = 'root-loaded';

let GoldenLayout = class GoldenLayout extends BaseElement {
    constructor() {
        super(...arguments);
        this.layoutConfig = undefined;
        this._goldenLayoutContext = new ContextProvider(this, goldenLayoutContext);
    }
    get goldenLayout() {
        return this._goldenLayoutContext.value;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener(INIT_LAYOUT_EVENT, e => {
            e.preventDefault();
            e.stopPropagation();
            const layout = new GoldenLayout$1(e.detail.element);
            layout.resizeWithContainerAutomatically = true;
            layout.registerComponent('native-html-component', (container, state) => {
                container.element.innerHTML = state.html;
            });
            this._goldenLayoutContext.setValue(layout);
        });
        this.addEventListener(ROOT_LOADED_EVENT, e => {
            e.preventDefault();
            e.stopPropagation();
            const layout = this._goldenLayoutContext.value;
            if (this.layoutConfig) {
                layout.loadLayout(this.layoutConfig);
            }
            else {
                const { root } = e.detail;
                if (root === undefined)
                    throw new Error("Can't initialize GoldenLayout: either pass the layout config via input parameter in the <golden-layout> element or define your initial layout inside the <golden-layout-root> element");
                layout.loadLayout({
                    root,
                    header: {
                        popout: false,
                    },
                });
            }
        });
    }
    saveLayout() {
        return this._goldenLayoutContext.value.saveLayout();
    }
    render() {
        return html ` <slot></slot> `;
    }
    static get styles() {
        return [
            css `
        :host {
          display: flex;
          flex: 1;
        }
      `,
        ];
    }
};
__decorate([
    property()
], GoldenLayout.prototype, "layoutConfig", void 0);
GoldenLayout = __decorate([
    customElement('golden-layout')
], GoldenLayout);

class ItemElement extends BaseElement {
    constructor() {
        super(...arguments);
        this.height = undefined;
        this.width = undefined;
    }
    getCommonConfig() {
        return {
            height: this.height,
            width: this.width,
        };
    }
}
__decorate([
    property()
], ItemElement.prototype, "height", void 0);
__decorate([
    property()
], ItemElement.prototype, "width", void 0);

class CollectionElement extends ItemElement {
    getCollectionContent() {
        return __awaiter(this, void 0, void 0, function* () {
            const children = yield this.getSlottedChildren();
            const promises = children
                .filter(node => node.getContent)
                .map(node => node.getContent());
            const content = yield Promise.all(promises);
            return content;
        });
    }
    render() {
        return html `<slot id="slot" style="display: none"></slot>`;
    }
}

let GoldenLayoutRow = class GoldenLayoutRow extends CollectionElement {
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            return Object.assign({ type: 'row', content: yield this.getCollectionContent() }, this.getCommonConfig());
        });
    }
};
GoldenLayoutRow = __decorate([
    customElement('golden-layout-row')
], GoldenLayoutRow);

let GoldenLayoutComponent = class GoldenLayoutComponent extends ItemElement {
    constructor() {
        super(...arguments);
        this.unclosable = false;
    }
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.componentType) {
                return Object.assign({ title: this.title, type: 'component', componentType: this.componentType, componentState: this.state ? this.state : {}, isClosable: !this.unclosable }, this.getCommonConfig());
            }
            const children = yield this.getSlottedChildren();
            return Object.assign({ title: this.title, type: 'component', componentType: 'native-html-component', componentState: {
                    html: children[0].outerHTML,
                }, isClosable: !this.unclosable }, this.getCommonConfig());
        });
    }
    render() {
        return html `<slot style="display: none;"></slot>`;
    }
};
__decorate([
    property({ attribute: 'component-type' })
], GoldenLayoutComponent.prototype, "componentType", void 0);
__decorate([
    property()
], GoldenLayoutComponent.prototype, "title", void 0);
__decorate([
    property()
], GoldenLayoutComponent.prototype, "state", void 0);
__decorate([
    property({ type: Boolean })
], GoldenLayoutComponent.prototype, "unclosable", void 0);
GoldenLayoutComponent = __decorate([
    customElement('golden-layout-component')
], GoldenLayoutComponent);

let GoldenLayoutRegister = class GoldenLayoutRegister extends BaseElement {
    registerSlotTemplate(goldenLayout) {
        return __awaiter(this, void 0, void 0, function* () {
            const children = yield this.getSlottedChildren();
            const template = children[0];
            goldenLayout.registerComponent(this.componentType, container => {
                var _a;
                const clone = (_a = template.content.firstElementChild) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
                container.element.appendChild(clone);
                if (this.titleRenderer) {
                    const r = this.titleRenderer;
                    container.setTitleRenderer((container, element) => render(r(container.state), element));
                }
            });
        });
    }
    firstUpdated() {
        new ContextConsumer(this, goldenLayoutContext, goldenLayout => {
            if (goldenLayout) {
                if (this.template !== undefined) {
                    const templateFn = this.template;
                    goldenLayout.registerComponent(this.componentType, (container, state) => {
                        render(templateFn(state, container), container.element, {});
                        if (this.titleRenderer) {
                            const r = this.titleRenderer;
                            container.setTitleRenderer((container, element) => render(r(container.state), element));
                        }
                    });
                }
                else {
                    this.registerSlotTemplate(goldenLayout);
                }
            }
        }, true);
    }
    render() {
        return html ` <slot id="slot"></slot>`;
    }
};
__decorate([
    property({ attribute: 'component-type' })
], GoldenLayoutRegister.prototype, "componentType", void 0);
__decorate([
    property()
], GoldenLayoutRegister.prototype, "template", void 0);
__decorate([
    property()
], GoldenLayoutRegister.prototype, "titleRenderer", void 0);
GoldenLayoutRegister = __decorate([
    customElement('golden-layout-register')
], GoldenLayoutRegister);

let GoldenLayoutStack = class GoldenLayoutStack extends CollectionElement {
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            return Object.assign({ type: 'stack', content: (yield this.getCollectionContent()) }, this.getCommonConfig());
        });
    }
};
GoldenLayoutStack = __decorate([
    customElement('golden-layout-stack')
], GoldenLayoutStack);

let GoldenLayoutDragSource = class GoldenLayoutDragSource extends BaseElement {
    firstUpdated() {
        return __awaiter(this, void 0, void 0, function* () {
            const children = yield this.getSlottedChildren();
            new ContextConsumer(this, goldenLayoutContext, value => {
                if (value) {
                    value.newDragSource(children[0], this.componentType);
                }
            });
        });
    }
    render() {
        return html `<slot id="slot"></slot>`;
    }
};
__decorate([
    property({ attribute: 'component-type' })
], GoldenLayoutDragSource.prototype, "componentType", void 0);
GoldenLayoutDragSource = __decorate([
    customElement('golden-layout-drag-source')
], GoldenLayoutDragSource);

let GoldenLayoutColumn = class GoldenLayoutColumn extends CollectionElement {
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            return Object.assign({ type: 'column', content: yield this.getCollectionContent() }, this.getCommonConfig());
        });
    }
};
GoldenLayoutColumn = __decorate([
    customElement('golden-layout-column')
], GoldenLayoutColumn);

var css_248z$1 = css`.lm_root {
  position: relative;
}
.lm_goldenlayout {
  --lm_border_color: #000000;
  --lm_drag_old_position_border: 2px tan dashed;
  --lm_splitter_drag_color: darkcyan;
}
.lm_items {
  border-width: 1px;
  border-style: solid;
  border-color: var(--lm_border_color);
}
.lm_splitter .lm_bg {
  background-color: var(--lm_border_color);
}
.lm_row > .lm_item {
  float: left;
}
.lm_content {
  overflow: hidden;
  position: relative;
}
.lm_dragging,
.lm_dragging * {
  cursor: move;
  -webkit-user-select: none;
          user-select: none;
}
.lm_splitter:hover .lm_drag_handle,
.lm_splitter.lm_dragging .lm_drag_handle {
  background-color: var(--lm_splitter_drag_color);
}
.lm_maximised {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 40;
}
.lm_maximise_placeholder {
  display: none;
}
.lm_splitter {
  position: relative;
  z-index: auto;
  touch-action: none;
  background: transparent;
}
.lm_splitter .lm_bg {
  opacity: 1;
  z-index: -2;
  position: absolute;
}
.lm_splitter .lm_drag_handle {
  position: absolute;
  background-clip: content-box;
  z-index: 2;
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
  box-sizing: content-box;
}
.lm_splitter.lm_vertical .lm_bg {
  width: 100%;
}
.lm_splitter.lm_vertical .lm_drag_handle {
  width: 100%;
  cursor: row-resize;
}
.lm_splitter.lm_horizontal {
  float: left;
  height: 100%;
}
.lm_splitter.lm_horizontal .lm_bg {
  height: 100%;
}
.lm_splitter.lm_horizontal .lm_drag_handle {
  height: 100%;
  cursor: col-resize;
}
.lm_component {
  position: absolute;
}
.lm_header {
  overflow: visible;
  position: relative;
  z-index: 1;
  -webkit-user-select: none;
          user-select: none;
  width: 100%;
}
.lm_header [class^=lm_] {
  box-sizing: content-box !important;
}
.lm_header .lm_controls {
  position: absolute;
  top: 0px;
  right: 3px;
  display: flex;
}
.lm_header .lm_controls > * {
  cursor: pointer;
  float: left;
  width: 18px;
  height: 18px;
  text-align: center;
}
.lm_header .lm_tab {
  cursor: pointer;
  float: left;
  height: 14px;
  margin-top: 1px;
  padding: 0px 6px 5px;
  padding-right: 25px;
  position: relative;
  touch-action: none;
}
.lm_header .lm_tab i {
  width: 2px;
  height: 19px;
  position: absolute;
}
.lm_header .lm_tab i.lm_left {
  top: 0;
  left: -2px;
}
.lm_header .lm_tab i.lm_right {
  top: 0;
  right: -2px;
}
.lm_header .lm_tab .lm_close_tab {
  width: 14px;
  height: 14px;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
}
.lm_tabs {
  display: flex;
  overflow: hidden;
}
.lm_tab .lm_title {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
}
.lm_header.lm_tight_mode .lm_tabs .lm_tab {
  padding-left: 2px;
  padding-right: 2px;
}
.lm_header.lm_tight_mode .lm_tabs .lm_tab.lm_active {
  display: inherit;
  padding-right: 22px;
}
.lm_header.lm_tight_mode .lm_tabs .lm_tab.lm_active .lm_close_tab {
  display: inherit;
}
.lm_header.lm_tight_mode .lm_drop_tab_placeholder {
  padding-right: 70px;
  margin-right: 0px;
}
.lm_header.lm_tight_mode .lm_tabs .lm_tab .lm_close_tab,
.lm_stack.lm_single .lm_tabs .lm_tab.lm_active .lm_close_tab {
  display: none;
}
.lm_stack.lm_single .lm_header .lm_tabs .lm_tab,
.lm_stack.lm_single .lm_header .lm_tabs .lm_tab.lm_active {
  padding-left: 6px;
  padding-right: 6px;
}
div.lm_drag_old_position {
  box-sizing: border-box;
}
div.lm_drag_old_position .lm_header .lm_tab.lm_dragging,
div.lm_drag_old_position .lm_item {
  border: var(--lm_drag_old_position_border);
}
div.lm_drag_old_position .lm_header .lm_tab.lm_dragging {
  opacity: 1;
  background-color: transparent;
}
div.lm_drag_old_position.lm_single .lm_header {
  background-color: transparent;
}
div.lm_drag_old_position .lm_header .lm_tab.lm_dragging .lm_title {
  opacity: 0;
}
div.lm_drag_old_position .lm_controls {
  display: none;
}
.lm_stack {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: auto;
}
.lm_stack > .lm_items {
  overflow: hidden;
  flex-grow: 1;
  position: relative;
  z-index: auto;
}
.lm_stack > .lm_items .lm_item {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.lm_stack.lm_left > .lm_items {
  position: absolute;
  left: 20px;
  top: 0;
}
.lm_stack.lm_right > .lm_items {
  position: absolute;
  right: 20px;
  top: 0;
}
.lm_stack.lm_right > .lm_header {
  position: absolute;
  right: 0;
  top: 0;
  flex-grow: 0;
}
.lm_stack.lm_bottom > .lm_items {
  position: absolute;
  bottom: 20px;
}
.lm_stack.lm_bottom > .lm_header {
  position: absolute;
  bottom: 0;
}
.lm_left.lm_stack .lm_header,
.lm_right.lm_stack .lm_header {
  height: 100%;
}
.lm_left.lm_dragProxy .lm_header,
.lm_right.lm_dragProxy .lm_header,
.lm_left.lm_dragProxy .lm_items,
.lm_right.lm_dragProxy .lm_items {
  float: left;
}
.lm_left.lm_dragProxy .lm_header,
.lm_right.lm_dragProxy .lm_header,
.lm_left.lm_stack .lm_header,
.lm_right.lm_stack .lm_header {
  width: 20px;
  vertical-align: top;
}
.lm_left.lm_dragProxy .lm_header .lm_tabs,
.lm_right.lm_dragProxy .lm_header .lm_tabs,
.lm_left.lm_stack .lm_header .lm_tabs,
.lm_right.lm_stack .lm_header .lm_tabs {
  transform-origin: left top;
  top: 0;
  width: 1000px;
  /*hack*/
}
.lm_left.lm_dragProxy .lm_header .lm_controls,
.lm_right.lm_dragProxy .lm_header .lm_controls,
.lm_left.lm_stack .lm_header .lm_controls,
.lm_right.lm_stack .lm_header .lm_controls {
  bottom: 0;
  flex-flow: column;
}
.lm_dragProxy.lm_left .lm_header .lm_tabs,
.lm_stack.lm_left .lm_header .lm_tabs {
  transform: rotate(-90deg) scaleX(-1);
  left: 0;
}
.lm_dragProxy.lm_left .lm_header .lm_tabs .lm_tab,
.lm_stack.lm_left .lm_header .lm_tabs .lm_tab {
  transform: scaleX(-1);
  margin-top: 1px;
}
.lm_dragProxy.lm_left .lm_header .lm_tabdropdown_list,
.lm_stack.lm_left .lm_header .lm_tabdropdown_list {
  top: initial;
  right: initial;
  left: 20px;
}
.lm_dragProxy.lm_right .lm_content {
  float: left;
}
.lm_dragProxy.lm_right .lm_header .lm_tabs,
.lm_stack.lm_right .lm_header .lm_tabs {
  transform: rotate(90deg) scaleX(1);
  left: 100%;
  margin-left: 0;
}
.lm_dragProxy.lm_right .lm_header .lm_controls,
.lm_stack.lm_right .lm_header .lm_controls {
  left: 3px;
}
.lm_dragProxy.lm_right .lm_header .lm_tabdropdown_list,
.lm_stack.lm_right .lm_header .lm_tabdropdown_list {
  top: initial;
  right: 20px;
}
.lm_dragProxy.lm_bottom .lm_header,
.lm_stack.lm_bottom .lm_header {
  width: 100%;
}
.lm_dragProxy.lm_bottom .lm_header .lm_tab,
.lm_stack.lm_bottom .lm_header .lm_tab {
  margin-top: 0;
  border-top: none;
}
.lm_dragProxy.lm_bottom .lm_header .lm_controls,
.lm_stack.lm_bottom .lm_header .lm_controls {
  top: 3px;
}
.lm_dragProxy.lm_bottom .lm_header .lm_tabdropdown_list,
.lm_stack.lm_bottom .lm_header .lm_tabdropdown_list {
  top: initial;
  bottom: 20px;
}
.lm_drop_tab_placeholder {
  float: left;
  padding-right: 100px;
  visibility: hidden;
}
.lm_header .lm_controls .lm_tabdropdown:before {
  content: '';
  width: 0;
  height: 0;
  vertical-align: middle;
  display: inline-block;
  border-top: 5px dashed;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  color: white;
}
.lm_header .lm_tabdropdown_list {
  position: absolute;
  top: 20px;
  right: 0;
  z-index: 5;
  overflow: hidden;
}
.lm_header .lm_tabdropdown_list .lm_title {
  display: block;
  padding: 1px;
}
.lm_header .lm_tabdropdown_list .lm_tab {
  clear: both;
  padding-right: 10px;
  margin: 0;
}
.lm_header .lm_tabdropdown_list .lm_tab .lm_title {
  width: 100px;
}
.lm_header .lm_tabdropdown_list .lm_close_tab {
  display: none !important;
}
/***********************************
* Drag Proxy
***********************************/
.lm_dragProxy {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;
}
.lm_dragProxy .lm_header {
  background: transparent;
}
.lm_dragProxy .lm_content {
  border-top: none;
  overflow: hidden;
}
.lm_dropTargetIndicator {
  display: none;
  position: fixed;
  z-index: 35;
  transition: all 200ms ease;
}
.lm_dropTargetIndicator .lm_inner {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
}
.lm_transition_indicator {
  display: none;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
}
.lm_popin {
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 9999;
}
.lm_popin > * {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.lm_popin > .lm_bg {
  z-index: 10;
}
.lm_popin > .lm_icon {
  z-index: 20;
}
.lm_dragImage {
  position: absolute;
  opacity: 0.8;
}
.lm_dragImage section {
  background-color: transparent;
}
.lm_dragImage .lm_dragImageInner {
  border: solid 2px red;
  background-color: transparent;
  position: relative;
}
`;
var baseStyles = css_248z$1;

var css_248z = css`.lm_goldenlayout {
  background: #f4f4f4;
  --lm_border_color: #cccccc;
}
.lm_content {
  background: #e1e1e1;
}
.lm_dragProxy .lm_content {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.lm_dropTargetIndicator {
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.4);
  outline: 1px dashed #cccccc;
}
.lm_dropTargetIndicator .lm_inner {
  background: #000000;
  opacity: 0.1;
}
.lm_header {
  height: 20px;
}
.lm_header .lm_tab {
  font-family: Arial, sans-serif;
  font-size: 12px;
  color: #888888;
  background: #fafafa;
  margin-right: 2px;
  padding-bottom: 4px;
  border: 1px solid #cccccc;
  border-bottom: none;
}
.lm_header .lm_tab .lm_title {
  padding-top: 1px;
}
.lm_header .lm_tab .lm_close_tab {
  width: 11px;
  height: 11px;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAKUlEQVR4nGNgYGD4z4Af/Mdg4FKASwCnDf8JKSBoAtEmEXQTQd8RDCcA6+4Q8OvIgasAAAAASUVORK5CYII=');
  background-position: center center;
  background-repeat: no-repeat;
  top: 4px;
  right: 6px;
  opacity: 0.4;
}
.lm_header .lm_tab .lm_close_tab:hover {
  opacity: 1;
}
.lm_header .lm_tab.lm_active {
  border-bottom: none;
  box-shadow: 2px -2px 2px -2px rgba(0, 0, 0, 0.2);
  padding-bottom: 5px;
}
.lm_header .lm_tab.lm_active .lm_close_tab {
  opacity: 1;
}
.lm_dragProxy.lm_right .lm_header .lm_tab.lm_active,
.lm_stack.lm_right .lm_header .lm_tab.lm_active {
  box-shadow: 2px -2px 2px -2px rgba(0, 0, 0, 0.2);
}
.lm_dragProxy.lm_bottom .lm_header .lm_tab.lm_active,
.lm_stack.lm_bottom .lm_header .lm_tab.lm_active {
  box-shadow: 2px 2px 2px -2px rgba(0, 0, 0, 0.2);
}
.lm_selected .lm_header {
  background-color: #452500;
}
.lm_tab:hover,
.lm_tab.lm_active {
  background: #e1e1e1;
  color: #777777;
}
.lm_header .lm_controls .lm_tabdropdown:before {
  color: #000000;
}
.lm_controls > * {
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0.4;
  transition: opacity 300ms ease;
}
.lm_controls > *:hover {
  opacity: 1;
}
.lm_controls .lm_popout {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAANUlEQVR4nI2QMQoAMAwCz5L/f9mOzZIaN0E9UDyZhaaQz6atgBHgambEJ5wBKoS0WaIvfT+6K2MIECN19MAAAAAASUVORK5CYII=');
}
.lm_controls .lm_maximise {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAIklEQVR4nGNkYGD4z0AAMBFSAAOETPpPlEmDUREjAxHhBABPvAQLFv3qngAAAABJRU5ErkJggg==');
}
.lm_controls .lm_close {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAKUlEQVR4nGNgYGD4z4Af/Mdg4FKASwCnDf8JKSBoAtEmEXQTQd8RDCcA6+4Q8OvIgasAAAAASUVORK5CYII=');
}
.lm_maximised .lm_header {
  background-color: #ffffff;
}
.lm_maximised .lm_controls .lm_maximise {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAJklEQVR4nGP8//8/AyHARFDFUFbEwsDAwMDIyIgzHP7//89IlEkApSkHEScJTKoAAAAASUVORK5CYII=');
}
.lm_transition_indicator {
  background-color: #000000;
  border: 1px dashed #555555;
}
.lm_popin {
  cursor: pointer;
}
.lm_popin .lm_bg {
  background: #000000;
  opacity: 0.7;
}
.lm_popin .lm_icon {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AIMBA8Y4uozqQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAQ0lEQVQY072OMQ6AMAzEzhH//7I7oKKKoSULXjI5Z5KokgXAbEANoMq8WwGs3FOcvq/Ul5w311zqSNVdefJ+kUjSzhteChsRI/jXegAAAABJRU5ErkJggg==');
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0.7;
}
.lm_popin:hover .lm_icon {
  opacity: 1;
}
`;
var theme = css_248z;

let GoldenLayoutRoot = class GoldenLayoutRoot extends BaseElement {
    initLayout(el) {
        this.dispatchEvent(new CustomEvent(INIT_LAYOUT_EVENT, {
            detail: {
                element: el,
            },
            bubbles: true,
            composed: true,
        }));
    }
    getRoot() {
        return __awaiter(this, void 0, void 0, function* () {
            const children = yield this.getSlottedChildren();
            for (const child of children) {
                if (child.getContent) {
                    return child.getContent();
                }
            }
            return undefined;
        });
    }
    firstUpdated() {
        return __awaiter(this, void 0, void 0, function* () {
            const root = yield this.getRoot();
            this.dispatchEvent(new CustomEvent(ROOT_LOADED_EVENT, {
                bubbles: true,
                composed: true,
                detail: {
                    root,
                    rootElement: this,
                },
            }));
        });
    }
    render() {
        return html `<div
        ${ref(this.initLayout)}
        style="flex: 1; overflow: clip;"
      ></div>
      <slot></slot> `;
    }
    static get styles() {
        return [
            css `
        :host {
          display: flex;
          flex: 1;
          overflow: hidden;
          font-family: "Aileron", "Open Sans", "Helvetica Neue", sans-serif;
        }

        .lm_content {
          display: flex;
        }

        .lm_title {
          display: flex !important;
          margin: 0 5px;
        }


        .lm_tab {
          height: 40px !important;
          border-radius: 4px;
          margin: 4px 0 4px 5px !important;
          border: none !important;
          box-shadow: 0 0 1px #939393 !important;
          display: flex !important;
          align-items: center !important;
          padding-bottom: 2px !important;
          font-family: 'Aileron' !important;
          font-size: 16px !important;
          color: black !important;
          max-width: 110px;
        }

        .lm_tab:hover {
            box-shadow: 0 0 1px #3d3d3d !important;
        }

        .lm_active {
            box-shadow: 0 0 1px #3d3d3d !important;
            background: #bcc1e5 !important;
        }

        .lm_header {
            height: 50px !important;
            background: #dbdef9;
            overflow-x: scroll !important;
        }

        .lm_close_tab {
            margin-top: 4px !important;
            height: 25px !important;
            width: 25px !important;
        }
        .lm_close_tab:hover {
            background: gray;
            border-radius: 3px;
        }
      `,
            baseStyles,
            theme,
        ];
    }
};
GoldenLayoutRoot = __decorate([
    customElement('golden-layout-root')
], GoldenLayoutRoot);

export { GoldenLayout, GoldenLayoutColumn, GoldenLayoutComponent, GoldenLayoutDragSource, GoldenLayoutRegister, GoldenLayoutRoot, GoldenLayoutRow, GoldenLayoutStack };
//# sourceMappingURL=index.js.map
