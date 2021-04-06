import React, {useState} from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    }
}));

var phoneInputLength = 0;
var nameInputLength = 0;

function NewCustomer() {
    const [nameInput, setNameInput] = useState("");
    const [phoneInput, setPhoneInput] = useState(0);
    const [nameError, setNameError] = useState(false);
    const [nameErrorText, setNameErrorText] = useState("Invalid Input");
    const [phoneError, setPhoneError] = useState(false);
    const [phoneErrorText, setPhoneErrorText] = useState("Invalid Input");
    const classes = useStyles();

    function onCustomerAddSubmit(event) {
        if (!isCNameInputValid()) {
            setNameError(true);
        } else {
            setNameError(false);
        }
        if (!isCPhoneInputValid()) {
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }
        event.preventDefault();
    }

    function onNameInput(event) {
        setNameInput(event.target.value);
        nameInputLength = event.target.value.length
    }

    function onPhoneInput(event) {
        setPhoneInput(event.target.value);
        phoneInputLength = event.target.value.length
    }

    function isCNameInputValid() {
        const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (nameInputLength > 100){
            setNameErrorText("Input Exceeds Maximum Length");
            return false;
        } else if(format.test(nameInput)){
            setNameErrorText("Input contains invalid character");
            return false;
        } else if(nameInputLength === 0){
            setNameErrorText("Name cannot be blank");
            return false;
        }
        return true;
    }

    function isCPhoneInputValid() {
        if (phoneInputLength > 11){
            setPhoneErrorText("Input Exceeds Maximum Length");
            return false;
        } else if(isNaN(phoneInput)){
            setPhoneErrorText("Please input a valid number");
            return false;
        } else if(phoneInputLength === 0){
            setPhoneErrorText("Number cannot be blank");
            return false;
        }
        return true;
    }
    return( <div className="main-content">
            <h1>New Customer:</h1>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onCustomerAddSubmit}>
                {nameError?
                    <TextField onChange={onNameInput} value = {nameInput}
                               error id="cName-error" label="Error" helperText={nameErrorText} variant="outlined"/>
                : <TextField  onChange={onNameInput} id="name-textField" label="Name:" variant="outlined" />}
                {phoneError?
                    <TextField onChange={onPhoneInput} value = {phoneInput}
                               error id="cPhone-error" label="Error" helperText={phoneErrorText} variant="outlined"/>
                : <TextField onChange={onPhoneInput} id="phone-textField" label="Phone Number:" variant="outlined" />}
                <Fab aria-label="add" variant="extended" type= "submit"
                     className={classes.margin}>Submit</Fab>
        </form>
        </div>
    )
}


export default NewCustomer;