import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 200,
    },
});

let today = new Date().toISOString().slice(0, 10)
function createData(warehouseID, startDate) {
    return {warehouseID,startDate};
}

const rows = [
    createData('1000', today),
];

export default function CurrentMembershipTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customer-storage-table">
                <TableHead>
                    <TableRow>
                        <TableCell>Warehouse ID</TableCell>
                        <TableCell align="right">Start Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.warehouseID}>
                            <TableCell align="right">{row.warehouseID}</TableCell>
                            <TableCell align="right">{row.startDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}