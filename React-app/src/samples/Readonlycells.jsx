import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  RangesDirective,
  RangeDirective,
  ColumnsDirective,
  ColumnDirective,
  RowsDirective,
  RowDirective,
  CellsDirective,
  CellDirective,
} from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from '../data';
function App() {
  const spreadsheetRef = React.useRef(null);

  // To apply readonly for a row.
  const readOnlyRow = () => {
    let spreadsheet = spreadsheetRef.current;
    spreadsheet.setRangeReadOnly(true, '2:2', spreadsheet.activeSheetIndex);
  };

  // To apply readonly for columns.
  const readOnlyCol = () => {
    let spreadsheet = spreadsheetRef.current;
    spreadsheet.setRangeReadOnly(true, 'A:C', spreadsheet.activeSheetIndex);
  };

  // To apply readonly for specific cell range
  const readOnlyRange = () => {
    let spreadsheet = spreadsheetRef.current;
    spreadsheet.setRangeReadOnly(true, 'E1:F4', spreadsheet.activeSheetIndex);
  };

  // To remove readonly status.
  const removeReadOnly = () => {
    let spreadsheet = spreadsheetRef.current;
    spreadsheet.setRangeReadOnly(false, '2:2', spreadsheet.activeSheetIndex);
    spreadsheet.setRangeReadOnly(false, 'A:C', spreadsheet.activeSheetIndex);
    spreadsheet.setRangeReadOnly(false, 'E1:F4', spreadsheet.activeSheetIndex);
  };
  return (
    <div className="control-section spreadsheet-control">
      <button className="e-btn custom-btn" onClick={readOnlyRow}>
        Make Row 2 readOnly
      </button>
      <button className="e-btn custom-btn" onClick={readOnlyCol}>
        Make Column A to C readOnly
      </button>
      <button className="e-btn custom-btn" onClick={readOnlyRange}>
        Make cell range readOnly
      </button>
      <button className="e-btn custom-btn" onClick={removeReadOnly}>
        Remove readOnly
      </button>
      <SpreadsheetComponent
        height={600}
        openUrl="https://services.syncfusion.com/react/production/api/spreadsheet/open"
        ref={spreadsheetRef}
      >
        <SheetsDirective>
          <SheetDirective name="Car Sales Report">
            <RangesDirective>
              <RangeDirective dataSource={defaultData}></RangeDirective>
            </RangesDirective>
            <RowsDirective>
              {/* To make row readonly */}
              <RowDirective index={3} isReadOnly={true}></RowDirective>
              <RowDirective index={4}>
                <CellsDirective>
                  {/* To make cell readonly */}
                  <CellDirective index={5} isReadOnly={true}></CellDirective>
                </CellsDirective>
              </RowDirective>
            </RowsDirective>
            <ColumnsDirective>
              <ColumnDirective width={180}></ColumnDirective>
              <ColumnDirective width={130}></ColumnDirective>
              <ColumnDirective width={180}></ColumnDirective>
              {/* To make column readonly */}
              <ColumnDirective isReadOnly={true} width={130}></ColumnDirective>
              <ColumnDirective width={130}></ColumnDirective>
              <ColumnDirective width={120}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
