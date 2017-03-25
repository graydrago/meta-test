class Editor {
    constructor() {
        this._dom = null;
    }

    render() {
        let editor = document.createElement("div");
        editor.classList.add("editor");

        this._dom = editor;
        return this._dom;
    }

    makePropertyList(object) {
        let meta = object.propertyList;
        let list = document.createElement("div");
        let eventType = "keyup"

        list.classList.add("list");
        

        for (let key in meta) {
            let line = document.createElement("div");
            let name = document.createElement("span");
            let input = document.createElement("input");

            if (meta[key].type === "color") {
                input.type = "color";
                eventType = "input"
            }

            line.classList.add("line")
            name.innerHTML = key;
            input.value = object[key]();

            line.appendChild(name);
            line.appendChild(input);
            list.appendChild(line);

            input.addEventListener(eventType, function(e) {
                object[key](input.value);
            });
        }

        this._dom.innerHTML = "";
        this._dom.appendChild(list);
    }
}

export { Editor };
