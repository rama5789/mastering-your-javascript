# DOM :
The __Document Object Model (DOM)__ connects __web pages__ to __scripts__ or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually that means JavaScript, although modeling HTML, SVG, or XML documents as objects is not part of the core JavaScript language, as such.

The __DOM__ represents a __document__ with a __logical tree__. Each __branch__ of the tree ends in a __node__, and each __node__ contains __objects__. __DOM methods__ allow programmatic access to the tree. With them you can change the document's structure, style, or content.

__Nodes__ can also have __event handlers__ attached to them. Once an __event__ is triggered, the event handlers get executed.

# What is the DOM ?
A __Web page__ is a __document__. This __document__ can be either displayed in the __browser window__ or as the __HTML source__. But it is the same document in both cases. The __Document Object Model (DOM)__ represents that same document so it can be manipulated. The __DOM__ is an __object-oriented representation of the web page__, which can be modified with a scripting language such as JavaScript.

The [W3C DOM](https://dom.spec.whatwg.org/) standards are implemented in most modern browsers.

The following is a brief list of common APIs in web and XML page scripting using the DOM.
> * document.getElementById(id)
> * document.getElementsByTagName(name)
> * document.createElement(name)
> * parentNode.appendChild(node)
> * element.innerHTML
> * element.style.left
> * element.setAttribute()
> * element.getAttribute()
> * element.addEventListener()
> * window.content
> * window.onload
> * window.scrollTo()
