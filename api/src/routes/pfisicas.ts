import * as koa from 'koa'
import * as Router from 'koa-router'
import { PessoaFisica } from '../../../src/app/classes/clientes.class'
import { db } from '../server'
import { emit } from 'cluster';

const router = new Router({ prefix: '/api/cpfs' });

router.get('/getAll', async (ctx) => {
    let pessoas = new Array<PessoaFisica>();
    await new Promise((resolve, reject) => {
        db.each('SELECT cpf, nome, email, telefone_fixo as tfixo, telefone_celular as tcel FROM cpfs', (err, row) => {
            pessoas.push(new PessoaFisica(row.cpf, row.nome, row.email, row.tfixo, row.tcel));
        }, (err) => {
            if (err) console.log(err)
            else resolve();
        });
    });
    let processadas = Array<{}>()
    pessoas.forEach(pessoa => {
        processadas.push(pessoa.toJSON())
    });
    ctx.body = JSON.stringify(processadas);
    console.log('Pessoas Coletadas');
})

/*router.get('/*', async (ctx) => {
    ctx.body = 'Hello World!';
});*/

export const API = router;


async function getPessoas() {
    let pessoas = new Array<PessoaFisica>()
    db.each('SELECT cpf, nome, email, telefone_fixo AS tfixo, telefone_celular AS tcel FROM cpfs', (err: Error, row) => {
        pessoas.push(new PessoaFisica(row.cpf, row.nome, row.email, row.tfixo, row.tcel));
    });
}