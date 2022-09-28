/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/ducks/getData";
import { pageIncrement } from "../../redux/ducks/pageIncrement";
import {
  getCurrencyInDollar,
  getCurrencySystem,
} from "../../utils/getDataFormat";
import { getPercentChangeIn24Hr } from "../../utils/percentcangein24hr";
import "./TableData.css";

const TableData = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  useEffect(() => {
    dispatch(getData());

    dispatch(getData(count));
    console.log("useEffect executed");
  }, [dispatch, count]);

  const data = useSelector((state) => state.data.data);
  console.log(data.map((user) => user));

  const clickHandler = () => {
    dispatch(pageIncrement());
  };
  return (
    <div>
      <div className='App'></div>
      <table id='customers'>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>VWAP(24hr)</th>
          <th>Suppy</th>
          <th>Volume(24hr)</th>
          <th>Change(24hr)</th>
        </tr>

        {data.map((item) => {
          return (
            <tr className='currency-info-card'>
              <td>{item.rank}</td>
              <td>
                {" "}
                <img
                  className='currency-img'
                  src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                  alt={item.symbol}
                />
                {item.name}
              </td>
              <td>{getCurrencyInDollar(item.priceUsd)}</td>
              <td>{getCurrencySystem(item.marketCapUsd)}</td>
              <td>{getCurrencyInDollar(item.vwap24Hr)}</td>
              <td>{getCurrencySystem(item.supply)}</td>
              <td>{getCurrencySystem(item.volumeUsd24Hr)}</td>
              <td>{getPercentChangeIn24Hr(item.changePercent24Hr)}</td>
            </tr>
          );
        })}
      </table>
      <button onClick={clickHandler} className='button btn-view-more'>
        View More
      </button>
    </div>
  );
};

export default TableData;