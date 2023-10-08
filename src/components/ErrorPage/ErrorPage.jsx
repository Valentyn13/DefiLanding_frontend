import "./ErrorPage.css"

const ErrorPage = ({children}) => {
  return (
    <div className="error-page">
        <div className="container">
            <div className="error-content">
                {children}
            </div>
        </div>
    </div>
  )
}

export default ErrorPage