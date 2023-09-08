/*
const h1Element = document.createElement("h1");
const textNote = document.createTextNode("Welcome to Yangon");
h1Element.appendChild(textNote);
const tagCollection = document.getElementsByTagName("body");
const bodyElement = tagCollection[0];
bodyElement.appendChild(h1Element);

// read
const readH1Element =document.getElementsByTagName("h1")[0];
console.log("text before"
,readH1Element.textContent);

//update
readH1Element.textContent ="Welcome to Magway";
console.log("text after",readH1Element.textContent);

//delete
//readH1Element.remove();*/


const myButton = document.getElementById("myButton");

const image= document.getElementsByClassName("girl")[0];
const orignalImageSrc=image.src;
const imageArray=["https://plus.unsplash.com/premium_photo-1668799885590-3946ca5feb9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1670612690964-57d91f7d8447?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1670588761146-2425a98a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1670595441992-19edcb97700c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1670594454637-fa0c1d3225c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60,",
]


let counter=0;
const myFunction=() =>{
    if (counter===5){
        image.src=orignalImageSrc;
        counter=0
        return;
    }
    const imagelink=imageArray[counter];
    image.src=imagelink;
    counter +=1;
console.log("counter value is:",counter );
};

myButton.addEventListener("click", myFunction);

const inputTag= document.getElementsByClassName("form-control")[0];
const orderListTag=document.getElementsByClassName("orderList"){0};
const handleChange=(event)=> {
    const inputValue=event.target.value;
    const listItem=document.createElement("li");
    listItem.append(inputValue);
    orderListTag.append(listItem);
};
inputTag.addEventListener("change",handleChange);