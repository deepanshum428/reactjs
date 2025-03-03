function customRender(reactElement, container) {
  /*
  const newDomElement = document.createElement(reactElement.type);
  newDomElement.innerHTML = reactElement.children;
  newDomElement.setAttribute("href", reactElement.props.href);
  newDomElement.setAttribute("target", reactElement.props.target);
  container.appendChild(newDomElement);
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
