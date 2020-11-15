const formatValue = (value: number, type?: string): string => {
  const valueChanged = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  // if (type === 'outcome') {
  //   valueChanged = `- ${valueChanged}`;
  // }

  return valueChanged;
}; // TODO

export default formatValue;
