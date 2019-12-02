import React from "react";
import s from "./users.module.css";
import * as axios from "axios";

const Users = (props) => {

    if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>
            props.setUsers(response.data.items))
    }

    return (
        <div className={s.users}>
            <h2>Users</h2>
            {
            props.users.map(u => <div key={u.id} className={s.item}>
                <div className={s.left_block}>
                    <img src={u.avatarUrl} alt="avatar_picture" />
                    <div>
                        {u.followed ? <button onClick={() => {props.unFollow(u.id)}}>unfollow</button> : <button onClick={()=> {props.follow(u.id)}}>follow</button>}
                    </div>

                </div>
                <div className={s.right_block}>
                    <div className={s.top_block}>
                        <p>{u.fullName}</p>
                        <span>{u.location.country}</span>
                    </div>
                    <div className={s.top_block}>
                        <span>{u.status}</span>
                        <span>{u.location.city}</span>
                    </div>
                </div>
            </div>)

            }
        </div>
    )
}

export default Users;