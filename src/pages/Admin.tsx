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
    name: string;
    preview: string;
    production: string;
    appowner: string;
    placeholder: string;
}

function createData(
    name: string,
    preview: string,
    production: string,
    appowner: string,
): Data {
    const placeholder = 'Testdata'
    return { name, preview, production, appowner, placeholder };
}

const rows = [
    createData('Automated Time Sheets', 'Release-1', 'Release-1', 'test_dev@blu-beyond.com'),
    createData('Book my Desk', 'Release-3', 'Release-3', 'test_dev@blu-beyond.com'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),
    createData('Testdata', 'Testdata', 'Testdata', 'Testdata'),

];


export default function Admin() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

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
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.preview}>
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
