
function customRender(rectElement, container){
    /*const domElement = document.createElement
    (rectElement.type)
    domElement.innerHTML = rectElement.chidren
    domElement.setAttribute('href', rectElement.props.href)
    domElement.setAttribute('target',rectElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(rectElement.type)
    domElement.innerHTML = rectElement.chidren
    for(const prop in rectElement.props){
        if(prop == 'chidren') continue;

        domElement.setAttribute(prop, rectElement.props[prop])
    }

    container.appendChild(domElement)
}


// Tree graph of react
const rectElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    chidren:'Click me to visit google'
}

const maincontainer = document.querySelector("#root")

customRender(rectElement, maincontainer)


