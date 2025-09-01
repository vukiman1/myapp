const SignInForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default SignInForm;
