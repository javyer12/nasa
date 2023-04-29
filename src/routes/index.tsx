import { useEffect } from 'react';
import FetchData from '../hooks/FetchNasa';
import { API_KEY, DAILY_API } from '../config/index';

const API = `${DAILY_API}${API_KEY}`;

type DailyData = {
  copyright: string,
  date: string,
  explanation: string,
  title: string,
  hdurl: string
}
function Index() {
  const { data, loading, error } = FetchData<DailyData>(API);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id='root' className=' rounded bg-white'>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-success">{data?.title}</h5>

          <div className='d-flex justify-content-around'>

          </div>
          <img src={data?.hdurl} className="nasa_image img-fluid" alt="daily image" />
          <button type="button" className="btn btn-light  m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Read More...
          </button>

          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">{data?.title}</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <img src={data?.hdurl} className="nasa_image img-fluid" alt="daily image" />
                </div>
                <div className="modal-body">
                  {data?.explanation}
                </div>
                <div className="modal-footer">
                  <p className="card-text text-body-secondary">Date: <small className="text-body-secondary">{data?.date}</small></p>
                  <p className="text-body-secondary">Author:  {data?.copyright === undefined || null ? <small>No Author</small> : <small>{data.copyright}</small>}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;