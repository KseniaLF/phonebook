import { Outlet } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { Container, Header, Wrapper } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'components/Auth/UserMenu';
import { AuthNav } from 'components/Auth/AuthNav';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Wrapper>
      <Header>
        <div>
          <span role="img" aria-label="computer icon">
            🖤 phonebook
          </span>

          <nav>
            <NavLink to="/" end>
              Home
            </NavLink>

            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
          </nav>
        </div>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>

      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
};
