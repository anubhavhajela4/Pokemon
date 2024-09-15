let name1="";
let name2="";
let name3="";
let name4="";
async function getImage() {
    try {
        const response1=await fetch(`https://pokeapi.co/api/v2/pokemon/${(parseInt)(Math.random()*250+1)}`)
        const response2=await fetch(`https://pokeapi.co/api/v2/pokemon/${(parseInt)(Math.random()*250+1)}`)
        const response3=await fetch(`https://pokeapi.co/api/v2/pokemon/${(parseInt)(Math.random()*250+1)}`)
        const response4=await fetch(`https://pokeapi.co/api/v2/pokemon/${(parseInt)(Math.random()*250+1)}`)

        if(!response1.ok||!response2.ok||!response3.ok||!response4.ok) {
            throw new Error("Could Not Fetch Resources.");
        }
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        const data4 = await response4.json();
        const pokemonImage=data1.sprites.other[`official-artwork`].front_default;
        const imageElement=document.getElementById("image1");
        imageElement.src=pokemonImage;
        imageElement.style.display= "block";
        imageElement.style.filter="brightness(0)";
        name1=data1.name;
        name2=data2.name;
        name3=data3.name;
        name4=data4.name;
        document.getElementById("button1").textContent=data1.name.toUpperCase();
        document.getElementById("button2").textContent=data2.name.toUpperCase();
        document.getElementById("button3").textContent=data3.name.toUpperCase();
        document.getElementById("button4").textContent=data4.name.toUpperCase();
        document.getElementById("button1").setAttribute("data-pokemon-name", name1.toUpperCase());
        document.getElementById("button2").setAttribute("data-pokemon-name", name2.toUpperCase());
        document.getElementById("button3").setAttribute("data-pokemon-name", name3.toUpperCase());
        document.getElementById("button4").setAttribute("data-pokemon-name", name4.toUpperCase());

    }
    catch(error) {
        console.error(error);
    }
}
function correctAnswer(button) {
    const selectedName = button.getAttribute("data-pokemon-name");
    if(selectedName===name1.toUpperCase()) {
        document.getElementById("image1").style.filter = "brightness(1)";
        alert("Correct");
    }
    else {
    alert("Wrong!");
    document.getElementById("image1").style.filter = "brightness(0.5)";
    }
}
window.onload = getImage;