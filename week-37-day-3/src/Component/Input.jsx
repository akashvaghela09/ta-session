import React from "react";

const Input = ({ type, name, value, setmethod, isDisable, errMsg = { status: false, name: "", msg: "" } }) => {

    return (
        <div>
            {
                type === "checkbox" ?
                    <div className="inputWrapper">
                        <label className="inputLabel">{name}</label>
                        <input
                            disabled={isDisable}
                            checked={value} type={type}
                            onChange={() => setmethod(!value)}
                        />
                    </div>
                    :
                    <div className="inputWrapper">
                        <label className="inputLabel">{name}</label>
                        <input
                            disabled={isDisable}
                            checked={value} type={type}
                            onChange={() => setmethod(!value)}
                        />
                    </div>
            }
            {
                errMsg.status !== undefined &&
                errMsg.status === true &&
                errMsg.name === name &&
                <p className="error">{errMsg.msg}</p>
            }
        </div>
    )
}

export { Input }