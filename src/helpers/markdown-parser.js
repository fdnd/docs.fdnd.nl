import document from '../../docs.conf.js'
import fdndWrapper from './fdnd-wrapper.js'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeSectionHeadings from 'rehype-section-headings'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeToc from '@jsdevtools/rehype-toc'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import shiki from 'rehype-shiki'
import { unified } from 'unified'

export default unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeToc)
  .use(rehypeSectionHeadings, { sectionDataAttribute: 'data-heading-id' })
  .use(shiki, { theme: 'monokai' })
  .use(fdndWrapper)
  .use(rehypeDocument, document)
  .use(rehypeFormat)
  .use(rehypeStringify)
