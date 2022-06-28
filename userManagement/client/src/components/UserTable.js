import { User, UserHeader } from "./User";

/**
 * 
 * @param { { Name: string, Email: string, Phone: string }[] } users
 * @returns { HTMLDivElement }
 */
export default function UserTable({ users, setters, handlers }) {
    return (
        <div className="user-table-container">
            <table className="user-table">
                <thead className="user-table-header">
                    {UserHeader({name: "Name", email: "Email", phone: "Phone"}, setters)}
                </thead>
                <tbody className="user-table-body">
                    {users.map((user, i) => User(user, setters))}
                </tbody>
            </table>
            <div className="user-table-button-container">
                <button className="user-table-button new-button" onClick={() => {handlers.handleNew()}}>New</button>
                <button className="user-table-button edit-button" onClick={() => {handlers.handleEdit()}}>Edit</button>
                <button className="user-table-button delete-button" onClick={() => {handlers.handleDelete()}}>Delete</button>
            </div>
        </div>
        
    )
} 