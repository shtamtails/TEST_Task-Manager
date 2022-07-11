import { Chip, Typography } from "@mui/material";
import React, { memo, useMemo } from "react";
import { useState } from "react";
import { ManageTaskModal } from "../Modal/ManageTaskModal";
import { getDateFromString, getTags } from "../../../utils/utils";
import { appStore } from "../../../store/appStore";
import { ActionsTodo } from "./ActionsTodo";
import { ITodo } from "../../../interfaces/ITodo";

export const Todo: React.FC<ITodo> = memo(({ id, title, description, isCompleted, date, tags }) => {
  const [editModal, setEditModal] = useState<boolean>(false);

  const handleTagClick = (tag: string) => {
    appStore.setFilter("tags");
    appStore.setTagFilter(tag);
  };

  const convertedTags = useMemo(() => (tags ? getTags(tags) : null), [tags]);
  const convertedDate = useMemo(() => (date ? getDateFromString(date) : null), [date]);

  return (
    <div className="task-container">
      <div className="task-header">
        <div className="task-title">
          {title}
          {convertedTags?.map((tag, i) => (
            <Chip variant="outlined" key={i} sx={{ marginLeft: "10px" }} label={tag} onClick={() => handleTagClick(tag)} />
          ))}
        </div>
        <div className="task-actions">
          {date && <Typography color="GrayText">{convertedDate}</Typography>}
          <ActionsTodo setModal={setEditModal} id={id} isCompleted={isCompleted} />
        </div>
      </div>
      <div className="task-description">{description}</div>
      <ManageTaskModal modal={editModal} setModal={setEditModal} edit id={id} />
    </div>
  );
});
