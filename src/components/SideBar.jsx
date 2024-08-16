export default function SideBar(props) {
    const {handleToggleModal,data} =props;
  return (
    <div className="sidebar">
        <div className="bgOverlay" onClick={  handleToggleModal}> </div>

    <div className="sideBarContents">
      <h2>{data?.title}</h2>

      <div className="descriptionContainer">
        <p className="descriptionTitile">{data?.date}</p>
        <p>
          {data?.explanation}
        </p>
      </div>
      <button>
      <i class="fa-solid fa-arrow-right" onClick={handleToggleModal}></i>
      </button>
      </div>
    </div>
  );
}
