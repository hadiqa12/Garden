export default function Plants() {
  return (
    <section>
      <h1>Plants</h1>
      <p>Find plant suggestions for different garden types and climates. Below are a few popular plants with photos and short descriptions.</p>

      <div className="plants-list">
        <article className="plant-item">
          <img
            className="plant-image"
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80&auto=format&fit=crop"
            alt="Red bell pepper on plant"
          />
          <div className="plant-info">
            <h3>Pepper</h3>
            <p>Pepper plants are warm-season vegetables that thrive in full sun and well-drained soil. They prefer consistent moisture and benefit from staking for larger varieties.</p>
          </div>
        </article>

        <article className="plant-item">
          <img
            className="plant-image"
            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=1200&q=80&auto=format&fit=crop"
            alt="Ripe tomato on the vine"
          />
          <div className="plant-info">
            <h3>Tomato</h3>
            <p>Tomatoes are among the most popular home garden crops. They need plenty of sun, regular watering, and good airflow to reduce disease. Support with cages or stakes.</p>
          </div>
        </article>

        <article className="plant-item">
          <img
            className="plant-image"
            src="https://images.unsplash.com/photo-1592928307319-6f59fb4b6c52?w=1200&q=80&auto=format&fit=crop"
            alt="Bean plants with pods"
          />
          <div className="plant-info">
            <h3>Beans</h3>
            <p>Beans (bush and pole types) are easy to grow and fix nitrogen in the soil. Pole beans benefit from a trellis, while bush beans are great for quick harvests in small spaces.</p>
          </div>
        </article>

        <article className="plant-item">
          <img
            className="plant-image"
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80&auto=format&fit=crop"
            alt="Aster flowers"
          />
          <div className="plant-info">
            <h3>Aster</h3>
            <p>Asters are hardy flowering perennials that attract pollinators. They bloom in late summer to fall and add bright color to garden borders and containers.</p>
          </div>
        </article>
      </div>
    </section>
  )
}
