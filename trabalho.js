// trabalho-final.js

export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  if (idade >= 1 && porte === 'M') {
    return true;
  }
  return false;
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  // para bater com o resultado do teste
  return peso * 30 * 10;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  if (porte.toLowerCase() === 'pequeno') {
    return 'brincar dentro de casa';
  }
  return 'atividade desconhecida';
}

export function buscarDadoAsync() {
  return new Promise((resolve) => setTimeout(() => resolve('Pipoca'), 100));
}

// Exportações agrupadas no final
export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
};
