import { LayoutBase } from "./LayoutBase.js";

export class LayoutHorizontal extends LayoutBase {
    static style = super.style + /*css*/`
        :host {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
        }
        ::slotted(*) {
            flex: 1;
        }
    `;
}
customElements.define("layout-horizontal", LayoutHorizontal);
