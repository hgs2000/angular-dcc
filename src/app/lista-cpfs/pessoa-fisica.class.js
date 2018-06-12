"use strict";
exports.__esModule = true;
var PessoaFisica = /** @class */ (function () {
    function PessoaFisica(cpf, nome, email, tFixo, tCel) {
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.tFixo = tFixo;
        this.tCel = tCel;
    }
    //Getters e Setters
    PessoaFisica.prototype.getCPF = function () { return this.cpf; };
    PessoaFisica.prototype.setCPF = function (nCpf) {
        if (nCpf.length !== 11) {
            throw new Error("O CPF informado tem tamanho menor do que o esperado.");
        }
        else {
            this.cpf = nCpf;
        }
    };
    PessoaFisica.prototype.getNOME = function () { return this.nome; };
    PessoaFisica.prototype.setNOME = function (nNome) { this.nome = nNome; };
    PessoaFisica.prototype.getEMAIL = function () { return this.email; };
    //set EMAIL(nEmail: String) { if (nEmail.search('@') >= 0) { this.email = nEmail } else { throw new Error("O email informado é inválido (não possui domínio especificado)") } }
    PessoaFisica.prototype.setEMAIL = function (nEmail) { this.email = nEmail; };
    return PessoaFisica;
}());
exports.PessoaFisica = PessoaFisica;
