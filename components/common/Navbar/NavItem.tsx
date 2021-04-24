import { Chevron } from '@components/icons';
import cx from 'classnames';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import styles from './NavItem.module.scss';

type NavItemProps = {
  label: string | ReactNode;
  link?: LinkProps;
  children?: ReactNode;
};

const NavItem = ({ children, label, link }: NavItemProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (router.asPath) {
      setOpen(false);
    }
  }, [router.asPath]);

  return (
    <li
      className={cx(styles.linkContainer, {
        [styles.subMenuOpen]: open,
        [styles.activeLink]: router.pathname === link?.href,
      })}
    >
      {!children && link ? (
        <Link {...link}>{label}</Link>
      ) : (
        <button
          className={cx('buttonReset')}
          role="menuitem"
          type="button"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          {label} <Chevron />
        </button>
      )}

      {children}
    </li>
  );
};

export default NavItem;
