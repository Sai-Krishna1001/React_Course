// Project.js

export default function Project({ title, desc, image}) {
    return (
      <article>
        <h3>{title}</h3>
        <p>{desc}</p>
        <img src={image} alt={title} />
      </article>
    );
  }