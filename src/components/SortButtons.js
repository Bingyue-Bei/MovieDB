import { useDispatch} from "react-redux";
import React, {useState } from "react";
import {
  sortByTitle,
  sortByTitleDesc,
  sortByVote,
  sortByVoteDesc,
  sortByVoteAverage,
  sortByVoteAverageDesc,
  sortByReleaseDate,
  sortByReleaseDateDesc,
} from "../Actions";

export const SortButtons = () => {
  const dispatch = useDispatch();

  const [titleAscending, setTitleAscending] = useState(false);
  const [voteAscending, setVoteAscending] = useState(false);
  const [voteAvgAscending, setVoteAvgAscending] = useState(false);
  const [dateAscending, setDateAscending] = useState(false);

  const sortTitle = () => {
    if (titleAscending) {
      dispatch(sortByTitleDesc());
      setTitleAscending(false);
    } else {
      dispatch(sortByTitle());
      setTitleAscending(true);
    }
  };

  const sortVote = () => {
    if (voteAscending) {
      dispatch(sortByVoteDesc());
      setVoteAscending(false);
    } else {
      dispatch(sortByVote());
      setVoteAscending(true);
    }
  };

  const sortVoteAvg = () => {
    if (voteAvgAscending) {
      dispatch(sortByVoteAverageDesc());
      setVoteAvgAscending(false);
    } else {
      dispatch(sortByVoteAverage());
      setVoteAvgAscending(true);
    }
  };

  const sortReleaseDate = () => {
    if (dateAscending) {
      dispatch(sortByReleaseDateDesc());
      setDateAscending(false);
    } else {
      dispatch(sortByReleaseDate());
      setDateAscending(true);
    }
  };

  return (
    <div className="sorting-buttons">
      <button onClick={() => sortTitle()}>Title</button>
      <button onClick={() => sortVote()}>Vote Count</button>
      <button onClick={() => sortVoteAvg()}>Vote Average</button>
      <button onClick={() => sortReleaseDate()}>Release Date</button>
    </div>
  );
};
