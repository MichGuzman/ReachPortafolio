import React, { useState } from 'react';
import '../styles/Modules.css'; 

function Modules() {
  // Definimos un estado para controlar la visibilidad de las descripciones
  const [expandedRow, setExpandedRow] = useState(null);

  // Función para manejar el clic y alternar la visibilidad del contenido
  const toggleRow = (area) => {
    if (expandedRow === area) {
      setExpandedRow(null); // Si ya está expandido, lo cerramos
    } else {
      setExpandedRow(area); // Abrimos el área seleccionada
    }
  };

  return (
    <section className="modules">
      <h2>Modules Implemented</h2>
      <table>
        <thead>
          <tr>
            <th>Functional Area</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => toggleRow('RecordToReport')}>
            <td>Record to Report</td>
            <td>
              {expandedRow === 'RecordToReport' && (
                <>
                  • Subsidiary Management <br />
                  • Chart of Accounts<br />
                  • Segmentation: Departments, Locations, Classes<br />
                  • Enable Features<br />
                  • General Preferences<br />
                  • Rename Records/Transactions<br />
                  • Setup Auto-Generated Numbers<br />
                  • Accounting Preferences<br />
                  • Accounting Lists<br />
                  • Bank Account Reconciliation<br />
                  • Transfers & Deposits<br />
                  • Printing & Issuing Checks<br />
                  • Fiscal Close<br />
                  • Standard & NetSuite Best Practices Financial Reports<br />
                  • Tax Schedules<br />
                  • Tax Control Accounts<br />
                  • Bank Transfer<br />
                  • Bank Reconciliation<br />
                  • Standard NetSuite Financial Reports
                </>
              )}
            </td>
          </tr>
          <tr onClick={() => toggleRow('DesignToBuild')}>
            <td>Design to Build</td>
            <td>
              {expandedRow === 'DesignToBuild' && (
                <>
                  • Inventory Tracking and Management<br />
                  • Stock Level Tracking<br />
                  • Bin Management<br />
                  • Inventory Costing<br />
                  • Multi-location and Subsidiary Inventory<br />
                  • Inventory Adjustments<br />
                  • Inventory Transfers<br />
                  • Inventory Counts<br />
                  • Inventory Replenishment<br />
                  • Inventory Valuation<br />
                  • Standard NetSuite Inventory Reports<br />
                </>
              )}
            </td>
          </tr>
          <tr onClick={() => toggleRow('ProcureToPay')}>
            <td>Procure to Pay</td>
            <td>
              {expandedRow === 'ProcureToPay' && (
                <>
                  • Purchase Order Management<br />
                  • Inventory Receipt Management<br />
                  • Vendor Bills<br />
                  • Vendor Return Authorizations<br />
                  • Vendor Credit Memos<br />
                  • Standard NetSuite Purchase Reports
                </>
              )}
            </td>
          </tr>
          <tr onClick={() => toggleRow('OrderToCash')}>
            <td>Order to Cash</td>
            <td>
              {expandedRow === 'OrderToCash' && (
                <>
                  • Customer Record<br />
                  • Sales Order <br />
                  • Invoice Managment <br />
                  • Customer Deposit <br />
                  • Customer Return Authorization <br />
                  • Customer Credit Memo <br />
                </>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Modules;
