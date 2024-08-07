const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "mNnANqhxgQk-L1axomttnQbyDm9HtcXF-6LrBrP4mugjYxleoz");
myHeaders.append("x-apihub-host", "Jokes-API.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "fba849ca-2257-445d-b5e2-ba6ce527a281");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};

let jokes = []

for(let i = 0; i < 3; i++) {

    fetch("https://Jokes-API.proxy-production.allthingsdev.co/random_joke", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        let joke = [result.setup, result.punchline];
        jokes.push(joke)
        

    })
    .catch((error) => console.error(error));

    
}


function dispJokes(jokes){
    var div = document.createElement("div");
    div.style.width = "400px";
    div.style.height = "100px";
    div.style.background = "black";
    div.style.color = "white";
    div.innerHTML = jokes[0][0];
    document.getElementById("main").appendChild(div);

    function dispPunch() {
        var div1 = document.createElement("div");
        div1.style.width = "400px";
        div1.style.height = "100px";
        div1.style.background = "red";
        div1.style.color = "white";
        div1.innerHTML = jokes[0][1];
        document.getElementById("main").appendChild(div1);

        function jokesTwo(){
            var div2 = document.createElement("div");
            div2.style.width = "400px";
            div2.style.height = "100px";
            div2.style.background = "black";
            div2.style.color = "white";
            div2.innerHTML = jokes[1][0];
            document.getElementById("main").appendChild(div2);
        }

        setTimeout(jokesTwo,4000)


        function jokePunchTwo(){
            var div3 = document.createElement("div");
            div3.style.width = "400px";
            div3.style.height = "100px";
            div3.style.background = "red";
            div3.style.color = "white";
            div3.innerHTML = jokes[1][1];
            document.getElementById("main").appendChild(div3);
        }

        setTimeout(jokePunchTwo, 8000)



    }

    setTimeout(dispPunch, 4000)






}

setTimeout(dispJokes, 8000, jokes)













