import React from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import HeroIcon from './HeroIcon';
import styles from './Ui.module.scss';

const Dropdown = ({ state, onLogout, link, setDropdown }) => {
  const ref = React.useRef();
  useOnClickOutside(ref, () => setDropdown(false));
  return (
    <div className={`${state ? 'flex' : 'hidden'} ${styles.dropdown}`}>
      <div className={styles.container}>
        <div ref={ref} className={styles.dropdownWrapper}>
          <div className="p-1">{link}</div>
          <div className="p-1">
            <li onClick={onLogout}>
              <HeroIcon name="UserPlusIcon" />
              Лог Аут
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
