# Mehedi Hasan's Blog

A modern, high-performance blog built with **Next.js 16**, **TypeScript**, **React 19**, and **MDX** for rich content. This blog features interactive components, dark mode support, and a streamlined content management system.

## 🚀 Features

- **MDX Support**: Write blog posts with Markdown + React components
- **Fast and Performant**: Built with Next.js App Router for optimal performance
- **Responsive Design**: Mobile-first design with CSS modules
- **Dark Mode**: Theme toggle for comfortable reading
- **Smooth Scrolling**: Enhanced navigation with Lenis smooth scroll
- **Interactive Components**: Custom MDX components for embeds, images, callouts
- **Blog Categories**: Organized blog posts by tags and categories
- **SEO Optimized**: Proper metadata and structured data
- **Code Syntax Highlighting**: Beautiful code blocks with GFM support

## 📋 Tech Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **UI Library**: React 19.2.3
- **Content**: MDX with Remark GFM
- **Styling**: CSS Modules + Tailwind CSS
- **Icons**: React Icons
- **Animations**: GSAP + Lenis
- **Email**: EmailJS

## 📁 Project Structure

```
content/
└── blog/
    ├── books-that-shaped-my-reading-journey.mdx
    ├── building-a-calm-ui.mdx
    ├── es6-interview-questions-answers.mdx
    ├── express-js-interview-question.mdx
    ├── how-to-write-an-effective-cover-letter.mdx
    ├── html-interview-questions-answers.mdx
    ├── javascript-interview-questions-answers.mdx
    ├── mongodb-interview-questions-answers.mdx
    ├── my-2026-reading-list.mdx
    ├── my-journey-through-failure-and-meditation.mdx
    ├── nextjs-interview-questions-answers.mdx
    ├── nodejs-interview-questions-answers.mdx
    ├── notes-on-mdx.mdx
    ├── react-interview-questions-answers.mdx
    ├── redux-interview-questions-answers.mdx
    ├── shipping-notes-01.mdx
    ├── structure-of-a-good-git-commit.mdx
    ├── the-right-way-to-send-your-resume-via-email.mdx
    └── building-a-calm-ui.mdx

app/
├── blog/
│   ├── page.tsx              # Blog listing page
│   ├── blog.module.css       # Blog styles
│   ├── BlogCard.tsx          # Blog card component
│   ├── [slug]/
│   │   ├── page.tsx          # Individual blog post page
│   │   ├── post.module.css   # Post styles
│   │   └── BackButton.tsx    # Navigation component
│   └── components/
│       ├── mdx-components.tsx    # Custom MDX components
│       └── mdx-components.module.css

lib/
├── blog.ts                   # Blog data fetching utilities
└── useTheme.ts              # Theme management hook

public/
└── assets/
    ├── images/
    │   └── blogs/            # Blog post images
    └── data/
        ├── projects.json
        ├── skills.json
        └── experience.json
```

## 📝 Creating a New Blog Post

### Step 1: Create MDX File

Create a new `.mdx` file in `content/blog/` with proper frontmatter:

```mdx
---
title: "Your Post Title"
date: "2026-02-07"
excerpt: "A brief description of your post for listings."
tags: ["tag1", "tag2"]
---

## Your First Heading

Your content here...

<Img 
  src="/assets/images/blogs/your-image.jpg" 
  alt="Alt text" 
  caption="Image caption"
/>

More content...
```

### Step 2: Frontmatter Requirements

- **title** (required): Post title in quotes
- **date** (required): Date in `YYYY-MM-DD` format
- **excerpt** (required): Short description for blog listings
- **tags** (required): Array of tags for categorization
- **image** (optional): Featured image path

### Step 3: File Naming

- Use lowercase with hyphens: `my-blog-post-title.mdx`
- This becomes the post slug automatically

## 🎨 Custom MDX Components

### Image Component

```mdx
<Img 
  src="/assets/images/blogs/example.jpg" 
  alt="Description" 
  caption="Optional caption"
/>
```

### Callout Component

```mdx
<Callout type="info">
  This is an info callout
</Callout>
```

Types: `info`, `warning`, `success`, `error`

## 🏗️ Building & Running

### Development

```bash
npm run dev
```

Visit `http://localhost:3000/blog` to see the blog.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## 📚 Blog Data Fetching

The `lib/blog.ts` file handles:

- Reading all `.mdx` files from `content/blog/`
- Parsing frontmatter using `gray-matter`
- Generating blog post metadata
- Creating slug-based URLs

```typescript
// Get all blog posts
const posts = getAllPosts();

// Posts are sorted and available for listing
```

## 🎯 Best Practices for Blog Posts

1. **Keep excerpts concise**: 100-160 characters for better readability in listings
2. **Use descriptive titles**: Clear, SEO-friendly titles
3. **Add relevant tags**: Help readers discover related content
4. **Include featured images**: Enhance blog card visuals
5. **Write clean markdown**: Proper heading hierarchy, emphasis, and lists
6. **Link internally**: Reference other blog posts using relative links

## 🔍 SEO Optimization

Each blog post automatically includes:

- Meta tags from frontmatter
- Semantic HTML structure
- Open Graph data for social sharing
- XML sitemap support (via Next.js)

## 🌐 Deployment

This blog is optimized for deployment on:

- **Vercel** (recommended): One-click deployment from GitHub
- **Netlify**: Compatible with Next.js builds
- **Self-hosted**: Standard Node.js server requirements

### Environment Variables

No special environment variables required for basic blog functionality.

## 📖 Content Guidelines

- Use Markdown formatting for consistency
- Include at least one image per post
- Aim for 500-2000 words per post
- Break up large content with subheadings
- Add code examples where relevant

## 🤝 Contributing

To add new posts:

1. Create a new `.mdx` file in `content/blog/`
2. Follow the frontmatter format
3. Write your content
4. Add featured image to `public/assets/images/blogs/`
5. Test locally with `npm run dev`

## 📄 License

This project is part of Mehedi Hasan's portfolio. Content is copyrighted.

## 🔗 Links

- **Blog**: https://blog.mehedi-hasan.me
- **Portfolio**: https://mehedi-hasan.me
- **GitHub**: [Your GitHub URL]

---

**Last Updated**: February 7, 2026
