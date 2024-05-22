import "./App.css";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:4000/api/user/",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="App">
      {/* <form action="http://localhost:4000/api/user/" method="post">
        <label for="fname">name:</label>
        <br />
        <input type="name" name="name" id="name" />
        <br />
        <label for="fname">phone:</label>
        <br />
        <input type="phone" name="phone" id="phone" />
        <br />

        <label for="fname">age:</label>
        <br />
        <input type="age" name="age" id="age" />
        <br />

        <label for="fname">sex:</label>
        <br />
        <input type="sex" name="sex" id="sex" />
        <br />

        <label for="fname">address:</label>
        <br />
        <input type="address" name="address" id="address" />
        <br />
        <button action="submit">Submit</button>
      </form>
      <a href="../public/login.html">ddddddddd</a> */}

      <div class="login">
        <form action="" method="post">
          <label for="">Type your mail</label>
          <br />
          <input type="text" id="mail" />
          <br />
          <label for="">Type your Password</label>
          <br />
          <input type="text" id="password" />
          <br />
          <button action="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
