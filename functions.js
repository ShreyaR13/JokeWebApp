//Random Joke EventListener
document.addEventListener("click", function(event){
    if (!event.target.matches("#button")) return;

    fetch("https://karljoke.herokuapp.com/jokes/random", {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((data) => renderJoke(data))
    console.log(("Button was clicked!"));
});

//Get 10 jokes EventListener
document.addEventListener("click", function (event){
    if (!event.target.matches("#ten-jokes-button")) return;

    fetch("https://karljoke.herokuapp.com/jokes/ten", {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((data) => renderTenJokes(data))
    console.log("Ten Jokes Button was clicked")
})

function renderJoke(data){
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
}

function renderTenJokes(data){
    var rows = '';
    jsonstring = JSON.stringify(data)
    jsondata = JSON.parse(jsonstring)
    for(var i=0; i < jsondata.length; i++){
        var obj = jsondata[i]
        rows += "<tr><td>" +obj.setup + "</td><td>" + obj.punchline + "</td></tr>"
    }
    document.getElementById("joke-table").innerHTML = "<tr><th>Setup</th><th>Punchline</th></tr>" + rows;
}
