/* quando clicar no pokémon da listagem temos que esconder o cartão do pokémon que tem a classe "aberto" e mostrar o cartão correspondente ao que foi selecionado na listagem (o pokémon que foi clicado pelo usuário). 

para isso vamos precisar trabalhar com dois elementos: 
1 - a classe listagem;
2 - a classe cartão do pokémon;

- Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela



-- SOBRE VARIÁVEIS -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
Para criar/declarar uma variável, usa-se a palavra-chave "const" e em seguida, damos um "nome" para a variável.

No caso deste projeto, as "variáveis estão relacionadas as classes (listagem e cartao pokémon)
O (sinal de =) quando adicionado após a palavra-chave "const", significa que ele vai receber algo. Neste caso, a const é: listaSelecaoPokemon. O que for escrito após o sinal de =, é a função que vai ser executada para a variável ListaSelecaoPokemon.

-- SOBRE VARIÁVEIS -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

- remover a classe "aberto" apenas do cartão que estiver aberto
- ao clicar em um pokémon da listagem, pegamos o ID do pokémon para saber qual cartão mostrar
- removar a classe "ativo" que marca o pokémon selecionado
- adicionar a classe aivo no item da lista selacionado
*/


const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')
        const pokemonAtvoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonAtvoNaListagem.classList.add('ativo')

    })
})

