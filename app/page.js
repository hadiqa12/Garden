// this is main
export default function Home() {
  return (
    <section>
      <h1>Welcome to the Gardening Website</h1>
      <p>Explore tips and resources for pest management, companion gardening, and plant selection.</p>

      <div className="social">
        <h2>Follow us</h2>
        <div className="icons">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="social-link youtube"
          >
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.116C19.68 3.5 12 3.5 12 3.5s-7.68 0-9.388.57A2.997 2.997 0 0 0 .502 6.186 31.05 31.05 0 0 0 0 12a31.05 31.05 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.11 2.116C4.32 20.5 12 20.5 12 20.5s7.68 0 9.388-.57a2.997 2.997 0 0 0 2.11-2.116A31.05 31.05 0 0 0 24 12a31.05 31.05 0 0 0-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-link instagram"
          >
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5a4.5 4.5 0 1 0 .001 9.001A4.5 4.5 0 0 0 12 8.5zm6.5-.75a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25zM12 10.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
