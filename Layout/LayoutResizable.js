import { LayoutBase } from "./LayoutBase.js";

export class LayoutResizable extends LayoutBase {
    static { this.register(this); }

    static get style() {
        return super.style + /*css*/`@layer Layout {
            ${this._selector} {
                border: 2px dotted black;
                display: block;
                resize: both;
            }
            ${this._selector} > * {
                width: 100%;
                height: 100%;
            }
        }`;
    }
}
