import { LayoutBase } from "./LayoutBase.js";

export class LayoutStack extends LayoutBase {
    static style = super.style + /*css*/`
        :host {
            display: block;
            position: relative;
            height: 100%;
            width: 100%;
        }
        ::slotted(*), slot>* {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;                
        }
    `;
}
customElements.define("layout-stack", LayoutStack);