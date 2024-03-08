
export class LayoutBase extends HTMLElement {
    /** component's initial layout */
    static layout = /*html*/`
        <slot name="_empty_"></slot>
        <slot></slot>
    `;

    /** component's initial style */
    static style = /*css*/`
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        :host {
            overflow: hidden;
        }
    `;

    /**
     * whether to use shadow dom or not
     * @type {boolean | ShadowRootMode}
     */
    static shadowMode = true;

    /**
     * component's root
     * @type {this | ShadowRoot}
     */
    $root;

    connectedCallback() {
        const shadowMode = this.constructor.shadowMode;

        const root = this.$root = !shadowMode ? this :
            this.attachShadow({ mode: shadowMode === true ? "open" : shadowMode });
        root.innerHTML = this.constructor.layout || "";

        const style = this.$style = document.createElement("style");
        style.textContent = this.constructor.style;
        root.appendChild(style);
        root.addEventListener("slotchange", this.slotchanged.bind(this));
    }

    slotchanged(event) {
        console.log(this.constructor.name, event, [...event.target.assignedElements()]);
        // const count = event.target.assignedElements();
        // const slots = shadow.querySelectorAll("slot");

    }
}
customElements.define("layout-base", LayoutBase);
