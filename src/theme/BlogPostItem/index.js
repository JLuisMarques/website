import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function BlogPostItem(props) {
  // Destructure frontMatter safely with a default empty object
  const { frontMatter = {}, children } = props;
  const { title = 'Untitled', image, description } = frontMatter;

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

      {/* Render title */}
      <h1>{title}</h1>

      {/* Optional description */}
      {description && <p>{description}</p>}

      {/* Blog content */}
      <div className="blog-post-content">{children}</div>
    </article>
  );
}
