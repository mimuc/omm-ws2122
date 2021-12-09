class MyCounter extends HTMLDivElement {

}


(function(window, document, undefined) {
    // Refers to the "importer", which is index.html
    var thatDoc = document;

    // Refers to the "importee", which is src/my-meme.html
    var thisDoc =  (thatDoc._currentScript || thatDoc.currentScript).ownerDocument;

    // Gets content from <template>
    var template = thisDoc.querySelector('template').content;

    // Creates an object based in the HTML Element prototype
    var MyElementProto = Object.create(HTMLElement.prototype);

    // Fires when an instance of the element is created
    MyElementProto.createdCallback = function() {
        // Creates the shadow root
        var shadowRoot = this.createShadowRoot();

        // Adds a template clone into shadow root
        var clone = thatDoc.importNode(template, true);
        shadowRoot.appendChild(clone);

        // // Cache the paragraph and image elements
        // this.captionTopParagraph = shadowRoot.querySelector('p.captionTop');
        // this.captionBottomParagraph = shadowRoot.querySelector('p.captionBottom');
        // this.imageElement = shadowRoot.querySelector('img');
        //
        // // Checks if the "who" attribute has been overwritten
        // if (this.hasAttribute('captionTop')) {
        //     var captionTop = this.getAttribute('captionTop');
        //     this.setCaptionTop(captionTop);
        // }
        // if(this.hasAttribute('captionBottom')) {
        //     var captionBottom = this.getAttribute('captionBottom');
        //     this.setCaptionBottom(captionBottom);
        // }
        // if(this.hasAttribute('memeTemplateUrl')) {
        //     var memeTemplateUrl = this.getAttribute('memeTemplateUrl');
        //     this.setMemeTemplateUrl(memeTemplateUrl);
        // }
    };

    // Sets new value to the attributes
    // MyElementProto.setCaptionTop = function(val) {
    //     this.captionTop = val;
    //     this.captionTopParagraph.textContent = this.captionTop;
    // };
    // MyElementProto.setCaptionBottom = function(val) {
    //     this.captionBottom = val;
    //     this.captionBottomParagraph.textContent = this.captionBottom;
    // };
    // MyElementProto.setMemeTemplateUrl = function(val) {
    //     this.memeTemplateUrl = val;
    //     this.imageElement.src = this.memeTemplateUrl;
    // };

    // Registers <my-world> in the main document
    window.MyElement = thatDoc.registerElement('my-counter', {
        prototype: MyElementProto
    });
})(window, document);