import { useEffect } from 'react';
import FetchData from '../hooks/FetchNasa';
import { API_KEY, DAILY_API } from '../config/index';
import { Link } from 'react-router-dom';

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
          <p className="card-text">{data?.explanation}</p>
          <div className='d-flex justify-content-around'>
            <p className="card-text text-body-secondary">Date: <small className="text-body-secondary">{data?.date}</small></p>
            <p className="text-body-secondary">Author:  {data?.copyright === undefined || null ? <small>No Author</small> : <small>{data.copyright}</small>}</p>
          </div>
          <img src={data?.hdurl} className="nasa_image" alt="daily image" />

        </div>
      </div>
      {/* <p className='text-white'>Hello</p>
      <img src={data?.url}  className="img-fluid" /> */}
    </div>
  );
}

export default Index;