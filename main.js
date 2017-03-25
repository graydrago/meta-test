import { Button } from "./button.js";
import { Editor } from "./editor.js";

window.addEventListener("load", () => {
    let button1 = new Button();
    let button2 = new Button();
    let editor = new Editor();

    button1.caption("Ok");
    button2.caption("Cancel");

    document.body.appendChild(button1.render());
    document.body.appendChild(button2.render());
    document.body.appendChild(editor.render());

    button1.click(function() {
        editor.makePropertyList(button1);
    });
    button2.click(function() {
        editor.makePropertyList(button2);
    });
})

