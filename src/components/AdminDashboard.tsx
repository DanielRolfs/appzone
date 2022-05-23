import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AdminSidebar from '../components/AdminSidebar';
import { useNavigate } from "react-router-dom"
/* import { Link } from "react-router-dom" */



interface Column {
    id: 'name' | 'preview' | 'production' | 'appowner' | 'placeholder';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'preview', label: 'Preview', minWidth: 100 },
    {
        id: 'production',
        label: 'Production',
        minWidth: 170,
    },
    {
        id: 'appowner',
        label: 'App Owner',
        minWidth: 170,
    },
    {
        id: 'placeholder',
        label: 'Placeholder',
        minWidth: 170,
    },
];

interface Data {
    uid: string;
    name: string;
    preview: string;
    production: string;
    appowner: string;
    placeholder: string;
}

function createData(
    uid: string,
    name: string,
    preview: string,
    production: string,
    appowner: string,
): Data {
    const placeholder = 'Testdata'
    return { uid, name, preview, production, appowner, placeholder };
}

const rows = [
    createData('11', 'Automated Time Sheets', 'Release-1', 'Release-1', 'test_dev@blu-beyond.com'),
    createData('12', 'Book my Desk', 'Release-3', 'Release-3', 'test_dev@blu-beyond.com'),
    createData('13', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('14', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('15', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('16', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('17', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('18', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('19', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('20', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('21', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('22', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('23', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('24', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('25', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('26', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('27', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('28', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('29', 'Testdata', 'Testdata', 'Testdata', 'Testdata'),

];




export default function Admin() {
    const navigate = useNavigate()

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const navigateToDetailView = (uid: string) => {
        navigate(`/admin/apps/${uid}`)
    }

    return (
        <>
            <div style={{ display: 'flex', height: "50px", backgroundColor: "black" , alignItems: "center", justifyContent: "space-between" , color: "white", }}>
                <div>
                    My Application
                </div>
                <div>
                    REGISTER NEW APP
                </div>
            </div>
            <div style={{ display: "flex" }}>

                <div>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ heigt: '100%' }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {

                                            return (
                                              
                                                <TableRow hover role="checkbox" tabIndex={-1} key={`row-${row.uid}`} onClick={() => navigateToDetailView(row.uid)}>
                                                   
                                                        {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                    {column.format && typeof value === 'number'
                                                                        ? column.format(value)
                                                                        : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                            
                                                    </TableRow>
            
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            
                <div style={{ display: "flex", backgroundColor: "PowderBlue", width: "100%" }}>
                    <AdminSidebar></AdminSidebar>
                </div>
            
            </div>
        </>
    );
}
