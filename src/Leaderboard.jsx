import React from 'react';
import { FaEye, FaShoppingCart } from 'react-icons/fa';

const Leaderboard = () => {
    return (
        <div className="container">
            <div className="header">LeaderBoards</div>
            <div className="title">
                <h2>Basic Backtest</h2>
                <div className="dropdown">
                    <button>Slippage 0%</button>
                    <div className="dropdown-content">
                        <a href="#">0%</a>
                        <a href="#">0.1%</a>
                        <a href="#">0.2%</a>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Calmar Ratio</th>
                        <th>Overall Profit</th>
                        <th>Avg. Daily Profit</th>
                        <th>Win % (Day)</th>
                        <th>Price (Rs)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Selling with re entr</td>
                        <td>3.96&nbsp;&nbsp;<img src="/img/arrow-up-right-dots-solid.svg" alt="up" /></td>
                        <td>381845</td>
                        <td>319.54</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td className="action"><a href="#">View&nbsp;<FaEye className="icon" /></a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>strategy_name</td>
                        <td>3.62&nbsp;&nbsp;<img src="/img/arrow-up-right-dots-solid.svg" alt="up" /></td>
                        <td>268872.5</td>
                        <td>216.31</td>
                        <td>0.64</td>
                        <td>500</td>
                        <td className="action"><a href="#">Buy&nbsp;&nbsp;<FaShoppingCart className="icon" /></a></td>
                    </tr>
                  
                    <tr>
                        <td>3</td>
                        <td>High Return Strategy</td>
                        <td>3.40&nbsp;&nbsp;<img src="/img/arrow-up-right-dots-solid.svg" alt="up" /></td>
                        <td>245000</td>
                        <td>210.45</td>
                        <td>0.63</td>
                        <td>700</td>
                        <td className="action"><a href="#">View&nbsp;<FaEye className="icon" /></a></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Momentum Trade</td>
                        <td>3.20&nbsp;&nbsp;<img src="/img/arrow-up-right-dots-solid.svg" alt="up" /></td>
                        <td>223500</td>
                        <td>190.25</td>
                        <td>0.60</td>
                        <td>800</td>
                        <td className="action"><a href="#">View&nbsp;<FaEye className="icon" /></a></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Daily Gains</td>
                        <td>3.10&nbsp;&nbsp;<img src="/img/arrow-up-right-dots-solid.svg" alt="up" /></td>
                        <td>210000</td>
                        <td>175.20</td>
                        <td>0.58</td>
                        <td>600</td>
                        <td className="action"><a href="#">Buy&nbsp;&nbsp;<FaShoppingCart className="icon" /></a></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Based on premium wit</td>
                        <td>3.01&nbsp;&nbsp;<img src="/img/arrow-up-right-dots-solid.svg" alt="up" /></td>
                        <td>135980</td>
                        <td>185.77</td>
                        <td>0.49</td>
                        <td>-</td>
                        <td className="action"><a href="#">View&nbsp;<FaEye className="icon" /></a></td>
                    </tr>
                    <tr>
    <td>7</td>
    <td>Based on superior intellect</td>
    <td>3.15&nbsp;&nbsp;<img src="/img/arrow-up-right-dots-solid.svg" alt="up" /></td>
    <td>130500</td>
    <td>190.25</td>
    <td>0.52</td>
    <td>-</td>
    <td className="action"><a href="#">View&nbsp;<FaEye className="icon" /></a></td>
</tr>
<tr>
    <td>8</td>
    <td>Grounded in unparalleled wisdom</td>
    <td>3.10&nbsp;&nbsp;<img src="/img/arrow-up-right-dots-solid.svg" alt="up" /></td>
    <td>128750</td>
    <td>188.99</td>
    <td>0.51</td>
    <td>-</td>
    <td className="action"><a href="#">View&nbsp;<FaEye className="icon" /></a></td>
</tr>
<tr>
    <td>9</td>
    <td>Based on profound insight</td>
    <td>3.05&nbsp;&nbsp;<img src="/img/arrow-up-right-dots-solid.svg" alt="up" /></td>
    <td>127300</td>
    <td>187.65</td>
    <td>0.50</td>
    <td>-</td>
    <td className="action"><a href="#">View&nbsp;<FaEye className="icon" /></a></td>
</tr>
<tr>
    <td>10</td>
    <td>Founded on deep understanding</td>
    <td>3.00&nbsp;&nbsp;<img src="/img/arrow-up-right-dots-solid.svg" alt="up" /></td>
    <td>125900</td>
    <td>186.30</td>
    <td>0.49</td>
    <td>-</td>
    <td className="action"><a href="#">View&nbsp;<FaEye className="icon" /></a></td>
</tr>

                    
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
