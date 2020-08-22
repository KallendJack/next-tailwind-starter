const Header = ({ user, loading }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            {!loading &&
              (user ? (
                <li>
                  <a href="/api/logout">Logout</a>
                </li>
              ) : (
                <li>
                  <a href="/api/login">Login</a>
                </li>
              ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
