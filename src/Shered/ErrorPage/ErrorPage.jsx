import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        // <!-- error page start -->
        <div className="flex justify-center items-center text-center h-screen">
            <Helmet>
                <title>Error Page | Page Not Found</title>
            </Helmet>
            <div id="error-page">
                <span className="text-6xl font-bold text-red">{error.status}</span>
                <h1 className="mb-2 mt-4 text-xl font-bold">Oops... Page not found !</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <button onClick={() => window.history.back()} className="btn bg-red hover:bg-transparent border-red text-white hover:text-red rounded hover:border-red hover:-translate-y-1 transition-all duration-200 my-4">Go Back</button>
            </div>
        </div>

    );
};

export default ErrorPage;