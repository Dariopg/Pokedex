const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pikachu_triste.gif")

        }
        else {
            return res.json();
        }
    })

    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeInfo = data.abilities;
        let Nombre = data.forms;
        pokeImage(pokeImg);
        pokeData(pokeInfo);
        pokeNombre(Nombre);
        console.log(pokeImg);
    }
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (Habilidades) => {
    const pokeHabilidades = document.getElementById("Habilidades")
    const nombreHabilidades = Habilidades.map(item => item.ability.name)
    pokeHabilidades.innerHTML = nombreHabilidades
}

const pokeNombre = (nom) => {
    const nombrePokemon = document.getElementById("nombre_Pokemon");
    const nombre = nom.map(item => item.name)
    nombrePokemon.innerHTML = nombre;

    

}
