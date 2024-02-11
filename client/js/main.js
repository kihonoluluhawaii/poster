
// util function
function getNode(node,context = document){

    if(typeof node !== 'string'){
      throw new Error('getNode 함수의 인수는 문자 타입 이어야 합니다.');
    }
    if(context.nodeType !== 9){
      context = document.querySelector(context);
    }
  
    return context.querySelector(node);
  }

function addClass(node,className){
    if(typeof node === 'string') node = getNode(node);
    if(typeof className !== 'string'){
      throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    }
    node.classList.add(className);
  }
  
function removeClass(node,className){
    
    if(typeof node === 'string') node = getNode(node);
    if(!className) {
      node.className = '';
      return;
    }
    if(typeof className !== 'string'){
      throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    }
    node.classList.remove(className);
  
  }

function setCss(node,prop,value){

    if(typeof node === 'string') node = getNode(node);
    
    if(!(prop in document.body.style)){
      throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
    }
    
    if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.');
  
    node.style[prop] = value;
  }
  

const nav = getNode('.nav')
const visual = getNode('.visual img')
const nickName = getNode(".nickName")
const names = ["EMBER", "WADE", "CLOD", "GALE"]
const namesColor = ["yellow","skyblue","green","pink"]
const body = document.body
const background = [
    "linear-gradient(to bottom,#ff6a00,#720400)",
    "linear-gradient(0deg, rgba(16,0,114,1) 6%, rgba(0,133,255,1) 62%)",
    "linear-gradient(to bottom, #9AD506, #010500)",
    "linear-gradient(to bottom, #CB55F6, #3B0630)"
  ];

function handleSlide(e){
    e.preventDefault();
    const target = e.target.closest("li");
    const list = [...nav.querySelector("ul").children]
    const targetButton = e.target.closest("button")
    if(!targetButton) return;

    const a = e.target.closest("button").querySelector("img")
    const index = target.dataset.index;
    const name = names[index - 1];
    
    list.forEach((li)=> removeClass(li,"is-active"));
    addClass(target, "is-active");
    
    visual.setAttribute("src", a.src)
    visual.setAttribute("alt", data[index -1 ].alt)

    nickName.textContent = name;
    nickName.style.color = namesColor[index - 1];
    body.style.background = background[index - 1];
}

nav.addEventListener("click",handleSlide);



