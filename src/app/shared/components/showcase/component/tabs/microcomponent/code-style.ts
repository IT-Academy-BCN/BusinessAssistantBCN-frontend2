import { Indent } from "./code-enum";

export class StyleCode {

    private static lesser = "&lt;"; // <

    private static greather = "&gt;"; // >

    private static openTag = (text: string): string => `${this.lesser}${text}${this.greather}`;

    private static closeTag = (text: string): string => `${this.lesser}/${text}${this.greather}`;

    private static text(text: string): string {
        return `<span class="color4">${text}</span>`;
    }

    static open(indentTag: Indent, tag: string, indentAttributes: Indent = Indent.INDENT1, ...attributes: [string, string][]) {
        let value: string = "";

        if (indentTag == Indent.NOINDENT) {
            value += `<span class="color1">${this.lesser}${tag}</span>`;
        } else {
            value += `<span class="color1 ${indentTag}">${this.lesser}${tag}</span>`;
        }

        if (attributes.length == 0) {
            return `<span class="color1">${StyleCode.openTag(tag)}</span>`;
        }

        if (attributes.length == 1) {
            value += ` <span class="color2">${attributes[0][0]}=</span>`;
            value += `<span class="color3">${attributes[0][1]}</span>`;
            value += `<span class="color1">${this.greather}</span>`;
        } else if (attributes.length > 1) {
            attributes.forEach((item) => {
                value += `<div>`;
                value += `<span class="color2 ${indentAttributes}">${item[0]}=</span>`;
                value += `<span class="color3">${item[1]}</span>`;
                value += `</div>`;
            });
            value += `<span class="color1 ${indentTag}">${this.greather}</span>`;
        }
        return value;
    }

    static close(indent: Indent, tag: string): string {
        if (indent === Indent.NOINDENT)
            return `<span class="color1">${StyleCode.closeTag(tag)}</span>`;
        else
            return `<span class="color1 ${indent}">${StyleCode.closeTag(tag)}</span>`;
    }

    static sandwich(indent: Indent = Indent.INDENT1, tag: string, innerText: string): string {
        return `<span class="${indent}">${StyleCode.open(Indent.NOINDENT, tag)}${StyleCode.text(innerText)}${StyleCode.close(Indent.NOINDENT, tag)}</span>`;
    }

    static comment = (text: string, isEnd: boolean = false): string => {
        return `<span class="color5">${this.lesser}!-- ${isEnd ? 'END ' : ''}${text.toUpperCase()} --${this.greather}</span>`;
    }

    static copyComment = (text: string, isEnd: boolean = false): string => {
        return `<!-- ` + `${isEnd ? 'END ' : ''}` + `${text.toUpperCase()} -->`;
    };
}