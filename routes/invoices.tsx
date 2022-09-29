import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,useParams
} from "react-router-dom";
import { Link } from "react-router-dom"; 
import { useSearchParams } from "react-router-dom";

import SubInvoices from "./subinvoice";

export default function Invoices() {
  let [searchParams, setSearchParams] = useSearchParams();
  
  //const id = match.params.productId  ;
  let params = useParams();

  return (
    <div>

     
      <h2>Invoices ID  =  {params.invoiceid} </h2>
      <h2>Invoices Lang  =  {params.lang} </h2>
    
       <Link to="/subinvoices">Sub Invoices</Link>
    
    
    </div>
  );
}