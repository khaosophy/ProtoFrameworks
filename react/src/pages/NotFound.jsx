import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="container">
        <h1 className="mt-4 text-danger">404: Page Not Found</h1>
        <iframe
          src="https://giphy.com/embed/l1AsyjZ8XLd1V7pUk"
          className="mt-2"
          width="480"
          height="360"
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  )
}