console.log("ellow, ellow");
var domDiv = document.getElementById("holder");
var inputArea = document.getElementById("input-text");

var counter = 1;

var peopleObjects = [

    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan:
            {
            birth: 1747,
            death: 1797
            }
        },


    {
        title: "Actor-Comedian",
        name: "Steve Carell",
        bio: "Info goes here.",
        image: "https://www.randomlists.com/img/people/steve_carell.jpg",
        lifespan:
            {
            birth: 1945,
            death: "still kickin'"
            }
    },

    {
        title: "Actor?",
        name: "Dwight Howard",
        bio: "Info goes here.",
        image: "https://www.randomlists.com/img/people/dwight_howard.jpg",
        lifespan:
            {
            birth: 1945,
            death: "still kickin'"
            }
    },

    {
        title: "TV Personality",
        name: "Bob Hope",
        bio: "Info goes here.",
        image: "https://www.randomlists.com/img/people/bob_hope.jpg",
        lifespan:
            {
            birth: 1929,
            death: "with Jesus"
            }
    },

    {
        title: "Who is this guy?",
        name: "Jerry Bruckheimer",
        bio: "Info goes here.",
        image: "https://www.randomlists.com/img/people/jerry_bruckheimer.jpg",
        lifespan:
            {
            birth: 1945,
            death: "still kickin'"
            }
    },
]

for (props in peopleObjects) {
    var newDiv = document.createElement("div");
    newDiv.className = "person-div-class";
    newDiv.id = "person-ID--" + counter;

    var article = `<article class="article-element">
    <header>${peopleObjects[props].name}  --${peopleObjects[props].title}</header>
    <section>
        <img alt "actor photo" src="${peopleObjects[props].image}">
        <p>${peopleObjects[props].bio}</p>
    </section>
    <footer>${peopleObjects[props].lifespan.birth}   .....${peopleObjects[props].lifespan.death}
    </footer>
    </article>`;

    newDiv.innerHTML = article;

    domDiv.appendChild(newDiv);

    var getArticleElement = document.getElementById("person-ID--" + counter);

    if (counter % 2 === 0) {
        getArticleElement.classList.add("yellow");
    }else {
        getArticleElement.classList.add("light-blue");
    }

    newDiv.addEventListener("click", addingDotts);

    counter++;
}
//global var will hold current selected item event object info
var clickedDiv;

function addingDotts (event) {
    clickedDiv = event.currentTarget;
    clickedDiv.classList.toggle("dotted")
    inputArea.focus();
}

function changeBio (event) {
    var bio = clickedDiv.getElementsByTagName("p")[0];
    bio.innerHTML += inputArea.value;
}

inputArea.addEventListener("keyup", changeBio);

function clearText () {
    location.reload();
}

//function () {
//    inputArea.
//}

document.getElementById("input-text").onkeypress=function(e){
    if(e.keyCode==13){
        clearText();
    }
}




