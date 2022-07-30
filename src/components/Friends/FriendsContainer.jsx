import Friends from "./Friends";
import { connect } from 'react-redux';
import { followAC, setFriendsAC, unfollowAC } from "../../redux/friends-reducer";

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (friendId) => {
            dispatch(followAC(friendId))
        },
        unfollow: (friendId) => {
            dispatch(unfollowAC(friendId))
        },
        setUsers: (friends) => {
            dispatch(setFriendsAC(friends))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Friends);