import "./personaTitle.scss";

function PersonaTitle() {
  return (
    <section className="persona-content">
      <header className="persona-header">
        <h1 className="persona-title">Kod Kodsson, 21</h1>
      </header>
      <main className="persona-text-container">
        <h2 className="persona-ingress">Ingress text om personen.</h2>
        <p className="persona-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          corrupti delectus asperiores doloribus aliquam sapiente, nihil
          voluptates odio est optio sint distinctio iusto tempora molestias
          ratione placeat dolore sed pariatur.
        </p>
      </main>
    </section>
  );
}

export default PersonaTitle;
