import withNextra from 'nextra'

const withNextraConfig = withNextra({
  // Nextra 옵션 (여기서 theme과 themeConfig를 정의하지 않을 수도 있음)
})

export default withNextraConfig({
  // Next.js 옵션
  // Nextra v3에서는 테마 설정을 여기서 처리하거나 파일 기반으로 자동 인식함
  images: {
    unoptimized: true
  }
})
