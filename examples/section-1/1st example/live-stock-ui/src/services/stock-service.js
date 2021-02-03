import * as io from "socket.io-client";
import { Observable } from "rxjs";
import Stocks from "../containers/Stocks";

class StocksService {
    constructor() {
        this._socketUrl = "http://localhost:9090/live";
        this._socket = io(this._socketUrl);
    }

    getLiveStockValues() {
        return new Observable(observer => {
            this._socket.emit("joinStocksRoom", "stocks");
            this._socket.on("liveStocks", liveStocks => {
                observer.next(liveStocks);
            });
        });
    }
}

export default new StocksService();