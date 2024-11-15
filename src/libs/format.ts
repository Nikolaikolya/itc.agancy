export const formatProductCount = (count: number): string => {
  const numberFormat = new Intl.NumberFormat('ru-RU');
  const formattedNumber = numberFormat.format(count);

  const pluralRules = new Intl.PluralRules('ru-RU');
  const pluralForm = pluralRules.select(count);

  const forms: Record<Intl.LDMLPluralRule, string> = {
    one: 'товар',
    few: 'товара',
    many: 'товаров',
    zero: 'товара',
    two: 'товара',
    other: 'товаров',
  };

  return `${formattedNumber} ${forms[pluralForm]}`;
};
