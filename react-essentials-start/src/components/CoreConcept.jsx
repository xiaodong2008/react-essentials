export default function CoreConcept({ image, title, desc }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  );
}
