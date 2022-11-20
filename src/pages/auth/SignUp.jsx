import { useRef } from "react"
import { useToggle } from "../hooks"
import loginImage from "../../assets/login.svg"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { app } from "../../firebase"

const SignUp = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const auth = getAuth()
  const [loading, setLoading] = useToggle(false)

  const handleSubmit = (e) => {
    // console.log(auth)
    e.preventDefault()
    const email = emailRef.current
    const password = passwordRef.current

    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setLoading(false)
        const user = userCredential.user
        // ...
        console.log(user)
      })
      .catch((error) => {
        setLoading(false)
        const errorCode = error.code
        const errorMessage = error.message
        console.log(error)
      })
  }

  return (
    <div className="d-flex flex-column flex-md-row w-100 gap-5">
      <img src={loginImage} alt="SignUp Image" className="w-50 m-1" />
      <form onSubmit={handleSubmit} className="row m-auto">
        <div className="h4 col-sm-12 col-12 w-100 mb-3 p-0">
          Create new account
        </div>
        <div className="col-sm-12 col-12 w-100 mb-3 p-0">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            ref={emailRef}
            className="form-control"
            id="email"
            required
          />
        </div>
        <div className="col-sm-12 col-12 w-100 mb-3 p-0">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            ref={passwordRef}
            className="form-control"
            id="password"
            required
          />
        </div>
        <button
          className="col-sm-12 col-12 w-100 btn btn-primary"
          disabled={loading}
        >
          {loading ? "Loading..." : "SignUp"}
        </button>
      </form>
    </div>
  )
}

export default SignUp
