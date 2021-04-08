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

function createData(boxID, unitID, size) {
    return {boxID, unitID, size};
}

const rows = [
    createData('131', 1,20),
    createData('150', 1, 50),
];

export default function BoxList() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="box-list">
                <TableHead>
                    <TableRow>
                        <TableCell>Box ID</TableCell>
                        <TableCell>Unit ID</TableCell>
                        <TableCell align="right">Box Size</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.boxID}>
                            <TableCell align="right">{row.boxID}</TableCell>
                            <TableCell align="right">{row.unitID}</TableCell>
                            <TableCell align="right">{row.size}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}