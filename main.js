
// let myAdmin=["Ahmed","Osama","Sayed","Stop","Samera"]
// let myEmployees=["Agmad","Samah","Ammer","Omar","Othman","Amany","Samia"]

// document.write(`<div> We have X Admins</div>`);
// let count=3
// document.write(`<div> We have ${count} Admins</div>`);
// document.write(`<hr>`);

// for(let i=0;i<count;i++){
//     document.write(`<div>`)
//     document.write(`The Admin for Team ${i+1} Is ${myAdmin[i]}`)
//     document.write(`<br>`)
//     document.write(`<h2> Team Members: </h2>`)

//     let k=1;
//     for(let j=0;j<myEmployees.length;j++){
        
//         if(myAdmin[i].charAt(0)==myEmployees[j].charAt(0)){
//     document.write(`<br>`)
//     document.write(`- ${k} ${myEmployees[j]}`);
//     document.write(`<br>`)

//     k++;
//         }
//     }
    
//     document.write(`</div>`)
//     document.write(`<hr>`)

// }
// // console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"]);
// // console.group("Group1");
// // console.log("Message One")
// // console.log("Message Two")
// //     console.group("Child Group");
// //     console.log("Message One")
// //     console.log("Message Two")
// //         console.group("Grand Child Group");
// //         console.log("Message One")
// //         console.log("Message Two")
// //         console.groupEnd()
// //     console.groupEnd()
// // console.groupEnd()

// // console.group("Group2");
// // console.log("Message One")
// // console.log("Message Two")
// // console.groupEnd()
// let titleElzero="Elzero",descElzero="Elzero Web School",DateForToDay="1/10";
// let markup=`
//     <div class="card">
//         <div class="child">
//         <h2>${titleElzero}</h2>
//         <p>${descElzero}</p>
//         <span>${DateForToDay}</span>
//         </div>
//     </div>
// `;

// document.write(markup.repeat(4))

// // console.log(-"+100"-"200")
// // let a=10;
// // let b="20";
// // let c=80;
// // //          11  +   20  +   80   -  11= 100
// // console.log(++a + +b++ + +c++ - +a++);
// // //          13   -21     81  -12 +13   =60
// // console.log(++a + -b + +c++ - -a++ + +a);

// //     //      80  +21 + 12*20 - 21*12 + 13 - 1  
// // console.log(--c + +b + --a * +b++ - +b * a + --a - +true);


// let b=2_00.5;
// let c=1e2;
// let d=2.4;
// let a="Elzero Web School";
// // console.log(Math.trunc(Math.min(a,b,c,d)));/

// // console.log(Math.pow(a,Math.trunc(d)));
// // console.log(Math.ceil(Math.floor(b)/Math.ceil(d)));


// // console.log(a.charAt(2).toUpperCase()+a.slice(3,6));

// // console.log(a.charAt(13).toUpperCase().repeat(8))

// // console.log(a.split(" ",1))

// // console.log(a.substr(0,6)+a.substr(10,16));

// // console.log(a.charAt(0).toLowerCase()+a.substring(1,a.length-1).toUpperCase()+a.charAt(a.length-1).toLowerCase())

// // let TheName="Mona";
// // let TheGender="Male";
// // let TheAge=30;

// // TheGender=="Male"?console.log("Mr"):console.log("Mrs");

// // let price;

// // console.log(`The Price is ${price??200}`)

// // let w=10;

// // w<10?console.log(10):(w>=10 && w<=40)?console.log("10 TO 40"):w>40?console.log("> 40"):console.log("Unknown");

// // let st="Elzero Web School";

// // if((st.length*2).toString()==="34"){console.log("Good")};


// // if(""==="34"){console.log("1Good")}

// // if(st[st.indexOf("W")].toLowerCase()==="w"){console.log("2Good")}

// // if((typeof st.length).toString()==="number"){console.log("3Good")}

// // if((typeof st.length).toString()!=="string"){console.log("4Good")}

// // if(st.substring(0,6)+st.substring(0,6)==="ElzeroElzero"){console.log("5Good")}

// // let job="Support",salary=0;

// // switch(job){
// //     case "Manager":
// //         salary=8000;
// //         break;
// //     case "IT":
// //     case "Support":
// //         salary=6000;
// //         break;
// //     case "Developer":
// //     case"Designer":
// //         salary=7000;
// //         break;
// //     default:
// //         salary=4000;
// //         break;

// // }
// // let Holiday=2,moeny=0;

// // if(Holiday==0){
// //     moeny=5000;
// //     console.log(`My Moeny is ${moeny}`);

// // }else if(Holiday==1||Holiday==2){
// //     moeny=3000;
// //     console.log(`My Moeny is ${moeny}`)
// // }else {
// //     moeny=2000;
// //     console.log(`My Moeny is ${moeny}`)
// // }


// // Array Challenge

// let zero=0,counter=3,my=["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];

// my=my.slice(zero,++counter).reverse();
// console.log(my)
// my=my.slice(++zero,--counter)
// console.log(my);
// my=my[0].slice(--zero,--counter)+my[1].slice(counter)
// console.log(my)
// my=my.slice(++zero + ++counter);
// console.log(my[0]+my[1].toUpperCase())

// my=["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];
// let Products=["Keyboard","Mouse","Pen","Pad","Monitor","iPhone"];
// let colors=["Red","Green","Blue"];
// let ShowCount=3;
// document.write(`<h1>Show ${ShowCount} Products</h1>`)
// for(let i=0;i<ShowCount;i++){
// document.write("<div>")
// document.write(`<h3> ${i+1} ${Products[i]}`)
// for(let j=0;j<colors.length;j++){
//     document.write(`<p> ${colors[j] } </p>`)
// }
// document.write(`${colors.join(" | ")}`)
// document.write("</div>")

// }



// // function lessons

// function sayHello(UserName="Unknown",Age="Unknown"){
//     return ` Hello ${UserName} Your Age is ${ Age} `;
// }

// function AddNumber(...Numbers){
//     let result=0;
//     for(let i=0;i<Numbers.length;i++)
//     {
//         result+=Numbers[i];
//     }
//     return result;
// }
// console.log(AddNumber(100,200,300,400));

// function ShowInfo(us="Un",ag="Un",rt=0,Show="Yes",...sk){
//    document.write(`<div>`)
//    document.write(`<h2>Welcome, ${us} </h2>`);
//    document.write(`<h2>Age, ${ag} </h2>`);
//    document.write(`<h2>Hour Rate  $${rt} </h2>`);
//     if(Show==="Yes"){
//         if(sk.length>0){
//             document.write(`<p> Skills : ${sk.join(" | ")} </p>`);
//         }
//         else{
//             document.write(`<p> Skills : ${sk.join(" | ")} </p>`);
//         }
//     }
//     else{
//         document.write(`<p> Skills : Skills is Hidden </p>`);

//     }
//    document.write(`</div>`)
// }


// // function ShowDetails(a,b,c){
// //     let age,name,status;

// //     document.write(`<div>`);
// //     (typeof a==="string")?name=a: (typeof a==="number")?age=a:status=a;
// //     (typeof b==="string")?name=b: (typeof b==="number")?age=b:status=b;
// //     (typeof c==="string")?name=c: (typeof c==="number")?age=c:status=c;
    

// //     document.write(`<h2> Hello ${name}, Your Age ${age}, ${ status==true?"You Are Avilable For Hire":"You Are not Avilable For Hire</h2>"}`)
// //     document.write(`</div>`);

// // }
// // ShowDetails("Osama",38,true);
// // ShowDetails(38,"Osama",true);
// // ShowDetails(true,38,"Osama");
// // ShowDetails(false,"Osama",38);

// function sayHello(){
//     console.log("Hello Abdullah");
// }
// let Caculator=function(n1,n2){return n1+n2;}
// setTimeout(function(){
//     console.log("Good")
// },2000)

// let AddTwoNumebrs= (n1,n2) => n1+n2;

// console.log(AddTwoNumebrs(10,20))

// var w=1;
// let g=2;

//  if(10===10){
//     let g=5;
// }

// console.log(`g = ${g}`);


// let names=(...names)=>`String [${names.join("],[")}] => Done`;
// console.log(names("Osama","Mohamed","Ali","Ibrahim"));


// let MyNumbers=[20,50,10,60];

// let calc=(one,two,...nums)=>(one * (two+ +nums));

// console.log(calc(10,MyNumbers.length,MyNumbers.length));//80

// let myNums=[1,2,3,4,5,6];
// let newArray=[];

// let AddNumbers=myNums.map((el)=> el+el);
// let EvenNumbers=myNums.filter((e)=>(e%2==0)); 

// console.log(EvenNumbers);

// console.log(AddNumbers)

// let swappingCases="elZERo";
// let sw=swappingCases.split("").map(function(e){
//     return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase();
// }).join("");
// console.log(sw);

// let number="Elz123er40";

// let IngoreNumbers=number.split("").map(function(e){
//     return (isNaN(e))?e:""; 
// }).join("");
// console.log(IngoreNumbers); 

// let mix="A13BS2ZX";
// let mixNumbersOnly=mix.split("").filter(e=> ! isNaN(parseInt(e))).map((e)=> e*e);
// console.log(mixNumbersOnly);

// let n=[19,21,22,38];

// let AddN=n.reduce(function(acc,current,i,arr){
//     console.log(`Acc => ${acc}`);
//     return acc+current
// });

// console.log(AddN);

// let removeChars=["E","@","@","L","L","Z","@","@","E","R","@","O"];

// let FinalString=removeChars.filter(function (e){
//     return !e.startsWith("@");
// }).reduce(function(acc,current){
//     return acc+current});
// console.log(FinalString);

// let myString="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let ExtractWord=myString.split(",").filter((e)=>
//      isNaN(e)?e:""
// ).map(function(e){
//     e.length>1?e=e[0]:"";
//     return e.replace("_"," ");
// }).reduce(function(acc,current,i,arr){
//         if(current==arr[arr.length-1]){
//         current="";
//         }
//         return acc+current;
// },);



// let myVar="country of";
// let User={
//     "country of":"Saudi Arabia",
//     Id:201968470,
//     name:"Abdullah",
//     sayHi:function(){
//         return `Hi`;
//     },
//     courses:{
//         ICS321:"B+",
//         ICS343:"B+",
//         instructor:{
//             AlJasser:"SWE316",
//             Mustafa:"ICS343"
//         }
//     }

// }

// let user={
//     age:20,
//     doubleAge:function(){
//         return this.age*2;
//     },

// }


// let CopyObj=Object.create(user);
// CopyObj.age=50;
// console.log(CopyObj.doubleAge());



// let FinalObject=Object.assign({},user,User);

// let getElement=document.getElementById("my-div");
// let getElements=document.getElementsByTagName("p");
// let myClass=document.getElementsByClassName("my-span")
// let myQuery=document.querySelectorAll(".my-span")


// console.log(document.forms[0][0].hasAttribute("name"));

// if(document.forms[0][0].hasAttribute("name")){
//     console.log("successful");
// }else{
//     console.log("Not Found");
// }



// this code will check if the inputs are valid or not
// document.forms[0].onclick=function(event){
//     let UserValid=false,AgeValid=false;


//     UserValid=UserInput.value.length<=10? true:false;//User should be less than 10
//     AgeValid=AgeInput.value==""? false:true; // Age should not be empty 0;


//     if(UserValid==false||AgeValid==false){event.preventDefault();}
// }




// //DOM challenge


// //header
// let header=document.createElement("header");
// header.className="website-head";

// let Logo=document.createElement("span");
// Logo.className="logo";
// let menu=document.createElement("ul");
// menu.className="menu";
// menu.title="Website Logo";
// let TextElzero=document.createTextNode("Elzero");
// let HomeMenu=document.createElement("li");
// HomeMenu.appendChild(document.createTextNode("Home"));
// let AboutMenu=document.createElement("li");
// AboutMenu.appendChild(document.createTextNode("About"));
// let ServiceMenu=document.createElement("li");
// ServiceMenu.appendChild(document.createTextNode("Service"));
// let ContactMenu=document.createElement("li");
// ContactMenu.appendChild(document.createTextNode("Contact"));


// menu.append(HomeMenu);
// menu.append(ServiceMenu);
// menu.append(AboutMenu);
// menu.append(ContactMenu); 


// Logo.appendChild(TextElzero);
// header.appendChild(Logo);
// header.appendChild(menu);


// Logo.style.cssText='color: green;font-family: sans-serif;font-weight: bold;opacity: 0.9;font-size:26px';
// header.style.cssText='display:flex; padding:5px; background-color:rgb(255,255,255); justify-content:space-between;';
// menu.style.cssText='display:flex;padding:0px;margin:0;list-style:none;font-size:10px;align-items:center;justify-content:space-between;color:gray;';
// ContactMenu.style.cssText='padding:2px';
// ServiceMenu.style.cssText='padding:2px';
// AboutMenu.style.cssText='padding:2px';
// HomeMenu.style.cssText='padding:2px';



// document.body.appendChild(header);


// // content 

// let content=document.createElement("div");
// content.className="content";
// content.style.cssText="display:flex;padding:20px;background-color:gray;flex-wrap:wrap; justify-content:center; gap:20px;min-height:calc(100vh-142px);box-sizing:border-box;flex-basis:33.333333%;";

// for(let i=1;i<16;i++){
//     let product=document.createElement("div");
// product.className="product";
// let WordProduct=document.createTextNode("Product");
// let Span=document.createElement("span");
// Span.style.cssText="color:black; font-size:40px; color:black;font-weight:normal;marging-top:10px;";
// product.style.cssText="display:flex;width: 27%;flex-direction: column;flex:column;font-size:10px; padding:20px;background-color:rgb(255,255,255);border:1px solid rgb(221,221,221);box-sizing:border-box;text-align:center; color: rgb(136,136,136); border-radius: 6px;list-style: none";
//     Span.appendChild(document.createTextNode(`${i}`));
//     product.appendChild(Span);
//     product.appendChild(WordProduct);
//     content.appendChild(product);
// }

// document.body.appendChild(content);


// let footer=document.createElement("footer");
// let FooterWord=document.createTextNode("Copyright 2024");
// footer.className="footer";
// footer.style.cssText="background-color:rgb(35,169,110); font-size:26px; text-align:center; padding:20px; color: rgb(255,255,255);";
// footer.appendChild(FooterWord);
// document.body.appendChild(footer);



// create an Element





// let task=document.createElement("div");
// task.appendChild(document.createTextNode("Course 10"));
// task.className="task";
// let BtnDelete=document.createElement("button");
// BtnDelete.appendChild(document.createTextNode("Delete"));
// task.appendChild(BtnDelete);
// divForTask.appendChild(task);

// let task2=document.createElement("div");
// task2.appendChild(document.createTextNode("Course 10"));
// task2.title="task";
// let BtnDelete2=document.createElement("button");
// BtnDelete2.appendChild(document.createTextNode("Delete"));
// task2.appendChild(BtnDelete2);
// divForTask.appendChild(task2);


// BtnDelete.style.cssText="border-radius: 4px;border: none;background: red;padding: 4px;font-size: 10px;color: white;";
// BtnDelete2.style.cssText="border-radius: 4px;border: none;background: red;padding: 4px;font-size: 10px;color: white;";

// task2.style.cssText="display: flex;background-color: white;justify-content: space-between;padding: 5px;";

// window.localStorage.clear()



    // if(window.localStorage.getItem("Tasks")){
    //     tasksList=tasksList.concat(JSON.parse(window.localStorage.Tasks));
    //     tasksList.forEach(e => {
    //         // AddTaskToArray(e["title"],e[id]);
    //     });
    // }

//     let divForTask=document.querySelector(".tasks");
//     tasksList=[];

//     if(window.localStorage.getItem("tasks")){
//         tasksList=JSON.parse(window.localStorage.getItem("tasks"));
      
//     }
//     GetTasksFromLocalStorage();

//     function AddTaskToArray(To_Do){
//         const task={
//             id:Date.now(),
//             title:To_Do,
//             completed:false,
//         }
//         tasksList.push(task);
//         AddElementToPage(tasksList);
//         AddTasksToLocalStorage(tasksList);
      
//     }
    
// function AddElementToPage(tasksList){
//     divForTask.innerHTML="";
//     tasksList.forEach((task) => {
//         let div=document.createElement("div");
//         div.className="task";
//         div.setAttribute("data-id",task.id);
//         div.appendChild(document.createTextNode(task.title));

//         let span=document.createElement("span");
//         span.className="DeleteTask";
//         span.appendChild(document.createTextNode("Delete"));

//         div.appendChild(span);
//         divForTask.appendChild(div);
//     });
//     }


//    function AddTasksToLocalStorage(tasklist){
//     window.localStorage.setItem("tasks",JSON.stringify(tasklist));
    
//    }
//    function GetTasksFromLocalStorage(){
//     data=(window.localStorage.getItem("tasks"));
//     if(data){
//        let task=JSON.parse(data);
//         AddElementToPage(task);
//     }
//    }

// document.querySelector(".add").addEventListener("click",function(e){

// let input= document.querySelector(".input");
//     if( input.value!=""){
//         AddTaskToArray(input.value);
//           input.value= ""; 
//     }


// })


// divForTask.addEventListener("click",function(e){
//     if(e.target.classList.contains("DeleteTask")){
//        e.target.parentElement.remove(); 
//        DeleteTaskWith(e.target.parentElement.getAttribute("data-id"));
//     }
// })



// function DeleteTaskWith(data_id){
//     tasksList=tasksList.filter((task)=>task.id!=data_id)
//         AddTasksToLocalStorage(tasksList);
    
// }

ArrayOfTasks=[];
let divForTask=document.querySelector(".tasks");
let addTasks=document.querySelector(".add");
let input=document.querySelector(".input");


GetTasksFromLocalStorage();


//Here We will Add The Tasks
addTasks.addEventListener("click",(e)=>{
    if(input.value){

    const task={
        id:Date.now(),
        title:input.value,
    }
    // make the input feild empty
    input.value="";

    //make the addition to List
    ArrayOfTasks.push(task);
    AddElementToPage(ArrayOfTasks);
    AddElementToLocalStorage(ArrayOfTasks);
}

})

divForTask.addEventListener("click",(e)=>{
    if(e.target.classList.contains("DeleteTask")){
        e.target.parentElement.remove();
        DeleteTaskWithId(e.target.parentElement.getAttribute("data-id"));
    }
})

function AddElementToPage(ArrayOfTasks){
    divForTask.innerHTML="";
    ArrayOfTasks.forEach(task => {
                let div=document.createElement("div");
                div.className="task";
                div.setAttribute("data-id",task.id);
                div.appendChild(document.createTextNode(task.title));
        
                let span=document.createElement("span");
                span.className="DeleteTask";
                span.appendChild(document.createTextNode("Delete"));
        
                div.appendChild(span);
                divForTask.appendChild(div);
            });
    
}

function AddElementToLocalStorage(ArrayOfTasks){
    window.localStorage.setItem("tasks",JSON.stringify(ArrayOfTasks));
}

function GetTasksFromLocalStorage(){
    data=JSON.parse(window.localStorage.getItem("tasks"));
    if(data){
        ArrayOfTasks=data;
        AddElementToPage(ArrayOfTasks)
    }
}
function DeleteTaskWithId(id){
    ArrayOfTasks=ArrayOfTasks.filter((task)=>task.id!=id);
    AddElementToLocalStorage(ArrayOfTasks);
}


