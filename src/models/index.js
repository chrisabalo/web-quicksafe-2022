import axios from "axios";
import {io} from "socket.io-client";
import {useEffect} from "react";

const URL = 'https://api-quick-safe-2022.herokuapp.com';

export const API_BASE_URL = axios.create({
  baseURL: `${URL}/api/`,
  headers: { 'Accept': 'application/json',
              "Access-Control-Allow-Origin": "*",
            }
});

const URI_SOCKET_BASE = `${URL}`;
export const SOCKET = io(URI_SOCKET_BASE, {
 transports: ['websocket']
});
