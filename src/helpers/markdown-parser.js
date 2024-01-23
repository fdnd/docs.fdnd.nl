import document from '../../docs.conf.js'
import fdndDiscussions from './fdnd-discussions.js'
import fdndWrapper from './fdnd-wrapper.js'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeRaw from 'rehype-raw'
import rehypeSectionHeadings from 'rehype-section-headings'
import rehypeShiftHeading from 'rehype-shift-heading'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeToc from '@jsdevtools/rehype-toc'
import rehypeWrap from 'rehype-wrap'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import shiki from 'rehype-shiki'
import { unified } from 'unified'

export default unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true, footnoteLabel: 'Noten en citaties' })
  .use(rehypeRaw)
  .use(rehypeShiftHeading, { shift: 1 }) // Shift headings up, only h1 in header, h2 in documents
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, { behaviour: 'wrap' })
  .use(fdndDiscussions)
  .use(rehypeWrap, { wrapper: 'article' })
  .use(rehypeToc, { headings: ['h3', 'h4'], cssClasses: { toc: 'subnav' } })
  .use(rehypeSectionHeadings, { sectionDataAttribute: 'data-heading-id' })
  .use(shiki, { theme: 'monokai' })
  .use(fdndWrapper)
  .use(rehypeDocument, document) // er moet nog tabindex="-1" op <body> om het menu mobiel te laten werken
  .use(rehypeFormat)
  .use(rehypeStringify)
