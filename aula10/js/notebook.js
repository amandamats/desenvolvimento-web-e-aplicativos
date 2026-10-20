/*objeto js inicializado*/

const notebook = {
    marca: "",
    RAM_GB: 0,
    GPU_GB: 0,
    tela: 0.0,
    preço: 0.0
}

/*arrow-function*/
/*atribuição: objeto.prop*/

const preencherNotebook = () => {
    notebook.marca = prompt("Digite a marca do notebook:");

    notebook.RAM_GB = parseInt(
        prompt("Digite a quantidade de RAM em GB:"), 10
    );

    notebook.GPU_GB = parseInt(
        prompt("Digite a memória da GPU em GB:"), 10
    );

    notebook.tela = parseFloat(
        prompt("Digite o tamanho da tela em polegadas:").replace(",", ".")
    );

    notebook.preço = parseFloat(
        prompt("Digite o preço do notebook:").replace(",", ".")
    );
};

preencherNotebook();

console.log("Dados do notebook:", notebook);

alert(
    "Marca: " + notebook.marca +
    "\nRAM: " + notebook.RAM_GB + " GB" +
    "\nGPU: " + notebook.GPU_GB + " GB" +
    "\nTela: " + notebook.tela + " polegadas" +
    "\nPreço: R$ " + notebook.preço.toFixed(2)
);