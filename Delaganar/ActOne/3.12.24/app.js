import { leftDiv } from "./info.js"
import { rightDiv } from "./img.js"


let container = document.getElementById("container")
const data = {
    title: "Lightfury",
    title2: "Nightfury",
    para: "an engine of change in our story, representing the call of the wild, which is key to Toothless' destiny.",
    para2: "Night Furies are extremely rare creatures. They are very stealthy and intelligent and can become very dangerous if a person was to approach it at a close distance.",
    button: "Contact me",
    button2: "Message me",
    button3: "Facebook",
    button4: "Instagram",
    img: "lightfury.jpg"
}

const {title, title2, para, para2, button, button2, button3, button4, img} = data

container.append(leftDiv(title,title2,para,para2,button,button2,button3,button4))
container.append(rightDiv(img))