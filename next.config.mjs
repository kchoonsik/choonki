import withNextra from 'nextra'

const withNextraConfig = withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

export default withNextraConfig({
  reactStrictMode: true
})