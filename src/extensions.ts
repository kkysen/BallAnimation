declare interface HTMLElement {
    
    appendNewElement<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K];
    
    appendNewElement(tagName: string): HTMLElement;
    
    appendDiv(): HTMLDivElement;
    
    appendButton(buttonText: string): HTMLButtonElement;
    
    appendBr(): HTMLBRElement;
    
}

HTMLElement.prototype.appendNewElement = function(tagName: string): HTMLElement {
    return this.appendChild(document.createElement(tagName));
};

HTMLElement.prototype.appendDiv = function(): HTMLDivElement {
    return this.appendNewElement("div");
};

HTMLElement.prototype.appendButton = function(buttonText: string): HTMLButtonElement {
    const button = this.appendNewElement("button");
    button.innerText = buttonText;
    return button;
};

HTMLElement.prototype.appendBr = function(): HTMLBRElement {
    return this.appendNewElement("br");
};