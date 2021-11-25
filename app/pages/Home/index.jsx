import { useState } from "react";
import { DateTime } from "luxon";

import Toggle from "../../_shared/Toggle";
import TextInput from "_shared/Input/TextInput";

import CheckListItem from "_shared/CheckList/ListItem";

import Header from "components/Header";

const Home = () => {
  const [state, setState] = useState();

  return (
    <div>
      <Header />

      <div className="current-date-selector ">{DateTime.now().toFormat("dd MMMM, yyyy")}</div>

      <CheckListItem
        text=""
        // time={DateTime.now()}
        value={state}
        setValue={(value) => setState(value)}
      />
      <br />
    </div>
  );
};

export default Home;
