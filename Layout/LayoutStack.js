import { LayoutBase } from "./LayoutBase.js";

export class LayoutStack extends LayoutBase {
    static { this.register(this); }

    static get style() {
        return super.style + /*css*/`@layer Layout {
            ${this._selector} {
                display: block;
                position: relative;
            }
            ${this._selector} > * {
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;                
            }
        }`;
    }
}
