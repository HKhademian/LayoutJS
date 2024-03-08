import { LayoutBase } from "./LayoutBase.js";

export class LayoutFullScreen extends LayoutBase {
    static style = super.style + /*css*/`
        :host {
            width: 100vw;
            height: 100vh;
            display: block;
        }
    `;
}
customElements.define("layout-full-screen", LayoutFullScreen);