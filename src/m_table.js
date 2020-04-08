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
'Samrath': 'Cell',
'India': 'Cell',
'Jaipur': 'Cell',
'$20,000': 'Cell',
},
{
'id': 2,
'Deepika': 'Cell',
'India': 'Cell',
'Jaipur': 'Cell',
'$30,000': 'Cell',

},
{
'id': 3,
'Shai': 'Cell',
'India': 'Cell',
'Jaipur': 'Cell',
'$22,000': 'Cell',
},

{
    'id': 4,
    'Shai': 'Cell',
    'India': 'Cell',
    'Jaipur': 'Cell',
    '$22,000': 'Cell',
    }
    ,

{
    'id': 5,
    'Shai': 'Cell',
    'India': 'Cell',
    'Jaipur': 'Cell',
    '$22,000': 'Cell',
    }

]
};

return (
<MDBTable style={{width:1040}} responsive>
  <MDBTableHead columns={data.columns} />
  <MDBTableBody rows={data.rows} />
</MDBTable>
);
};

export default TablePage;