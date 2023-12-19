import css from './Filter.module.css';

export const Filter = ({handleFilter, value}) => (
    <label htmlFor="Name" className={css.formLabel}>
        Find contacts by name
    <input
            type="text"
            name="filter"
            value={value}
            onChange={handleFilter}
            className={css.filterInput} />
    </label>
  
);