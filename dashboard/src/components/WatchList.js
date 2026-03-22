import React, { useState, useContext } from 'react';

import { Tooltip, Grow } from "@mui/material";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { watchList } from '../data/data';
import GeneralContext from './GeneralContext'; 
import { DoughnutChart } from './DoughnutChart';

function WatchList() {
    const labels=watchList.map((subArray)=>subArray["name"])
    const data={
      labels,
      datasets: [
    {
      label: "Price",
      data: watchList.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
    }

//   const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };


    return (
        <div className='watchlist-container'>
            <div className='search-container'>
                <input
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Search eg:infy, bse, nifty fut weekly, gols mcx'
                    className='search'
                />
                <span className='counts'>{watchList.length}/ 50</span>
            </div>
            <ul className='list'>
                {watchList.map((stock, index) => {
                    return <WatchListItem stock={stock} key={index} />
                })}
            </ul>
            <DoughnutChart data={data}/>
        </div>
    );
}

export default WatchList;

const WatchListItem = ({ stock }) => {
    const [showWatchlistActions, setshowWatchlistActions] = useState(false);

    const handleMouseEnter = (e) => { setshowWatchlistActions(true); }
    const handleMouseLeave = (e) => { setshowWatchlistActions(false); }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {showWatchlistActions && <WatchListActions uid={stock.name} />}
        </li>
    )
};

const WatchListActions = ({ uid }) => {
    const { openBuyWindow } = useContext(GeneralContext);

    return (
        <span className='actions'>
            <span>
                <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
                    <button className='buy' onClick={() => openBuyWindow(uid)}>Buy</button> {/* ✅ onClick add করো */}
                </Tooltip>

                <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
                    <button className='sell'>Sell</button>
                </Tooltip>

                <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
                    <button className='action'><BarChartOutlinedIcon className='icon' /></button>
                </Tooltip>

                <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
                    <button className='action'><MoreHorizOutlinedIcon className='icon' /></button>
                </Tooltip>
            </span>
        </span>
    )
}