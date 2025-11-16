class ControladorCadastro {
    constructor(seletorFormulario) {
        this.formulario = document.querySelector(seletorFormulario);
        this.iniciar();
    }

    iniciar() {
        this.formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const campos = [...document.querySelectorAll("input")];
            const resultadoValidacao = this.validarCadastro(campos);

            if (!resultadoValidacao.ok) {
                alert(resultadoValidacao.mensagem);
                return;
            }

            alert("Cadastro aceito!");
            window.location.href = "login.html";
        });
    }

    validarCadastro(campos) {
        for (let campo of campos) {
            if (campo.value.trim() === "") {
                return { ok: false, mensagem: "Por favor, preencha todos os campos." };
            }
        }

<<<<<<< HEAD
        const senha = campos[4].value;
        const confirmarSenha = campos[5].value;
=======
        const senha = inputs[4].value;
        const confirmarSenha = inputs[5].value;
>>>>>>> a5184730005f6e340f55746d7d1026cb3520e3d5

        if (senha !== confirmarSenha) {
            return { ok: false, mensagem: "As senhas não coincidem!" };
        }

<<<<<<< HEAD
        return { ok: true };
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new ControladorCadastro("form");
=======
        alert("Cadastro aceito!");
        window.location.href = "login.html";
    });
>>>>>>> a5184730005f6e340f55746d7d1026cb3520e3d5
});
