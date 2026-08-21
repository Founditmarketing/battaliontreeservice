export const SITE_URL = 'https://battaliontreeservice.us';

export const BUSINESS = {
  name: 'Battalion Tree Service',
  telephone: '+1-409-673-5443',
  email: 'Jimmypirtle30@aol.com',
  streetAddress: '4029 Glaze Rd.',
  addressLocality: 'Kountze',
  addressRegion: 'TX',
  postalCode: '77625',
  addressCountry: 'US',
  foundingDate: '2019',
  logo: `${SITE_URL}/battalionlogo.webp`,
  image: `${SITE_URL}/battaliontreeimage2.webp`,
  sameAs: [
    'https://www.facebook.com/profile.php?id=100092550350040',
    'https://www.yelp.com/biz/battalion-tree-service-kountze',
    'https://www.bbb.org/us/tx/kountze/profile/tree-service/battalion-tree-service-0845-90079879',
  ],
};

export const LOCAL_BUSINESS_ID = `${SITE_URL}/#business`;

export function getLocalBusinessSchema(extra: Record<string, unknown> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TreeService',
    '@id': LOCAL_BUSINESS_ID,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    image: BUSINESS.image,
    logo: BUSINESS.logo,
    foundingDate: BUSINESS.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    sameAs: BUSINESS.sameAs,
    ...extra,
  };
}
