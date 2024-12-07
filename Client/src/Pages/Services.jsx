import { useAuth } from '../Store/auth';
import '../App.css'; // Adjust the path if needed

export default function Services() {
  const { service } = useAuth();

  return (
    <>
    <div className="container mt-5 table-container">
      <h6 className="text-center">
        All the service data you see on the website was initially saved
        manually in the MongoDB database, and then it is fetched and displayed
        on the frontend.
      </h6>

      <h1 className="text-center mb-4">Our Services</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">S.no.</th>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Provider</th>
          </tr>
        </thead>
        <tbody>
          {service && service.length > 0 ? (
            service.map((item, index) => (
              <tr key={index}>
                <th scope="row" className="table-cell-padding">
                  {index + 1}
                </th>
                <td className="table-cell-padding">{item.service}</td>
                <td className="table-cell-padding">{item.description}</td>
                <td className="table-cell-padding">{item.price}</td>
                <td className="table-cell-padding">{item.provider}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center no-services">
                Please LogIn if you need Services!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </>
  );
}
