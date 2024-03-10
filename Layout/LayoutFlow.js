import { LayoutBase } from "./LayoutBase.js";

export class LayoutFlow extends LayoutBase {
    static { this.register(this); }

    static observedAttributes = ["direction"];

    static get style() {
        return super.style + /*css*/`@layer Layout {
            ${this._selector} {
                display: flex;
                flex-direction: var(--direction, row);
            }
            ${this._selector} > * {
                flex: 1;
            }
        }`;
    }

    set direction(newValue) {
        this.style.setProperty('--direction', newValue == "col" ? "column" : "row");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute %s has changed. %O => %O`, name, oldValue, newValue);
        if (name == 'direction') {
            this.direction = newValue;
        }
    }
}
