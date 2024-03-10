import { LayoutBase } from "./LayoutBase.js";

export class LayoutVertical extends LayoutBase {
    static { this.register(this); }

    static get style() {
        return super.style + /*css*/`@layer Layout {
            ${this._selector} {
                display: flex;
                flex-direction: column;
            }
            ${this._selector} > * {
                flex: 1;
            }
        }`;
    }
}
