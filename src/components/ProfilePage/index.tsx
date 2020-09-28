import React from  'react';

    import {
                Container,
                Banner,
                Avatar,
                ProfileData,
                LocationIcon,
                CakeIcon,
                Followage
            } from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                {/* <EditButton outlined>Editar perfil</EditButton> */}

                <h1>Castr0visk</h1>
                <h2>@castr0visk</h2>
                <p>
                    Developer at <a href=""> @</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Maceió
                         Brasil,
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 21 de junho de 2001
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>100</strong>
                    </span>
                    <span>
                    <strong>300 </strong> seguidores 
                    </span>
                </Followage>
            </ProfileData>
        </Container>
    );
}
    
export default ProfilePage;

