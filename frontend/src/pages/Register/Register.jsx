import "./Register.css";
import RegisterForm from "../../components/RegisterForm";

function Register() {
  return (
    <section className="register-page">

      <div className="container-fluid h-100">

        <div className="row h-100">

          <RegisterForm />

        </div>

      </div>

    </section>
  );
}

export default Register;