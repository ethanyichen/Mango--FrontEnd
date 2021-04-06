import React, {useState} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import {makeStyles} from "@material-ui/core/styles";
import CustomerSearchResult from "../CustomerComponents/CustomerSearchResult";


var customerIDLength;

function CustomerSearch() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        margin: {
            margin: theme.spacing(1),
            marginLeft: "100px",
            width: "150px"
        },
        idDisplay: {
            marginTop: "50px"
        }
    }));

    const [customerID, setCustomerID] = useState("");
    const [customerIDError, setCustomerIDError] = useState(false);
    const [customerIDErrorText, setCustomerIDErrorText] = useState("Invalid Input");
    const [searchSuccess, setSearchSuccess] = useState(false);
    const [customerIDResult, setCustomerIDResult] = useState("");
    const [customerNameResult, setCustomerNameresult] = useState("");
    const classes = useStyles();

    function onCustomerIDInput(event) {
        setCustomerID(event.target.value);
        customerIDLength = event.target.value.length
    }

    function isCIDInputValid() {
        const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (customerIDLength > 10){
            setCustomerIDErrorText("Input Exceeds Maximum Length");
            return false;
        } else if(format.test(customerID)){
            setCustomerIDErrorText("Input contains invalid character");
            return false;
        } else if(isNaN(customerID)){
            setCustomerIDErrorText("Input must be in number format");
            return false;
        } else if(customerIDLength === 0){
            setCustomerIDErrorText("ID cannot be blank");
            return false;
        }
        return true;
    }

    function onCustomerSearchSubmit(event) {
        if (!isCIDInputValid()) {
            setCustomerIDError(true);
        } else {
            setCustomerIDError(false);
        }
        setSearchSuccess(true);
        event.preventDefault();
    }

    return( <div className="main-content">
            <CssBaseline />
        <form onSubmit={onCustomerSearchSubmit} className={classes.root} noValidate autoComplete="off" >{
            customerIDError? <TextField onChange={onCustomerIDInput} value = {customerID}
                       error id="cid-error" label="Error" helperText={customerIDErrorText} variant="outlined"/>
                       : <TextField value = {customerID}
                onChange={onCustomerIDInput} id="customerID-textField" label="Customer ID:" variant="outlined" />}
            <Fab aria-label="add" variant="extended" type= "submit"
                 className={classes.margin}>Search</Fab>
            </form>
            <div>
                {searchSuccess &&<h5 style = {{color: "green",
                marginLeft: "50px"}}>Successful</h5>}
                {searchSuccess &&
                <span id ="searchResultDisplay"> <h5 className={classes.idDisplay}>Name: {customerNameResult} </h5>
                <h5>Customer ID: {customerIDResult}</h5>
                    <CustomerSearchResult/>
                    </span>}
            </div>
        </div>
    )
}

export default CustomerSearch;