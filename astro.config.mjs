import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'AI & Writing Wiki',
      social: {
        github: 'https://github.com/kchoonsik/choonki',
      },
      sidebar: [
        {
          label: '소개',
          link: '/',
        },
        {
          label: 'AI 활용 전략',
          items: [
            { label: '개발자 관점', link: '/dev-ai/' },
            { label: '글쓰기 관점', link: '/writing-ai/' },
          ],
        },
      ],
    }),
  ],
});