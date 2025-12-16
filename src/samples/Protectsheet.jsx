import { createRoot } from 'react-dom/client';
import * as React from 'react';
import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  ColumnsDirective,
  RowsDirective,
  RowDirective,
  CellsDirective,
  RangesDirective,
  RangeDirective,
  CellDirective,
  getFormatFromType,
  ColumnDirective,
} from '@syncfusion/ej2-react-spreadsheet';
import { protectSheetData } from '../data';

/**
 * ProtectSheet sample
 */
function ProtectSheet() {
  let spreadsheet;
  const boldCenter = { fontWeight: 'bold', textAlign: 'center' };
  const onCreated = () => {
    spreadsheet.numberFormat('$#,##0.00', 'EMI Schedule!C2:F13');
    // Protect settings
    const protectSettings = {
      selectCells: true,
      selectUnLockedCells: false,
      formatCells: false,
      insertLink: false,
      formatColumns: false,
      formatRows: false,
    };
    // To protect the sheet programmatically using the protect sheet method.
    // Parameters - sheetIndex or sheetName, protectSettings, password.
    spreadsheet.protectSheet('EMI Calculator', protectSettings);
    //Unlocking cells using lockCells method in a protected sheet
    // Parameters - range, isLocked
    spreadsheet.lockCells('C2:C9', false);
  };

  // To unprotect the sheet programmatically using unprotectSheet public method.
  // You can pass the index or name of the sheet to unprotect it.
  const unProtectSheet = () => {
    spreadsheet.unprotectSheet('EMI Calculator');
  };

  return (
    <div className="control-pane">
      <div className="control-section spreadsheet-control">
        <button className="e-btn" onClick={unProtectSheet}>
          Unprotect Sheet
        </button>
        <SpreadsheetComponent
          ref={(ssObj) => {
            spreadsheet = ssObj;
          }}
          created={onCreated.bind(this)}
        >
          <SheetsDirective>
            <SheetDirective name="EMI Calculator">
              <RowsDirective>
                <RowDirective>
                  <CellsDirective>
                    <CellDirective
                      index={1}
                      value="Home Loan Calculator"
                      style={boldCenter}
                    ></CellDirective>
                  </CellsDirective>
                </RowDirective>
                <RowDirective>
                  <CellsDirective>
                    <CellDirective
                      index={1}
                      value="Loan Amount:"
                    ></CellDirective>
                    <CellDirective
                      value="100000"
                      format="$#,##0.00"
                    ></CellDirective>
                  </CellsDirective>
                </RowDirective>
                <RowDirective>
                  <CellsDirective>
                    <CellDirective
                      index={1}
                      value="Interest Rate:"
                    ></CellDirective>
                    <CellDirective
                      value="0.08"
                      format={getFormatFromType('Percentage')}
                    ></CellDirective>
                  </CellsDirective>
                </RowDirective>
                <RowDirective>
                  <CellsDirective>
                    <CellDirective
                      index={1}
                      value="Periods (terms in year):"
                    ></CellDirective>
                    <CellDirective value="1"></CellDirective>
                  </CellsDirective>
                </RowDirective>
                <RowDirective>
                  <CellsDirective>
                    <CellDirective
                      index={1}
                      value="Start Date:"
                    ></CellDirective>
                    <CellDirective value="03-03-2020"></CellDirective>
                  </CellsDirective>
                </RowDirective>
                <RowDirective>
                  <CellsDirective>
                    <CellDirective index={1} value="Loan EMI:"></CellDirective>
                    <CellDirective
                      value="8698.84"
                      format="$#,##0.00"
                    ></CellDirective>
                  </CellsDirective>
                </RowDirective>
                <RowDirective>
                  <CellsDirective>
                    <CellDirective
                      index={1}
                      value="Number of Payments:"
                    ></CellDirective>
                    <CellDirective value="12"></CellDirective>
                  </CellsDirective>
                </RowDirective>
                <RowDirective>
                  <CellsDirective>
                    <CellDirective
                      index={1}
                      value="Total Repayment Amount:"
                    ></CellDirective>
                    <CellDirective
                      value="104386.11"
                      format="$#,##0.00"
                    ></CellDirective>
                  </CellsDirective>
                </RowDirective>
                <RowDirective>
                  <CellsDirective>
                    <CellDirective
                      index={1}
                      value="Total Interest Amount:"
                    ></CellDirective>
                    <CellDirective
                      value="4386.11"
                      format="$#,##0.00"
                    ></CellDirective>
                  </CellsDirective>
                </RowDirective>
              </RowsDirective>
              <ColumnsDirective>
                <ColumnDirective index={1} width={190}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
              </ColumnsDirective>
            </SheetDirective>
            <SheetDirective name="EMI Schedule" isProtected={true}>
              <RangesDirective>
                <RangeDirective
                  dataSource={protectSheetData}
                  showFieldAsHeader={true}
                ></RangeDirective>
              </RangesDirective>
              <RowsDirective>
                <RowDirective>
                  <CellsDirective>
                    <CellDirective style={boldCenter}></CellDirective>
                    <CellDirective style={boldCenter}></CellDirective>
                    <CellDirective style={boldCenter}></CellDirective>
                    <CellDirective style={boldCenter}></CellDirective>
                    <CellDirective style={boldCenter}></CellDirective>
                    <CellDirective style={boldCenter}></CellDirective>
                  </CellsDirective>
                </RowDirective>
              </RowsDirective>
              <ColumnsDirective>
                <ColumnDirective index={1} width={110}></ColumnDirective>
                <ColumnDirective width={85}></ColumnDirective>
                <ColumnDirective width={85}></ColumnDirective>
                <ColumnDirective width={80}></ColumnDirective>
                <ColumnDirective width={90}></ColumnDirective>
              </ColumnsDirective>
            </SheetDirective>
          </SheetsDirective>
        </SpreadsheetComponent>
      </div>
    </div>
  );
}
export default ProtectSheet;

const root = createRoot(document.getElementById('root'));
root.render(<ProtectSheet />);
