import { ChangeEventHandler, FunctionComponent } from "react";
import styles from "./TodosFilter.module.scss";
import {
  isTodosFilterSortType,
  todosFilterSortTypes,
} from "./params/TodosFilterSortType";
import {
  isTodosFilterStatusType,
  todosFilterStatusTypes,
} from "./params/TodosFilterStatusType";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectTodosFilterParams,
  todosFilterActions,
} from "./todosFilterSlice";
import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

export const TodosFilter: FunctionComponent = () => {
  const appDispatcher = useAppDispatch();

  const filterParams = useAppSelector(selectTodosFilterParams);

  const handleSortChange = (event: SelectChangeEvent) => {
    const sort = event.target.value;

    if (!isTodosFilterSortType(sort)) {
      return;
    }

    appDispatcher(todosFilterActions.update({ sort }));
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    const status = event.target.value;

    if (!isTodosFilterStatusType(status)) {
      return;
    }

    appDispatcher(todosFilterActions.update({ status }));
  };

  return (
    <section className={styles.filter}>
      <FormControl>
        <TextField
          type="search"
          label="Search"
          value={filterParams.query}
          onChange={(event) =>
            appDispatcher(
              todosFilterActions.update({ query: event.target.value })
            )
          }
        />
      </FormControl>

      <FormControl>
        <InputLabel id="status">Status</InputLabel>
        <Select
          labelId="status"
          label="Status"
          value={filterParams.status}
          onChange={handleStatusChange}
        >
          {todosFilterStatusTypes.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="sort">Sort</InputLabel>
        <Select
          labelId="sort"
          label="Sort"
          value={filterParams.sort}
          onChange={handleSortChange}
        >
          {todosFilterSortTypes.map((sort) => (
            <MenuItem key={sort} value={sort}>
              {sort}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div className={styles.item}>
        <Button onClick={() => appDispatcher(todosFilterActions.reset())}>
          Reset
        </Button>
      </div>
    </section>
  );
};
