import { LayoutBase } from "./LayoutBase.js";

export class LayoutResizable extends LayoutBase {
    static style = super.style + /*css*/`
        :host {
            border: 2px dotted black;
            display: block;
            resize: both;
        }
    `;
}
customElements.define("layout-resizable", LayoutResizable);