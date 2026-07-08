export const whatsAppMessage = encodeURIComponent(
  "Здравствуйте. Я бы хотел сделать заказ."
);

export const whatsAppHref = `https://wa.me/77067052342?text=${whatsAppMessage}`;

export function quoteWhatsAppHref(productCode?: string, productName?: string) {
  const detail =
    productCode && productName
      ? ` Интересует продукт ${productCode} «${productName}». Прошу рассчитать стоимость.`
      : " Прошу рассчитать стоимость по каталогу.";
  return `https://wa.me/77067052342?text=${encodeURIComponent(
    `Здравствуйте.${detail}`
  )}`;
}
