import LogoutButton from "./LogoutButton";

const Navbar = () => {
  return (
    <div className = "flex justify-between pt-7 pl-7">
        <h1 className = "pb-4 text-4xl font-bold">
          Call Dashboard
        </h1> 

        <LogoutButton />
    </div>
  )
};

export default Navbar;