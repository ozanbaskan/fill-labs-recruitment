import { selectAllDeleteEventHandler, setEditEventHandler } from "../utils/utils"

export function User({ name, email, phone, ID }, setters) {
    return (
        <tr key={"user-" + ID} className="user-row">
            <th className="user-cell">{name}</th>
            <th className="user-cell">{email}</th>
            <th className="user-cell">{phone}
            <input type="checkbox" onChange={() => {setters.addRemoveDeletes(ID)}} className="user-checkbox-delete" style={{
                float: "right",
                marginRight: "20px"
            }}></input>
            <input type="checkbox" onChange={(event) => {setters.setEdit(ID, event.currentTarget.checked);setEditEventHandler(event)}} className="user-checkbox-edit" style={{
                float: "right",
                marginRight: "30px"
            }}></input>
            </th>
        </tr>
    )
}

export function UserHeader({ name, email, phone }, setters) {
    return (
        <tr key={0} className="user-row">
            <th className="user-cell">{name}</th>
            <th className="user-cell">{email}</th>
            <th className="user-cell">{phone}
            <input type="checkbox" onChange={(event) => {setters.addRemoveDeletes(event.currentTarget.checked);selectAllDeleteEventHandler(event)}} className="user-checkbox-delete" style={{
                float: "right",
                marginRight: "20px"
            }}></input>
            </th>
        </tr>
    )
}