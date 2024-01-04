const PrintUser = ({ user }) => {
  if (!user) {
    return <p>Loading...</p>
  }

  return (
    <>
      <img src={user.avatar_url} alt={user.name} />
      <h1>{user.name}</h1>
      <h2>Web Developer - Web Designer</h2>
      <p>{user.bio}</p>
      <div className="logos">
      <i class="fa-brands fa-square-facebook fa-2xl"></i>
      <i class="fa-brands fa-square-twitter fa-2xl"></i>
      <i class="fa-brands fa-square-google-plus fa-2xl"></i>
      </div>
    </>
  )
}

export default PrintUser
