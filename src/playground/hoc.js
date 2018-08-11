//Higher Order Component

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Hello World {props.info}</h1>
    </div>
);

const adminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <h1>Hello Admin</h1>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
           {props.isAuthenticated ? <WrappedComponent {...props}/> :  <p>Please log in {props.info}</p>}
           
        </div>
    );
}

const AdminInfo = adminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="this"/>, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="this"/>, document.getElementById("app"));