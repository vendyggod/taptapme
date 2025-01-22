import {IoHomeOutline} from 'react-icons/io5';
import {StyledNav, StyledNavLink} from './Navigation.styles';
import {FaAngleDoubleUp} from 'react-icons/fa';
import {PiSpinnerBall} from 'react-icons/pi';
import {LuNotepadText} from 'react-icons/lu';
import {LiaUserFriendsSolid} from 'react-icons/lia';
import {FC} from "react";

export const Navigation: FC = () => {
    return (
        <StyledNav>
            <StyledNavLink to="home">
                <IoHomeOutline/>
                <span>Home</span>
            </StyledNavLink>

            <StyledNavLink to="improve">
                <FaAngleDoubleUp/>
                <span>Improve</span>
            </StyledNavLink>

            <StyledNavLink to="rewards">
                <PiSpinnerBall/>
                <span>Rewards</span>
            </StyledNavLink>

            <StyledNavLink to="quests">
                <LuNotepadText/>
                <span>Quests</span>
            </StyledNavLink>

            <StyledNavLink to="friends">
                <LiaUserFriendsSolid/>
                <span>Friends</span>
            </StyledNavLink>
        </StyledNav>
    );
};
