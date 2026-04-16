import withNextra from 'nextra'

const withNextraConfig = withNextra({
  // Nextra 옵션
})

export default withNextraConfig({
  // Next.js 옵션
  images: {
    unoptimized: true
  }
})