const nome = "Drica";
let nome2 = "";
let pessoaDefault = {
    nome: "Dryk",
    idade: "30",
    trabalho: "pedagoga"
}

let nomes = ["Chapeleiro", "Rainha-de-Copas", "Ratinho"];

let pessoas = [
    {
        nome: "Dryk",
        idade: "30",
        trabalho: "pedagoga"
    },
    {
        nome: "Lorelay",
        idade: "28",
        trabalho: "secretária"
    },

];

function alterarnome () {
    nome2 = "coelho-branco"
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome (novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa (pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("idade:");
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);
}



function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas () {
    console.log("---------IMPRIMIR PESSOAS---------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idade);
        
        console.log("trabalho:");
        console.log(item.trabalho);
    })
}

adicionarPessoa ({
    nome: "Chapeleiro",
    idade: "18",
    trabalho: "Chá",
});

imprimirPessoas ();

// document.getElementById("link-conta").addEventListener("click", function() {
//     console.log("o usuário clicou no link criar conta.");
// })

//console.log(nomes[2]);

//imprimirPessoa (pessoaDefault);

//imprimirPessoa ({
    //nome: "Lorelay",
    //idade: "28",
    //trabalho: "secretária"
//});


//recebeEalteraNome ("Lebre Maluca");
//recebeEalteraNome ("coelho-branco")







//alterarnome ();