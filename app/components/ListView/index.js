import { useState, useEffect } from "react";

import "./list-view.scss";

const ListView = () => {
  

  return <> 
    <div className="list-view-ctr">
      <div className="add-item"> 
        <div className="text-content" contentEditable> 
        </div>
        <div className="button">
          Save
        </div>
      </div>
    </div>
  </>;
}

export default ListView;
