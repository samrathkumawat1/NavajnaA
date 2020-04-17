import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const TablePage = (props) => {
const data = {
columns: [
{
label: 'ID',
field: 'id',
sort: 'asc'
},
{
label: 'Name',
field: 'heading0',
sort: 'asc'
},
{
label: 'Country',
field: 'heading1',
sort: 'asc'
},
{
label: 'City',
field: 'heading2',
sort: 'asc'
},
{
label: 'Salary',
field: 'heading3',
sort: 'asc'
},
],
rows: [
{
'id': 1,
'heading0': 'Cell',
'heading1': 'Cell',
'heading2': 'Cell',
'heading3': 'Cell',
'heading4': 'Cell',
'heading5': 'Cell',
'heading6': 'Cell',
'heading7': 'Cell',
'heading8': 'Cell'
},
{
'id': 2,
'heading0': 'Cell',
'heading1': 'Cell',
'heading2': 'Cell',
'heading3': 'Cell',
'heading4': 'Cell',
'heading5': 'Cell',
'heading6': 'Cell',
'heading7': 'Cell',
'heading8': 'Cell'
},
{
'id': 3,
'heading0': 'Cell',
'heading1': 'Cell',
'heading2': 'Cell',
'heading3': 'Cell',
'heading4': 'Cell',
'heading5': 'Cell',
'heading6': 'Cell',
'heading7': 'Cell',
'heading8': 'Cell'
}
]
};

return (
<MDBTable responsive>
  <MDBTableHead columns={data.columns} />
  <MDBTableBody rows={data.rows} />
</MDBTable>
);
};

export default TablePage;