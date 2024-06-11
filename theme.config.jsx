export default {
  useNextSeoProps: () => ({
      titleTemplate: '%s – Indodax'
  }),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta data-n-head="ssr" data-hid="og:image" name="og:image" property="og:image" content="https://indodax.com/v3-exchange/card.png" />
      <meta data-n-head="ssr" data-hid="og:site_name" name="og:site_name" property="og:site_name" content="INDODAX" />
      <meta data-n-head="ssr" data-hid="og:url" name="og:url" property="og:url" content="https://indodax.com" />
      <meta data-n-head="ssr" data-hid="og:type" name="og:type" property="og:type" content="website" />
    </>
  ),
  logo: <span>Indodax API Docs</span>,
  project: {
    link: 'https://github.com/btcid/indodax-official-api-docs'
  },
  docsRepositoryBase: "https://github.com/btcid/indodax-official-api-docs",
  footer: {
    text: (
    <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          Indodax
        </a>
        .
      </span>
    ) 
  },
  navigation: {
    prev: true,
    next: true
  },
  feedback: {
    content: 'Need Help?',
    labels: 'Need help?'
  }
}
