import useUser from "../context/user";

function DisplayUser() {
  const { user } = useUser();
  if (!user)
    return (
      <>
        <p className="text-3xl text-white p-20">
          {" "}
          Fill the fields above and hit submit
        </p>
      </>
    );

  return (
    <div>
      <p className="text-3xl text-white p-20">
        Welcome {user.firstName} {user.lastName} !
      </p>
    </div>
  );
}

export default DisplayUser;
