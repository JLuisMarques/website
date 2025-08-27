import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function BlogPostItem({ children, frontMatter }) {
  const { title, image } = frontMatter;

  return (
    <article className={clsx('blog-post', styles.blogPost)}>
      {/* Render cover image if it exists */}
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'cover',
            marginBottom: '1rem',
          }}
        />
      )}

      <h1>{title}</h1>
      <div className="blog-post-content">{children}</div>
    </article>
  );
}
