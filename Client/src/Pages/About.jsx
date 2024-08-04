import { useAuth } from '../Store/auth'

export default function About() {
  const { user } = useAuth()
  return (
  <>
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-4">About Page</h1>
        <h2 className="my-4"> {user.username?user.username:"Please LogIn"}</h2>
        <p className="lead">
          Welcome to the About Page! Here, you can learn more about the person behind this account.
        </p>
        <hr className="my-4" />
        <p>
          This user is a valued member of our community. Feel free to explore their profile and get to know more about their interests and contributions.
        </p>
        {
        user?<a className="btn btn-success btn-lg" href="/contact" role="button">
          Contact Us
        </a>
        :
        <a className="btn btn-secondary btn-lg" href="/login" role="button">
          LogIn
        </a>
        }
      </div>
    </div>
  </>
  )
}
