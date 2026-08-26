export const whatsAppMessage = encodeURIComponent(
  "Здравствуйте. Я бы хотел сделать заказ."
);

export const whatsAppHref = `https://wa.me/77067052342?text=${whatsAppMessage}`;

export function quoteWhatsAppHref(
  productCode?: string,
  productName?: string,
  size?: string
) {
  let detail = " Прошу рассчитать стоимость по каталогу.";
  if (productCode && productName) {
    detail = size
      ? ` Интересует продукт ${productCode} «${productName}», размер ${size}. Прошу рассчитать стоимость.`
      : ` Интересует продукт ${productCode} «${productName}». Прошу рассчитать стоимость.`;
  }
  return `https://wa.me/77067052342?text=${encodeURIComponent(
    `Здравствуйте.${detail}`
  )}`;
}
