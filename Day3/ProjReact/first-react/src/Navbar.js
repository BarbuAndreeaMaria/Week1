import { faInbox, faNoteSticky, faPaperPlane, faStar, faBoxArchive, faBan, faTrashCan, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <div className="navbar">
            <h2 className="logo"><i className="fa-solid fa-lock" id="logoIcon"></i>ProtonMail</h2>
            <div className="navBtn">
                <button className="composeBtn" type="button">COMPOSE</button>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faInbox} className="icon"/>Inbox</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faNoteSticky} className="icon"/>Drafts</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faPaperPlane} className="icon"/>Sent</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faStar} className="icon"/>Starred</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faBoxArchive} className="icon"/>Archive</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faBan} className="icon"/>Spam</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faTrashCan} className="icon"/>Trash</a></li>
                    <li><a href="#" className="link-without-icon">All Mail</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faGear} className="icon"/>Folders / Labels</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;