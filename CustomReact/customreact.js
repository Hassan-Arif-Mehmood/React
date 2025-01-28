function customrender(CustomReact, container) {
var create= document.createElement(CustomReact.type);
create.innerHTML=CustomReact.children;
create.setAttribute("href",CustomReact.props.href);
create.setAttribute("target",CustomReact.props.target);
container.appendChild(create);
console.log(create);


}


var CustomReact = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: "Click me"
};


var customreact=document.querySelector("#root");
customrender(CustomReact,customreact);
