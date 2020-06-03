import react from "react";
import withAxios from "../../hoc/withAxios/withAxios";
import Axios from "axios";
import classes from "*.module.css";

export default withAxios(() => {
    return(
        <div className={classes.Auth}>
            <form>
                <h1>Sign up</h1>
                <input type="text placeholder="E-mail name="email"></input>
                <input type="password" placeholder="Password" name="password" required minLength="8"></input>
                <Button green>Submit</Button>
            </form>
        </div>
    );
}, Axios);