import { LayoutBase } from "./LayoutBase.js";

export class LayoutFullScreen extends LayoutBase {
    static { this.register(this); }

    static get style() {
        return super.style + /*css*/`@layer Layout {
            ${this._selector} {
                width: 100vw;
                height: 100vh;
                display: block;
            }
            ${this._selector} > * {
                width: 100%;
                height: 100%;
            }
        }`;
    }
}
