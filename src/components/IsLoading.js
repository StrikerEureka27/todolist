import "../styles/IsLoading.css";
import { MutatingDots } from "react-loader-spinner";

function IsLoading({ isLoading, error, todoList }) {
  return (
    <section>
      {isLoading && (
        <MutatingDots
          height="100"
          width="100"
          color="#acf3b5"
          secondaryColor="#6ca376"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {error && <h2>Error</h2>}
      {!isLoading && !error && todoList.length === 0 && (
        <h4 className="subtitle">Let's start creating task</h4>
      )}
    </section>
  );
}

export { IsLoading };
