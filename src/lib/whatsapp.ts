export function getWhatsAppLink(phone: number, message?: string) {
  const link = new URL("https://api.whatsapp.com/send");

  link.searchParams.append("phone", phone.toString());
  if (message) link.searchParams.append("text", message);

  return link;
}

export function formatPhoneNumber(
  phone: number,
  countryCodeLength: number,
  mobileConnectionPrefixLength: number,
  areaCodeLength: number,
) {
  let phoneString = phone.toString();
  let index = 0;

  const countryCode = phoneString.slice(index, countryCodeLength);
  index += countryCodeLength;

  const mobileConnectionPrefix = phoneString.slice(
    index,
    index + mobileConnectionPrefixLength,
  );
  index += mobileConnectionPrefixLength;

  const areaCode = phoneString.slice(index, index + areaCodeLength);
  index += areaCodeLength;

  const lineNumber = phoneString.slice(index);

  return `+${countryCode} ${mobileConnectionPrefix} ${areaCode} ${lineNumber.slice(
    0,
    lineNumber.length / 2,
  )}-${lineNumber.slice(lineNumber.length / 2)}`;
}
