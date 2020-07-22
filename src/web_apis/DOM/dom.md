# DOM :

The **Document Object Model (DOM)** connects **web pages** to **scripts** or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually that means JavaScript, although modeling HTML, SVG, or XML documents as objects is not part of the core JavaScript language, as such.

The **DOM** represents a **document** with a **logical tree**. Each **branch** of the tree ends in a **node**, and each **node** contains **objects**. **DOM methods** allow programmatic access to the tree. With them you can change the document's structure, style, or content.

**Nodes** can also have **event handlers** attached to them. Once an **event** is triggered, the event handlers get executed.

# What is the DOM ?

A **Web page** is a **document**. This **document** can be either displayed in the **browser window** or as the **HTML source**. But it is the same document in both cases. The **Document Object Model (DOM)** represents that same document so it can be manipulated. The **DOM** is an **object-oriented representation of the web page**, which can be modified with a scripting language such as JavaScript.

The [W3C DOM](https://dom.spec.whatwg.org/) standards are implemented in most modern browsers.

The following is a brief list of common APIs in web and XML page scripting using the DOM.

> - document.getElementById(id)
> - document.getElementsByTagName(name)
> - document.createElement(name)
> - parentNode.appendChild(node)
> - element.innerHTML
> - element.style.left
> - element.setAttribute()
> - element.getAttribute()
> - element.addEventListener()
> - window.content
> - window.onload
> - window.scrollTo()
