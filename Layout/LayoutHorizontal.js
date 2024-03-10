import { LayoutBase } from "./LayoutBase.js";

export class LayoutHorizontal extends LayoutBase {
    static { this.register(this); }

    static get style() {
        return super.style + /*css*/`@layer Layout {
            ${this._selector} {
                display: flex;
                flex-direction: row;
            }
            ${this._selector} > * {
                flex: 1;
            }
        }`;
    }
}
