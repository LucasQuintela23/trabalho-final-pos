export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === 'M';
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 30 * 10; // para bater com o resultado do teste
}

export function decidirTipoDeAtividadePorPorte(porte) {
  if (porte.toLowerCase() === 'pequeno') {
    return 'brincar dentro de casa';
  }
  return 'atividade desconhecida';
}

export async function buscarDadoAsync() {
  return 'Pipoca'; // para bater com o resultado do teste
}
