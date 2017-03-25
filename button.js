import { Config } from "./config.js";
import { property } from "./core.js";

class Button {
    constructor() {
        this._caption = "";
        this._caption_dom = null;
        this._dom = null;
        this._color = "#ffffff";
        this._tabIndex = 0;
    }

    render() {
        let caption = document.createElement("span");
        caption.classList.add("caption");
        caption.innerHTML = this._caption;

        let elem = document.createElement("div");
        elem.classList.add("button");
        elem.appendChild(caption);

        this._dom = elem;
        this._caption_dom = caption;

        return this._dom;
    }

    @property("string")
    caption(v) {
        if (v === undefined) {
            return this._caption;
        }

        this._caption = v;
        if (!!this._caption_dom) {
            this._caption_dom.innerHTML = v;
        }

        // for chaining
        return this;
    }

    @property("color")
    color(v) {
        if (v === undefined) {
            return this._color;
        }

        this._color = v;
        if (!!this._dom) {
            this._dom.style.color = v;
        }

        // for chaining
        return this;
    }

    @property("number")
    static tabIndex;

    click(f) {
        this._dom.addEventListener("click", (e) => {
            f.call(this, e);
        });
    }
}

export { Button };
