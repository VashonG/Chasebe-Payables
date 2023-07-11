import React from "react";
import ReactDOMClient from "react-dom/client";
import { Dashboard } from "./screens/Dashboard";
import { PaymentRequest } from "./screens/PaymentRequest";
import { FlightBooking } from "./screens/FlightBooking";
import { PaymentSend } from "./screens/PaymentSend";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Dashboard />);
root.render(<PaymentRequest />);
root.render(<FlightBooking />);
root.render(<PaymentSend />);