export default function WhatsMyZonePage() {
  return (
    <section>
      <h1>What&apos;s My Zone?</h1>
      <p>
        Your USDA Hardiness Zone is based on the average annual minimum winter
        temperature in your area. Use your zone to choose plants that can
        survive your winters.
      </p>
      <p>
        <strong>USDA Plant Hardiness Zone Map:</strong>{" "}
        <a
          href="https://planthardiness.ars.usda.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          planthardiness.ars.usda.gov
        </a>
      </p>

      <h2>How to find your zone</h2>
      <ol>
        <li>Open the USDA Plant Hardiness Zone Map website.</li>
        <li>Enter your ZIP code.</li>
        <li>Write down your zone (for example: 7a or 8b).</li>
      </ol>

      <h2>Quick zone guide</h2>
      <p>
        Lower zone numbers are colder, and higher zone numbers are warmer. For
        example, Zone 5 gets colder winters than Zone 8.
      </p>
      <ul>
        <li>Zones 3-5: Focus on cold-hardy perennials and short-season crops.</li>
        <li>Zones 6-7: Wide plant selection with moderate winter protection.</li>
        <li>Zones 8-10: Longer growing seasons and more warm-weather choices.</li>
      </ul>

      <h2>What to do next</h2>
      <p>
        After finding your zone, pick plants labeled for your zone or colder.
        Then match sun, soil, and watering needs for best results.
      </p>
    </section>
  )
}
