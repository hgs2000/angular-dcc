//Necessidades para acessar o BD
import * as sqlite3 from 'sqlite3';
import { PessoaFisica } from './lista-cpfs/pessoa-fisica.class';

/**
 * Classe para manipulação de dados do banco.
 */
export class BancoDeDados {
    private static cpfs = Array<PessoaFisica>()

    static getCPFs() {
        return this.cpfs;
    }

    static async getListaCPF() {
        let pessoas = Array<PessoaFisica>();
        var db = new sqlite3.Database('./databases/clientes.db');
        await db.all('SELECT cpf, nome, email, telefone_fixo as telfix, telefone_celular as telcel FROM cpfs', (err, rows) => {
            rows.forEach(row => {
                pessoas.push(new PessoaFisica(row.cpf, row.nome, row.email, row.telfix, row.telcel));
            });
            pessoas.forEach(pessoa => {
                this.cpfs.push(pessoa)
            });
        });
        db.close();
    }

    static setListaCPF() {

    }
}
BancoDeDados.getListaCPF();
//setTimeout(() => console.log(BancoDeDados.getCPFs()), 3000)