import './App.css';

function App(props) {
  return (
    <div className="profile-card">
      <img className="cover-image" src={props.profile.coverImageUrl} alt="cover" />
      <img className="avatar" src={props.profile.avatarUrl} alt="avatar" />
      <p className="full-name">{props.profile.fullName}</p>
      <p className="introduce">{props.profile.introduce}</p>
      <button className="btn-follow">Follow</button>
    </div>
  );
}

export default App;
