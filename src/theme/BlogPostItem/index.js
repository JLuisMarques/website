import React from 'react';
import BlogPostItem from '@theme/BlogPostItem';
import {useBlogPosts} from '@docusaurus/theme-common/internal';

export default function BlogListPage() {
  const {items: blogPosts} = useBlogPosts();
  return (
    <div>
      <h1>Recent Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.metadata.permalink}>
            <BlogPostItem frontMatter={post.metadata} >
              {/* Optionally render snippet */}
            </BlogPostItem>
          </li>
        ))}
      </ul>
    </div>
  );
}
