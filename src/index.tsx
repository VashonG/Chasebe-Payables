import React from "react";
import ReactDOMClient from "react-dom/client";
import { Dashboard } from "./screens/Dashboard";
import { FlightBooking } from "./screens/FlightBooking";
import { PaymentSend } from "./screens/PaymentSend";
import { Box } from "./screens/Box";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Dashboard />);
root.render(<FlightBooking />);
root.render(<PaymentSend />);
root.render(<Box />);