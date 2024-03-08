import { LayoutBase } from "./LayoutBase.js";

export class LayoutVertical extends LayoutBase {
    static style = super.style + /*css*/`
        :host {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        ::slotted(*), slot>* {
            flex: 1;
        }
    `;
}
customElements.define("layout-vertical", LayoutVertical);
