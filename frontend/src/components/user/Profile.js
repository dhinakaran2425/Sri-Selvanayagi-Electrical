import {useSelector } from 'react-redux';
import './pro.css';
export default function Profile () {
    const { user }  = useSelector(state => state.authState);

    return (
            <div className="cardpro">
    <div>
    <img className="rounded-circle img-fluid" src={user.avatar??'./images/default_avatar.png'} alt='' />
    <div className="links123"><button className="view123"><a href='/myprofile/update'>MyEdit Profile</a></button></div>
          </div>
          
    <div className="infos123">
    <h4>Full Name</h4>
      <div className="name123">
        <h2>{user.name}</h2>
      </div>
        <h4>Email Address</h4>
      <div className="name123">
        <h4>{user.email}</h4>
      </div>
      <h4>Joined</h4>
      <p className="text123">{String(user.createdAt).substring(0, 10)}
      </p>
      <div className="links123">
        <button className="view123"><a href='/orders'>My Orders</a></button>
        <button className="view123"><a href='/myprofile/update/password'>MyChange Password</a></button>
      </div>
    </div>
  </div>
    )
}