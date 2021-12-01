import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import LogoutButton from "./logout";

const mapStateToProps = state => ({
  sessionId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton)