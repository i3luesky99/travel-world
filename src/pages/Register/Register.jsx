import RegisterForm from "./components/RegisterForm";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault(); //Prevent reload
    // setError(false);
    // try {
    //   const res = await axios.post("http://localhost:3001/api/auths/register", {
    //     username,
    //     email,
    //     password,
    //   });
    //   res.data && window.location.replace("/login"); //Move to login page
    // } catch (err) {
    //   setError(true);
    // }
  };

  return (
    <div className="register">
      <div className="card">
        <RegisterForm />
      </div>
    </div>
  );
}
