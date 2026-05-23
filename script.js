function gerarEmail() {

const cidade =
document.getElementById("cidade").value;

const estado =
document.getElementById("estado").value;

const assunto =
encodeURIComponent(
"Solicitação sobre preparação climática"
);

const texto =
encodeURIComponent(
`Prezados(as),

Solicito informações sobre as medidas de preparação e resposta a possíveis emergências climáticas em ${cidade} - ${estado}  relacionadas ao fenômeno denominado "Super El Niño", previsto para o segundo semestre de 2026.

Gostaria de saber:

- existência de plano de contingência;
- sistemas de alerta;
- ações preventivas;
- informações públicas disponíveis.

Atenciosamente`
);

const email =
"contato@prefeitura.gov.br";

window.location.href =
`mailto:${email}?subject=${assunto}&body=${texto}`;

}
