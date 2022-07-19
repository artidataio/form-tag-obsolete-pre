import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const email = data.get("email");
          if (typeof email === "string") {
            console.log("search", email);
          }
        }}
      >
        Search: by email:{" "}
        <input
          name="email"
          className="border border-gray-500"
          type="text"
          placeholder="email"
        />
      </form>
    </div>
  );
}
