import ErrorPage from "../components/ErrorPage/ErrorPage";

const DevelopersPage = () => {

    return(
        <>
            <ErrorPage>
                <h1>
                    404 error
                </h1>
                <h2>This page doesn't exist</h2>
                <div>
                    Maybe it's an error in routing, we solve this problem as soon as possible
                </div>
            </ErrorPage>
        </>
    )
}



export default DevelopersPage;