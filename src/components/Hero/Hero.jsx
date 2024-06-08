import { Link } from "react-router-dom";

export default function Hero() {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Adventure Starts Here</h1>
            <p className="py-6">Curated Travel Plans Just for You</p>
            <Link to="/form">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    );
}