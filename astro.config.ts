// Plugins
import type { ThemeConfig } from './src/types'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import swup from '@swup/astro'
import compress from 'astro-compress'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
// Rehype
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeComponents from 'rehype-components'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
// Remark
import remarkDirective from 'remark-directive'
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives'
import remarkMath from 'remark-math'
import remarkSectionize from 'remark-sectionize'
// Markdown Extensions
import UnoCSS from 'unocss/astro'
import { themeConfig } from './src/config'
import { AdmonitionComponent } from './src/plugins/rehype-component-admonition.ts'
import { GithubCardComponent } from './src/plugins/rehype-component-github-card.ts'
import { parseDirectiveNode } from './src/plugins/remark-directive-rehype.ts'
import { remarkExcerpt } from './src/plugins/remark-excerpt.ts'
import { remarkReadingTime } from './src/plugins/remark-reading-time.ts'

const { url }: { url: ThemeConfig['site']['url'] } = themeConfig.site

export default defineConfig({
  site: url,
  base: '/',
  trailingSlash: 'always',
  integrations: [
    UnoCSS({ injectReset: true }),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/' }],
      sitemap: true,
    }),
    compress(),
    swup({
      theme: false,
      animationClass: 'transition-swup-',
      cache: true,
      preload: true,
      accessibility: true,
      smoothScrolling: true,
      updateHead: true,
      updateBodyClass: true,
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkReadingTime,
      remarkExcerpt,
      remarkGithubAdmonitionsToDirectives,
      remarkDirective,
      remarkSectionize,
      parseDirectiveNode,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          // TODO: Add auto theme switcher
          theme: 'github-dark',
          transformers: [
            transformerCopyButton({
              visibility: 'hover',
              feedbackDuration: 2_500,
            }),
          ],
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener', 'noreferrer', 'external'],
          protocols: ['http', 'https', 'mailto'],
        },
      ],
      [
        rehypeComponents,
        {
          components: {
            github: GithubCardComponent,
            note: (props, children) => AdmonitionComponent(props, 'note', children),
            tip: (props, children) => AdmonitionComponent(props, 'tip', children),
            important: (props, children) => AdmonitionComponent(props, 'important', children),
            caution: (props, children) => AdmonitionComponent(props, 'caution', children),
            warning: (props, children) => AdmonitionComponent(props, 'warning', children),
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              'className': ['anchor-icon'],
              'data-pagefind-ignore': true,
            },
            // TODO: Switch # to icon
            children: [
              {
                type: 'text',
                value: '#',
              },
            ],
          },
        },
      ],
    ],
  },
  devToolbar: {
    enabled: false,
  },
})
