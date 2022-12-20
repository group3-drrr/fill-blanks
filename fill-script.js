


const data = {
  
  q1: {
    1: "acknowledge",
    2: "souls",
    3: "justice",
    4: "interdimensional",
    5: "possible",
    6: "mind",
    7: "Eversowhll",
    8: "Dimagiba",
    9: "Bugna"
  },
  q2: {
  1: "stuck",
  2: "repetitive",
  3: "Eat",
  4: "good",
  5: "personal",
  6: "development"
  },
  q3: {
    1: "you're",
    2: "your",
    3: "q",
    4: "capslock",
    5: "2"
  },
  q4: {
    1: "Microsoft",
    2: "blank",
    3: "mailings",
    4: "start",
    5: "b",
    6: "options",
    7: "recipients",
    8: "save",
    9: "write",
    10: "field",
    11: "preview",
    12: "complete"
  },
  q5: {
    1: "sorry",
      2: "sorry", 
        3: "sorry",
      4: "sorry",
        5: "sorry"
  },
  q6: {
    1: "r^2",
    2: "x-h",
    3: "x",
    4: "a^2",
    5: "b^2",
  }, 
  q7: {
   1: "kunin",
2: "kanta",
3: "umiikot",
4: "tangina",
5: "natatanga"
  }
};

const backgrounds = {
  
  eber: "eber.jpg",
  kyle: "kyle.jpeg",
  pogi: "pogi.jpeg",
  mailmerge: "mail.png",
  sorry: "sorry.png",
  precal: "conic.jpeg",
  sheesh: "sheesh.jpeg"
}

const messages = [
  `Isa pang script mula sa fliptop niya: <br> "Ako, ipaglalaban ko ang karapatan ng mamamayan para sa kapayapaan ibalik natin ang nakasanayan, Ako'y bayaning handang mag-alay ng buhay para umukit lang ng kasaysayan!"`,
  "portfolio ni kyle: <br> E-PORTFOLIO_11-STEM-ARYABHATA_AVILA, KYLE JUSTIN R.",
  "pogi may nag text sayo. pogi may nag text sayo. pogi may nag text sayo. pogi may nag text sayo. pogi may nag text sayo.",
  "galing ah. 99 kana sa emptech niyan nasagutan mo lahat eh angas mo boi i love you <3.",
    "cenxa kana ganto lang ako, sorry, sorry, sorry, sorry, sorry.",
     "can we go back to the conic sections? miss na kita hahahahhahahahaha, hi miss.",
     "sheeesh. anyway, click mo yung button para makita mo na ang aking kahihiyan sa aking buhay :("
  ]


const audio = document.querySelector("#aud")
  
  
  


$(document).ready(function() {
  
  
 // console.log(backgrounds['eber'])
 
 let next = "next";
 
 
 /*********** the typewriter **********/
   
  
  
 
let yy = 0;
  let z = 0;
  let xd = 0;
  
 
  let cest = "";
  let newDiv;
  
  function type() {
    
    if (yy < messages[z].length) {
     cest += messages[z].charAt(yy)
     newDiv.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check check"></i>`;
     newDiv.innerHTML += cest;
      yy++;
      setTimeout(type, 100)
    } else {
     yy = 0;
     cest = "";
     $(".check").css("color", "green")
      audio.pause();
   $(newDiv).css("color", "white")
   .css("background", "url(images-1/galaxy.jpeg)")
 
     z++;
    }
  }
  
  
 
  
function generateMsg() {
  newDiv = document.createElement("div");
  newDiv.classList.add("shabu")
  
 type();
/*
 newDiv.addEventListener("click", () => {
 
    alert("jj")
   
    
  })
 */
 

 
 
$(".question").eq(xd).after(newDiv)

xd++;
  }


  
  /********* -------- ***********/
  

let asdf = ["a", "b", "c"]

let empty = [];
let empty2 = []

let test;
let x = 0;


 function addOne() {
   
   test = Object.values(data[Object.keys(data)[x]]);
   
   return test;
 }

addOne();




let que = test;

let qq = [];



function xy() {
  que = que.concat(test);
}




let sss = Object.keys(data).length;
let thing = Object.values(data[Object.keys(data)[sss -1]])
let includesOrNot = thing.every(i => test.includes(i))




function asd() {
  empty = [];
  $(this).remove();
}


const lengthArr = [];
 
 for (let xy = 0; xy < sss; xy++) {
 const ar = Object.values(data[Object.keys(data)[xy]])
 
 for (let xx = 0; xx < ar.length; xx++) {
   
   
   
  lengthArr.push(ar[xx].length)
   
   
   
 }

}

//console.log(lengthArr)
 
 
 for(let x = 0; x < $(".input").length; x++){
   
   $(".input").eq(x).css("width", lengthArr[x] + "ch")
   
 }
 
   
let checker;




let y = 0


const show = $(".question").eq(y)
  $(".question").hide ();

  
    function showAll() {
           
     y++;

$(".question").eq(y).show(5000);
//$(".question").eq(y).children(".input").first().focus()

   }
   
   
   
// reminder

//  $(".question").show();

    
   
   $("#button").click(function() {


        $(".question").eq(y).show(5000);
   
   $(".background-overlay").css("opacity", "0")
   .css("visibility", "hidden")
//
   
     $(this).css("animation", "glow 8s linear infinite").css("top", "-20%")
      
     $('body').css("background", "linear-gradient(45deg, #C7F5FE 10%, #C7F5FE 40%, #FCC8F8 40%, #FCC8F8 60%, #EAB4F8 60%, #EAB4F8 65%, #F3F798 65%, #F3F798 90%)")
})
   
   $(".question").each(function() {
     
     $(this).click(function() {
       
   //    console.log($(this).children(".input").index())
     })
     
   
   })
   
   
  // $(this).parent().next().children(".input").first().focus();   


 /* $(".question").each(function() {
  
  $(this).keyup(function() {
    
    if ((empty2.length === que.length) && !(thing.every(i => test.includes(i)))) {
       // wait lang   $(this).fadeOut(300, asd());
       $(this).css("background", "lightgreen")
   
          showAll();
            
     $(this).next().children(".input").first().focus();   
         // alert("a")
        
      

    } else if(que.length == empty2.length) {
     // alert("er")
  // test $(this).fadeOut(300, asd());
  x++;
      addOne();
            showAll();
                xx();
                  $(this).next().children(".input").first().focus();   
          //  alert("aaa")
            
      } else if((que.length == empty2.length) && (thing.every(i => test.includes(i)))) {
        $(".questions-container").css("background", "red")
        $(".question").show()
        
        } else {
     // alert('err')
     
    }
    
    
  })
  }); */
  
  
  



  $('.input').each(function() {
    const each = $(this).attr("data-attr");
    
const xd = Object.values(data)


  
     $(this).click(function() {
       
     //  console.log($(this).index())
       
       
     })
  


        $(this).keyup(function() {
      
      
      
      
      
      
      
      
 
      
   //  console.log($(this).index())
    // console.log($(this).next().index());
   //  console.log($(this).next().is("input"))
      
      
     checker = $(this).prop("value").toLowerCase().trim() == test[$(this).attr("data-attr") - 1].toLowerCase()

//console.log(checker)
    
      
      if(checker) {
        empty.push($(this).prop("value"))
        empty2.push($(this).prop("value"))
       
           $(this).prop("value", test[$(this).attr("data-attr") - 1])
           $(this).css("text-align", "center")
           
        if(empty2.length === que.length) {
          audio.play()
          if (thing.every(i => test.includes(i))) {
            x = x;
           // alert("eow")
           next = "claim your reward"
           generateMsg();
           nextBtn();
           
           
               $("#next").css("padding", "15px 30px").css("visibility", "visible")
        .css("opacity", "1")
        .css("left", "0")
           
           
           
           
           
           
          // alert("eow")
           
      $(this).parent().children(".input").css("color", "white")
   
     $(this).parent().css("color", "white")
          
        $(this).parent().parent()
   .css("background", `url(images-1/${backgrounds[$(this).parent().parent().attr("data-image")]})`)
   .css("transition", "1s all")
   .css("color", "white")
   .css("background-size", "cover")
   .css("background-position", "center")
   .css("background-repeat", "no-repeat")
    .addClass("dark-gradient")
           
           
           
     //   $(".input").css("background", "white")
       //   $(".input").parent().css("background", "white")
          } else {
          x++;
          
      // $(".question").eq(y).after(newshit);
         // typeWriter();
          addOne();
          
        $("#next").css("padding", "15px 30px").css("visibility", "visible")
        .css("opacity", "1")
        .css("left", "0")
        
        
          generateMsg();
          nextBtn();
     

$(this).parent().children(".input").css("color", "white")

   $(this).parent().parent()
   .css("background-image", `url("images-1/${backgrounds[$(this).parent().parent().attr("data-image")]}")`)
   .addClass("dark-gradient")
     .css("background-size", "cover")
   .css("background-position", "center")
   .css("background-repeat", "no-repeat")
   .css("color", "white")
     
   
  
     
     $(this).parent().css("color", "white")
   .css("color", "white")
 
     
         xy()
       //  alert("a")
  //  $(this).parent().next().children(".input").first().focus();   
         //asd()
          }
          
          
        } /*else if (que.length == test.length) {
          alert("s")
          
          }*/ else {
          
        }

        $(this).prop('disabled', true)
     
       if($(this).closest(".input").next().index() == $(this).index() + 1 && !($(this).next().is("input"))) {
     $(this).next().next().focus()
     
          
       } else {
$(this).next().focus();
       }
       
       
       
       
     
      } else {
   
      }
    })
  }) 






let www = 0;
let whatever = "";



function nextBtn() {
  
  if (www < next.length) {
    
  whatever += next.charAt(www);
  www++;
  $("#next").text(whatever)
  setTimeout(nextBtn, 500)
  } else {
    www = 0;
    
  }
}

    


$("#next").click(function() {
  if (next === "claim your reward") {
    $(".video").css("width", "80vw")
    .css("border", "8px solid black")
  } else {
    showAll();
  }
  
  $(this).css("padding", "0")
  .css("visibility", "visible")
  .css("opacity", "0")
  .css("left", "-50%")
  kk = whatever.length;
   removeBtn();
 // $(this).text("wow")
  
})


let tite = "";
let kk;

function removeBtn() {
  
  
  
 if (kk > 0) {
  setTimeout(removeBtn, 500)
  tite = whatever.slice(0, (kk - 1));
  $("#next").text(tite)
  kk--;
  
 } else {
   whatever = "";
   
 }
}


  
  
  
$(document).click(function() {
  
  
 //  console.log(whatever.length)
 // console.log(thing.every(i => test.includes(i)) && x !== 1)
 // )
 //console.log(empty)
// 
// console.log(que)
// console.log(x)
//  console.log(x)
//console.log(empty2.length)
//console.log(que)
//console.log(empty2)
//console.log($(this).index())
//console.log(que.length)
//console.log(test.length)/
//console.log(thing.every(i => test.includes(i)))
//console.log(test)
//console.log(thing)
//console.log(cock)
//$(this).css("background", "lightgreen")
//console.log($(".kahitano").length)
//console.log(newshit.innerHTML)
//console.log($(".questions-container").text())
});


});

  


