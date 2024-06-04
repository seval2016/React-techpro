
import "./profile-card.scss";
import PropTypes from "prop-types";

const ProfileCard = (props) => {
	const { avatar, name, location, shot, followers, following } = props;
	return (
		<div className="profile-card">
			<div className="header">
				<img src={avatar} alt="" />
			</div>
			<div className="content">
				<img className="avatar" src={avatar} alt={name} />

				<h2>{name}</h2>
				<h4>{location}</h4>

				<ul className="stats">
					<li>
						<h3>{shot}</h3>
						<p>Shot</p>
					</li>
					<li>
						<h3>{followers}</h3>
						<p>Followers</p>
					</li>
					<li>
						<h3>{following}</h3>
						<p>Following</p>
					</li>
				</ul>
			</div>
		</div>
	);
};
ProfileCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    shot: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    following: PropTypes.string.isRequired
  };
export default ProfileCard;