window.onload = function () {
    document.getElementById("btnPausar").disabled = true;
    document.getElementById("btnParar").disabled = true;
    document.getElementById('btnPausar').classList.add('corBotaoDesligado');
    document.getElementById('btnParar').classList.add('corBotaoDesligado');
};

window.addEventListener("load", function () {

    document.getElementById("btnIniciar").addEventListener("click", iniciarCronometro);
    document.getElementById("btnPausar").addEventListener("click", pausarCronometro);
    document.getElementById("btnParar").addEventListener("click", pararCronometro);

    percentagemPar = document.getElementById("percentagemPar").value;

    contadorPar = 0;
    contadorImpar = 0;

    // VERIFICAR NUMEROS PARES / COR DE PAR OU IMPAR
    function verificarEAtualizarParImpar(numero) {
        if (numero % 2 === 0) {
            contadorPar++;
            document.getElementById("par").textContent = contadorPar;
            document.getElementById('numeroSorteador').classList.add('corPar');
        } else {
            contadorImpar++;
            document.getElementById("impar").textContent = contadorImpar;
            document.getElementById('numeroSorteador').classList.add('corImpar');
        }

        atualizarPorcentagens();
    }

    // EvENTO PARA CLICK NO numeroSORTEADOR  / CHAMA FUNCAO VERITICAR PAR 
    document.getElementById("numeroSorteador").addEventListener("click", function () {
        const numeroSorteado = parseInt(document.getElementById("numeroSorteador").textContent);
        verificarEAtualizarParImpar(numeroSorteado);
    });


    // Declaração de variáveis cronometro
    let intervaloCronometro;
    let contagemRegressiva = document.getElementById('dificuldade').value;
    let emAndamento = false;
    let cronNrosAleatorios;


    //CRONOMETRO 
    function atualizarExibicaoCronometro() {
        const minutos = Math.floor(contagemRegressiva / 60);
        const segundos = contagemRegressiva % 60;
        const exibicao = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
        document.getElementById('numeroSorteador').classList.remove('corPar');
        document.getElementById('numeroSorteador').classList.remove('corImpar');
        document.getElementById('timer').textContent = exibicao;
    }


    valorSelecionado = "";
    dificuldade = document.getElementById('dificuldade');
    dificuldade.addEventListener('change', function () {
        const valorSelecionado = dificuldade.value;

        if (valorSelecionado === "facil") {
            contagemRegressiva = 90;
            tempo = 1000;
            facilBlock();
        } else if (valorSelecionado === "medio") {
            dificilBlock();
            contagemRegressiva = 60;
            tempo = 500;
        } else if (valorSelecionado === "dificil") {
            dificilBlock();
            contagemRegressiva = 30;
            tempo = 200;
        }
        else if (valorSelecionado === "selecionar") {
            contagemRegressiva = 0;
            selecionarBlock();
        }

        atualizarExibicaoCronometro();

    });

    //Facil
    function facilBlock() {
        document.getElementById("btnParar").disabled = true;
        document.getElementById("btnPausar").disabled = true;
        document.getElementById('btnParar').classList.add('corBotaoDesligado');
        document.getElementById('btnPausar').classList.add('corBotaoDesligado');
    }

    function medioBlock() {
        document.getElementById("btnParar").disabled = true;
        document.getElementById("btnPausar").disabled = true;
        document.getElementById('btnParar').classList.add('corBotaoDesligado');
        document.getElementById('btnPausar').classList.add('corBotaoDesligado');
    }

    function dificilBlock() {
        document.getElementById("btnParar").disabled = true;
        document.getElementById("btnPausar").disabled = true;
        document.getElementById('btnParar').classList.add('corBotaoDesligado');
        document.getElementById('btnPausar').classList.add('corBotaoDesligado');
    }

    function selecionarBlock() {
        document.getElementById("btnIniciar").disabled = false;
        document.getElementById('btnIniciar').classList.remove('corBotaoDesligado');
        document.getElementById("btnParar").disabled = true;
        document.getElementById("btnPausar").disabled = true;
        document.getElementById('btnParar').classList.add('corBotaoDesligado');
        document.getElementById('btnPausar').classList.add('corBotaoDesligado');
    }


    // BOTAO INICIAR
    function iniciarCronometro() {
        if (!emAndamento) {
            intervaloCronometro = setInterval(function () {

                contagemRegressiva--;

                atualizarExibicaoCronometro();
                if (contagemRegressiva == 0) {
                    clearInterval(intervaloCronometro);
                    emAndamento = false;
                }
            }, 1000);
            emAndamento = true;
        }
        btnIniciarBlock();

    
            intervaloSorteio=tempo;
            cronNrosAleatorios = setInterval(gerarNumeroAleatorio, intervaloSorteio);
         
    }


    
    setInterval(ifTeste, 1000)
    function ifTeste() {
        numeroTimer = parseInt(document.getElementById("timer").value);

        if (numeroTimer > 0) {
            if (emAndamento) {
                clearInterval(intervaloCronometro);
                emAndamento = false;
            }
            clearInterval(cronNrosAleatorios);
        } numeroTimer++;
        //clearInterval(cronNrosAleatorios);

    }


    // BOTAO PAUSAR
    function pausarCronometro() {
        btnPausarBLock();
        if (emAndamento) {
            clearInterval(intervaloCronometro);
            emAndamento = false;
        }
        clearInterval(cronNrosAleatorios);
    }

    // BOTAO PARAR
    function pararCronometro() {
        clearInterval(intervaloCronometro);
        emAndamento = false;
        contagemRegressiva = 90;

        atualizarExibicaoCronometro();
        btnPararBlock();


        document.getElementById("dificuldade").value = 'selecionar';

        document.getElementById("percentagemPar").textContent = "0%";
        document.getElementById("impar").textContent = 0;
        document.getElementById("todosPares").textContent = 0;


        // Para o intervalo de geração de números aleatórios
        clearInterval(cronNrosAleatorios);

        // Zera os contadores de números pares e ímpares
        contadorPar = 0;
        document.getElementById("par").textContent = contadorPar;

        document.getElementById("numeroSorteador").textContent = "-";
        document.getElementById("timer").innerHTML = "00:00";
        location.reload();

    }

    //Bloqueio de BTNs
    function btnIniciarBlock() {
        document.getElementById("btnIniciar").disabled = true;
        document.getElementById('btnIniciar').classList.add('corBotaoDesligado');
        document.getElementById("btnParar").disabled = false;
        document.getElementById('btnParar').classList.remove('corBotaoDesligado');
        document.getElementById("btnPausar").disabled = false;
        document.getElementById('btnPausar').classList.remove('corBotaoDesligado');
    }

    function btnPausarBLock() {
        document.getElementById("btnIniciar").disabled = false;
        document.getElementById('btnIniciar').classList.remove('corBotaoDesligado');
        document.getElementById("btnParar").disabled = false;
        document.getElementById('btnParar').classList.remove('corBotaoDesligado');
        document.getElementById("btnPausar").disabled = true;
        document.getElementById('btnPausar').classList.add('corBotaoDesligado');

    }

    function btnPararBlock() {
        document.getElementById("btnIniciar").disabled = true;
        document.getElementById('btnIniciar').classList.remove('corBotaoDesligado');
        document.getElementById("btnParar").disabled = true;
        document.getElementById('btnParar').classList.add('corBotaoDesligado');
        document.getElementById("btnPausar").disabled = true;
        document.getElementById('btnPausar').classList.add('corBotaoDesligado');
    }


    // NUMERO ALEATORIO
    function gerarNumeroAleatorio() {
        numero = document.getElementById("numeroSorteador").innerHTML = parseInt(Math.random() * 100) + 1;
    }


    function incrementarContadorSeSorteado() {
        const todosPares = gerarNumeroAleatorio(); // Gera um número aleatório entre 1 e 100
        if (todosPares % 2 === 0) {
            contador++;
            document.getElementById("todosPares").innerHTML = contador;
        }
    }


    contadorPar = 0;
    // ATUALIZAR PORCENTAGEM
    function atualizarPorcentagens() {
        const totalTentativas = contadorPar + contadorImpar;
        const percentagemPar = (contadorPar / totalTentativas) * 100;
        const percentagemImpar = (contadorImpar / totalTentativas) * 100;

        contadorPar++;
        document.getElementById("percentagemPar").textContent = `${percentagemPar.toFixed(2)}%`;

    }



});


