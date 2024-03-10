import { camelToKebab } from "../Utility/Case.js";

export class LayoutBase extends HTMLElement {
    static { this.register(this); }

    static get _className() { return this.name; };
    static get _elementName() { return camelToKebab(this._className); };
    static get _selector() { return camelToKebab(this._className); };

    static register(constructor) {
        customElements.define(constructor._elementName, constructor);
        const _elementName = constructor._elementName;
        const style = constructor.style;
        const styleElement =
            // STEP1: first check the cache
            constructor.$styleElement ||
            // STEP2: check if it already exists
            document.querySelector(`style[id="${_elementName}"]`) ||
            // STEP3: create and cache the style element
            (() => {
                const element = constructor.$styleElement = document.createElement("style");
                element.id = _elementName;
                document.head.append(element);
                return element;
            })();
        styleElement.textContent = style;
    }

    /**
     * component's initial layout
     */
    static layout = /*html*/``;

    /**
     * component's initial style
     */
    static get style() {
        return /*css*/`@layer Layout{
            ${this._selector}, ${this._selector} * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                overflow: hidden;
            }
        }`;
    }

    /**
     * component's style container
     * @type {HTMLStyleElement}
     */
    static $styleElement;

    /**
     * component's root
     * @type {this}
     */
    $root;

    connectedCallback() {
        const root = this.root = this;
        root.innerHTML += this.constructor.layout || "";

    }
}
