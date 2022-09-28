/** @format */

import React from "react";
import "./TableInfo.css";

const TableInfo = () => {
  return (
    <div className='info-container'>
      {" "}
      <section className='currency-info-header'>
        <ul className='currency-info-lists'>
          <li className=' currency-info currency-info-list'>
            <p className='info-name'>MARKET CAP</p>
            <p className='info-value'>$1.13t</p>
          </li>
          <li className=' currency-info-list'>
            <p className='info-name'>EXCHANGE VOL</p>
            <p className='info-value'>$48.58b</p>
          </li>
          <li className=' currency-info-list'>
            <p className='info-name'>ASSETS</p>
            <p className='info-value'>2,295</p>
          </li>
          <li className='currency-info-list'>
            <p className='info-name'>EXCHANGES</p>
            <p className='info-value'>73</p>
          </li>
          <li className=' currency-info-list'>
            <p className='info-name'>MARKETS</p>
            <p className='info-value'>12,835</p>
          </li>
          <li className='currency-info-list'>
            <p className='info-name'>BTC DOM INDEX</p>
            <p className='info-value'>37.2%</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TableInfo;
