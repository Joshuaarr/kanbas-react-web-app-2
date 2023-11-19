import ModuleList from "../Modules/ModuleList";
import ClassStatus from "./classStatus";

function Home() {
  return (
    <div className="row pe-5">
      <div className="col-9">
        <ModuleList />
      </div>
      <div className="col-3">
        <ClassStatus />
      </div>
    </div>
  );
}
export default Home;
