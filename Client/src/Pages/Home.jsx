
export default function Home() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-4">Welcome to the Home Page</h1>
        <p className="lead">
          This is the home page of our website. We are excited to have you here!
        </p>
        <hr className="my-4" />
        <p>
          Explore our website to learn more about what we offer. We have a lot of interesting content and features for you.
        </p>
        <a className="btn btn-success btn-lg" href="/about" role="button">
          Learn more
        </a>
      </div>
    </div>
  )
}
