import { useContext } from "react";
import { AuthContext } from "./_app";

function DataItem() {
    const { } = useContext(AuthContext);

    return (
        <div className="data">
            <div>id</div>
            <div>name</div>
            <div>age</div>
            <div>department</div>
        </div>
    );
}
export default DataItem;
