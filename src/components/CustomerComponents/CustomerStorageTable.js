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

function createData(unitID, boxCount) {
    return {unitID, boxCount};
}

const rows = [
    createData('131', 1),
    createData('150', 1),
];

export default function CustomerStorageTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customer-storage-table">
                <TableHead>
                    <TableRow>
                        <TableCell>Unit ID</TableCell>
                        <TableCell align="right">Storing Box Count</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.unitID}>
                            <TableCell align="right">{row.unitID}</TableCell>
                            <TableCell align="right">{row.boxCount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}