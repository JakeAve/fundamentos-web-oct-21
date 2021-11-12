const pokemonBox = $("#pokemon-box");

const getPokemonImg = (num) =>
  `<div id="poke-${num}"><h2>${num}</h2><ul></ul><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${num}.png"></div>`;

for (let i = 1; i <= 151; i++) {
  pokemonBox.append(getPokemonImg(i));
}

$.get(
  "https://pokeapi.co/api/v2/pokemon/?limit=151",
  function (res) {
    const arrDePokemon = res.results;
    arrDePokemon.forEach((pokemon, index) => {
      $(`#poke-${index + 1}`)
        .children("h2")
        .html(pokemon.name);
    });
    // for (let i = 0; i < arrDePokemons.length; i ++) {
    //     $(`poke-${i + 1}`).children('h2').html(arrDePokemon[i].name)
    // }
  },
  "json"
);

for (let i = 1; i <= 151; i++) {
  $.get(
    `https://pokeapi.co/api/v2/pokemon/${i}/`,
    function (pokemon) {
      for (let j = 0; j < pokemon.types.length; j++) {
        console.log(pokemon.types[j].type.name);

        $(`#poke-${i}`)
          .children("ul")
          .append(`<li>${pokemon.types[j].type.name}</li>`);
      }
    },
    "json"
  );
}

// javascript nativo

// const pokemonBoxNat = document.querySelector("#pokemon-box");

// for (let i = 1; i < 151; i++) {
//   const img = document.createElement("img");
//   img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png`;
//   pokemonBoxNat.append(img);
// }
